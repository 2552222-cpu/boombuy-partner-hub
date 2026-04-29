import React from 'react';
import { Zap, Mail } from 'lucide-react';

export default function HubFooter() {
  return (
    <footer className="border-t border-white/8 py-10 px-6 mt-16">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-gray-600 text-sm font-medium">research@boombuy.co.il</p>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-gray-400 font-black text-sm">BoomBuy × HRUS</span>
        </div>
        <p className="text-gray-600 text-sm font-medium">© 2026</p>
      </div>
    </footer>
  );
}