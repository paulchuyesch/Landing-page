import React from 'react';

const TargetAudience: React.FC = () => {
  const personas = [
    { title: "Government workers", img: "https://picsum.photos/id/64/300/400" },
    { title: "Private org employees", img: "https://picsum.photos/id/91/300/400" },
    { title: "Unemployed", img: "https://picsum.photos/id/338/300/400" },
    { title: "Pensioners", img: "https://picsum.photos/id/342/300/400" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Who can become bankrupt in court
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
        {personas.map((persona, idx) => (
          <div key={idx} className="flex flex-col items-center group">
             {/* Image with cutoff effect at bottom */}
            <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden rounded-t-xl">
               <img 
                 src={persona.img} 
                 alt={persona.title} 
                 className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
               />
            </div>
            {/* Label Tag */}
            <div className="-mt-6 relative z-10 bg-white px-4 py-3 rounded-xl shadow-lg w-11/12 text-center">
              <span className="text-xs md:text-sm font-bold text-slate-900 leading-tight block">
                {persona.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetAudience;