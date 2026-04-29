import React, { useState } from 'react';
import { CheckCircle2, FileText, Users, BarChart2, Building2, Mail, Phone, ChevronDown, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import PrivacySection from './PrivacySection';

const roles = ['מנהלת/ת רווחה', 'מנהלת/ת משאבי אנוש', 'HRBP', 'ראש ועד עובדים', 'מנהל/ת כללי/ת', 'אחר'];
const sectors = ['הייטק / טכנולוגיה', 'תעשייה / ייצור', 'שירותים פיננסיים', 'בריאות / רפואה', 'חינוך / אקדמיה', 'מסחר / קמעונאות', 'ציבורי / ממשלתי', 'אחר'];
const empRanges = ['100–200', '200–500', '500–1,000', '1,000–5,000', '5,000+'];

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

const selectClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm appearance-none bg-white text-gray-800";
const inputClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm text-gray-800";
const labelClass = "block text-sm text-gray-700 mb-2 text-right" ;

function RegistrationForm() {
  const [form, setForm] = useState({ orgName: '', employees: '', role: '', sector: '', name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.orgName || !form.email || !form.name || !form.employees) return;
    setStatus('sending');
    await base44.functions.invoke('submitApplication', {
      org: form.orgName, contact: form.name, role: form.role,
      email: form.email, phone: form.phone, size: form.employees, sector: form.sector,
    });
    setStatus('success');
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[2rem] p-14 text-center shadow-sm border border-gray-100">
          <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-5" />
          <h3 className="text-2xl text-black mb-2" style={{ fontWeight: 900 }}>קיבלנו! 🎉</h3>
          <p className="text-gray-500 text-base mb-1"><strong className="text-black">{form.orgName}</strong> — הגשת המועמדות נשלחה בהצלחה.</p>
          <p className="text-gray-400 text-sm font-medium">הצוות שלנו יחזור אלייך תוך 48 שעות לתיאום שיחת היכרות.</p>
        </motion.div>
      ) : (
        <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 space-y-5" dir="rtl">

          {/* שם ארגון */}
          <div>
            <label className={labelClass} style={{ fontWeight: 700 }}>שם הארגון *</label>
            <div className="relative">
              <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input required value={form.orgName} onChange={e => set('orgName', e.target.value)}
                placeholder='חברת XYZ בע"מ'
                className={`${inputClass} pr-11`} />
            </div>
          </div>

          {/* עובדים + סקטור */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass} style={{ fontWeight: 700 }}>מספר עובדים *</label>
              <div className="relative">
                <select required value={form.employees} onChange={e => set('employees', e.target.value)} className={selectClass}>
                  <option value="">בחרי...</option>
                  {empRanges.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className={labelClass} style={{ fontWeight: 700 }}>סקטור</label>
              <div className="relative">
                <select value={form.sector} onChange={e => set('sector', e.target.value)} className={selectClass}>
                  <option value="">בחרי...</option>
                  {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* שם + תפקיד */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass} style={{ fontWeight: 700 }}>שם מלא *</label>
              <input required value={form.name} onChange={e => set('name', e.target.value)}
                placeholder="שם פרטי + משפחה" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} style={{ fontWeight: 700 }}>תפקיד</label>
              <div className="relative">
                <select value={form.role} onChange={e => set('role', e.target.value)} className={selectClass}>
                  <option value="">בחרי...</option>
                  {roles.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* מייל + טלפון */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass} style={{ fontWeight: 700 }}>מייל *</label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input required type="email" value={form.email} onChange={e => set('email', e.target.value)}
                  placeholder="name@company.co.il" className={`${inputClass} pr-11`} dir="ltr" />
              </div>
            </div>
            <div>
              <label className={labelClass} style={{ fontWeight: 700 }}>טלפון</label>
              <div className="relative">
                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                  placeholder="05X-XXXXXXX" className={`${inputClass} pr-11`} dir="ltr" />
              </div>
            </div>
          </div>

          {/* הערות */}
          <div>
            <label className={labelClass} style={{ fontWeight: 700 }}>הערות / שאלות (אופציונלי)</label>
            <textarea value={form.message} onChange={e => set('message', e.target.value)}
              placeholder="ספרי לנו עוד על הארגון, אתגרי הרווחה שלך, או כל שאלה..."
              rows={3} className={`${inputClass} resize-none`} />
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            המידע ישמש לצורך בדיקת התאמה ותיאום פגישה בלבד. נתוני המחקר יהיו אנונימיים לחלוטין.
          </p>

          <button type="submit" disabled={status === 'sending'}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/25"
            style={{ fontWeight: 800, fontSize: '1.05rem' }}>
            {status === 'sending' ? <><Loader2 className="w-5 h-5 animate-spin" /> שולחת...</> : 'הגישי מועמדות ←'}
          </button>

          <p className="text-center text-xs text-gray-400 font-medium">הצוות שלנו יחזור אלייך תוך 48 שעות · ₪0 עלות לאורך כל המחקר</p>
        </motion.form>
      )}
    </AnimatePresence>
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

      {/* פרטיות */}
      <section>
        <PrivacySection />
      </section>
    </div>
  );
}