import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-slate-800 leading-tight">
            Lorem / Ipsum <br/>
            <span className="text-xs font-normal text-slate-500 uppercase tracking-wide">Dolor sit amet</span>
          </div>
        </div>

        {/* Navigation - Hidden on mobile, simplified for replicate */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-brand-dark transition-colors">Services & Cost</a>
          <a href="#" className="hover:text-brand-dark transition-colors">About Us</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Reviews</a>
          <a href="#" className="hover:text-brand-dark transition-colors">FAQ</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Contacts</a>
        </nav>

        {/* Contact Actions */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-brand-dark">
             <Send size={20} className="cursor-pointer hover:text-blue-600"/>
             <MessageCircle size={20} className="cursor-pointer hover:text-green-600"/>
             <Phone size={20} className="cursor-pointer hover:text-blue-800"/>
          </div>
          <button className="bg-brand-dark text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors">
            Ask a Question
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;