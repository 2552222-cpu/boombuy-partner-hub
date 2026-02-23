import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function ToastNotification({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] bg-black text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          הועתק ללוח
        </motion.div>
      )}
    </AnimatePresence>
  );
}