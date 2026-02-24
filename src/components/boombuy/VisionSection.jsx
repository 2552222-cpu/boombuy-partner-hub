import React from 'react';
import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section className="py-32 px-6 bg-[#1D1D1F] text-white relative overflow-hidden">
      {/* background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest uppercase text-blue-400 mb-10"
        >
          The Vision
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-black leading-tight text-white mb-16"
          dir="rtl"
        >
          "הדאטה והלגיטימציה שבנית ב-20 שנה פוגשים היום את הטכנולוגיה שתהפוך אותם לערך כלכלי חסר תקדים —{' '}
          <span className="text-blue-400">עבורך, ועבור כל מנהלת HR בישראל.</span>"
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-6 max-w-xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-5xl font-black text-white mb-2">500</div>
            <div className="text-blue-400 font-bold text-sm uppercase tracking-wider">ארגונים יעד</div>
            <div className="text-gray-500 text-xs mt-1">בשנה הראשונה</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-5xl font-black text-white mb-2">₪1.5M</div>
            <div className="text-emerald-400 font-bold text-sm uppercase tracking-wider">רווח פסיבי שנתי</div>
            <div className="text-gray-500 text-xs mt-1">לפי מודל שמרני</div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="text-gray-500 text-sm mt-8"
        >
          * החישוב שמרני ואינו כולל רכישות פרטיות של העובדים מעבר לתקציב הארגון
        </motion.p>
      </div>
    </section>
  );
}