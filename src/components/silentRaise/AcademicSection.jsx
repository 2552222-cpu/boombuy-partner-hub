import React, { useState } from 'react';
import { Copy, Check, GraduationCap } from 'lucide-react';

const universities = [
  { priority: 'עדיפות ראשון', name: 'בר-אילן', contact: "פרופ' שרון טוקר", field: 'פסיכולוגיה ארגונית', color: 'border-blue-200 bg-blue-50', badge: 'bg-blue-600' },
  { priority: 'עדיפות שני', name: 'אוניברסיטת חיפה', contact: "פרופ' גיל לוריא", field: 'ניהול משאבי אנוש', color: 'border-violet-200 bg-violet-50', badge: 'bg-violet-600' },
  { priority: 'עדיפות שלישי', name: 'אוניברסיטת אריאל', contact: 'מר זאב וולץ', field: 'כלכלה התנהגותית', color: 'border-emerald-200 bg-emerald-50', badge: 'bg-emerald-600' },
];

const letterText = `לכבוד [שם], שלום רב,

אני [שם], Founder & CEO של BoomBuy.

נתקלתי בשאלת מחקר שלא מצאתי לה תשובה בספרות:
האם שינוי במנגנון מסירת תקציב רווחה קבוע מעלה את Perceived Purchasing Power של העובד, ומשם את eNPS ואת POS?

אנחנו יוצאים למחקר לאורכי (N=100 ארגונים, ~50,000 עובדים, 4 waves) ומחפשים שותף אקדמי.

בתמורה: גישה מלאה לנתונים + Co-authorship + First Authorship לחוקר האקדמי.

אשמח ל-20 דקות Zoom.

בכבוד, [שם] | research@boombuy.co.il`;

export default function AcademicSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="academic" className="py-28 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">Academic Partners</p>
          <h2 className="text-5xl font-black text-black mb-4 tracking-tight">פנייה לאוניברסיטאות</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {universities.map((u, i) => (
            <div key={i} className={`rounded-3xl p-8 border ${u.color}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 ${u.badge} rounded-xl flex items-center justify-center`}>
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-black text-gray-500 uppercase tracking-wider">{u.priority}</span>
              </div>
              <h3 className="text-xl font-black text-black mb-1">{u.name}</h3>
              <p className="text-gray-700 font-bold mb-1">{u.contact}</p>
              <p className="text-gray-500 text-sm font-medium">{u.field}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1D1D1F] text-white font-bold rounded-full text-sm hover:bg-gray-800 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'הועתק!' : 'העתק מכתב'}
            </button>
            <h3 className="text-xl font-black text-black">נוסח מכתב לאוניברסיטה</h3>
          </div>
          <pre className="text-gray-700 font-medium leading-relaxed whitespace-pre-wrap text-sm bg-gray-50 rounded-2xl p-6 text-right" dir="rtl">
            {letterText}
          </pre>
        </div>
      </div>
    </section>
  );
}