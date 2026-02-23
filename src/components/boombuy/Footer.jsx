import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <Zap className="text-white w-3 h-3 fill-white" />
          </div>
          <span className="font-bold tracking-tight text-black">BoomBuy Partner Hub</span>
        </div>
        <p className="text-gray-400 text-sm">© 2026 BoomBuy & HRUS. All rights reserved.</p>
      </div>
    </footer>
  );
}