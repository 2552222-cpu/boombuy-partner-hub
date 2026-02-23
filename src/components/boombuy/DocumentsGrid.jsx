import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function DocumentsGrid({ documents, onSelectDoc }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="docs" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12" dir="rtl">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-black">ארגז כלים לשותף</h2>
            <p className="text-gray-500">כל המסמכים והנרטיבים מוכנים לשימוש</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectDoc(doc)}
              className="apple-card p-8 cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              <button
                onClick={(e) => handleCopy(`https://boombuy.io/docs/${doc.id}`, e)}
                className="absolute top-6 left-6 p-2 bg-gray-50 hover:bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-gray-100 z-10"
                title="העתק קישור למסמך"
              >
                <LinkIcon className="w-4 h-4 text-gray-600" />
              </button>
              <div className={`${doc.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                {doc.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-right text-black" dir="rtl">{doc.title}</h3>
              <p className="text-gray-500 mb-6 text-right" dir="rtl">{doc.subtitle}</p>
              <div className="flex items-center justify-end gap-2 text-blue-600 font-bold text-sm">
                <span>פתח מסמך</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}