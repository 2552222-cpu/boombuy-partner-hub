import React from 'react';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 glass border-b border-gray-200/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">BoomBuy <span className="text-gray-400">×</span> HRUS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#docs" className="hover:text-black transition-colors">מסמכים</a>
          <a href="#roi" className="hover:text-black transition-colors">פוטנציאל רווח</a>
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors">
            צור קשר
          </button>
        </div>
      </div>
    </nav>
  );
}