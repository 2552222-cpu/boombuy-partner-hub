import React, { useState } from 'react';
import { CheckCircle2, FileText, Users, BarChart2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const sectors = ['טכנולוגיה', 'פיננסים', 'בריאות', 'חינוך', 'תעשייה', 'קמעונאות', 'ביטוח', 'ממשל/ציבורי', 'אחר'];

function RegistrationForm() {
  const [form, setForm] = useState({ org: '', contact: '', role: '', email: '', phone: '', size: '', sector: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.functions.invoke('submitApplication', form);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-12 text-center">
        <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-white font-black text-2xl mb-2">המועמדות התקבלה!</h3>
        <p className="text-gray-400">נחזור אליך תוך 48 שעות לאישור הצטרפות.</p>
      </div>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm";
  const selectClass = "w-full bg-[#1a1a1f] border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm";
  const labelClass = "text-gray-400 text-sm font-bold block mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>שם הארגון *</label>
          <input name="org" value={form.org} onChange={handleChange} required placeholder="חברת דוגמה בע&quot;מ" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>שם איש הקשר *</label>
          <input name="contact" value={form.contact} onChange={handleChange} required placeholder="ישראל ישראלי" className={inputClass} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>תפקיד *</label>
          <input name="role" value={form.role} onChange={handleChange} required placeholder="מנהלת HR" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>מייל *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="name@company.co.il" className={inputClass} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>טלפון</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="050-0000000" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>מספר עובדים</label>
          <select name="size" value={form.size} onChange={handleChange} className={selectClass}>
            <option value="">בחר טווח</option>
            <option>100–250</option>
            <option>250–500</option>
            <option>500–1,000</option>
            <option>1,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>מגזר</label>
        <select name="sector" value={form.sector} onChange={handleChange} className={selectClass}>
          <option value="">בחר מגזר</option>
          {sectors.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>
      <button type="submit" disabled={loading} className="w-full py-4 bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-blue-700 transition-all disabled:opacity-60 shadow-xl shadow-blue-600/25 mt-2">
        {loading ? 'שולח...' : 'הגישי מועמדות'}
      </button>
      <p className="text-gray-600 text-xs text-center">הנתונים אנונימיים. לא ישמשו לשיווק. ניתן לפרוש בכל עת.</p>
    </form>
  );
}

export default function HRManagerSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

      {/* המחקר */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <BarChart2 className="w-4 h-4 text-blue-400" />
          </div>
          <h2 className="text-white font-black text-2xl">על המחקר</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { num: '100', label: 'ארגונים בניסוי', sub: 'נבחרת מוגבלת' },
            { num: '50K+', label: 'עובדים', sub: 'מדגם לאומי' },
            { num: '24', label: 'חודשי Premium', sub: 'ללא עלות' },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-white mb-1">{s.num}</div>
              <div className="text-sm font-bold text-gray-300">{s.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* המכתב */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <FileText className="w-4 h-4 text-indigo-400" />
          </div>
          <h2 className="text-white font-black text-2xl">המכתב המלא</h2>
        </div>
        <div className="bg-white rounded-3xl p-8 text-right space-y-5" dir="rtl">
          <header className="border-b pb-5">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">HRUS & BoomBuy — מחקר לאומי 2026</p>
            <h3 className="text-xl font-black text-black leading-snug">קול קורא: הצטרפות לנבחרת ה-100</h3>
          </header>
          <p className="text-gray-700 leading-relaxed text-base">מנהלת יקרה, השחיקה הפכה לאיום ממשי. אנחנו השקנו מהלך אסטרטגי ראשון מסוגו — <strong className="text-black">הניסוי הלאומי למדידת הקשר בין חוסן כלכלי לשימור עובדים</strong>.</p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-black text-blue-800">המודל: Zero Budget Impact — כפילות ערך לעובד מבלי להוסיף שקל לתקציב.</p>
          </div>
          <div className="space-y-3">
            {[
              { letter: 'א', color: 'bg-blue-600', title: 'מקסום כוח קנייה', desc: 'כלי Supercharge לעובדים — הקלה כלכלית ביומיום.' },
              { letter: 'ב', color: 'bg-indigo-600', title: 'מדידת שחיקה ושימור', desc: 'גישה לכלי מחקר שמודד Engagement לאורך השנה.' },
              { letter: '✓', color: 'bg-emerald-600', title: 'תפעול שקוף', desc: 'מנהלת לקוח ייעודית — ללא עומס על מחלקת HR.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={`w-8 h-8 ${item.color} text-white rounded-full flex items-center justify-center font-black flex-shrink-0 text-sm`}>{item.letter}</div>
                <div>
                  <p className="font-bold text-black text-sm">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-5 space-y-1">
            <p className="font-black text-black text-sm mb-2">הטבה בלעדית לנבחרת:</p>
            <p className="text-gray-700 text-sm">✓ שדרוג Premium ללא עלות</p>
            <p className="text-gray-700 text-sm">✓ פטור מעלויות הקמה ותפעול</p>
            <p className="text-gray-700 text-sm">✓ <strong className="text-black">ערך כפול לעובד</strong> מהתקציב הקיים</p>
          </div>
          <p className="text-xs text-gray-400 pt-2 border-t">צוות ה-Partner Design | HRUS & BoomBuy</p>
        </div>
      </section>

      {/* טופס הרשמה */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <Users className="w-4 h-4 text-emerald-400" />
          </div>
          <h2 className="text-white font-black text-2xl">הגישי מועמדות</h2>
          <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-full text-xs font-bold">100 מקומות בלבד</span>
        </div>
        <RegistrationForm />
      </section>
    </div>
  );
}