import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Bankruptcy through court",
    "Bankruptcy through MFC",
    "Drafting legal documents",
    "Collection and analysis"
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8">
        <h2 className="text-4xl text-white font-bold">Services and Cost</h2>
        <p className="text-xs text-slate-400 mt-2 md:mt-0 text-right">
          Swipe left and right <br/> to view all services
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-1 mb-8 pb-2 border-b border-slate-700 no-scrollbar">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`whitespace-nowrap px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeTab === idx 
                ? 'border-white text-white' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Card */}
      <div className="bg-[#FAF9F6] rounded-3xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-8">What is included in the service:</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* List */}
          <div className="space-y-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex gap-4">
                <span className="text-4xl font-bold text-slate-200">{num}/</span>
                <div>
                  <h4 className="font-bold text-blue-600 mb-1">Lorem Ipsum Step {num}.</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Sed ut perspiciatis unde omnis iste natus error.
                  </p>
                </div>
              </div>
            ))}
            
            <div className="mt-8 pt-8 border-t border-slate-200">
               <p className="text-xl font-bold text-slate-800">
                 Cost: <span className="text-3xl">from 20,000 rubles</span>
               </p>
            </div>
          </div>

          {/* Illustration & CTA */}
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-100 shadow-inner">
               {/* Sketchy Lady Justice placeholder style */}
               <img 
                 src="https://picsum.photos/id/100/400/400" 
                 alt="Lady Justice Illustration"
                 className="w-full h-full object-cover grayscale opacity-80" 
               />
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-slate-900">Installment plan available</h4>
              <p className="text-xl font-bold text-slate-900">and deferred payment</p>
            </div>

            <button className="bg-brand-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors w-full md:w-auto">
              Submit Application for Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;