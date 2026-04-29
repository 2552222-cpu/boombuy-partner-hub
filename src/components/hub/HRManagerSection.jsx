import React, { useState } from 'react';
import { CheckCircle2, FileText, Users, BarChart2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const sectors = ['הייטק', 'תעשייה', 'שירותים', 'ציבורי', 'פיננסים', 'בריאות', 'חינוך', 'קמעונאות', 'אחר'];

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
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-white font-black text-2xl mb-2">המועמדות התקבלה!</h3>
        <p className="text-gray-400">נחזור אליך תוך 48 שעות לאישור הצטרפות.</p>
      </div>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm";
  const selectClass = "w-full bg-[#1a1a1f] border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm";
  const labelClass = "text-gray-400 text-sm font-bold block mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div className="grid md:grid-cols-2 gap-3.5">
        <div>
          <label className={labelClass}>שם הארגון *</label>
          <input name="org" value={form.org} onChange={handleChange} required placeholder='חברת דוגמה בע"מ' className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>שם איש הקשר *</label>
          <input name="contact" value={form.contact} onChange={handleChange} required placeholder="ישראל ישראלי" className={inputClass} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3.5">
        <div>
          <label className={labelClass}>תפקיד *</label>
          <input name="role" value={form.role} onChange={handleChange} required placeholder="מנהלת HR / רווחה" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>מייל *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="name@company.co.il" className={inputClass} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3.5">
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
      <button type="submit" disabled={loading} className="w-full py-4 bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-blue-700 transition-all disabled:opacity-60 shadow-xl shadow-blue-600/25 mt-1">
        {loading ? 'שולח...' : 'הגישי מועמדות'}
      </button>
      <p className="text-gray-600 text-xs text-center">כל הנתונים אנונימיים. לא ישמשו לשיווק. ניתן לפרוש בכל עת.</p>
    </form>
  );
}

export default function HRManagerSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

      {/* ONE PAGER */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <BarChart2 className="w-4 h-4 text-blue-400" />
          </div>
          <h2 className="text-white font-black text-2xl">The Silent Raise Study — One Pager</h2>
        </div>

        {/* Hero quote */}
        <div className="bg-gradient-to-br from-blue-600/15 to-indigo-600/10 border border-blue-500/20 rounded-3xl p-7 mb-4 text-right" dir="rtl">
          <p className="text-blue-300 text-sm font-bold mb-1">BoomBuy × HRus × אוניברסיטת בר-אילן | 2026–2027</p>
          <h3 className="text-white font-black text-xl leading-snug mb-3">"מה אם ₪500 של רווחה ירגישו לעובד כמו ₪1,200?"</h3>
          <p className="text-gray-400 text-sm">בלי להוסיף תקציב. בלי לבקש אישורים. רק לשנות את השיטה.</p>
        </div>

        {/* הבעיה */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-right mb-3" dir="rtl">
          <h4 className="text-white font-black text-base mb-2">הבעיה שכולנו מכירים</h4>
          <p className="text-gray-300 text-sm leading-relaxed">תקציב הרווחה לא גדל. יוקר המחיה גדל. העובדים מרגישים פחות ופחות שהארגון אכפת להם. ואת — מוצפת בתפעול ואין לך זמן ליצור חוויה אמיתית.</p>
          <p className="text-gray-400 text-sm mt-2">אבל מה אם הבעיה אינה גובה התקציב — אלא אופן השימוש בו?</p>
        </div>

        {/* שאלת המחקר */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-right mb-3" dir="rtl">
          <h4 className="text-white font-black text-base mb-2">שאלת המחקר</h4>
          <p className="text-gray-300 text-sm leading-relaxed">כאשר תקציב רווחה קבוע מועבר דרך פלטפורמה שמגדילה את כוח הקנייה הנתפס של העובד — האם מחוברות, שביעות הרצון וההרגשה של "הארגון אכפת לי" עולים באופן מדיד?</p>
          <p className="text-blue-400 text-xs mt-2 font-bold">המחקר נעשה עם אוניברסיטת בר-אילן ועם ביקורת אקדמית מלאה — לא whitepaper שיווקי.</p>
        </div>

        {/* מה מקבלים */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-3">
          <div className="px-6 py-4 border-b border-white/10">
            <h4 className="text-white font-black text-base text-right" dir="rtl">מה את מקבלת כשאת מצטרפת</h4>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { benefit: 'BoomBuy Premium', detail: '24 חודשים — ₪0 לארגון' },
              { benefit: 'דוח Benchmark אישי', detail: 'הארגון שלך vs. ממוצע 100 ארגונים' },
              { benefit: 'קרדיט בפרסום HRus', detail: 'שמך על White Paper לאומי' },
              { benefit: 'ציון IWPPI רבעוני', detail: 'מדד כוח הקנייה הארגוני הישראלי' },
              { benefit: 'תג Welfare Power Leader', detail: 'LinkedIn + דיוורי ארגון + כנסי HRus' },
              { benefit: 'גישה מוקדמת לנתוני שוק', detail: 'נתוני eNPS ישראלי — לפני כולם' },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-3 text-right" dir="rtl">
                <span className="text-gray-400 text-sm">{r.detail}</span>
                <span className="text-white font-bold text-sm">{r.benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* מה נדרש */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-right" dir="rtl">
          <h4 className="text-white font-black text-base mb-3">מה מתבקש ממך</h4>
          <ul className="space-y-1.5 text-sm text-gray-300">
            <li>• מינימום 100 עובדים בארגון</li>
            <li>• מחלקת רווחה פעילה (ולו 0.5 משרה)</li>
            <li>• מילוי סקר עובדים בארבע נקודות זמן (5 דקות כל פעם)</li>
            <li>• איש קשר אחד מהצוות לתיאום לאורך השנה</li>
          </ul>
          <div className="mt-4 bg-blue-600/15 border border-blue-500/25 rounded-xl px-5 py-3">
            <p className="text-blue-300 font-black text-sm">100 ארגונים בלבד. גל ראשון — 25 ארגונים — נסגר 30.4.2026</p>
            <p className="text-gray-400 text-xs mt-1">ארגונים שיצטרפו ייכנסו כ-Founding Members של מדד IWPPI הישראלי</p>
          </div>
        </div>
      </section>

      {/* קול קורא */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <FileText className="w-4 h-4 text-indigo-400" />
          </div>
          <h2 className="text-white font-black text-2xl">קול קורא רשמי</h2>
        </div>
        <div className="bg-white rounded-3xl p-8 text-right space-y-4" dir="rtl">
          <header className="border-b pb-4">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">BoomBuy × HRus × אוניברסיטת בר-אילן</p>
            <h3 className="text-xl font-black text-black leading-snug">The Silent Raise Study 2026 — קול קורא רשמי</h3>
            <p className="text-gray-500 text-sm mt-1">מחקר לאורכי | 100 ארגונים | 4 גלים | 2026–2027</p>
          </header>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-black text-blue-800 text-sm">שאלת המחקר: האם הגדלת כוח הקנייה הנתפס (Perceived Purchasing Power) של עובד, מתוך תקציב רווחה קבוע, מייצרת עלייה מדידה ב-eNPS וב-Perceived Organizational Support?</p>
          </div>

          <div>
            <h4 className="font-black text-black text-sm mb-3">הרקע בשלוש שורות</h4>
            <p className="text-gray-600 text-sm leading-relaxed">תקציבי הרווחה לא גדלים. יוקר המחיה גדל. 42% מהעובדים בישראל ובעולם מציינים שחוסר ביטחון פיננסי פוגע בביצועי העבודה שלהם (Reward Gateway, 2024). הפתרון הסטנדרטי — "תגדיל תקציב" — לא תמיד אפשרי. המחקר הזה בא לבחון כיוון אחר: האם שיפור בנגישות, תדירות ורלוונטיות של ההטבה — מתוך אותו תקציב — יכול לשנות את התמונה?</p>
          </div>

          <div>
            <h4 className="font-black text-black text-sm mb-2">מי מוזמן</h4>
            <div className="space-y-1 text-sm text-gray-700">
              <p>• ארגונים עם 100+ עובדים — כל סקטור: הייטק, תעשייה, שירותים, ציבורי</p>
              <p>• מחלקת רווחה פעילה (HR / רווחה / ועד עובדים)</p>
              <p>• ארגונים שאינם משתמשים ב-BoomBuy כיום — גם ארגונים חדשים מוזמנים</p>
            </div>
          </div>

          <div>
            <h4 className="font-black text-black text-sm mb-2">לוח זמנים</h4>
            <div className="rounded-xl overflow-hidden border border-gray-100">
              {[
                { wave: 'גל 1 — Founding Members', date: '30.4.2026', count: '25 ארגונים', close: '15.4.2026' },
                { wave: 'גל 2', date: '11.6.2026', count: '25 ארגונים', close: '1.6.2026' },
                { wave: 'גל 3', date: '23.7.2026', count: '25 ארגונים', close: '15.7.2026' },
                { wave: 'גל 4', date: '3.9.2026', count: '25 ארגונים', close: '25.8.2026' },
              ].map((g, i) => (
                <div key={i} className={`flex justify-between items-center px-4 py-2.5 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <span className="text-gray-500 text-xs">סגירת הרשמה: {g.close}</span>
                  <span className="text-gray-500 text-xs">{g.count} | {g.date}</span>
                  <span className="font-bold text-black text-sm">{g.wave}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-5 space-y-1.5">
            <h4 className="font-black text-black text-sm mb-2">התחייבויות BoomBuy</h4>
            <p className="text-gray-700 text-sm">✓ פלטפורמת BoomBuy Premium — 24 חודשים ללא עלות לארגון</p>
            <p className="text-gray-700 text-sm">✓ דוח Benchmark אישי בסיום המחקר</p>
            <p className="text-gray-700 text-sm">✓ כל הנתונים אנונימיים. אין שיווק אישי לעובדים</p>
            <p className="text-gray-700 text-sm">✓ ניתן לפרוש מהמחקר עד T1 ללא כל השלכה</p>
          </div>

          <p className="text-xs text-gray-400 border-t pt-3">לרשמה ופרטים: research@boombuy.co.il | www.boombuy.co.il/research</p>
          <p className="text-xs text-gray-400">המחקר מבוצע בהתאם לכל דרישות אתיקת המחקר של אוניברסיטת בר-אילן ואישור ועדת הלסינקי.</p>
        </div>
      </section>

      {/* טופס הרשמה */}
      <section>
        <div className="flex items-center gap-3 mb-4">
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