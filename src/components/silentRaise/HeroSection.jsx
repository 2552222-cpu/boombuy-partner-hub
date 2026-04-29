import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Users, Building2, BarChart3, Clock } from 'lucide-react';

const stats = [
  { icon: <Building2 className="w-6 h-6" />, value: '100', label: 'ארגונים' },
  { icon: <Users className="w-6 h-6" />, value: '~50,000', label: 'עובדים' },
  { icon: <BarChart3 className="w-6 h-6" />, value: '4', label: 'גלי מחקר' },
  { icon: <Clock className="w-6 h-6" />, value: '24', label: 'חודשי פרימיום' },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#1D1D1F] flex flex-col justify-center px-6 pt-28 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/8 blur-[150px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/8 blur-[120px] rounded-full -ml-64 -mb-64 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 bg-blue-500/15 text-blue-400 rounded-full text-xs font-bold tracking-widest border border-blue-500/25 mb-8">
            מחקר לאומי 2026–2027 | BoomBuy × HRus
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            מחקר ההעלאה השקטה.<br />
            <span className="text-[#2563eb]">The Silent Raise Study.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12 max-w-3xl leading-relaxed">
            האם ניתן לשפר מחוברות עובדים מבלי להוסיף שקל לתקציב הרווחה?
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-blue-400 flex justify-center mb-2">{s.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-start">
            <a
              href="#registration"
              className="px-8 py-4 bg-[#2563eb] text-white font-black rounded-full text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
            >
              הגש מועמדות — 100 מקומות
            </a>
            <a
              href="#research"
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
            >
              מה בודקים?
              <ChevronLeft className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}