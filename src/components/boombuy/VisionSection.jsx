import React from 'react';
import { Trophy, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export default function VisionSection() {
  return (
    <section className="py-32 px-6 bg-[#000000] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-20">
          <span className="inline-block p-3 bg-blue-600/20 rounded-2xl mb-8">
            <Trophy className="text-blue-500" size={32} />
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight mb-10 italic" dir="rtl">
            "הדאטה והלגיטימציה שבנית ב-20 שנה פוגשים היום את הטכנולוגיה שתהפוך אותם לנכס כלכלי חסר תקדים."
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium italic opacity-80" dir="rtl">
            זו לא עוד שותפות, זו ההזדמנות להכפיל את הערך לקהילה שלך - ופי 10 את שורת הרווח של HRUS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl hover:bg-white/10 transition-all">
            <h4 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6" dir="rtl">יעד סוף שנה א'</h4>
            <div className="text-6xl font-black mb-4 tracking-tighter">500</div>
            <p className="text-slate-400 font-bold" dir="rtl">ארגוני ענק בנבחרת ה-Partner Design</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl hover:bg-white/10 transition-all">
            <h4 className="text-emerald-400 font-black uppercase tracking-[0.3em] text-xs mb-6" dir="rtl">פוטנציאל רווח פסיבי שנתי</h4>
            <div className="text-6xl font-black mb-4 tracking-tighter">₪1.5M</div>
            <p className="text-slate-400 font-bold" dir="rtl">רווח נקי משוער (לפי מודל שמרני)</p>
          </div>
        </div>

        <div className="inline-flex flex-col md:flex-row items-center gap-8 px-10 py-6 bg-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-600/20">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} />
            <span className="font-bold" dir="rtl">אפס מאמץ תפעולי מצדכם</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/20" />
          <div className="flex items-center gap-3">
            <Zap size={24} />
            <span className="font-bold" dir="rtl">אנחנו סוגרים - אתם צומחים</span>
          </div>
        </div>

        <div className="mt-20">
          <button className="group flex items-center gap-3 mx-auto text-blue-400 font-black text-xl hover:text-blue-300 transition-colors" dir="rtl">
            לחתימה על ה-MOU ויציאה לדרך במרץ
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <p className="text-gray-600 text-xs mt-10" dir="rtl">
          * החישוב שמרני ואינו כולל רכישות פרטיות של העובדים מעבר לתקציב הארגון
        </p>
      </div>
    </section>
  );
}