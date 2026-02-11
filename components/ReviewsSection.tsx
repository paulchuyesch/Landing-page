import React from 'react';
import { Star } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 overflow-hidden">
      <h2 className="text-4xl text-center text-white font-bold mb-16">Reviews of our clients</h2>

      <div className="flex justify-center gap-8 overflow-x-auto pb-8 no-scrollbar md:grid md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="shrink-0 w-[260px] md:w-auto h-[500px] border-8 border-slate-900 rounded-[2.5rem] bg-slate-800 relative overflow-hidden shadow-2xl">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
            
            {/* Screen Content */}
            <div className="h-full w-full bg-[#111] p-4 pt-10 flex flex-col">
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-slate-600"></div>
                  <div>
                    <div className="h-2 w-20 bg-slate-700 rounded mb-1"></div>
                    <div className="flex">
                      {[1,2,3,4,5].map(s => <Star key={s} size={8} className="text-yellow-500 fill-yellow-500"/>)}
                    </div>
                  </div>
               </div>
               
               <div className="space-y-2">
                 <div className="h-2 w-full bg-slate-800 rounded"></div>
                 <div className="h-2 w-full bg-slate-800 rounded"></div>
                 <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
                 <div className="h-2 w-full bg-slate-800 rounded"></div>
               </div>

               <div className="mt-4 bg-[#222] p-3 rounded-lg border border-slate-700">
                  <p className="text-[10px] text-slate-300">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excellent service!"
                  </p>
                  <p className="text-[8px] text-blue-400 mt-2">Show more...</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;