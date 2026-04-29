import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Users, CheckCircle2, XCircle, Clock, Eye, Mail } from 'lucide-react';

const statusConfig = {
  new: { label: 'חדשה', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  reviewed: { label: 'נצפתה', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  approved: { label: 'אושרה', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  rejected: { label: 'נדחתה', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
};

export default function Admin() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState('all');

  const { data: applications = [], isLoading } = useQuery({
    queryKey: ['applications'],
    queryFn: () => base44.entities.Application.list('-created_date', 100),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, status }) => base44.entities.Application.update(id, { status }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['applications'] }),
  });

  const filtered = filter === 'all' ? applications : applications.filter(a => a.status === filter);

  const counts = {
    all: applications.length,
    new: applications.filter(a => a.status === 'new').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] font-sans" dir="rtl" style={{ fontFamily: "'Heebo', sans-serif" }}>
      {/* Header */}
      <div className="border-b border-white/8 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-white font-black text-lg">ניהול מועמדויות</h1>
              <p className="text-gray-500 text-xs">BoomBuy × HRUS Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400 font-medium">סה"כ:</span>
            <span className="text-white font-black">{counts.all}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { key: 'all', label: 'הכל', count: counts.all },
            { key: 'new', label: 'חדשות', count: counts.new },
            { key: 'approved', label: 'אושרו', count: counts.approved },
            { key: 'rejected', label: 'נדחו', count: counts.rejected },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                filter === f.key ? 'bg-white text-black' : 'bg-white/8 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {f.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${filter === f.key ? 'bg-black/10' : 'bg-white/10'}`}>{f.count}</span>
            </button>
          ))}
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="text-center py-20 text-gray-500">טוען...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">אין מועמדויות</div>
        ) : (
          <div className="space-y-3">
            {filtered.map(app => (
              <div key={app.id} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-white font-black text-base">{app.org}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusConfig[app.status || 'new'].color}`}>
                        {statusConfig[app.status || 'new'].label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400">
                      <span className="font-medium text-gray-300">{app.contact} — {app.role}</span>
                        <a
                        href={`mailto:${app.email}?subject=מועמדות נבחרת ה-100 — ${app.org}&body=שלום ${app.contact},%0A%0Aתודה על הגשת המועמדות של ${app.org} לנבחרת ה-100.%0Aנחזור אליך בהקדם.%0A%0Aצוות BoomBuy × HRUS`}
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        {app.email}
                      </a>
                      {app.phone && <span>{app.phone}</span>}
                      {app.size && <span>{app.size} עובדים</span>}
                      {app.sector && <span>{app.sector}</span>}
                    </div>
                    <p className="text-gray-600 text-xs mt-2">
                      {app.created_date ? new Date(app.created_date).toLocaleDateString('he-IL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : ''}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => updateMutation.mutate({ id: app.id, status: 'reviewed' })}
                      title="סמן כנצפתה"
                      className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => updateMutation.mutate({ id: app.id, status: 'approved' })}
                      title="אשר"
                      className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/25 transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => updateMutation.mutate({ id: app.id, status: 'rejected' })}
                      title="דחה"
                      className="w-9 h-9 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/25 transition-all"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}