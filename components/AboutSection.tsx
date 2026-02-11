import React from 'react';
import { ChevronDown } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
      <h2 className="text-4xl text-center text-white font-bold mb-16">About Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Left Column Text */}
        <div className="space-y-12 text-slate-300">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">We are always on the client's side</h3>
            <p className="text-sm leading-relaxed opacity-80">
              We work with clients directly without intermediaries with our own management.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Unique strategy beneficial for you</h3>
            <p className="text-sm leading-relaxed opacity-80">
              We will develop a case strategy with a step-by-step understandable algorithm of actions.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative h-[400px] md:h-[500px] flex justify-center items-end">
           {/* Overlapping People Effect */}
           <img 
            src="https://picsum.photos/id/65/300/500" 
            alt="Lawyer 1" 
            className="absolute left-4 top-12 h-5/6 w-auto object-cover rounded-lg brightness-50 z-0"
           />
           <img 
            src="https://picsum.photos/id/64/300/500" 
            alt="Lawyer 2" 
            className="absolute right-4 top-12 h-5/6 w-auto object-cover rounded-lg brightness-50 z-0"
           />
           <img 
            src="https://picsum.photos/id/338/350/550" 
            alt="Main Lawyer" 
            className="relative z-10 h-full w-auto object-cover rounded-xl shadow-2xl"
           />
        </div>

        {/* Right Column Text */}
        <div className="space-y-12 text-slate-300 text-right lg:text-left">
           <div>
            <h3 className="text-white font-bold text-xl mb-2">Constant practical experience since 2016</h3>
            <p className="text-sm leading-relaxed opacity-80">
              We are practicing lawyers with specialized higher education. We have been working in bankruptcy for over 8 years.
            </p>
          </div>

          <div className="flex flex-col items-end lg:items-start pt-8">
            <p className="text-white text-lg mb-2">View diplomas <br/> and completed cases</p>
            <ChevronDown className="text-slate-400 animate-bounce" size={32} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;