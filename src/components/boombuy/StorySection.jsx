import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Users, PieChart } from 'lucide-react';

const cards = [
  {
    icon: <Zap className="w-7 h-7 fill-white" />,
    iconBg: "bg-blue-600",
    title: "המכונה של BoomBuy",
    text: "טכנולוגיה מתקדמת שיודעת למקסם כל שקל של רווחה לכדי כוח קנייה כפול עבור העובד, תוך אוטומציה מלאה של התהליך.",
    hoverClass: "hover:bg-blue-50 transition-colors duration-500 shadow-sm",
    iconHover: "group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20"
  },
  {
    icon: <Award className="w-7 h-7" />,
    iconBg: "bg-black",
    title: "הלגיטימציה של HRUS",
    text: "האמון והניסיון של HRUS בקהילת משאבי האנוש נותנים את ה\"תו תקן\" המקצועי שמאפשר לארגונים להצטרף למהלך בביטחון מלא.",
    hoverClass: "hover:scale-[1.02] transition-transform duration-500 shadow-md",
    iconHover: "group-hover:rotate-12 transition-transform"
  },
  {
    icon: <Users className="w-7 h-7" />,
    iconBg: "bg-blue-100 !text-blue-600",
    title: "החיבור האנושי",
    text: "אנחנו לא מוכרים מוצר, אנחנו בונים קהילה. הפיילוט במרץ 2026 יחבר את ארגוני העוגן הגדולים ביותר לניסוי הלאומי.",
    hoverClass: "hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 shadow-md",
    iconHover: "group-hover:scale-110 transition-transform",
    iconTextColor: "text-blue-600"
  },
  {
    icon: <PieChart className="w-7 h-7" />,
    iconBg: "bg-indigo-600",
    title: "אימפקט מדיד",
    text: "התוצאה היא מחקר לאומי שמוכיח איך כלים כלכליים חכמים מונעים שחיקה ומשפרים את שימור העובדים לאורך זמן.",
    hoverClass: "hover:bg-indigo-50 transition-colors duration-500 shadow-sm",
    iconHover: "group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20"
  }
];

export default function StorySection() {
  return (
    <section className="py-32 px-6 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-right mb-16" dir="rtl">
          <h2 className="text-5xl font-black mb-4 tracking-tight text-black">הסיפור מאחורי המהלך</h2>
          <p className="text-2xl text-gray-600 font-bold">איך נולד השילוב שמשנה את כללי המשחק</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`apple-card p-10 flex flex-col justify-between min-h-[450px] group ${card.hoverClass}`}
            >
              <div className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center ${card.iconTextColor || 'text-white'} mb-8 ${card.iconHover}`}>
                {card.icon}
              </div>
              <div className="text-right" dir="rtl">
                <h3 className="text-2xl font-black mb-4 text-black">{card.title}</h3>
                <p className="text-black text-lg leading-relaxed font-bold">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}