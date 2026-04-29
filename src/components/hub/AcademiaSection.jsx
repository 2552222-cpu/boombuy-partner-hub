import React, { useState } from 'react';
import { Copy, Check, GraduationCap, BarChart2 } from 'lucide-react';

const universities = [
  { priority: '1', name: 'בר-אילן', contact: "פרופ' שרון טוקר", field: 'פסיכולוגיה ארגונית', color: 'border-blue-500/30 bg-blue-500/10', badge: 'bg-blue-600', text: 'text-blue-400' },
  { priority: '2', name: 'אוניברסיטת חיפה', contact: "פרופ' גיל לוריא", field: 'ניהול משאבי אנוש', color: 'border-violet-500/30 bg-violet-500/10', badge: 'bg-violet-600', text: 'text-violet-400' },
  { priority: '3', name: 'אוניברסיטת אריאל', contact: 'מר זאב וולץ', field: 'כלכלה התנהגותית', color: 'border-emerald-500/30 bg-emerald-500/10', badge: 'bg-emerald-600', text: 'text-emerald-400' },
];

const letterText = `לכבוד [שם], שלום רב,

אני [שם], Founder & CEO של BoomBuy.

נתקלתי בשאלת מחקר שלא מצאתי לה תשובה בספרות:
האם שינוי במנגנון מסירת תקציב רווחה קבוע מעלה את Perceived Purchasing Power של העובד, ומשם את eNPS ואת POS?

אנחנו יוצאים למחקר לאורכי (N=100 ארגונים, ~50,000 עובדים, 4 waves) ומחפשים שותף אקדמי.

בתמורה: גישה מלאה לנתונים + Co-authorship + First Authorship לחוקר האקדמי.

אשמח ל-20 דקות Zoom.

בכבוד, [שם] | research@boombuy.co.il`;

const metrics = [
  { badge: 'eNPS', name: 'eNPS Delta', desc: 'שינוי מחוברות עובדים לפני ואחרי ההטמעה' },
  { badge: 'PPP', name: 'PPP Index', desc: 'Perceived Purchasing Power — כוח קנייה נתפס' },
  { badge: 'HRS', name: 'HR Relief Score', desc: 'עומס תפעולי על מחלקת HR לאחר אוטומציה' },
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

      {/* אוניברסיטאות */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-violet-500/20 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-violet-400" />
          </div>
          <h2 className="text-white font-black text-2xl">שותפים אקדמיים</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {universities.map((u, i) => (
            <div key={i} className={`rounded-2xl p-6 border ${u.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 ${u.badge} rounded-xl flex items-center justify-center`}>
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
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <BarChart2 className="w-4 h-4 text-emerald-400" />
          </div>
          <h2 className="text-white font-black text-2xl">מדדי המחקר</h2>
        </div>
        <div className="space-y-3">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-lg text-xs font-black font-mono flex-shrink-0">{m.badge}</span>
              <div className="text-right">
                <p className="text-white font-bold text-sm">{m.name}</p>
                <p className="text-gray-500 text-xs">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* מכתב לאוניברסיטה */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <Copy className="w-4 h-4 text-blue-400" />
          </div>
          <h2 className="text-white font-black text-2xl">מכתב פנייה לפרופסור</h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'הועתק!' : 'העתק מכתב'}
            </button>
            <p className="text-gray-400 text-sm font-medium">מוכן לשליחה — מלא את הפרטים בסוגריים</p>
          </div>
          <pre className="text-gray-300 font-medium leading-relaxed whitespace-pre-wrap text-sm text-right bg-white/3 rounded-2xl p-6" dir="rtl">
            {letterText}
          </pre>
        </div>
      </section>

      {/* פרטי מחקר */}
      <section>
        <div className="bg-gradient-to-br from-violet-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-8 text-right" dir="rtl">
          <h3 className="text-white font-black text-xl mb-4">פרטי המחקר</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-gray-400">מדגם</span><span className="text-white font-bold">N=100 ארגונים, ~50,000 עובדים</span></div>
              <div className="flex justify-between"><span className="text-gray-400">משך</span><span className="text-white font-bold">12 חודשים (4 Waves)</span></div>
              <div className="flex justify-between"><span className="text-gray-400">שיטה</span><span className="text-white font-bold">Mixed Methods, Longitudinal</span></div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-gray-400">פרסום</span><span className="text-white font-bold">Co-authorship + First Authorship</span></div>
              <div className="flex justify-between"><span className="text-gray-400">דאטה</span><span className="text-white font-bold">גישה מלאה לנתונים</span></div>
              <div className="flex justify-between"><span className="text-gray-400">קשר</span><span className="text-white font-bold">research@boombuy.co.il</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}