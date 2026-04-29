import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Shield, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';

const sampleQuestions = [
  { q: 'ההטבות של הארגון עוזרות לי לחסוך בהוצאות השוטפות שלי', cat: 'כוח קנייה נתפס', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { q: 'אני מרגיש/ת שאני מקבל/ת ערך כלכלי אמיתי מהרווחה הארגונית', cat: 'כוח קנייה נתפס', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { q: 'לארגון שלי אכפת מהרווחה שלי כעובד/ת', cat: 'תפיסת הארגון', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  { q: 'כשאני חושב/ת על ההטבות שאני מקבל/ת — אני מרגיש/ת מוערך/ת', cat: 'תפיסת הארגון', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  { q: 'באיזו מידה תמליץ לחבר/ה לעבוד בארגון זה? (0–10)', cat: 'eNPS', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
];

const waves = [
  { name: 'T0 — Baseline', time: 'לפני ההשקה', desc: 'מדידת מצב ראשוני' },
  { name: 'T1', time: '45 יום לאחר השקה', desc: 'שינוי ראשוני' },
  { name: 'T2', time: '120 יום', desc: 'אחזקת שינוי' },
  { name: 'T3', time: '240 יום', desc: 'אימפקט לאורך זמן' },
];

export default function ResearchSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="research" className="py-28 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto" dir="rtl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-right mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3 block">The Silent Raise Study</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-black">מה אנחנו בודקים?</h2>
          <p className="text-xl text-gray-600 max-w-2xl font-medium">
            שאלת מחקר אחת, חדה ומקורית — שלא נחקרה קודם בספרות המדעית הישראלית.
          </p>
        </motion.div>

        {/* Research question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1D1D1F] text-white rounded-[2rem] p-10 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -mr-20 -mt-20" />
          <div className="relative z-10">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-6">שאלת המחקר</div>
            <p className="text-2xl md:text-3xl font-black leading-relaxed text-white mb-4">
              "האם שינוי במנגנון מסירת תקציב הרווחה — ללא שינוי בגובהו — מעלה את
              <span className="text-blue-400"> כוח הקנייה הנתפס </span>
              של העובד, ומשם את המחוברות ושביעות הרצון?"
            </p>
            <p className="text-gray-500 text-base">
              מבוסס על POS Theory (Eisenberger, 1986) ו-Mental Accounting (Thaler, 1985)
            </p>
          </div>
        </motion.div>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Brain className="w-6 h-6" />, title: 'כוח קנייה נתפס', desc: 'מה העובד מרגיש שהוא "מרוויח" מההטבות, לעומת מה שהוא מקבל בפועל כספית.', color: 'bg-blue-600' },
            { icon: <TrendingUp className="w-6 h-6" />, title: 'מחוברות (eNPS)', desc: 'האם מנגנון ההפצה משפיע על הנכונות להמליץ על הארגון ולהישאר בו לטווח ארוך.', color: 'bg-indigo-600' },
            { icon: <BarChart3 className="w-6 h-6" />, title: 'תפיסת תמיכה ארגונית', desc: 'האם העובד מרגיש שהארגון "דואג לו" — ולא רק "משלם" לו — עם אותו תקציב בדיוק.', color: 'bg-violet-600' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-100"
            >
              <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-black mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Measurement waves */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-2xl font-black text-black mb-8">4 נקודות מדידה לאורך שנה</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {waves.map((w, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-right">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{w.time}</div>
                <div className="text-lg font-black text-black mb-1">{w.name}</div>
                <div className="text-sm text-gray-500">{w.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sample questions toggle */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-blue-200 transition-all text-right mb-4"
          >
            <div className="flex items-center gap-3 text-gray-400">
              {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-lg font-black text-black">דוגמאות שאלות מהסקר</div>
              <div className="text-sm text-gray-500">5 דקות מילוי · אנונימי לחלוטין · 4 פעמים בשנה</div>
            </div>
          </button>

          {open && (
            <div className="space-y-3 pb-4">
              {sampleQuestions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`flex items-center justify-between p-5 bg-white rounded-2xl border ${item.bg} gap-4`}
                >
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.bg} ${item.color} whitespace-nowrap`}>
                    {item.cat}
                  </span>
                  <p className="text-gray-800 font-medium text-right flex-1">{item.q}</p>
                </motion.div>
              ))}
              <p className="text-center text-sm text-gray-400 pt-2">+ 6 שאלות נוספות (סה"כ 11 שאלות לעובד)</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}