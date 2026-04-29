import React from 'react';
import { motion } from 'framer-motion';
import { Gift, BarChart2, Award, FileText, Users, Star } from 'lucide-react';

const benefits = [
  {
    icon: <Gift className="w-6 h-6" />,
    title: '24 חודשי פרימיום — חינם',
    desc: 'גישה מלאה לפלטפורמת BoomBuy בגרסת הפרימיום לכל עובדי הארגון — ₪0 — ללא מחויבות.',
    color: 'bg-blue-600',
    highlight: true,
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'דוח Benchmark אישי',
    desc: '"הארגון שלך מול ממוצע 100 ארגונים ישראליים" — נתוני eNPS, מחוברות וכוח קנייה.',
    color: 'bg-indigo-600',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'ציון IWPPI רבעוני',
    desc: 'מדד כוח הקנייה הארגוני הישראלי — מתפרסם ב-HRus כל רבעון. ארגונים שמשתתפים — נמדדים.',
    color: 'bg-violet-600',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'שמך על White Paper לאומי',
    desc: 'קרדיט מחקרי בפרסום HRus — "הארגונים שהובילו את הסטנדרט החדש של הרווחה בישראל".',
    color: 'bg-emerald-600',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'גישה מוקדמת לנתוני שוק',
    desc: 'Founding Members מקבלים את נתוני ה-IWPPI הראשונים — לפני כל פרסום ציבורי.',
    color: 'bg-orange-600',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'תג Welfare Power Leader',
    desc: 'לשים ב-LinkedIn, בניוזלטרי הארגון ובכנסי HRus — "הארגון שלנו מוביל את מחקר הרווחה הלאומי".',
    color: 'bg-pink-600',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-28 px-6 bg-[#1D1D1F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/8 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/8 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10" dir="rtl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-right mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3 block">מה את מקבלת</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">ההצעה למנהלת שמצטרפת</h2>
          <p className="text-xl text-gray-400 max-w-2xl font-medium">
            ה-100 ארגונים הראשונים מקבלים חבילה שמעולם לא הוצעה בישראל — בתמורה להשתתפות במחקר.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-[1.5rem] p-8 border transition-all ${
                b.highlight
                  ? 'bg-blue-600/20 border-blue-500/40 hover:border-blue-400/60'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className={`w-12 h-12 ${b.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                {b.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-3 leading-tight">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              {b.highlight && (
                <div className="mt-4 inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full border border-blue-500/30">
                  הטבה מרכזית
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* What we ask in return */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[2rem] p-10"
        >
          <h3 className="text-2xl font-black text-white mb-8">מה מתבקש ממך?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '100+', label: 'עובדים בארגון' },
              { n: '5 דקות', label: '× 4 פעמים בשנה' },
              { n: '1', label: 'איש קשר לתיאום' },
              { n: '0 ₪', label: 'עלות לארגון' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-white mb-2">{item.n}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm text-center">
              כל הנתונים אנונימיים לחלוטין · ניתן לפרוש בכל עת · אין שיווק אישי לעובדים
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}