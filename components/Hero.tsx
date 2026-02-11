import React from 'react';
import { Scale } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </h1>
          
          <p className="text-lg text-slate-600">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            <span className="text-blue-600 font-semibold"> 100% excepteur sint occaecat.</span>
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="shrink-0">
                 <Scale size={32} className="text-slate-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Ut enim ad minim veniam?</h3>
                <p className="text-sm text-slate-500">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex gap-4">
               <div className="shrink-0">
                 <Scale size={32} className="text-slate-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Duis aute irure dolor in reprehenderit?</h3>
                <p className="text-sm text-slate-500">Voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
              </div>
            </div>
             {/* Feature 3 */}
             <div className="flex gap-4">
               <div className="shrink-0">
                 <Scale size={32} className="text-slate-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Sunt in culpa qui officia?</h3>
                <p className="text-sm text-slate-500">Deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste.</p>
              </div>
            </div>
          </div>

          <button className="bg-brand-dark text-white text-lg px-8 py-4 rounded-md font-medium hover:bg-slate-700 transition-colors w-full md:w-auto shadow-lg shadow-brand-dark/20">
            Sign up for free consultation
          </button>
        </div>

        {/* Image Content */}
        <div className="relative h-[500px] lg:h-[700px] w-full flex items-end justify-center">
           {/* Decorative Blob */}
           <div className="absolute top-10 inset-x-0 bottom-0 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
           
           {/* Main Image */}
           <img 
            src="https://picsum.photos/id/64/800/1000" 
            alt="Lawyers" 
            className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-xl mask-image-gradient"
           />

           {/* Floating Badge 1 */}
           <div className="absolute bottom-20 left-4 md:left-12 z-20 bg-white p-4 rounded-xl shadow-xl flex flex-col items-center border border-slate-100">
             <span className="font-bold text-slate-900 text-sm">Victoria</span>
             <span className="font-bold text-slate-900 text-sm">Gaidukova</span>
             <span className="text-xs text-slate-500 mt-1">700+ / cases</span>
           </div>

           {/* Floating Badge 2 */}
           <div className="absolute bottom-40 right-4 md:right-12 z-20 bg-white p-4 rounded-xl shadow-xl flex flex-col items-center border border-slate-100">
             <span className="font-bold text-slate-900 text-sm">Anna</span>
             <span className="font-bold text-slate-900 text-sm">Ivanko</span>
             <span className="text-xs text-slate-500 mt-1">500+ / cases</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;