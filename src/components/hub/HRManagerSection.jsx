import React, { useState } from 'react';
import { CheckCircle2, FileText, Users, BarChart2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const sectors = ['הייטק', 'תעשייה', 'שירותים', 'ציבורי', 'פיננסים', 'בריאות', 'חינוך', 'קמעונאות', 'אחר'];

function GlassCard({ children, className = '' }) {
  return (
    <div className={`bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

function SectionHeader({ icon, title, color, badge }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-8 h-8 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <h2 className="text-white text-xl leading-tight" style={{ fontWeight: 900 }}>{title}</h2>
      {badge && <span className="px-2.5 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-full text-xs" style={{ fontWeight: 700 }}>{badge}</span>}
    </div>
  );
}

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
      <GlassCard className="p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-white text-2xl mb-2" style={{ fontWeight: 900 }}>המועמדות התקבלה!</h3>
        <p className="text-gray-400 font-medium">נחזור אליך תוך 48 שעות לאישור הצטרפות.</p>
      </GlassCard>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm";
  const selectClass = "w-full bg-[#1a1a1f] border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm";
  const labelClass = "text-gray-300 text-xs mb-1.5 block font-bold";

  return (
    <GlassCard className="p-6">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>שם הארגון *</label>
            <input name="org" value={form.org} onChange={handleChange} required placeholder='חברת דוגמה בע"מ' className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>שם איש הקשר *</label>
            <input name="contact" value={form.contact} onChange={handleChange} required placeholder="ישראל ישראלי" className={inputClass} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>תפקיד *</label>
            <input name="role" value={form.role} onChange={handleChange} required placeholder="מנהלת HR / רווחה" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>מייל *</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="name@company.co.il" className={inputClass} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
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
        <button type="submit" disabled={loading} className="w-full py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all disabled:opacity-60 shadow-lg shadow-blue-600/25" style={{ fontWeight: 900, fontSize: '1rem' }}>
          {loading ? 'שולח...' : 'הגישי מועמדות'}
        </button>
        <p className="text-gray-600 text-xs text-center font-medium">כל הנתונים אנונימיים. לא ישמשו לשיווק. ניתן לפרוש בכל עת.</p>
      </form>
    </GlassCard>
  );
}

export default function HRManagerSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

      {/* ONE PAGER */}
      <section>
        <SectionHeader icon={<BarChart2 className="w-4 h-4 text-blue-400" />} color="bg-blue-500/20" title="The Silent Raise Study — One Pager" />

        <GlassCard className="p-6 mb-3">
          <div className="text-right" dir="rtl">
            <p className="text-blue-400 text-xs uppercase tracking-widest mb-1 font-extrabold">BoomBuy × HRus × אוניברסיטת בר-אילן | 2026–2027</p>
            <h3 className="text-white text-xl leading-snug mb-2" style={{ fontWeight: 900 }}>"מה אם ₪500 של רווחה ירגישו לעובד כמו ₪1,200?"</h3>
            <p className="text-gray-300 text-sm font-medium">בלי להוסיף תקציב. בלי לבקש אישורים. רק לשנות את השיטה.</p>
          </div>
        </GlassCard>

        <div className="grid md:grid-cols-2 gap-3 mb-3">
          <GlassCard className="p-5 text-right" dir="rtl">
            <h4 className="text-white text-sm mb-2" style={{ fontWeight: 800 }}>הבעיה שכולנו מכירים</h4>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">תקציב הרווחה לא גדל. יוקר המחיה גדל. העובדים מרגישים פחות ופחות שהארגון אכפת להם. ואת — מוצפת בתפעול ואין לך זמן ליצור חוויה אמיתית.</p>
            <p className="text-gray-400 text-sm mt-2 font-medium">אבל מה אם הבעיה אינה גובה התקציב — אלא אופן השימוש בו?</p>
          </GlassCard>
          <GlassCard className="p-5 text-right" dir="rtl">
            <h4 className="text-white text-sm mb-2" style={{ fontWeight: 800 }}>שאלת המחקר</h4>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">כאשר תקציב רווחה קבוע מועבר דרך פלטפורמה שמגדילה את כוח הקנייה הנתפס של העובד — האם מחוברות, שביעות הרצון וההרגשה של "הארגון אכפת לי" עולים באופן מדיד?</p>
            <p className="text-blue-400 text-xs mt-2 font-bold">המחקר נעשה עם אוניברסיטת בר-אילן — לא whitepaper שיווקי.</p>
          </GlassCard>
        </div>

        {/* מה מקבלים */}
        <GlassCard className="overflow-hidden mb-3">
          <div className="px-5 py-3 border-b border-white/10">
            <h4 className="text-white text-sm text-right" style={{ fontWeight: 800 }} dir="rtl">מה את מקבלת כשאת מצטרפת</h4>
          </div>
          <div className="divide-y divide-white/8">
            {[
              ['BoomBuy Premium', '24 חודשים — ₪0 לארגון'],
              ['דוח Benchmark אישי', 'הארגון שלך vs. ממוצע 100 ארגונים'],
              ['קרדיט בפרסום HRus', 'שמך על White Paper לאומי'],
              ['ציון IWPPI רבעוני', 'מדד כוח הקנייה הארגוני הישראלי'],
              ['תג Welfare Power Leader', 'LinkedIn + דיוורי ארגון + כנסי HRus'],
              ['גישה מוקדמת לנתוני שוק', 'נתוני eNPS ישראלי — לפני כולם'],
            ].map(([b, d], i) => (
              <div key={i} className={`flex items-center justify-between px-5 py-2.5 text-right ${i % 2 === 0 ? 'bg-white/3' : ''}`} dir="rtl">
                <span className="text-gray-400 text-sm font-medium">{d}</span>
                <span className="text-white text-sm" style={{ fontWeight: 700 }}>{b}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* מה נדרש */}
        <GlassCard className="p-5 text-right" dir="rtl">
          <h4 className="text-white text-sm mb-2" style={{ fontWeight: 800 }}>מה מתבקש ממך</h4>
          <ul className="space-y-1 text-sm text-gray-300 font-medium mb-3">
            <li>• מינימום 100 עובדים בארגון</li>
            <li>• מחלקת רווחה פעילה (ולו 0.5 משרה)</li>
            <li>• מילוי סקר עובדים בארבע נקודות זמן (5 דקות כל פעם)</li>
            <li>• איש קשר אחד מהצוות לתיאום לאורך השנה</li>
          </ul>
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl px-4 py-3">
            <p className="text-blue-300 text-sm" style={{ fontWeight: 900 }}>100 ארגונים בלבד. גל ראשון — 25 ארגונים — נסגר 30.4.2026</p>
            <p className="text-gray-400 text-xs mt-0.5 font-medium">ארגונים שיצטרפו ייכנסו כ-Founding Members של מדד IWPPI הישראלי</p>
          </div>
        </GlassCard>
      </section>

      {/* קול קורא רשמי */}
      <section>
        <SectionHeader icon={<FileText className="w-4 h-4 text-indigo-400" />} color="bg-indigo-500/20" title="קול קורא רשמי — The Silent Raise Study 2026" />

        <div className="bg-white rounded-2xl p-7 text-right space-y-4" dir="rtl">
          <div className="border-b border-gray-200 pb-4">
            <p className="text-xs text-blue-600 uppercase tracking-widest mb-1 font-extrabold">BoomBuy × HRus × אוניברסיטת בר-אילן</p>
            <h3 className="text-gray-900 text-xl leading-snug" style={{ fontWeight: 900 }}>The Silent Raise Study 2026 — קול קורא רשמי</h3>
            <p className="text-gray-500 text-sm mt-1 font-medium">מחקר לאורכי | 100 ארגונים | 4 גלים | 2026–2027</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 text-sm" style={{ fontWeight: 800 }}>שאלת המחקר: האם הגדלת כוח הקנייה הנתפס של עובד, מתוך תקציב רווחה קבוע, מייצרת עלייה מדידה ב-eNPS וב-Perceived Organizational Support?</p>
          </div>

          <div>
            <h4 className="text-gray-800 text-sm mb-2" style={{ fontWeight: 800 }}>הרקע</h4>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">תקציבי הרווחה לא גדלים. יוקר המחיה גדל. 42% מהעובדים בישראל ובעולם מציינים שחוסר ביטחון פיננסי פוגע בביצועי העבודה שלהם (Reward Gateway, 2024). הפתרון הסטנדרטי — "תגדיל תקציב" — לא תמיד אפשרי. המחקר בא לבחון כיוון אחר: האם שיפור בנגישות, תדירות ורלוונטיות — מתוך אותו תקציב — יכול לשנות את התמונה?</p>
          </div>

          <div>
            <h4 className="text-gray-800 text-sm mb-2" style={{ fontWeight: 800 }}>לוח זמנים</h4>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              {[
                { wave: 'גל 1 — Founding Members', date: '30.4.2026', close: '15.4.2026' },
                { wave: 'גל 2', date: '11.6.2026', close: '1.6.2026' },
                { wave: 'גל 3', date: '23.7.2026', close: '15.7.2026' },
                { wave: 'גל 4', date: '3.9.2026', close: '25.8.2026' },
              ].map((g, i) => (
                <div key={i} className={`flex justify-between items-center px-4 py-2.5 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <span className="text-gray-400 text-xs font-medium">סגירה: {g.close}</span>
                  <span className="text-gray-500 text-xs font-medium">{g.date}</span>
                  <span className="text-gray-800 text-sm" style={{ fontWeight: 700 }}>{g.wave}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 space-y-1.5">
            <h4 className="text-gray-800 text-sm mb-2" style={{ fontWeight: 800 }}>התחייבויות BoomBuy</h4>
            {[
              'פלטפורמת BoomBuy Premium — 24 חודשים ללא עלות לארגון',
              'דוח Benchmark אישי בסיום המחקר',
              'כל הנתונים אנונימיים. אין שיווק אישי לעובדים',
              'ניתן לפרוש מהמחקר עד T1 ללא כל השלכה',
            ].map((t, i) => <p key={i} className="text-gray-700 text-sm font-medium">✓ {t}</p>)}
          </div>

          <p className="text-xs text-gray-400 border-t border-gray-100 pt-3 font-medium">לרשמה: research@boombuy.co.il | המחקר מבוצע בהתאם לדרישות אתיקת המחקר של אוניברסיטת בר-אילן ואישור ועדת הלסינקי.</p>
        </div>
      </section>

      {/* טופס */}
      <section>
        <SectionHeader icon={<Users className="w-4 h-4 text-emerald-400" />} color="bg-emerald-500/20" title="הגישי מועמדות" badge="100 מקומות בלבד" />
        <RegistrationForm />
      </section>
    </div>
  );
}