import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    month: 'מרץ 2026',
    title: 'Pilot Launch',
    desc: 'חיבור אישי ל-5-10 ארגוני עוגן דרך קשרים ישירים של HRUS.',
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    bgLight: 'bg-blue-50',
  },
  {
    month: 'אפריל 2026',
    title: 'Data Analysis',
    desc: 'זיקוק תוצאות הפיילוט ובניית Case Study משכנע לשוק.',
    color: 'bg-indigo-600',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    bgLight: 'bg-indigo-50',
  },
  {
    month: 'מאי 2026',
    title: 'National Launch',
    desc: 'פתיחת "ניסוי ה-100" לקהילת HR הרחבה בישראל.',
    color: 'bg-violet-600',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    bgLight: 'bg-violet-50',
  },
  {
    month: 'יוני+ 2026',
    title: 'Scale-up',
    desc: 'יעד של 500 ארגונים בשנה – סגירת המעגל הכלכלי.',
    color: 'bg-emerald-600',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    bgLight: 'bg-emerald-50',
  },
];

export default function TimelineSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-right mb-16" dir="rtl">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">Execution Roadmap</p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">גאנט הביצוע</h2>
          <p className="text-xl text-gray-500 max-w-xl">מהפיילוט ועד לסקייל לאומי – כל שלב מתוכנן, מדיד ומניב.</p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          {/* connector line */}
          <div className="absolute top-8 right-[12.5%] left-[12.5%] h-0.5 bg-gray-100 z-0" />
          {steps.map((step, i) => (
            <motion.div
              key={step.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col items-center px-4 relative z-10"
            >
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-white font-black text-xl shadow-lg mb-6`}>
                {i + 1}
              </div>
              <div className={`w-full rounded-2xl p-6 border ${step.borderColor} ${step.bgLight} text-right`} dir="rtl">
                <p className={`text-xs font-black uppercase tracking-wider mb-1 ${step.textColor}`}>{step.month}</p>
                <h3 className="text-lg font-black text-black mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.month}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex gap-4 items-start p-6 rounded-2xl border ${step.borderColor} ${step.bgLight}`}
              dir="rtl"
            >
              <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center text-white font-black flex-shrink-0`}>
                {i + 1}
              </div>
              <div>
                <p className={`text-xs font-black uppercase tracking-wider mb-1 ${step.textColor}`}>{step.month}</p>
                <h3 className="text-lg font-black text-black mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}