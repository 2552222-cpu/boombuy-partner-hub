import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-48 pb-32 px-6 bg-[#1D1D1F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -ml-64 -mb-64" />
      
      <div className="max-w-6xl mx-auto text-right relative z-10" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-blue-500/20"
          >
            Strategic Partnership 2026
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-[5.5rem] font-black tracking-[-0.04em] mb-12 leading-[1.05] text-white"
          >
            הופכים <span className="text-blue-500">תקציב רווחה שחוק</span> לחווית עובד <br />
            <span className="text-blue-500">ואימפקט כלכלי מתמשך</span> לעובד.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-5xl text-gray-400 max-w-4xl leading-[1.1] mb-16 font-bold tracking-tight"
          >
            הסיפור שלנו מתחיל בחיבור בין שני עולמות: המכונה הטכנולוגית המשומנת של BoomBuy והלגיטימציה המקצועית של HRUS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-end"
          >
            <a href="#docs" className="apple-button bg-white text-black hover:bg-gray-100 flex items-center gap-3 text-lg">
              גלו את המהלך
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}