import React from 'react';
import { Maximize2 } from 'lucide-react';

const DiplomasSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Diplomas of our legal education</h2>
        <p className="text-blue-500">Total legal experience since 2009</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group relative bg-slate-100 rounded-lg overflow-hidden aspect-[4/3] cursor-pointer hover:shadow-lg transition-shadow">
             <img 
               src={`https://picsum.photos/seed/diploma${i}/600/400`} 
               alt={`Diploma ${i}`}
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
               <Maximize2 className="text-slate-800 bg-white p-2 rounded-full w-10 h-10" />
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiplomasSection;