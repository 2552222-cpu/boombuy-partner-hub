import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, CheckCircle2 } from 'lucide-react';

export default function DocumentModal({ selectedDoc, activeTabId, setActiveTabId, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!selectedDoc) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      selectedDoc.id === 'hr-letter' ? 'https://boombuy.io/hr-experiment' : 'Content copied'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {selectedDoc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center px-8 py-6 border-b bg-white relative z-20">
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                <span className="font-bold text-lg text-black">{selectedDoc.title}</span>
                <div className={`${selectedDoc.color} w-8 h-8 rounded-lg flex items-center justify-center text-white`}>
                  {selectedDoc.icon}
                </div>
              </div>
            </div>

            {selectedDoc.tabs.length > 1 && (
              <div className="px-8 pt-6 bg-white border-b flex justify-end gap-4 overflow-x-auto no-scrollbar" dir="rtl">
                {selectedDoc.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`pb-4 px-2 text-sm font-bold transition-all relative ${
                      activeTabId === tab.id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab.label}
                    {activeTabId === tab.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-8 md:p-16 bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTabId}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {selectedDoc.tabs.find(t => t.id === activeTabId)?.content}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="px-8 py-6 bg-gray-50 border-t flex justify-between items-center">
              <button 
                onClick={handleCopy}
                className="apple-button bg-black text-white flex items-center gap-2"
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'הועתק' : 'העתק תוכן'}
              </button>
              <div className="text-sm text-gray-400 font-medium">
                BoomBuy Strategic Asset • 2026
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}