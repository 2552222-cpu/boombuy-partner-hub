import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, TrendingUp, Layers, BarChart2 } from 'lucide-react';

const cards = [
  { icon: <Snowflake className="w-7 h-7 text-blue-500" />, title: 'תקציב קפוא', text: 'תקציבי הרווחה לא גדלים — אבל הציפיות של העובדים כן.' },
  { icon: <TrendingUp className="w-7 h-7 text-orange-500" />, title: 'יוקר מחיה', text: 'כוח הקנייה של אותו תקציב ירד משמעותית ב-3 השנים האחרונות.' },
  { icon: <Layers className="w-7 h-7 text-violet-500" />, title: 'עומס תפעולי', text: 'מנהלות HR מבזבזות שעות על ניהול ספקי רווחה במקום על אנשים.' },
  { icon: <BarChart2 className="w-7 h-7 text-emerald-500" />, title: 'חוסר נתונים', text: 'אין בנצ\'מארק אמין שמאפשר להשוות ביצועי רווחה בין ארגונים.' },
];

export default function WhySection() {
  return (
    <section className="py-28 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">The Problem</p>
          <h2 className="text-5xl font-black text-black mb-4 tracking-tight">הבעיה שכולנו מכירים</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-5">{c.icon}</div>
              <h3 className="text-xl font-black text-black mb-3">{c.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed font-medium">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1D1D1F] rounded-3xl p-10 md:p-14"
        >
          <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-5">שאלת המחקר</p>
          <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
            "האם אופן מסירת ההטבה — תדירות, נגישות, יומיומיות — משפיע על הערך הנתפס, בעצמאות מגובה התקציב?"
          </p>
        </motion.div>
      </div>
    </section>
  );
}