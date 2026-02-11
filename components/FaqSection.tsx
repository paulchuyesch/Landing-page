import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    "Can I travel abroad?",
    "What are the consequences for my real estate?",
    "Will they take away my apartment and car?",
    "Do I need to go to court?",
    "When will I not need to pay loans?",
    "Will I be hired after this?"
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-4xl text-center text-white font-bold mb-12">Answers to frequently asked questions</h2>

      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div 
            key={idx} 
            className={`rounded-xl transition-all duration-300 overflow-hidden ${openIndex === idx ? 'bg-white' : 'bg-slate-700/50 border border-slate-600'}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <span className={`font-medium ${openIndex === idx ? 'text-slate-900' : 'text-white'}`}>
                {q}
              </span>
              {openIndex === idx ? (
                <X className="text-slate-900" size={20} />
              ) : (
                <Plus className="text-white" size={20} />
              )}
            </button>
            
            <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-sm text-slate-600">
                Yes, you can travel abroad immediately after being declared bankrupt without restrictions. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;