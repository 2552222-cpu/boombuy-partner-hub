import React from 'react';
import { FileText, TrendingUp, Share2, PieChart, Briefcase } from 'lucide-react';

export function getDocuments() {
  return [
    {
      id: 'mou',
      title: 'מסמך הבנות אסטרטגי (MOU)',
      subtitle: 'שותפות BoomBuy & HRUS',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'bg-blue-500',
      tabs: [
        {
          id: 'essence',
          label: 'מהות השותפות',
          content: (
            <div className="space-y-6 text-right" dir="rtl">
              <h3 className="text-2xl font-bold text-blue-600">א. מהות השותפות</h3>
              <p className="text-xl leading-relaxed text-black">יצירת תשתית מחקרית ושיווקית להטמעת פלטפורמת BoomBuy בקרב קהילת מנהלי ה-HR בישראל, תוך התמקדות במקסום תקציבים ומניעת שחיקה.</p>
            </div>
          )
        },
        {
          id: 'stages',
          label: 'שלבי הפעילות',
          content: (
            <div className="space-y-6 text-right" dir="rtl">
              <h3 className="text-2xl font-bold text-blue-600">ב. שלבי הפעילות</h3>
              <ul className="list-disc list-inside space-y-4 text-xl text-black">
                <li><strong>שלב הפיילוט (מרץ 2026):</strong> חיבור אישי של HRUS ל-5-10 ארגוני עוגן לבדיקת היתכנות.</li>
                <li><strong>שלב הניסוי (ניסוי ה-100):</strong> פתיחת ההרשמה ל-100 ארגונים ראשונים למחקר לאומי בנושא שחיקה ושימור.</li>
                <li><strong>שלב הסקייל:</strong> יציאה למהלך רחב להבאת כ-500 ארגונים בשנה.</li>
              </ul>
            </div>
          )
        },
        {
          id: 'model',
          label: 'המודל הכלכלי',
          content: (
            <div className="space-y-6 text-right" dir="rtl">
              <h3 className="text-2xl font-bold text-blue-600">ג. המודל הכלכלי</h3>
              <ul className="list-disc list-inside space-y-4 text-xl text-black">
                <li><strong>עמלת בסיס לשותף (HRUS):</strong> 15% מהרווח הגולמי (GP) של BoomBuy מכל ארגון שהצטרף.</li>
                <li><strong>אופציית ניהול:</strong> במידה ו-HRUS יבחרו בהצמדת מנהלת לקוח (לארי), העמלה תתחלק: 10% ל-HRUS ו-5% לניהול הפרויקט.</li>
                <li><strong>תקופת זכאות לעמלה:</strong> 24 חודשים (שנתיים) מרגע הצטרפות כל לקוח.</li>
              </ul>
            </div>
          )
        },
        {
          id: 'transparency',
          label: 'שקיפות ותפעול',
          content: (
            <div className="space-y-6 text-right" dir="rtl">
              <h3 className="text-2xl font-bold text-blue-600">ד. שקיפות ותפעול</h3>
              <p className="text-xl leading-relaxed text-black">BoomBuy תנהל את כל מערך הסגירה וההטמעה. HRUS לא תידרש למאמץ תפעולי מעבר לחשיפה השיווקית.</p>
            </div>
          )
        }
      ]
    },
    {
      id: 'hr-letter',
      title: 'המכתב המלא למנהלות HR',
      subtitle: 'הגישה המחקרית / לא מכירתית',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-indigo-500',
      tabs: [
        {
          id: 'letter',
          label: 'המכתב',
          content: (
            <div className="space-y-8 text-right" dir="rtl">
              <header className="border-b pb-6">
                <h2 className="text-2xl font-bold mb-2 text-black">נושא: קול קורא: הצטרפות לניסוי הלאומי למניעת שחיקה ושימור עובדים (נבחרת ה-100)</h2>
              </header>
              <div className="bg-gray-50 p-8 rounded-2xl border italic text-xl leading-relaxed text-gray-800">
                <p className="mb-6">"מנהלת HR ורווחה יקרה,</p>
                <p className="mb-6 font-bold text-2xl text-black">האם ניתן להכפיל את ערך הרווחה מבלי להגדיל את התקציב בשקל?</p>
                <p className="mb-6">בשיתוף עם פלטפורמת HRUS, אנו יוצאים למהלך אסטרטגי: מחקר לאומי למדידת השפעת כלים כלכליים על שימור ומניעת שחיקה. אנו מזמינים אותך להצטרף ל-100 הארגונים הראשונים שייקחו חלק במיזם.</p>
                <p className="mb-8">אנו לא מציעים לך מוצר, אלא שותפות בעיצוב הפתרון למצוקה הגדולה של 2026: שחיקת עובדים."</p>
              </div>
            </div>
          )
        },
        {
          id: 'benefits',
          label: 'הטבות וניסוי',
          content: (
            <div className="space-y-8 text-right" dir="rtl">
              <h4 className="font-bold mb-4 text-black text-2xl">מה כוללת ההשתתפות בניסוי?</h4>
              <ul className="list-disc list-inside space-y-4 mb-6 text-xl text-black">
                <li><strong>שלב א':</strong> הטמעת כלי למקסום כוח הקנייה של העובד (ערך כלכלי כפול על התקציב הקיים).</li>
                <li><strong>שלב ב':</strong> קבלת גישה למוצר החדשני של BoomBuy למדידת מחוברות ומניעת שחיקה לאורך השנה.</li>
              </ul>
              <p className="p-6 bg-indigo-50 border border-indigo-100 rounded-2xl font-bold text-indigo-600 text-xl">
                הטבה בלעדית: ל-100 הארגונים הראשונים – שדרוג למסלול Premium ללא עלויות הקמה או תפעול.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: 'social',
      title: 'סטוריתלינג לרשתות',
      subtitle: 'פוסט "הגביע הקדוש"',
      icon: <Share2 className="w-6 h-6" />,
      color: 'bg-pink-500',
      tabs: [
        {
          id: 'post',
          label: 'פוסט "הגביע הקדוש"',
          content: (
            <div className="space-y-8 text-right" dir="rtl">
              <header className="border-b pb-6">
                <h2 className="text-3xl font-bold mb-2 text-black">פוסט "הגביע הקדוש"</h2>
                <p className="text-gray-500">סטוריתלינג לרשתות חברתיות</p>
              </header>
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-10 rounded-3xl border border-pink-100 shadow-sm">
                <p className="text-2xl leading-relaxed font-bold text-gray-900">
                  "אחרי 20 שנה בעולם ה-HR, הבנתי משהו עמוק: הפסקנו למכור 'פינוקים' והתחלנו למדוד 'אימפקט'.
                  <br /><br />
                  השחיקה של העובדים היא האתגר הגדול של השנה, ולכן יחד עם הסטארט-אפ BoomBuy, החלטנו להשיק את ניסוי ה-100. אנחנו הופכים תקציב רווחה שחוק לחבל הצלה כלכלי ביומיום של העובד, ובודקים בזמן אמת איך זה משפיע על השימור שלו בארגון.
                  <br /><br />
                  מי רוצה להצטרף אלינו למחקר הלאומי הזה ולהיות בין 100 החלוצות שנותנות ערך כפול לעובדים שלהן?"
                </p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'gantt',
      title: 'גאנט פעילות (Timeline)',
      subtitle: 'שלבי ההטמעה והסקייל',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-emerald-500',
      tabs: [
        {
          id: 'timeline',
          label: 'Timeline',
          content: (
            <div className="space-y-12 text-right" dir="rtl">
              <header className="border-b pb-6 text-black">
                <h2 className="text-3xl font-bold mb-2">לוח זמנים אסטרטגי 2026</h2>
                <p className="text-gray-500">משלב הפיילוט ועד לסקייל לאומי</p>
              </header>
              <div className="space-y-8 relative before:absolute before:right-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-100">
                <div className="relative pr-12">
                  <div className="absolute right-0 top-1 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-sm z-10" />
                  <h4 className="text-xl font-black text-black mb-2">שלב הפיילוט (מרץ 2026)</h4>
                  <p className="text-gray-600 font-bold">חיבור אישי של HRUS ל-5-10 ארגוני עוגן לבדיקת היתכנות ומדידת אימפקט ראשונית.</p>
                </div>
                <div className="relative pr-12">
                  <div className="absolute right-0 top-1 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-sm z-10" />
                  <h4 className="text-xl font-black text-black mb-2">שלב הניסוי (ניסוי ה-100)</h4>
                  <p className="text-gray-600 font-bold">פתיחת ההרשמה ל-100 ארגונים ראשונים למחקר לאומי בנושא שחיקה ושימור.</p>
                </div>
                <div className="relative pr-12">
                  <div className="absolute right-0 top-1 w-8 h-8 bg-emerald-600 rounded-full border-4 border-white shadow-sm z-10" />
                  <h4 className="text-xl font-black text-black mb-2">שלב הסקייל</h4>
                  <p className="text-gray-600 font-bold">יציאה למהלך רחב להבאת כ-500 ארגונים בשנה וביסוס המודל הכלכלי.</p>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'summary-milestones',
      title: 'סיכום אבני דרך (ROI)',
      subtitle: 'פוטנציאל פסיבי לשנתיים',
      icon: <PieChart className="w-6 h-6" />,
      color: 'bg-orange-500',
      tabs: [
        {
          id: 'roi_summary',
          label: 'ROI Summary',
          content: (
            <div className="space-y-8 text-right" dir="rtl">
              <header className="border-b pb-6 text-black">
                <h2 className="text-3xl font-bold mb-2">סיכום דמו: שורות הרווח ל-HRUS</h2>
                <p className="text-gray-500">פוטנציאל פסיבי (לשנתיים) ללא הוצאות תפעול</p>
              </header>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-6 bg-gray-50 rounded-2xl border">
                  <span className="text-2xl font-black text-blue-600">₪2.4 מיליון</span>
                  <span className="text-xl font-bold text-black">200 ארגונים</span>
                </div>
                <div className="flex justify-between items-center p-8 bg-blue-50 rounded-2xl border-2 border-blue-200 transform scale-105 shadow-lg">
                  <span className="text-3xl font-black text-blue-700">₪6 מיליון</span>
                  <span className="text-2xl font-bold text-black">500 ארגונים</span>
                </div>
                <div className="flex justify-between items-center p-6 bg-gray-900 rounded-2xl text-white">
                  <span className="text-2xl font-black text-blue-400">₪12 מיליון</span>
                  <span className="text-xl font-bold">1,000 ארגונים</span>
                </div>
              </div>
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800 font-bold text-center text-xl">
                הערה: רווח נקי ללא הוצאות וללא עבודה תפעולית מצד HRUS.
              </div>
            </div>
          )
        }
      ]
    }
  ];
}