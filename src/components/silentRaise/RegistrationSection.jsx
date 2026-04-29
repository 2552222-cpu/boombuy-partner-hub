import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Building2, Mail, Phone, ChevronDown } from 'lucide-react';

const ADMIN_EMAIL = 'research@boombuy.co.il';

const roles = ['מנהלת/ת רווחה', 'מנהלת/ת משאבי אנוש', 'HRBP', 'ראש ועד עובדים', 'מנהל/ת כללי/ת', 'אחר'];
const sectors = ['הייטק / טכנולוגיה', 'תעשייה / ייצור', 'שירותים פיננסיים', 'בריאות / רפואה', 'חינוך / אקדמיה', 'מסחר / קמעונאות', 'ציבורי / ממשלתי', 'אחר'];
const empRanges = ['100–200', '200–500', '500–1,000', '1,000–5,000', '5,000+'];

export default function RegistrationSection() {
  const [form, setForm] = useState({ orgName: '', employees: '', role: '', sector: '', name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.orgName || !form.email || !form.name || !form.employees) return;
    setStatus('sending');

    try {
      const subject = encodeURIComponent(`[מחקר ההעלאה השקטה] מועמדות חדשה — ${form.orgName}`);
      const body = encodeURIComponent(
        `ארגון: ${form.orgName}\nמספר עובדים: ${form.employees}\nסקטור: ${form.sector}\n\nאיש קשר: ${form.name}\nתפקיד: ${form.role}\nמייל: ${form.email}\nטלפון: ${form.phone}\n\nהערות:\n${form.message}`
      );
      window.location.href = `mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`;
      setTimeout(() => setStatus('success'), 800);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="register" className="py-28 px-6 bg-[#F5F5F7]">
      <div className="max-w-3xl mx-auto" dir="rtl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-right mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3 block">הגשת מועמדות</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-black">הצטרפי לנבחרת ה-100</h2>
          <p className="text-xl text-gray-500 font-medium">
            מלאי את הפרטים — הצוות שלנו יחזור אליך תוך 48 שעות לבדיקת התאמה ופגישת היכרות.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2rem] p-16 text-center shadow-sm border border-gray-100"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
              <h3 className="text-2xl font-black text-black mb-3">קיבלנו! 🎉</h3>
              <p className="text-gray-500 text-lg mb-2">
                <strong className="text-black">{form.orgName}</strong> — הגשת המועמדות נשלחה בהצלחה.
              </p>
              <p className="text-gray-400">הצוות שלנו יחזור אלייך תוך 48 שעות לתיאום שיחת היכרות.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 space-y-6"
            >
              {/* Org name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-right">שם הארגון *</label>
                <div className="relative">
                  <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    required
                    value={form.orgName}
                    onChange={e => set('orgName', e.target.value)}
                    placeholder='למשל: חברת XYZ בע"מ'
                    className="w-full pr-11 pl-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm"
                  />
                </div>
              </div>

              {/* Employees + Sector */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-right">מספר עובדים *</label>
                  <div className="relative">
                    <select
                      required
                      value={form.employees}
                      onChange={e => set('employees', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm appearance-none bg-white"
                    >
                      <option value="">בחרי...</option>
                      {empRanges.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-right">סקטור</label>
                  <div className="relative">
                    <select
                      value={form.sector}
                      onChange={e => set('sector', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm appearance-none bg-white"
                    >
                      <option value="">בחרי...</option>
                      {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Name + Role */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-right">שם מלא *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => set('name', e.target.value)}
                    placeholder="שם פרטי + משפחה"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-right">תפקיד</label>
                  <div className="relative">
                    <select
                      value={form.role}
                      onChange={e => set('role', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm appearance-none bg-white"
                    >
                      <option value="">בחרי...</option>
                      {roles.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-right">מייל *</label>
                  <div className="relative">
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      placeholder="name@company.co.il"
                      className="w-full pr-11 pl-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 text-right">טלפון</label>
                  <div className="relative">
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      placeholder="05X-XXXXXXX"
                      className="w-full pr-11 pl-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 text-right">הערות / שאלות (אופציונלי)</label>
                <textarea
                  value={form.message}
                  onChange={e => set('message', e.target.value)}
                  placeholder="ספרי לנו עוד על הארגון, אתגרי הרווחה שלך, או כל שאלה שיש לך..."
                  rows={3}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-right transition-all text-sm resize-none"
                />
              </div>

              {/* Privacy note */}
              <p className="text-xs text-gray-400 text-right leading-relaxed">
                המידע שתמסרי ישמש לצורך בדיקת התאמה ותיאום פגישה בלבד.
                נתוני המחקר יהיו אנונימיים לחלוטין. ראי{' '}
                <a href="#privacy" className="text-blue-500 hover:underline">נספח הפרטיות</a>.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-bold rounded-2xl transition-all text-lg flex items-center justify-center gap-3 shadow-lg shadow-blue-600/25"
              >
                {status === 'sending' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> שולחת...</>
                ) : (
                  'הגישי מועמדות ←'
                )}
              </button>

              <p className="text-center text-xs text-gray-400">הצוות שלנו יחזור אלייך תוך 48 שעות · ₪0 עלות לאורך כל המחקר</p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}