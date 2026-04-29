import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '100', label: 'ארגונים', sub: 'Founding Members' },
  { value: '50,000+', label: 'עובדים', sub: 'במחקר' },
  { value: '24', label: 'חודשי פרימיום', sub: 'חינם לחלוטין' },
  { value: '4', label: 'גלי מדידה', sub: 'לאורך שנה' },
];

export default function HeroSection() {
  return (
    <section className="pt-36 pb-24 px-6 bg-[#0A0A0B] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-600/8 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" dir="rtl">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-end mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold tracking-widest uppercase border border-blue-500/20">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            HRus × BoomBuy — מחקר לאומי 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-[4.5rem] font-black tracking-[-0.03em] mb-6 leading-[1.08] text-white"
        >
          מה אם{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-400">אותו תקציב רווחה</span>
          <br />
          יכול להרגיש לעובד{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-indigo-400">כמו העלאה?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-4 font-medium"
        >
          <strong className="text-white">The Silent Raise Study</strong> — מחקר לאומי ראשון מסוגו.
          בודק איך שינוי בדרך שבה עובד מקבל את ההטבות שלו — מבלי לשנות את התקציב — משפיע על המחוברות, הביצועים והרצון להישאר בארגון.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-500 text-base mb-10">
          בשיתוף HRus · מתודולוגיה מבוססת מחקר אקדמי · אנונימי לחלוטין
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-end mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex -space-x-1 ml-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-[#0A0A0B]" />
              ))}
            </div>
            <span className="text-sm text-gray-300 font-medium">
              נותרו <span className="text-blue-400 font-bold">23</span> מקומות לגל הראשון
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex gap-4 justify-end mb-20 flex-wrap"
        >
          <a href="#register" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all text-lg shadow-lg shadow-blue-600/25 hover:-translate-y-0.5">
            הגישי מועמדות עכשיו ←
          </a>
          <a href="#research" className="px-8 py-4 bg-white/8 hover:bg-white/12 text-white font-bold rounded-2xl transition-all text-lg border border-white/10">
            קראי על המחקר
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-5 text-right backdrop-blur-sm">
              <div className="text-3xl font-black text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm font-bold text-gray-300">{stat.label}</div>
              <div className="text-xs text-gray-600 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex justify-center mt-16">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="text-gray-700 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}