import React from 'react';
import { Zap, Mail } from 'lucide-react';

export default function HubFooter() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 mt-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <a href="mailto:research@boombuy.co.il" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold">
          <Mail className="w-4 h-4" />
          research@boombuy.co.il
        </a>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-white font-black text-sm">BoomBuy × HRUS</span>
        </div>
        <p className="text-gray-600 text-sm font-medium">© 2026 | The Silent Raise Study</p>
      </div>
    </footer>
  );
}