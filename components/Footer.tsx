import React from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">Contacts</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 border-t border-b border-slate-100 text-sm text-slate-600">
          <div className="flex items-center gap-2">
             <div className="font-bold text-slate-800 text-lg">Ne / Bankrot</div>
             <span className="text-xs text-slate-400 leading-tight">Bankruptcy <br/> of citizens</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>City, St. Krasnaya, 111, 4th floor</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span className="font-bold">+7 (995) 227-27-10</span>
          </div>

          <div className="flex items-center gap-2">
             <Mail size={16} />
             <span>nebankrot.krd@yandex.ru</span>
          </div>

          <div className="flex gap-3 text-slate-400">
            <Send size={20} className="hover:text-blue-500 cursor-pointer"/>
            <MessageCircle size={20} className="hover:text-green-500 cursor-pointer"/>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="w-full h-[300px] md:h-[400px] bg-slate-100 rounded-3xl overflow-hidden relative mb-8">
         <img 
           src="https://picsum.photos/id/10/1200/400" 
           alt="Map Location" 
           className="w-full h-full object-cover grayscale opacity-50"
         />
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
               <MapPin className="text-red-500" />
               <span className="text-slate-800 font-medium">Krasnaya street, 111</span>
            </div>
         </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between text-[10px] text-slate-400 gap-4">
         <div>
           <a href="#" className="hover:underline">Privacy Policy</a>
           <span className="mx-2">|</span>
           <a href="#" className="hover:underline">Consent to data processing</a>
         </div>
         <div>
           Gaidukova Victoria Vladimirovna INN 230812039817
         </div>
         <div>
           Ivanko Anna Nikolaevna INN 235306460383
         </div>
      </div>
      <div className="text-[10px] text-slate-400 mt-2 text-center md:text-left">
        @nebankrot-krd 2010-2025. All rights reserved. Lorem ipsum dolor sit amet.
      </div>
    </footer>
  );
};

export default Footer;