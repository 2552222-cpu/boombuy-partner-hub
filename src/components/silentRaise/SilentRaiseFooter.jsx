import React from 'react';
import { Zap, Mail } from 'lucide-react';

export default function SilentRaiseFooter() {
  return (
    <footer className="bg-[#1D1D1F] border-t border-white/5 py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-600 text-sm font-medium">
          © 2026 BoomBuy. כל הזכויות שמורות.
        </p>
        <a href="mailto:research@boombuy.co.il" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium text-sm">
          research@boombuy.co.il
          <Mail className="w-4 h-4" />
        </a>
        <div className="flex items-center gap-2">
          <span className="text-white font-black text-lg">BoomBuy</span>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}