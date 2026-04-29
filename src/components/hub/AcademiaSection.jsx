import React, { useState } from 'react';
import { Copy, Check, GraduationCap, BarChart2, FileText, FlaskConical } from 'lucide-react';

function GlassCard({ children, className = '' }) {
  return (
    <div className={`bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

function SectionHeader({ icon, title, color }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-8 h-8 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <h2 className="text-white text-xl leading-tight" style={{ fontWeight: 900 }}>{title}</h2>
    </div>
  );
}

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
  { badge: 'eNPS', name: 'eNPS Delta (Primary Outcome)', desc: 'שינוי ב-Employee Net Promoter Score בין T0 ל-T3 ברמת ארגון. מדד ראשי.' },
  { badge: 'PPP', name: 'Perceived Purchasing Power Index', desc: '5 פריטי Likert — ערך כלכלי נתפס, נגישות, חיסכון, תחושת "בונוס שקט". מדד משני + Mediator.' },
  { badge: 'POS', name: 'Perceived Organizational Support', desc: '3 פריטים — Eisenberger et al. 1986. תחושת ערך ותמיכה ארגונית. מדד משני.' },
  { badge: 'HRS', name: 'HR Relief Score', desc: 'ירידה בעומס תפעולי HR לאחר אוטומציה — 5 פריטים. מדד חקרני.' },
  { badge: 'IWPPI', name: 'Israeli Welfare Purchasing Power Index', desc: 'Composite: (PPP×0.5)+(Usage×0.3)+(eNPS_delta_norm×0.2) — מדד benchmark רבעוני, מתפרסם ב-HRus.' },
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

      {/* פרוטוקול מחקר */}
      <section>
        <SectionHeader icon={<FlaskConical className="w-4 h-4 text-violet-400" />} color="bg-violet-500/20" title="פרוטוקול מחקר — תקציר מנהלים" />
        <GlassCard className="p-6 text-right space-y-4" dir="rtl">
          <div className="border-b border-white/10 pb-4">
            <p className="text-xs text-violet-400 uppercase tracking-widest mb-1 font-extrabold">RESEARCH PROTOCOL v2.0 — For Academic Review | CONFIDENTIAL</p>
            <h3 className="text-white text-lg leading-snug" style={{ fontWeight: 900 }}>Delivery Mechanism Effects on Perceived Welfare Value</h3>
            <p className="text-gray-300 text-sm mt-0.5 font-semibold">A Longitudinal Quasi-Experimental Study</p>
            <p className="text-gray-500 text-xs mt-1 font-medium">BoomBuy × HRus × Department of Psychology, Bar-Ilan University</p>
          </div>

          <div>
            <h4 className="text-gray-200 text-sm mb-2" style={{ fontWeight: 800 }}>Abstract</h4>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">מחקר זה בוחן האם שינוי במנגנון מסירת תקציב רווחה ארגוני קבוע — ללא שינוי בגובהו — משפיע על תפיסת הערך הכלכלי של העובד (PPP), ומשם על רמת המחוברות (eNPS) ותפיסת התמיכה הארגונית (POS). הרציונל: הספרות הקיימת בחנה בעיקר את השפעת גובה ההטבה. פחות ידוע על השפעת תדירות החשיפה, נגישות ואופן ההפצה.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-2.5">
            {[
              ['Primary Outcome', 'eNPS Delta (T3 minus T0)'],
              ['Secondary Outcome', 'PPP Index + HR Relief Score'],
              ['Mediator', 'PPP בין Usage Depth לבין eNPS'],
              ['Moderator', 'גובה תקציב רווחה נוכחי'],
              ['N', '100 ארגונים | מינ׳ 100 עובדים כל אחד'],
              ['עיצוב', 'Single-arm longitudinal, 4 Waves, 240 יום'],
              ['ניתוח', 'LMM + Bootstrap Mediation (5,000 reps)'],
              ['אישור אתי', 'ועדת הלסינקי + IRB אוניברסיטאי'],
            ].map(([k, v], i) => (
              <div key={i} className="flex justify-between gap-3 bg-white/5 rounded-xl px-4 py-2.5">
                <span className="text-white text-sm" style={{ fontWeight: 700 }}>{v}</span>
                <span className="text-gray-500 text-xs font-medium flex-shrink-0">{k}</span>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-gray-200 text-sm mb-1.5" style={{ fontWeight: 800 }}>שאלת המחקר הראשית</h4>
            <p className="text-gray-300 text-sm leading-relaxed font-medium italic">"האם שינוי במנגנון מסירת תקציב רווחה קבוע מעלה את Perceived Purchasing Power (PPP), ובאמצעותו את eNPS ו-Perceived Organizational Support (POS)?"</p>
          </div>

          <div>
            <h4 className="text-gray-200 text-sm mb-1.5" style={{ fontWeight: 800 }}>Research Gap</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">הספרות בחנה (א) כמה הטבה משפיעה על מחוברות ו-(ב) איזה סוג הטבה עדיף. שאלה שלישית נותרה פתוחה: האם אופן המסירה — תדירות, נגישות ויומיומיות — משפיע על הערך הנתפס בעצמאות מגובה ההטבה? שאלה זו לא נבדקה בספרות ה-POS, financial wellbeing, או eNPS הקיימת.</p>
          </div>

          <div>
            <h4 className="text-gray-200 text-sm mb-2" style={{ fontWeight: 800 }}>לוח זמנים מדויק</h4>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-5 text-xs px-4 py-2 bg-white/10 text-gray-400 font-bold gap-2 text-right">
                <span>גל</span><span>T0</span><span>T1 (45י׳)</span><span>T2 (120י׳)</span><span>T3 (240י׳)</span>
              </div>
              {[
                { wave: 'גל 1 (25)', t0: '30.4.26', t1: '14.6.26', t2: '28.8.26', t3: '26.12.26' },
                { wave: 'גל 2 (25)', t0: '11.6.26', t1: '26.7.26', t2: '9.10.26', t3: '7.2.27' },
                { wave: 'גל 3 (25)', t0: '23.7.26', t1: '6.9.26', t2: '21.11.26', t3: '20.3.27' },
                { wave: 'גל 4 (25)', t0: '3.9.26', t1: '18.10.26', t2: '1.1.27', t3: '1.5.27' },
              ].map((g, i) => (
                <div key={i} className={`grid grid-cols-5 text-xs px-4 py-2.5 gap-2 text-right ${i % 2 === 0 ? 'bg-white/5' : ''}`}>
                  <span className="text-white font-bold">{g.wave}</span>
                  <span className="text-gray-400 font-medium">{g.t0}</span>
                  <span className="text-gray-400 font-medium">{g.t1}</span>
                  <span className="text-gray-400 font-medium">{g.t2}</span>
                  <span className="text-gray-400 font-medium">{g.t3}</span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      {/* שותפים אקדמיים */}
      <section>
        <SectionHeader icon={<GraduationCap className="w-4 h-4 text-violet-400" />} color="bg-violet-500/20" title="שותפים אקדמיים יעד" />
        <div className="grid md:grid-cols-3 gap-4">
          {universities.map((u, i) => (
            <div key={i} className={`rounded-2xl p-5 border backdrop-blur-sm ${u.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 ${u.badge} rounded-xl flex items-center justify-center`}>
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className={`text-xs uppercase tracking-wider ${u.text} font-extrabold`}>עדיפות {u.priority}</span>
              </div>
              <h3 className="text-white text-base mb-1" style={{ fontWeight: 900 }}>{u.name}</h3>
              <p className="text-gray-300 text-sm font-bold">{u.contact}</p>
              <p className="text-gray-500 text-xs mt-0.5 font-medium">{u.field}</p>
            </div>
          ))}
        </div>
      </section>

      {/* מדדי מחקר */}
      <section>
        <SectionHeader icon={<BarChart2 className="w-4 h-4 text-emerald-400" />} color="bg-emerald-500/20" title="מדדי המחקר (Outcome Measures)" />
        <div className="space-y-2.5">
          {metrics.map((m, i) => (
            <GlassCard key={i} className="flex items-center gap-4 px-5 py-4">
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-xs font-black font-mono flex-shrink-0 min-w-[64px] text-center">{m.badge}</span>
              <div className="text-right">
                <p className="text-white text-sm" style={{ fontWeight: 700 }}>{m.name}</p>
                <p className="text-gray-400 text-xs font-medium mt-0.5">{m.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* מכתב לפרופסור */}
      <section>
        <SectionHeader icon={<FileText className="w-4 h-4 text-blue-400" />} color="bg-blue-500/20" title="מכתב פנייה לשותף אקדמי" />
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition-colors" style={{ fontWeight: 700 }}>
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'הועתק!' : 'העתק מכתב'}
            </button>
            <p className="text-gray-400 text-sm font-medium text-right" dir="rtl">מלא את הפרטים בסוגריים לפני שליחה</p>
          </div>
          <pre className="text-gray-200 font-medium leading-relaxed whitespace-pre-wrap text-sm text-right bg-white/5 rounded-xl p-5 font-sans" dir="rtl">
            {letterText}
          </pre>
        </GlassCard>
      </section>

      {/* פרטי מחקר */}
      <section>
        <GlassCard className="p-6 text-right" dir="rtl">
          <h3 className="text-white text-lg mb-4" style={{ fontWeight: 900 }}>מה מקבל השותף האקדמי</h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm mb-4">
            {[
              ['מדגם', 'N=100 ארגונים, ~50,000 עובדים'],
              ['משך', '240 יום (4 Waves)'],
              ['שיטה', 'Mixed Methods, Longitudinal'],
              ['ניתוח', 'LMM + Bootstrap Mediation (5,000 reps)'],
              ['פרסום', 'Co-authorship + First Authorship'],
              ['דאטה', 'גישה מלאה לנתוני המחקר'],
              ['Pre-reg', 'OSF לפני גל 1'],
              ['קשר', 'research@boombuy.co.il'],
            ].map(([k, v], i) => (
              <div key={i} className="flex justify-between gap-3 bg-white/5 rounded-xl px-4 py-2.5">
                <span className="text-white text-sm" style={{ fontWeight: 700 }}>{v}</span>
                <span className="text-gray-500 text-xs font-medium flex-shrink-0 self-center">{k}</span>
              </div>
            ))}
          </div>
          <div className="bg-white/5 rounded-xl px-4 py-3 text-center">
            <p className="text-gray-400 text-xs font-medium">המחקר מבוצע בהתאם לדרישות אתיקת המחקר של אוניברסיטת בר-אילן | ועדת הלסינקי + IRB אוניברסיטאי</p>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}