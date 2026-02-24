import React from 'react';
import { FileText, TrendingUp, Share2, PieChart, Briefcase, BarChart2 } from 'lucide-react';

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
          label: 'המכתב המלא',
          content: (
            <div className="space-y-8 text-right" dir="rtl">
              <header className="border-b pb-6">
                <p className="text-sm text-gray-400 mb-2 font-bold uppercase tracking-widest">מאת: צוות המחקר והאסטרטגיה – HRUS & BoomBuy</p>
                <p className="text-sm text-gray-400 mb-4">לכבוד: מנהלות ומנהלי HR ורווחה</p>
                <h2 className="text-2xl font-black text-black">קול קורא: הצטרפות לנבחרת ה-100 – מחקר לאומי למניעת שחיקה ושימור עובדים</h2>
              </header>

              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                <p className="text-xl font-black text-indigo-800">הנושא: האם ניתן להכפיל את ערך הרווחה מבלי להוסיף שקל אחד לתקציב הארגון?</p>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                מנהלת יקרה,
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                בשנים האחרונות, עולם העבודה עבר טלטלה. השחיקה (Burnout) הפכה לאיום ממשי על יציבות הארגונים בישראל. אנחנו רואים את זה בנתוני העזיבה, בירידה במחוברות ובתחושה שתקציבי הרווחה המסורתיים – גדלים ככל שיהיו – כבר לא מצליחים לייצר את האימפקט הכלכלי שהעובד זקוק לו ביומיום.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                בשיתוף עם פלטפורמת HRUS, אנו משיקים מהלך אסטרטגי ראשון מסוגו: <strong className="text-black">הניסוי הלאומי למדידת הקשר בין חוסן כלכלי לשימור עובדים.</strong>
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                אנו מזמינים אותך להגיש מועמדות להצטרף ל-<strong className="text-black">100 הארגונים הראשונים</strong> (בעלי 200 עובדים ומעלה) שייקחו חלק במיזם ה-Partner Design שלנו לשנת 2026.
              </p>

              <div className="border-t pt-6">
                <h3 className="text-xl font-black text-black mb-4">מהו הפיצוח הכלכלי של הניסוי?</h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">אנו מבינים את מגבלות התקציב הקשיחות. לכן, המודל שלנו מבוסס על <strong className="text-black">אפס תוספת תקציבית (Zero Budget Impact)</strong>:</p>
                <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                  <p className="text-gray-700"><strong className="text-black">איך זה עובד?</strong> המערכת של BoomBuy יודעת "למתוח" את תקציב הרווחה הקיים שלכם ולהפוך כל שקל לערך כפול בכיס של העובד.</p>
                  <p className="text-gray-700"><strong className="text-black">המחשה:</strong> אם היום תקציב הרווחה שלך מעניק לעובד ערך מסוים, הטכנולוגיה שלנו מאפשרת לו לרכוש מוצרי צריכה, לייף-סטייל, הופעות ותרבות בערך של <strong className="text-indigo-600">פי 2</strong> – מבלי שהארגון הוסיף שקל אחד לתקציב השנתי המאושר.</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-black text-black mb-4">מה כוללת ההשתתפות במחקר?</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black flex-shrink-0 mt-0.5">א</div>
                    <div>
                      <p className="font-bold text-black">מקסום כוח קנייה</p>
                      <p className="text-gray-600">הטמעה מיידית של כלי ה-Supercharge לעובדים, המעניק להם הקלה כלכלית משמעותית ביומיום.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black flex-shrink-0 mt-0.5">ב</div>
                    <div>
                      <p className="font-bold text-black">מדידת שחיקה ושימור</p>
                      <p className="text-gray-600">קבלת גישה למוצר המחקר החדשני של BoomBuy, המודד לאורך השנה את רמת המחוברות (Engagement) והשפעת ההטבות על מניעת שחיקה ושימור העובדים בארגון.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black flex-shrink-0 mt-0.5">✓</div>
                    <div>
                      <p className="font-bold text-black">תפעול שקוף</p>
                      <p className="text-gray-600">הצמדת מנהלת לקוח ייעודית מטעמנו שתנהל את כל התהליך עבורך, ללא עומס תפעולי על מחלקת ה-HR.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                <h3 className="text-xl font-black text-black mb-4">הטבה בלעדית לנבחרת ה-100:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-black">✓</span> שדרוג למסלול Premium הכולל את כל יכולות המערכת.</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-black">✓</span> פטור מלא מעלויות הקמה, דמי שימוש או תפעול.</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-black">✓</span> <strong className="text-black">התחייבות לערך כפול לעובד</strong> על בסיס התקציב הקיים – ללא תוספת של שקל אחד מהארגון.</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                אנחנו לא מציעים לך עוד "ספק הטבות", אלא <strong className="text-black">מקום סביב השולחן בעיצוב הגביע הקדוש של עולם ה-HR</strong>: היכולת לייצר עובד מאושר, רגוע ומחובר יותר, באמצעים הקיימים.
              </p>

              <div className="bg-black text-white rounded-2xl p-6 text-center">
                <p className="font-bold text-lg mb-1">מספר המקומות בניסוי מוגבל ל-100 הראשונים.</p>
                <button className="mt-4 bg-white text-black font-black px-8 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors">
                  להגשת מועמדות והצטרפות למחקר הלאומי ←
                </button>
              </div>

              <p className="text-gray-500 text-sm pt-4 border-t">
                בברכה,<br />
                <strong className="text-black">צוות ה-Partner Design</strong><br />
                HRUS & BoomBuy
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