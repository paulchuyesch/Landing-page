import React from 'react';
import { Scale } from 'lucide-react';

const FormSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Dark Form Card */}
        <div className="lg:col-span-4 bg-brand-dark rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative element resembling the building outline in the design */}
          <div className="absolute top-4 right-4 opacity-20">
             <Scale size={64} />
          </div>

          <h3 className="text-2xl font-bold mb-2">Find out the prospects of debt relief</h3>
          <p className="text-sm text-slate-400 mb-8">We will contact you during the day</p>

          <form className="space-y-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Phone number</label>
              <input 
                type="tel" 
                placeholder="+7 (___) ___ __ __" 
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Your name</label>
              <input 
                type="text" 
                placeholder="Alexander" 
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
              />
            </div>
            
            <button type="button" className="w-full bg-[#6D8BB0] hover:bg-[#5a7494] text-white font-semibold py-3 rounded-lg transition-colors shadow-lg">
              Submit Application
            </button>

            <div className="flex items-start gap-2 mt-4">
              <input type="checkbox" className="mt-1 rounded bg-slate-700 border-slate-600" defaultChecked />
              <p className="text-[10px] text-slate-500 leading-tight">
                I acknowledge the privacy policy and public offer and consent to the processing of personal data.
              </p>
            </div>
          </form>
        </div>

        {/* Center/Right Content */}
        <div className="lg:col-span-4 flex flex-col justify-center items-center">
             <div className="mb-6 opacity-80">
                {/* SVG Illustration replacement */}
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-48 h-48 text-brand-dark">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                 </svg>
             </div>
             <div className="space-y-6">
               <h3 className="text-2xl font-bold text-brand-dark">
                 We help find a legal way out of your situation
               </h3>
               <div className="space-y-4">
                 <div className="flex gap-4 border-l-2 border-brand-accent pl-4">
                   <p className="text-sm text-slate-600">
                     <span className="font-bold text-slate-800">After bankruptcy procedure</span> debts will be <span className="text-blue-600 underline decoration-dotted">written off</span>. Annoying calls will stop.
                   </p>
                 </div>
                 <div className="flex gap-4 border-l-2 border-brand-accent pl-4">
                   <p className="text-sm text-slate-600">
                     <span className="font-bold text-slate-800">Debt will stop growing.</span> Accrual of penalties, fines and interest for untimely payment will stop.
                   </p>
                 </div>
               </div>
             </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-4 h-full min-h-[400px] relative">
            <img 
              src="https://picsum.photos/id/375/600/800" 
              alt="Professional Woman" 
              className="w-full h-full object-cover rounded-3xl"
            />
        </div>

      </div>
    </section>
  );
};

export default FormSection;