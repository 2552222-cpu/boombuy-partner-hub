import React, { useState } from 'react';
import { Copy, Check, GraduationCap, BarChart2, FileText, FlaskConical } from 'lucide-react';

const universities = [
  { priority: '1', name: 'אוניברסיטת בר-אילן', contact: "פרופ' שרון טוקר", field: 'פסיכולוגיה ארגונית', color: 'border-blue-500/30 bg-blue-500/10', badge: 'bg-blue-600', text: 'text-blue-400' },
  { priority: '2', name: 'אוניברסיטת חיפה', contact: "פרופ' גיל לוריא", field: 'ניהול משאבי אנוש', color: 'border-violet-500/30 bg-violet-500/10', badge: 'bg-violet-600', text: 'text-violet-400' },
  { priority: '3', name: 'אוניברסיטת אריאל', contact: 'מר זאב וולץ', field: 'כלכלה התנהגותית', color: 'border-emerald-500/30 bg-emerald-500/10', badge: 'bg-emerald-600', text: 'text-emerald-400' },
];

const letterText = `לכבוד [שם פרופסור/ית], שלום רב,

אני [שם], Founder & CEO של BoomBuy.

נתקלתי בשאלת מחקר שלא מצאתי לה תשובה בספרות:
האם שינוי במנגנון מסירת תקציב רווחה קבוע — ללא שינוי בגובהו — מעלה את Perceived Purchasing Power של העובד, ומשם את eNPS ואת POS?

אנחנו יוצאים למחקר לאורכי (N=100 ארגונים, ~50,000 עובדים, 4 Waves, 240 יום) ומחפשים שותף אקדמי.

הרקע התיאורטי: POS Theory (Eisenberger et al., 1986) + Mental Accounting (Thaler, 1985).

בתמורה:
• גישה מלאה לנתוני המחקר
• Co-authorship על White Paper לאומי
• First Authorship לחוקר/ת האקדמי/ת
• פרסום משותף ב-HRus — הפורטל המוביל ל-HR בישראל

אשמח ל-20 דקות Zoom להצגת הפרוטוקול המלא.

בכבוד,
[שם] | research@boombuy.co.il`;

const metrics = [
  { badge: 'eNPS', name: 'eNPS Delta (Primary)', desc: 'שינוי ב-Employee Net Promoter Score בין T0 ל-T3 ברמת ארגון' },
  { badge: 'PPP', name: 'Perceived Purchasing Power Index', desc: '5 פריטי Likert — ערך כלכלי נתפס, נגישות, חיסכון, תחושת "בונוס שקט"' },
  { badge: 'POS', name: 'Perceived Organizational Support', desc: '3 פריטים על בסיס Eisenberger et al. 1986 — תחושת ערך ותמיכה ארגונית' },
  { badge: 'HRS', name: 'HR Relief Score', desc: 'ירידה בעומס תפעולי HR לאחר אוטומציה — 5 פריטים' },
  { badge: 'IWPPI', name: 'Israeli Welfare Purchasing Power Index', desc: 'Composite: (PPP×0.5)+(Usage×0.3)+(eNPS_delta_norm×0.2) — מדד benchmark רבעוני' },
];

export default function AcademiaSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

      {/* פרוטוקול מחקר — תקציר */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 bg-violet-500/20 rounded-xl flex items-center justify-center">
            <FlaskConical className="w-4 h-4 text-violet-400" />
          </div>
          <h2 className="text-white font-black text-2xl">פרוטוקול מחקר — תקציר מנהלים</h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-7 text-right space-y-4" dir="rtl">
          <div className="border-b border-white/10 pb-4">
            <p className="text-xs text-violet-400 font-bold uppercase tracking-widest mb-1">RESEARCH PROTOCOL — Version 2.0 | For Academic Review</p>
            <h3 className="text-white font-black text-lg">Delivery Mechanism Effects on Perceived Welfare Value: A Longitudinal Quasi-Experimental Study</h3>
            <p className="text-gray-400 text-xs mt-1">BoomBuy × HRus × Department of Psychology, Bar-Ilan University | CONFIDENTIAL</p>
          </div>

          <div>
            <h4 className="text-gray-300 font-black text-sm mb-2">Abstract</h4>
            <p className="text-gray-400 text-sm leading-relaxed">מחקר זה בוחן האם שינוי במנגנון מסירת תקציב רווחה ארגוני קבוע — ללא שינוי בגובהו — משפיע על תפיסת הערך הכלכלי של העובד (PPP), ומשם על רמת המחוברות (eNPS) ותפיסת התמיכה הארגונית (POS).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              ['Primary Outcome', 'eNPS Delta (T3 minus T0)'],
              ['Secondary Outcome', 'PPP Index + HR Relief Score'],
              ['Mediator', 'PPP בין Usage Depth לבין eNPS'],
              ['Moderator', 'גובה תקציב רווחה נוכחי'],
              ['N', '100 ארגונים | מינ׳ 100 עובדים'],
              ['עיצוב', 'Single-arm longitudinal pre-post, 4 Waves, 240 יום'],
              ['ניתוח', 'Linear Mixed Models + Bootstrap Mediation'],
              ['שיתוף אקדמי', 'מחלקת פסיכולוגיה, בר-אילן + ועדת הלסינקי'],
            ].map(([k, v], i) => (
              <div key={i} className="flex justify-between gap-3 bg-white/5 rounded-xl px-4 py-2.5">
                <span className="text-white font-bold text-sm">{v}</span>
                <span className="text-gray-500 text-sm flex-shrink-0">{k}</span>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-gray-300 font-black text-sm mb-2">שאלת המחקר הראשית</h4>
            <p className="text-gray-300 text-sm leading-relaxed italic">"האם שינוי במנגנון מסירת תקציב רווחה קבוע מעלה את Perceived Purchasing Power (PPP), ובאמצעותו את eNPS ו-Perceived Organizational Support (POS)?"</p>
          </div>

          <div>
            <h4 className="text-gray-300 font-black text-sm mb-2">הרקע התיאורטי (Research Gap)</h4>
            <p className="text-gray-400 text-sm leading-relaxed">הספרות בחנה בעיקר (א) כמה הטבה משפיעה על מחוברות ו-(ב) איזה סוג הטבה עדיף. שאלה שלישית נותרה פתוחה: האם אופן המסירה — תדירות, נגישות ויומיומיות — משפיע על הערך הנתפס באופן עצמאי מגובה ההטבה? שאלה זו לא נבדקה בספרות ה-POS, ה-financial wellbeing, או ה-eNPS הקיימת.</p>
          </div>

          <div>
            <h4 className="text-gray-300 font-black text-sm mb-2">לוח זמנים</h4>
            <div className="rounded-xl overflow-hidden border border-white/10">
              {[
                { wave: 'גל 1', orgs: '25', t0: '30.4.26', t1: '14.6.26', t2: '28.8.26', t3: '26.12.26' },
                { wave: 'גל 2', orgs: '25', t0: '11.6.26', t1: '26.7.26', t2: '9.10.26', t3: '7.2.27' },
                { wave: 'גל 3', orgs: '25', t0: '23.7.26', t1: '6.9.26', t2: '21.11.26', t3: '20.3.27' },
                { wave: 'גל 4', orgs: '25', t0: '3.9.26', t1: '18.10.26', t2: '1.1.27', t3: '1.5.27' },
              ].map((g, i) => (
                <div key={i} className={`grid grid-cols-5 text-xs text-right px-4 py-2.5 gap-2 ${i % 2 === 0 ? 'bg-white/5' : ''}`}>
                  <span className="text-white font-bold">{g.wave} ({g.orgs})</span>
                  <span className="text-gray-400">T0: {g.t0}</span>
                  <span className="text-gray-400">T1: {g.t1}</span>
                  <span className="text-gray-400">T2: {g.t2}</span>
                  <span className="text-gray-400">T3: {g.t3}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* שותפים אקדמיים */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 bg-violet-500/20 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-violet-400" />
          </div>
          <h2 className="text-white font-black text-2xl">שותפים אקדמיים יעד</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {universities.map((u, i) => (
            <div key={i} className={`rounded-2xl p-5 border ${u.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 ${u.badge} rounded-xl flex items-center justify-center`}>
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className={`text-xs font-black uppercase tracking-wider ${u.text}`}>עדיפות {u.priority}</span>
              </div>
              <h3 className="text-white font-black text-base mb-1">{u.name}</h3>
              <p className="text-gray-300 font-bold text-sm">{u.contact}</p>
              <p className="text-gray-500 text-xs mt-0.5">{u.field}</p>
            </div>
          ))}
        </div>
      </section>

      {/* מדדי מחקר */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <BarChart2 className="w-4 h-4 text-emerald-400" />
          </div>
          <h2 className="text-white font-black text-2xl">מדדי המחקר (Outcome Measures)</h2>
        </div>
        <div className="space-y-2.5">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs font-black font-mono flex-shrink-0 min-w-[60px] text-center">{m.badge}</span>
              <div className="text-right">
                <p className="text-white font-bold text-sm">{m.name}</p>
                <p className="text-gray-500 text-xs">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* מכתב לפרופסור */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <FileText className="w-4 h-4 text-blue-400" />
          </div>
          <h2 className="text-white font-black text-2xl">מכתב פנייה לשותף אקדמי</h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
          <div className="flex items-center justify-between mb-5">
            <button onClick={handleCopy} className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'הועתק!' : 'העתק מכתב'}
            </button>
            <p className="text-gray-400 text-sm font-medium text-right" dir="rtl">מוכן לשליחה — מלא את הפרטים בסוגריים</p>
          </div>
          <pre className="text-gray-300 font-medium leading-relaxed whitespace-pre-wrap text-sm text-right bg-white/3 rounded-2xl p-6 font-sans" dir="rtl">
            {letterText}
          </pre>
        </div>
      </section>

      {/* פרטי מחקר */}
      <section>
        <div className="bg-gradient-to-br from-violet-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-7 text-right" dir="rtl">
          <h3 className="text-white font-black text-xl mb-4">מה מקבל השותף האקדמי</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm mb-5">
            <div className="space-y-2.5">
              <div className="flex justify-between"><span className="text-gray-400">מדגם</span><span className="text-white font-bold">N=100 ארגונים, ~50,000 עובדים</span></div>
              <div className="flex justify-between"><span className="text-gray-400">משך</span><span className="text-white font-bold">240 יום (4 Waves)</span></div>
              <div className="flex justify-between"><span className="text-gray-400">שיטה</span><span className="text-white font-bold">Mixed Methods, Longitudinal</span></div>
              <div className="flex justify-between"><span className="text-gray-400">ניתוח</span><span className="text-white font-bold">LMM + Bootstrap Mediation (5,000 reps)</span></div>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between"><span className="text-gray-400">פרסום</span><span className="text-white font-bold">Co-authorship + First Authorship</span></div>
              <div className="flex justify-between"><span className="text-gray-400">דאטה</span><span className="text-white font-bold">גישה מלאה לנתוני המחקר</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Pre-reg</span><span className="text-white font-bold">OSF לפני גל 1</span></div>
              <div className="flex justify-between"><span className="text-gray-400">קשר</span><span className="text-white font-bold">research@boombuy.co.il</span></div>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl px-5 py-3 text-center">
            <p className="text-gray-300 text-xs">המחקר מבוצע בהתאם לדרישות אתיקת המחקר של אוניברסיטת בר-אילן ואישור ועדת הלסינקי + IRB אוניברסיטאי</p>
          </div>
        </div>
      </section>
    </div>
  );
}