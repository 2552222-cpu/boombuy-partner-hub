import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const sectors = ['טכנולוגיה', 'פיננסים', 'בריאות', 'חינוך', 'תעשייה', 'קמעונאות', 'ביטוח', 'ממשל/ציבורי', 'אחר'];

export default function RegistrationSection() {
  const [form, setForm] = useState({ org: '', contact: '', role: '', email: '', phone: '', size: '', sector: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="registration" className="py-28 px-6 bg-[#1D1D1F]">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-3">Join The Study</p>
          <h2 className="text-5xl font-black text-white mb-4 tracking-tight">הצטרפות למחקר הלאומי</h2>
          <p className="text-gray-400 font-medium text-lg">100 מקומות. גל ראשון נסגר 15 לאפריל 2026.</p>
        </div>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-5" />
            <h3 className="text-white font-black text-2xl mb-3">המועמדות התקבלה!</h3>
            <p className="text-gray-400 font-medium">נחזור אליך תוך 48 שעות לאישור והמשך תהליך.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-gray-300 text-sm font-bold block mb-2">שם הארגון *</label>
                <input name="org" value={form.org} onChange={handleChange} required placeholder="חברת דוגמה בע&quot;מ" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-medium" />
              </div>
              <div>
                <label className="text-gray-300 text-sm font-bold block mb-2">שם איש הקשר *</label>
                <input name="contact" value={form.contact} onChange={handleChange} required placeholder="ישראל ישראלי" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-medium" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-gray-300 text-sm font-bold block mb-2">תפקיד *</label>
                <input name="role" value={form.role} onChange={handleChange} required placeholder="מנהלת HR" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-medium" />
              </div>
              <div>
                <label className="text-gray-300 text-sm font-bold block mb-2">מייל *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="name@company.co.il" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-medium" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-gray-300 text-sm font-bold block mb-2">טלפון</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="050-0000000" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-medium" />
              </div>
              <div>
                <label className="text-gray-300 text-sm font-bold block mb-2">מספר עובדים</label>
                <select name="size" value={form.size} onChange={handleChange} className="w-full bg-[#2a2a2e] border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium">
                  <option value="">בחר טווח</option>
                  <option value="100-250">100–250</option>
                  <option value="250-500">250–500</option>
                  <option value="500-1000">500–1,000</option>
                  <option value="1000+">1,000+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-gray-300 text-sm font-bold block mb-2">מגזר</label>
              <select name="sector" value={form.sector} onChange={handleChange} className="w-full bg-[#2a2a2e] border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium">
                <option value="">בחר מגזר</option>
                {sectors.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-gray-300 text-sm font-bold block mb-2">הערות</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="שאלות, הערות או בקשות מיוחדות..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-medium resize-none" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-5 bg-[#2563eb] text-white font-black text-xl rounded-2xl hover:bg-blue-700 transition-all disabled:opacity-60 shadow-2xl shadow-blue-600/30">
              {loading ? 'שולח...' : 'הגש מועמדות'}
            </button>
            <p className="text-gray-600 text-sm text-center font-medium">כל הנתונים אנונימיים. לא ישמשו לשיווק. ניתן לפרוש בכל עת.</p>
          </form>
        )}
      </div>
    </section>
  );
}