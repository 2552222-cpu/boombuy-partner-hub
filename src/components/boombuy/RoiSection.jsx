import React from 'react';
import { Users, PieChart } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

export default function RoiSection({ orgCount, setOrgCount, useLarry, setUseLarry }) {
  // חישוב: 300 עובדים × ₪1,000 תקציב = ₪300,000 מחזור לארגון
  // רווח גולמי BoomBuy = 10% → GP לארגון = ₪30,000
  // עמלת HRUS: 15% מ-GP (ללא לארי) או 10% (עם לארי)
  const employeesPerOrg = 300;
  const budgetPerEmployee = 1000;
  const revenuePerOrg = employeesPerOrg * budgetPerEmployee; // ₪300,000
  const gpRate = 0.10; // 10% רווח גולמי
  const gpPerOrg = revenuePerOrg * gpRate; // ₪30,000
  const hrusRate = useLarry ? 0.10 : 0.15;
  const hrusPerOrg = gpPerOrg * hrusRate; // ₪4,500 או ₪3,000
  // × 2 שנים (24 חודשים)
  const totalProfit = orgCount * hrusPerOrg * 2;

  return (
    <section id="roi" className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-[3rem] p-10 bg-[#1D1D1F] text-white overflow-hidden relative shadow-2xl border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -mr-32 -mt-32" />
              <div className="relative z-10">
                <h3 className="text-sm font-bold tracking-widest uppercase text-blue-400 mb-8">פוטנציאל רווח פסיבי</h3>
                <div className="flex items-baseline gap-4 mb-2" dir="rtl">
                  <span className="text-6xl md:text-7xl font-black tracking-tighter text-white">
                    ₪<AnimatedNumber value={totalProfit} />
                  </span>
                </div>
                <p className="text-gray-400 text-lg mb-4" dir="rtl">רווח נקי משוער לשנתיים (לפי {orgCount} ארגונים)</p>
                <p className="text-gray-600 text-xs mb-8" dir="rtl">* החישוב שמרני ואינו כולל רכישות פרטיות של העובדים מעבר לתקציב הארגון</p>
                
                <div className="space-y-6 border-t border-white/10 pt-8" dir="rtl">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">עמלה שנתית לארגון:</span>
                    <span className="font-bold text-white">₪{(hrusPerOrg).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">תקופת זכאות:</span>
                    <span className="font-bold text-white">24 חודשים</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">מאמץ תפעולי:</span>
                    <span className="text-emerald-400 font-bold">אפס (0)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-right" dir="rtl">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-black">סיכום דמו: <br />שורות הרווח ל-HRUS</h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
              המודל הכלכלי בנוי על שקיפות מלאה. אנחנו מנהלים את כל מערך הסגירה וההטמעה, בזמן שאתם נהנים מרווח פסיבי יציב לאורך זמן.
            </p>
            
            <div className="space-y-10">
              <div className="apple-card p-6 bg-white border-blue-100 border-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 text-black">ניהול ותפעול ע"י לארי (מטעמנו)</h4>
                    <p className="text-sm text-gray-500">בבחירה זו, העמלה מתחלקת: 10% ל-HRUS ו-5% לניהול הפרויקט.</p>
                  </div>
                  <button 
                    onClick={() => setUseLarry(!useLarry)}
                    className={`w-14 h-8 rounded-full transition-colors relative flex-shrink-0 ${useLarry ? 'bg-blue-600' : 'bg-gray-200'}`}
                  >
                    <div 
                      className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all"
                      style={{ left: useLarry ? '28px' : '4px' }}
                    />
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-4 font-bold">
                  <span className="text-blue-600">{orgCount} ארגונים</span>
                  <span className="text-black">כמות ארגונים יעד</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  step="10"
                  value={orgCount}
                  onChange={(e) => setOrgCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="apple-card p-6 text-center">
                  <Users className="w-6 h-6 mx-auto mb-3 text-blue-500" />
                  <div className="text-2xl font-bold text-black">
                    <AnimatedNumber value={orgCount * employeesPerOrg} />
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">עובדים מחוברים</div>
                </div>
                <div className="apple-card p-6 text-center">
                  <PieChart className="w-6 h-6 mx-auto mb-3 text-indigo-500" />
                  <div className="text-2xl font-bold text-black">
                    <AnimatedNumber value={useLarry ? 10 : 15} formatter={(v) => Math.round(v) + "%"} />
                  </div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">עמלת שותף</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}