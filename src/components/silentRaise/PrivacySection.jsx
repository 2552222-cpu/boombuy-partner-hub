import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Lock, BookOpen, LogOut } from 'lucide-react';

const items = [
  { icon: <Shield className="w-6 h-6 text-blue-500" />, title: 'אנונימיות מלאה', text: 'כל הנתונים מנותקים מזהות הארגון. הדוחות מוצגים באופן מצרפי בלבד — אף ארגון לא יזוהה בתוצאות.' },
  { icon: <Lock className="w-6 h-6 text-emerald-500" />, title: 'אבטחה GDPR', text: 'הפלטפורמה עומדת בתקן GDPR המחמיר. כל הנתונים מוצפנים ומאוחסנים בשרתים מאובטחים באירופה.' },
  { icon: <BookOpen className="w-6 h-6 text-violet-500" />, title: 'שימוש מוגבל', text: 'הנתונים ישמשו אך ורק למטרות המחקר המוצהרות. אין שימוש שיווקי, אין מכירה לצד שלישי.' },
  { icon: <LogOut className="w-6 h-6 text-orange-500" />, title: 'זכות פרישה', text: 'כל ארגון רשאי לפרוש מהמחקר בכל שלב ללא כל סנקציה. הנתונים שנאספו יימחקו לפי בקשה.' },
];

export default function PrivacySection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="privacy" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">Privacy</p>
          <h2 className="text-5xl font-black text-black mb-4 tracking-tight">המחויבות שלנו לדיסקרטיות מלאה</h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-3xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-7 text-right hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-black text-lg text-black">{item.title}</span>
                </div>
                {openIndex === i
                  ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
              </button>
              {openIndex === i && (
                <div className="px-7 pb-7">
                  <p className="text-gray-600 font-medium leading-relaxed text-base">{item.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}