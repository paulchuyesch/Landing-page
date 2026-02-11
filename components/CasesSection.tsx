import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CasesSection: React.FC = () => {
  const cases = [
    { name: "S. E. Gennadyevna", amount: "791,891", months: 7 },
    { name: "L. N. Viktorovich", amount: "1,567,000", months: 8 },
    { name: "M. N. Ivanovna", amount: "3,100,500", months: 8 },
    { name: "V. O. Olegovna", amount: "400,000", months: 6 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Written off debt for more than 700 <br/> people from 2016 to 2024
          </h2>
          <a href="#" className="text-blue-500 text-sm hover:underline">See our completed cases</a>
        </div>
        <div className="hidden md:block text-xs text-right text-slate-500">
           Go to all cases
        </div>
      </div>

      <div className="relative">
         {/* Navigation Buttons (Visual only for replicate) */}
         <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-brand-dark text-white p-3 rounded-lg hidden lg:block">
            <ArrowLeft size={20}/>
         </button>
         <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-brand-dark text-white p-3 rounded-lg hidden lg:block">
            <ArrowRight size={20}/>
         </button>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {cases.map((item, idx) => (
             <div key={idx} className="bg-white">
                <div className="border border-slate-200 p-2 rounded-lg mb-4 hover:shadow-md transition-shadow">
                  {/* Mock document */}
                  <img src={`https://picsum.photos/seed/doc${idx}/300/400`} alt="Document Scan" className="w-full h-auto grayscale opacity-80" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{item.name}</h4>
                <p className="text-xs text-slate-600">Written off <span className="text-green-600 font-bold">{item.amount} rubles</span></p>
                <p className="text-xs text-slate-400">Bankruptcy term {item.months} months</p>
             </div>
           ))}
         </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-brand-dark text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-700 transition-colors">
            Sign up for free consultation
        </button>
      </div>
    </section>
  );
};

export default CasesSection;