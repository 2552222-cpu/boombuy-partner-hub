import React, { useState } from 'react';
import { Copy, Check, Share2, FileText, TrendingUp, BarChart2, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedNumber from '../boombuy/AnimatedNumber';

const socialPosts = [
  {
    label: 'LinkedIn — לקהילת HRus',
    content: `אחרי שנים בעולם ה-HR הבנתי: השאלה היא לא כמה תקציב — אלא מה עשינו איתו.

BoomBuy ו-HRus יוצאים למחקר לאומי חסר תקדים:
✅ 100 ארגונים נבחרים
✅ ~50,000 עובדים
✅ 24 חודשי BoomBuy Premium — חינם לחלוטין
✅ שיתוף אוניברסיטת בר-אילן

שאלת המחקר: האם ₪500 של רווחה יכולים להרגיש לעובד כמו ₪1,200 — בלי להוסיף שקל?

אם אתם מנהלות HR שרוצות לקחת חלק בשינוי — זה הזמן.
גל ראשון: 25 ארגונים בלבד. נסגר 30.4.2026.

#HR #EmployeeWelfare #SilentRaise #BoomBuy #HRus #IWPPI`,
  },
  {
    label: 'פייסבוק — HRus Community',
    content: `🔬 מחקר לאומי | The Silent Raise Study | BoomBuy × HRus × בר-אילן

האם אפשר לשפר את תחושת העובד מבלי להוסיף שקל לתקציב הרווחה? 🤔

אנחנו יוצאים לבדוק! מחפשים 100 ארגונים לפיילוט לאומי.

✨ קבלו 24 חודשי Premium — חינם
📊 דוח Benchmark אישי
🏆 הצטרפו כ-Founding Members של מדד IWPPI הישראלי
🎖️ תג Welfare Power Leader ל-LinkedIn

מקומות מוגבלים — גל ראשון נסגר 30.4.2026
👇 research@boombuy.co.il`,
  },
  {
    label: 'מייל — פנייה אישית למנהלת HR',
    content: `נושא: קול קורא — The Silent Raise Study | נבחרת ה-100

שלום [שם],

אני פונה אליך בעניין מחקר לאומי ייחודי שנערך בשיתוף BoomBuy, HRus ואוניברסיטת בר-אילן.

שאלת המחקר:
האם ניתן להעלות את השכר הנטו הנתפס של העובד — מבלי להוסיף שקל אחד לתקציב הרווחה?

מה מקבל הארגון שמצטרף:
• BoomBuy Premium — 24 חודשים ללא עלות לארגון
• דוח Benchmark אישי מול 100 ארגונים ישראליים
• קרדיט בפרסום הלאומי ב-HRus ובמאמר האקדמי
• ציון IWPPI רבעוני — מדד כוח הקנייה הארגוני
• תג "Welfare Power Leader" ל-LinkedIn + כנסי HRus
• גישה מוקדמת לנתוני eNPS ישראלי

מה נדרש?
4 סקרים קצרים (5 דקות כל אחד) לאורך שנה. ארגון עם 100+ עובדים.

100 מקומות בלבד. גל ראשון — 25 ארגונים — נסגר 30.4.2026.

לפרטים והגשת מועמדות: research@boombuy.co.il

בכבוד,
[שם] | BoomBuy × HRus`,
  },
];

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

function GlassCard({ children, className = '' }) {
  return (
    <div className={`bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

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
    <GlassCard>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-3.5 text-right">
        <div className="flex items-center gap-2.5">
          <Share2 className="w-4 h-4 text-blue-400" />
          <span className="text-white text-sm" style={{ fontWeight: 700 }}>{label}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>
      {open && (
        <div className="border-t border-white/10 px-5 pb-5 pt-4">
          <pre className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap text-right mb-4 font-sans" dir="rtl">{content}</pre>
          <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition-colors" style={{ fontWeight: 700 }}>
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'הועתק!' : 'העתק'}
          </button>
        </div>
      )}
    </GlassCard>
  );
}

function RoiCalc() {
  const [orgCount, setOrgCount] = useState(100);
  const [useLarry, setUseLarry] = useState(false);
  const perOrg = orgCount * 500 * (useLarry ? 0.10 : 0.15) * 12;
  const total = perOrg * 2;

  return (
    <GlassCard className="p-6">
      <h3 className="text-white text-lg mb-5" style={{ fontWeight: 900 }}>מחשבון פוטנציאל רווח</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-blue-400" style={{ fontWeight: 700 }}>{orgCount} ארגונים</span>
            <span className="text-gray-400 font-medium">מספר ארגונים מחוברים</span>
          </div>
          <input type="range" min="10" max="500" step="10" value={orgCount} onChange={e => setOrgCount(+e.target.value)} className="w-full accent-blue-500" />
        </div>
        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
          <button onClick={() => setUseLarry(!useLarry)} className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0 ${useLarry ? 'bg-blue-600' : 'bg-gray-600'}`}>
            <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${useLarry ? 'left-5' : 'left-0.5'}`} />
          </button>
          <div className="text-right">
            <p className="text-white text-sm" style={{ fontWeight: 700 }}>ניהול ע"י לארי</p>
            <p className="text-gray-400 text-xs font-medium">עמלה 10% במקום 15%</p>
          </div>
        </div>
        <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-5 text-center">
          <div className="text-3xl text-white mb-1" style={{ fontWeight: 900 }}>₪<AnimatedNumber value={total} /></div>
          <div className="text-gray-300 text-sm font-medium">רווח משוער לשנתיים</div>
        </div>
      </div>
    </GlassCard>
  );
}

export default function HrusSection() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

      {/* פוסטים */}
      <section>
        <SectionHeader
          icon={<Share2 className="w-4 h-4 text-pink-400" />}
          color="bg-pink-500/20"
          title="פוסטים ומיילים מוכנים לשיתוף"
        />
        <div className="space-y-2.5">
          {socialPosts.map((p, i) => <CopyBlock key={i} label={p.label} content={p.content} />)}
        </div>
      </section>

      {/* קול קורא */}
      <section>
        <SectionHeader
          icon={<FileText className="w-4 h-4 text-indigo-400" />}
          color="bg-indigo-500/20"
          title='קול קורא — גרסה B (קצרה, לפנייה ישירה)'
        />
        <GlassCard className="p-7 text-right space-y-4" dir="rtl">
          <div className="border-b border-white/10 pb-4">
            <p className="text-xs text-blue-400 uppercase tracking-widest mb-1 font-extrabold">THE SILENT RAISE STUDY | מחקר ההעלאה השקטה</p>
            <h3 className="text-white text-xl leading-snug" style={{ fontWeight: 900 }}>קול קורא: נבחרת ה-100</h3>
            <p className="text-gray-400 text-sm mt-1 font-medium">Israel's First Welfare Delivery Mechanism Study</p>
          </div>

          <p className="text-blue-300 text-base" style={{ fontWeight: 900 }}>"אותו תקציב. כוח קנייה אחר. תוצאה שונה לחלוטין."</p>

          <p className="text-gray-300 text-sm leading-relaxed font-medium">תקציב הרווחה לא גדל. יוקר המחיה גדל. הציפיות של העובדים גדלות. ואת — מוצפת בתפעול ואין זמן ליצור חוויה אמיתית.</p>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">מחקר בינלאומי מצביע על דבר מעניין: לא תמיד הבעיה היא כמה — אלא איך. תדירות, נגישות ויומיומיות של הטבה עשויות להשפיע על הערך שעובד מרגיש שהוא מקבל.</p>

          <div className="bg-blue-500/15 border border-blue-500/25 rounded-xl p-4">
            <p className="text-blue-200 text-sm" style={{ fontWeight: 700 }}>שאלת המחקר: האם שינוי בדרך שבה עובד נחשף להטבות — מתוך אותו תקציב — מעלה את תחושת הערך הכלכלי שלו ומשפר מחוברות?</p>
            <p className="text-blue-400 text-xs mt-2 font-semibold">המחקר נעשה בשיתוף אוניברסיטת בר-אילן ועם ביקורת אקדמית מלאה.</p>
          </div>

          <div>
            <h4 className="text-white text-sm mb-2" style={{ fontWeight: 800 }}>מה את מקבלת</h4>
            <div className="divide-y divide-white/8 rounded-xl overflow-hidden border border-white/10">
              {[
                ['BoomBuy Premium 24 חודש', '₪0 — ללא כל עלות לארגון'],
                ['דוח Benchmark אישי', 'הארגון שלך vs. ממוצע 100 ארגונים ישראליים'],
                ['שמך על White Paper לאומי', 'קרדיט מחקרי ב-HRus ובפרסום האקדמי'],
                ['ציון IWPPI רבעוני', 'מדד כוח הקנייה הארגוני — מתפרסם ב-HRus'],
                ['תג Welfare Power Leader', 'LinkedIn + דיוורי ארגון + כנסי HRus'],
              ].map(([b, d], i) => (
                <div key={i} className={`flex justify-between items-center px-4 py-2.5 text-sm ${i % 2 === 0 ? 'bg-white/5' : ''}`}>
                  <span className="text-gray-400 font-medium">{d}</span>
                  <span className="text-white" style={{ fontWeight: 700 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm mb-2" style={{ fontWeight: 800 }}>מה מתבקש ממך</h4>
            <ul className="space-y-1 text-sm text-gray-300 font-medium">
              <li>• ארגון עם 100+ עובדים</li>
              <li>• מחלקת רווחה / HR פעילה</li>
              <li>• מילוי סקר ב-4 נקודות זמן (4–5 דקות בכל פעם, אנונימי לחלוטין)</li>
              <li>• איש קשר אחד לתיאום לאורך השנה</li>
            </ul>
          </div>

          <div className="bg-blue-600 rounded-xl px-5 py-3 text-center">
            <p className="text-white text-sm" style={{ fontWeight: 900 }}>100 ארגונים בלבד. גל ראשון נסגר 30.4.2026.</p>
            <p className="text-blue-200 text-xs mt-0.5 font-medium">ארגונים שיצטרפו ייכנסו כ-Founding Members של מדד IWPPI הישראלי</p>
          </div>

          <p className="text-gray-500 text-xs border-t border-white/10 pt-3 font-medium">לפרטים: research@boombuy.co.il | www.boombuy.co.il/research</p>
        </GlassCard>
      </section>

      {/* ROI */}
      <section>
        <SectionHeader
          icon={<BarChart2 className="w-4 h-4 text-emerald-400" />}
          color="bg-emerald-500/20"
          title="חישוב פוטנציאל רווח"
        />
        <RoiCalc />
      </section>

      {/* Timeline */}
      <section>
        <SectionHeader
          icon={<TrendingUp className="w-4 h-4 text-orange-400" />}
          color="bg-orange-500/20"
          title="לוח זמנים"
        />
        <div className="space-y-2.5">
          {[
            { color: 'bg-blue-600', title: 'גל 1 — Founding Members', date: '30.4.2026', desc: '25 ארגונים ראשונים. סגירת הרשמה 15.4.2026.' },
            { color: 'bg-indigo-600', title: 'גל 2', date: '11.6.2026', desc: '25 ארגונים נוספים. סגירת הרשמה 1.6.2026.' },
            { color: 'bg-violet-600', title: 'גל 3', date: '23.7.2026', desc: '25 ארגונים. סגירת הרשמה 15.7.2026.' },
            { color: 'bg-emerald-600', title: 'גל 4 — השלמה ל-100', date: '3.9.2026', desc: '25 ארגונים אחרונים. סגירת הרשמה 25.8.2026.' },
          ].map((step, i) => (
            <GlassCard key={i} className="flex items-start gap-4 px-5 py-4">
              <div className={`w-7 h-7 ${step.color} rounded-full flex-shrink-0 mt-0.5`} />
              <div className="text-right flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs font-medium">{step.date}</span>
                  <p className="text-white text-sm" style={{ fontWeight: 800 }}>{step.title}</p>
                </div>
                <p className="text-gray-400 text-sm mt-0.5 font-medium">{step.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}