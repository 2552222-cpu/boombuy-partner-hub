import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sectionMeta = {
  hrus: {
    badge: 'HRUS Partners Hub',
    title: 'הכלים שלך',
    accent: 'לפיילוט',
    sub: 'פוסטים מוכנים, מכתב למנהלות, חישוב רווח וחומרי שיווק — הכל במקום אחד.',
    bg: 'from-blue-600/20 to-indigo-600/10',
  },
  hr: {
    badge: 'HR & Welfare Managers',
    title: 'The Silent Raise Study',
    accent: '— נבחרת ה-100',
    sub: 'קראי את המכתב, הכירי את המחקר, והגישי מועמדות לניסוי הלאומי.',
    bg: 'from-indigo-600/20 to-violet-600/10',
  },
  academia: {
    badge: 'Academic Partners',
    title: 'שותפות אקדמית',
    accent: 'BoomBuy × בר-אילן',
    sub: 'מחקר לאורכי, N=100 ארגונים, 4 Waves — גישה מלאה לדאטה ו-Co-authorship.',
    bg: 'from-emerald-600/20 to-teal-600/10',
  },
};

export default function HubHero({ activeSection }) {
  const meta = sectionMeta[activeSection];

  return (
    <div className={`pt-24 pb-10 px-6 bg-gradient-to-b ${meta.bg} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.10),transparent_70%)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-blue-300 rounded-full text-xs font-extrabold tracking-widest uppercase mb-5">
              {meta.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight" style={{ fontWeight: 900 }}>
              {meta.title} <span className="text-blue-400">{meta.accent}</span>
            </h1>
            <p className="text-base text-gray-300 font-semibold max-w-xl mx-auto">{meta.sub}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}