import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function SilentRaiseNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1D1D1F]/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#registration" className="px-5 py-2 bg-[#2563eb] text-white font-bold rounded-full text-sm hover:bg-blue-700 transition-colors">
          הגש מועמדות
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#privacy" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">פרטיות</a>
          <a href="#academic" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">אקדמיה</a>
          <a href="#research" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">המחקר</a>
          <a href="#whatyouget" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">מה מקבלים</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white font-black text-lg">BoomBuy</span>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}