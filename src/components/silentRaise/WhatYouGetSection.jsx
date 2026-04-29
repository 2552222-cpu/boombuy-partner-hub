import React from 'react';
import { motion } from 'framer-motion';
import { Gift, BarChart2, Megaphone, Award, Star, Eye } from 'lucide-react';

const benefits = [
  { icon: <Gift className="w-6 h-6 text-blue-500" />, title: 'BoomBuy Premium 24 חודש', value: '₪0', text: 'גישה מלאה לפלטפורמה ללא עלות לאורך כל תקופת המחקר.' },
  { icon: <BarChart2 className="w-6 h-6 text-violet-500" />, title: 'דוח Benchmark אישי', value: '', text: 'השוואה מלאה בין הארגון שלך לכלל 100 הארגונים במחקר.' },
  { icon: <Megaphone className="w-6 h-6 text-emerald-500" />, title: 'קרדיט בפרסום לאומי', value: '', text: 'שמכם יוזכר בדוח המחקר ובפרסום ב-HRus ובמדיה המקצועית.' },
  { icon: <Award className="w-6 h-6 text-orange-500" />, title: 'תג "Welfare Power Leader"', value: '', text: 'לתצוגה ב-LinkedIn — אות הוקרה לארגון חלוץ.' },
  { icon: <Star className="w-6 h-6 text-yellow-500" />, title: 'ציון IWPPI רבעוני', value: '', text: 'Israel Welfare Purchasing Power Index — מדד ייחודי וחדשני.' },
  { icon: <Eye className="w-6 h-6 text-indigo-500" />, title: 'גישה מוקדמת לנתוני שוק', value: '', text: 'ראו את ממצאי המחקר לפני כולם — יתרון אסטרטגי ברור.' },
];

export default function WhatYouGetSection() {
  return (
    <section id="whatyouget" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">Benefits</p>
          <h2 className="text-5xl font-black text-black mb-4 tracking-tight">ההטבות לארגון שמצטרף</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all hover:border-blue-100 group"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  {b.icon}
                </div>
                {b.value && <span className="text-2xl font-black text-blue-600 mt-1">{b.value}</span>}
              </div>
              <h3 className="text-lg font-black text-black mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#F5F5F7] rounded-3xl p-8 text-center">
          <p className="text-black font-black text-xl">מה נדרש מכם?</p>
          <p className="text-gray-600 font-medium mt-2 text-lg">4 סקרים × 5 דקות על פני שנה — זה הכל.</p>
        </div>
      </div>
    </section>
  );
}