import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const waves = [
  { label: 'T0', title: 'Baseline', date: 'מרץ 2026', desc: 'מדידת בסיס — eNPS, POS, PPP ומחוברות עובד לפני כניסה לפלטפורמה.', color: 'bg-blue-600', border: 'border-blue-200', bg: 'bg-blue-50', text: 'text-blue-600' },
  { label: 'T1', title: '45 יום', date: 'מאי 2026', desc: 'גל ראשון — האם השתנה הערך הנתפס לאחר 45 ימי שימוש ראשוני?', color: 'bg-violet-600', border: 'border-violet-200', bg: 'bg-violet-50', text: 'text-violet-600' },
  { label: 'T2', title: '120 יום', date: 'יולי 2026', desc: 'גל שני — מדידת עומק: שינוי ב-eNPS ובדיווח HR Relief Score.', color: 'bg-indigo-600', border: 'border-indigo-200', bg: 'bg-indigo-50', text: 'text-indigo-600' },
  { label: 'T3', title: '240 יום', date: 'נובמבר 2026', desc: 'גל סיום — מסקנות לאורכיות, בנצ\'מארק סופי ודוח אישי לארגון.', color: 'bg-emerald-600', border: 'border-emerald-200', bg: 'bg-emerald-50', text: 'text-emerald-600' },
];

const metrics = [
  { badge: 'ראשי', name: 'eNPS Delta', desc: 'שינוי ב-Employee Net Promoter Score בין גלי המחקר.' },
  { badge: 'משני', name: 'PPP Index', desc: 'Perceived Purchasing Power — כוח קנייה נתפס של העובד.' },
  { badge: 'חקרני', name: 'HR Relief Score', desc: 'מדד עומס תפעולי על מנהלת ה-HR.' },
];

const questions = [
  'כמה קל לך לנצל את תקציב הרווחה שלך בפועל? (1–10)',
  'האם תמליץ לחבר לעבוד בארגון שלך? (eNPS)',
  'כיצד תתאר את ההרגשה שלך לגבי "כמה שווה" ההטבה? (PPP)',
  'כמה מהתקציב השנתי ניצלת בפועל?',
  'האם ידעת מראש מה אפשר לרכוש עם התקציב?',
  'כמה זמן לקח לך לאשר/לממש הטבה אחרונה?',
];

export default function ResearchSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="research" className="py-28 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">Methodology</p>
          <h2 className="text-5xl font-black text-black mb-4 tracking-tight">מה בודקים ואיך?</h2>
        </div>

        {/* Waves */}
        <div className="grid md:grid-cols-4 gap-5 mb-16">
          {waves.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-6 border ${w.border} ${w.bg}`}
            >
              <div className={`w-12 h-12 ${w.color} rounded-2xl flex items-center justify-center text-white font-black text-lg mb-5`}>{w.label}</div>
              <p className={`text-xs font-black uppercase tracking-wider mb-1 ${w.text}`}>{w.date}</p>
              <h3 className="text-lg font-black text-black mb-2">{w.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-black rounded-full mb-4">{m.badge}</span>
              <h3 className="text-xl font-black text-black mb-2">{m.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between p-8 text-right font-black text-lg text-black hover:bg-gray-50 transition-colors"
          >
            <span>ראה דוגמאות מהשאלון</span>
            {open ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          {open && (
            <div className="px-8 pb-8 grid md:grid-cols-2 gap-4">
              {questions.map((q, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-2xl p-5">
                  <span className="w-7 h-7 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0">{i + 1}</span>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}