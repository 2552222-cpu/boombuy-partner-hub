import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const tabs = [
  {
    label: 'LinkedIn',
    content: `אחרי שנים בעולם ה-HR הבנתי: השאלה היא לא כמה תקציב — אלא איך משתמשים בו.

BoomBuy ו-HRus יוצאים למחקר לאומי חסר תקדים:
✅ 100 ארגונים נבחרים
✅ ~50,000 עובדים
✅ 24 חודשי BoomBuy Premium — חינם לחלוטין

אם אתם מנהלות HR שרוצות לקחת חלק בשינוי — זה הזמן.
המקומות מוגבלים. הגישו מועמדות עכשיו. [לינק]

#HR #EmployeeWelfare #SilentRaise #BoomBuy #HRus`,
  },
  {
    label: 'מייל',
    content: `נושא: קול קורא — נבחרת ה-100 | מחקר ההעלאה השקטה

שלום [שם],

אני פונה אליך בעניין מחקר לאומי ייחודי שנערך בשיתוף BoomBuy ו-HRus.

שאלת המחקר: האם ניתן לשפר מחוברות עובדים מבלי להוסיף שקל לתקציב הרווחה?

מה מקבל הארגון שמצטרף?
• BoomBuy Premium — 24 חודשים ללא עלות
• דוח Benchmark אישי מול 100 ארגונים
• קרדיט בפרסום הלאומי ב-HRus
• תג "Welfare Power Leader" ל-LinkedIn
• ציון IWPPI רבעוני

מה נדרש? 4 סקרים קצרים (5 דקות כל אחד) לאורך שנה.

100 מקומות בלבד. הגל הראשון נסגר 15 לאפריל 2026.

להגשת מועמדות: [לינק]

בכבוד,
[שם]`,
  },
  {
    label: 'פייסבוק',
    content: `🔬 מחקר לאומי חדש | BoomBuy × HRus

האם אפשר לשפר את תחושת העובד מבלי להוסיף שקל לתקציב הרווחה? 🤔

אנחנו יוצאים לבדוק! מחפשים 100 ארגונים לפיילוט לאומי.

✨ קבלו 24 חודשי פרימיום חינם
📊 קבלו דוח benchmark אישי
🏆 הצטרפו לנבחרת ה-100

מקומות מוגבלים — הגישו מועמדות עכשיו!
👇 [לינק]`,
  },
];

export default function SocialSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(tabs[activeTab].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">Share</p>
          <h2 className="text-5xl font-black text-black mb-4 tracking-tight">פוסטים ומיילים מוכנים</h2>
          <p className="text-gray-500 font-medium text-lg">העתק, התאם אישית ושתף — הכל מוכן.</p>
        </div>

        <div className="flex gap-2 mb-6 bg-gray-100 p-1.5 rounded-2xl w-fit">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => { setActiveTab(i); setCopied(false); }}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === i ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="bg-[#F5F5F7] rounded-3xl p-8">
          <div className="flex justify-between items-center mb-5">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1D1D1F] text-white font-bold rounded-full text-sm hover:bg-gray-800 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'הועתק!' : 'העתק'}
            </button>
            <span className="font-black text-black">{tabs[activeTab].label}</span>
          </div>
          <pre className="text-gray-700 font-medium leading-relaxed whitespace-pre-wrap text-sm text-right" dir="rtl">
            {tabs[activeTab].content}
          </pre>
        </div>
      </div>
    </section>
  );
}