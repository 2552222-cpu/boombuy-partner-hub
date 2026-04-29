import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Users, CheckCircle2, XCircle, Clock, Eye, Mail, Phone, Building2, Search, TrendingUp } from 'lucide-react';

const statusConfig = {
  new:      { label: 'חדשה',   color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',     dot: 'bg-blue-400' },
  reviewed: { label: 'נצפתה',  color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', dot: 'bg-yellow-400' },
  approved: { label: 'אושרה',  color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', dot: 'bg-emerald-400' },
  rejected: { label: 'נדחתה', color: 'bg-red-500/20 text-red-400 border-red-500/30',       dot: 'bg-red-400' },
};

function StatCard({ label, value, color }) {
  return (
    <div className={`rounded-2xl border px-6 py-5 ${color}`}>
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className="text-sm font-medium text-gray-400">{label}</div>
    </div>
  );
}

export default function Admin() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const { data: applications = [], isLoading } = useQuery({
    queryKey: ['applications'],
    queryFn: () => base44.entities.Application.list('-created_date', 200),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, status }) => base44.entities.Application.update(id, { status }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['applications'] }),
  });

  const counts = {
    all:      applications.length,
    new:      applications.filter(a => a.status === 'new' || !a.status).length,
    reviewed: applications.filter(a => a.status === 'reviewed').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  };

  const filtered = applications
    .filter(a => filter === 'all' || (a.status || 'new') === filter)
    .filter(a => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        a.org?.toLowerCase().includes(q) ||
        a.contact?.toLowerCase().includes(q) ||
        a.email?.toLowerCase().includes(q) ||
        a.sector?.toLowerCase().includes(q)
      );
    });

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white" dir="rtl" style={{ fontFamily: "'Heebo', sans-serif" }}>

      {/* Header */}
      <div className="border-b border-white/8 px-6 py-5 sticky top-0 bg-[#0A0A0B]/95 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-white font-black text-lg leading-tight">ניהול מועמדויות</h1>
              <p className="text-gray-500 text-xs">The Silent Raise Study — Admin</p>
            </div>
          </div>
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="חיפוש לפי ארגון, שם, מייל..."
              className="w-full bg-white/8 border border-white/10 rounded-xl pr-10 pl-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <StatCard label="סה״כ מועמדויות" value={counts.all} color="bg-white/5 border-white/10" />
          <StatCard label="חדשות" value={counts.new} color="bg-blue-500/10 border-blue-500/20" />
          <StatCard label="נצפו" value={counts.reviewed} color="bg-yellow-500/10 border-yellow-500/20" />
          <StatCard label="אושרו" value={counts.approved} color="bg-emerald-500/10 border-emerald-500/20" />
          <StatCard label="נדחו" value={counts.rejected} color="bg-red-500/10 border-red-500/20" />
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {[
            { key: 'all',      label: 'הכל',    count: counts.all },
            { key: 'new',      label: 'חדשות',  count: counts.new },
            { key: 'reviewed', label: 'נצפו',   count: counts.reviewed },
            { key: 'approved', label: 'אושרו',  count: counts.approved },
            { key: 'rejected', label: 'נדחו',   count: counts.rejected },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                filter === f.key
                  ? 'bg-white text-black'
                  : 'bg-white/8 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {f.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${filter === f.key ? 'bg-black/10 text-black' : 'bg-white/10'}`}>
                {f.count}
              </span>
            </button>
          ))}
          <div className="flex items-center text-gray-600 text-sm mr-auto font-medium">
            מציג {filtered.length} מתוך {applications.length}
          </div>
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="text-center py-24 text-gray-500 text-sm">טוען נתונים...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-500 text-sm">אין מועמדויות תואמות</div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr_auto] gap-4 px-6 py-3 border-b border-white/8 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <span>ארגון / איש קשר</span>
              <span>מייל</span>
              <span>גודל</span>
              <span>סקטור</span>
              <span>סטטוס</span>
              <span>פעולות</span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/6">
              {filtered.map(app => {
                const st = statusConfig[app.status || 'new'];
                return (
                  <div key={app.id} className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr_auto] gap-4 px-6 py-4 items-center hover:bg-white/3 transition-colors">

                    {/* Org + Contact */}
                    <div className="min-w-0">
                      <div className="font-black text-white text-sm truncate">{app.org}</div>
                      <div className="text-xs text-gray-400 mt-0.5 truncate">{app.contact}{app.role ? ` — ${app.role}` : ''}</div>
                      <div className="text-xs text-gray-600 mt-0.5">
                        {app.created_date ? new Date(app.created_date).toLocaleDateString('he-IL', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="min-w-0">
                      <a href={`mailto:${app.email}?subject=מועמדות נבחרת ה-100 — ${app.org}`}
                        className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors text-xs truncate">
                        <Mail className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{app.email}</span>
                      </a>
                      {app.phone && (
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-1" dir="ltr">
                          <Phone className="w-3 h-3 flex-shrink-0" />
                          {app.phone}
                        </div>
                      )}
                    </div>

                    {/* Size */}
                    <div className="text-sm text-gray-300 font-medium">
                      {app.size ? `${app.size} עובדים` : <span className="text-gray-600">—</span>}
                    </div>

                    {/* Sector */}
                    <div className="text-sm text-gray-400 font-medium truncate">
                      {app.sector || <span className="text-gray-600">—</span>}
                    </div>

                    {/* Status Badge */}
                    <div>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${st.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                        {st.label}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button onClick={() => updateMutation.mutate({ id: app.id, status: 'reviewed' })}
                        title="סמן כנצפתה"
                        className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-all">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => updateMutation.mutate({ id: app.id, status: 'approved' })}
                        title="אשר"
                        className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/30 transition-all">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => updateMutation.mutate({ id: app.id, status: 'rejected' })}
                        title="דחה"
                        className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-all">
                        <XCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}