import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, ChevronDown, ChevronUp } from 'lucide-react';

const items = [
  { icon: <Shield className="w-5 h-5" />, title: 'אנונימיות מלאה', desc: 'כל עובד מקבל ID אנונימי. אין שיוך בין תשובות לאדם ספציפי — לא ל-BoomBuy, לא למנהלת ולא לאוניברסיטה.' },
  { icon: <Lock className="w-5 h-5" />, title: 'אבטחת מידע', desc: 'הנתונים נשמרים בשרתים מאובטחים תחת תקני GDPR וחוק הגנת הפרטיות הישראלי. גישה מוגבלת לצוות המחקר בלבד.' },
  { icon: <Eye className="w-5 h-5" />, title: 'שימוש מוגבל', desc: 'הנתונים ישמשו למחקר בלבד. אין שיווק אישי לעובדים. תוצאות יפורסמו באופן מצרפי בלבד — ללא זיהוי ארגון ספציפי.' },
  { icon: <Database className="w-5 h-5" />, title: 'זכות פרישה', desc: 'ארגון יכול לפרוש מהמחקר עד T1 (45 יום). נתוני ה-T0 נמחקים לבקשה. אין כל מחויבות מעבר לכך.' },
];

export default function PrivacySection() {
  const [open, setOpen] = useState(false);

  return (
    <div id="privacy" className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-all"
      >
        <div className="flex items-center gap-2 text-gray-500">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
        <div className="text-right flex items-center gap-2">
          <div>
            <div className="flex items-center gap-2 justify-end mb-0.5">
              <span className="text-white text-sm" style={{ fontWeight: 800 }}>נספח פרטיות — מדיניות המחקר</span>
              <Shield className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-xs text-gray-500 font-medium">הגנת מידע · אנונימיות מלאה · שקיפות מלאה</p>
          </div>
        </div>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 px-5 pb-5 pt-4 space-y-3"
          dir="rtl"
        >
          <div className="grid md:grid-cols-2 gap-3">
            {items.map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white/5 rounded-xl border border-white/8">
                <div className="w-9 h-9 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div className="text-right">
                  <h4 className="text-white text-sm mb-1" style={{ fontWeight: 700 }}>{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-right">
            <p className="text-blue-200 text-xs leading-relaxed font-medium">
              <span className="font-bold text-blue-300">בעלות על הנתונים:</span> BoomBuy מחזיקה נתוני פלטפורמה (שימוש). נתוני הסקרים מנוהלים על שרת נפרד.
              גישת אוניברסיטה — לנתוני סקר מצרפיים ואנונימיים בלבד. גישת HRus — לנתוני IWPPI מצרפיים בלבד.
              שמירת נתונים: 5 שנים לאחר פרסום, לאחר מכן — מחיקה מלאה.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}