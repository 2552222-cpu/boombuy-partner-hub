import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sectionMeta = {
  hrus: {
    badge: 'HRUS Partners Hub',
    title: 'הכלים שלך',
    accent: 'לפיילוט',
    sub: 'פוסטים מוכנים, מצגת, מכתב למנהלות וחישוב רווח — הכל במקום אחד.',
    bg: 'from-blue-600/15 to-indigo-600/10',
  },
  hr: {
    badge: 'HR & Welfare Managers',
    title: 'נבחרת ה-100',
    accent: 'מחכה לך',
    sub: 'קראי את המכתב, הכירי את המחקר, והגישי מועמדות לניסוי הלאומי.',
    bg: 'from-indigo-600/15 to-violet-600/10',
  },
  academia: {
    badge: 'Academic Partners',
    title: 'שותפות',
    accent: 'אקדמית',
    sub: 'מחקר לאורכי, N=100 ארגונים, גישה לדאטה — ונגיש לפרסום.',
    bg: 'from-emerald-600/15 to-teal-600/10',
  },
};

export default function HubHero({ activeSection, setActiveSection }) {
  const meta = sectionMeta[activeSection];

  return (
    <div className={`pt-28 pb-16 px-6 bg-gradient-to-b ${meta.bg} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_70%)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/8 border border-white/15 text-blue-300 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              {meta.badge}
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
              {meta.title} <span className="text-blue-400">{meta.accent}</span>
            </h1>
            <p className="text-lg text-gray-400 font-medium max-w-xl mx-auto">{meta.sub}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}