import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const sections = [
  { id: 'hrus', label: 'HRUS Partners' },
  { id: 'hr', label: 'מנהלות HR' },
  { id: 'academia', label: 'אקדמיה' },
];

export default function HubNavbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-white/8' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-black text-sm">BoomBuy × HRUS</span>
        </div>

        <div className="flex items-center bg-white/8 rounded-2xl p-1 gap-1">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeSection === s.id
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}