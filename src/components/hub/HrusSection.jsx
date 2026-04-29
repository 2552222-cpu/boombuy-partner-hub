import React, { useState } from 'react';
import { Copy, Check, Share2, FileText, TrendingUp, BarChart2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedNumber from '../boombuy/AnimatedNumber';

const socialPosts = [
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
];

function CopyBlock({ label, content }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-right">
        <div className="flex items-center gap-3">
          <Share2 className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-white text-sm">{label}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>
      {open && (
        <div className="border-t border-white/8 px-6 pb-5 pt-4">
          <pre className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap text-right mb-4">{content}</pre>
          <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'הועתק!' : 'העתק'}
          </button>
        </div>
      )}
    </div>
  );
}

function RoiCalc() {
  const [orgCount, setOrgCount] = useState(100);
  const [useLarry, setUseLarry] = useState(false);
  const perOrg = orgCount * 500 * (useLarry ? 0.10 : 0.15) * 12;
  const total = perOrg * 2;

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
      <h3 className="text-white font-black text-xl mb-6">מחשבון רווח</h3>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-3 text-sm font-bold">
            <span className="text-blue-400">{orgCount} ארגונים</span>
            <span className="text-gray-400">מספר ארגונים</span>
          </div>
          <input type="range" min="10" max="500" step="10" value={orgCount} onChange={e => setOrgCount(+e.target.value)} className="w-full accent-blue-500" />
        </div>
        <div className="flex items-center justify-between bg-white/5 rounded-2xl px-5 py-4">
          <button onClick={() => setUseLarry(!useLarry)} className={`w-12 h-6 rounded-full transition-colors relative ${useLarry ? 'bg-blue-600' : 'bg-gray-600'}`}>
            <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${useLarry ? 'left-6' : 'left-0.5'}`} />
          </button>
          <div className="text-right">
            <p className="text-white font-bold text-sm">ניהול ע"י לארי</p>
            <p className="text-gray-500 text-xs">עמלה 10% במקום 15%</p>
          </div>
        </div>
        <div className="bg-blue-600/15 border border-blue-500/25 rounded-2xl p-6 text-center">
          <div className="text-4xl font-black text-white mb-1">₪<AnimatedNumber value={total} /></div>
          <div className="text-gray-400 text-sm font-medium">רווח משוער לשנתיים</div>
        </div>
      </div>
    </div>
  );
}

export default function HrusSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

      {/* פוסטים לרשתות */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <Share2 className="w-4 h-4 text-pink-400" />
          </div>
          <h2 className="text-white font-black text-2xl">פוסטים ומיילים מוכנים</h2>
        </div>
        <div className="space-y-3">
          {socialPosts.map((p, i) => <CopyBlock key={i} label={p.label} content={p.content} />)}
        </div>
      </section>

      {/* המכתב למנהלות */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-indigo-500/20 rounded-xl flex items-center justify-center">
            <FileText className="w-4 h-4 text-indigo-400" />
          </div>
          <h2 className="text-white font-black text-2xl">המכתב למנהלות HR</h2>
        </div>
        <div className="bg-white rounded-3xl p-8 text-right" dir="rtl">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <header className="border-b pb-5">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">מאת: HRUS & BoomBuy</p>
              <h3 className="text-xl font-black text-black">קול קורא: נבחרת ה-100 — מחקר למניעת שחיקה ושימור עובדים</h3>
            </header>
            <p className="text-base">מנהלת יקרה, בשנים האחרונות השחיקה הפכה לאיום ממשי. תקציבי הרווחה המסורתיים כבר לא מצליחים לייצר אימפקט כלכלי אמיתי לעובד.</p>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="font-black text-blue-800 text-base">הניסוי שלנו: האם ניתן להכפיל ערך הרווחה מבלי להוסיף שקל לתקציב?</p>
            </div>
            <p className="text-base">אנו מזמינים <strong className="text-black">100 ארגונים ראשונים</strong> (200+ עובדים) לקחת חלק במחקר הלאומי ל-2026.</p>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 space-y-2">
              <h4 className="font-black text-black text-base mb-3">הטבות בלעדיות לנבחרת:</h4>
              <p className="text-sm">✓ שדרוג Premium — ללא עלות</p>
              <p className="text-sm">✓ פטור מעלויות הקמה ותפעול</p>
              <p className="text-sm">✓ <strong className="text-black">ערך כפול לעובד</strong> על בסיס התקציב הקיים</p>
            </div>
            <p className="text-xs text-gray-400 border-t pt-4">צוות ה-Partner Design | HRUS & BoomBuy</p>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <BarChart2 className="w-4 h-4 text-emerald-400" />
          </div>
          <h2 className="text-white font-black text-2xl">חישוב פוטנציאל רווח</h2>
        </div>
        <RoiCalc />
      </section>

      {/* Timeline */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-orange-400" />
          </div>
          <h2 className="text-white font-black text-2xl">לוח זמנים</h2>
        </div>
        <div className="space-y-3">
          {[
            { color: 'bg-blue-600', title: 'פיילוט — מרץ 2026', desc: 'חיבור 5–10 ארגוני עוגן, בדיקת היתכנות ראשונית.' },
            { color: 'bg-indigo-600', title: 'ניסוי ה-100', desc: 'פתיחת הרשמה ל-100 ארגונים למחקר הלאומי.' },
            { color: 'bg-emerald-600', title: 'סקייל', desc: 'יציאה למהלך רחב — יעד 500 ארגונים בשנה.' },
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
              <div className={`w-8 h-8 ${step.color} rounded-full flex-shrink-0 mt-0.5`} />
              <div className="text-right">
                <p className="text-white font-black text-sm">{step.title}</p>
                <p className="text-gray-400 text-sm mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}