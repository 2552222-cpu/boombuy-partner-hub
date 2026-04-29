import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function JoinForm() {
  const [form, setForm] = useState({ name: '', role: '', email: '', org: '', size: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 px-6 bg-[#1D1D1F]" dir="rtl">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-blue-500/15 text-blue-400 rounded-full text-xs font-bold tracking-widest border border-blue-500/25 mb-5">
            100 מקומות בלבד
          </span>
          <h2 className="text-4xl font-black text-white mb-3 tracking-tight">הצטרפי לנבחרת ה-100</h2>
          <p className="text-gray-400 font-medium">השאירי פרטים ונחזור אליך תוך 48 שעות</p>
        </div>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-12 text-center">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-white font-black text-2xl mb-2">קיבלנו!</h3>
            <p className="text-gray-400 font-medium">נחזור אליך בהקדם לאישור הצטרפות למחקר.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 text-sm font-bold block mb-1.5">שם מלא *</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="ישראלה ישראלי" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium" />
              </div>
              <div>
                <label className="text-gray-400 text-sm font-bold block mb-1.5">תפקיד *</label>
                <input name="role" value={form.role} onChange={handleChange} required placeholder="מנהלת HR" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium" />
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-sm font-bold block mb-1.5">שם הארגון *</label>
              <input name="org" value={form.org} onChange={handleChange} required placeholder="חברת דוגמה בע&quot;מ" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium" />
            </div>
            <div>
              <label className="text-gray-400 text-sm font-bold block mb-1.5">מייל *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="name@company.co.il" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium" />
            </div>
            <div>
              <label className="text-gray-400 text-sm font-bold block mb-1.5">מספר עובדים</label>
              <select name="size" value={form.size} onChange={handleChange} className="w-full bg-[#2a2a2e] border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm font-medium">
                <option value="">בחר טווח</option>
                <option>100–250</option>
                <option>250–500</option>
                <option>500–1,000</option>
                <option>1,000+</option>
              </select>
            </div>
            <button type="submit" className="w-full py-4 bg-[#2563eb] text-white font-black text-lg rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/25 mt-2">
              הגישי מועמדות
            </button>
            <p className="text-gray-600 text-xs text-center">הנתונים אנונימיים ולא ישמשו לשיווק</p>
          </form>
        )}
      </div>
    </section>
  );
}