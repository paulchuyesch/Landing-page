import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DebtSection from './components/DebtSection';
import TargetAudience from './components/TargetAudience';
import FormSection from './components/FormSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import DiplomasSection from './components/DiplomasSection';
import CasesSection from './components/CasesSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-800 overflow-x-hidden selection:bg-blue-200">
      {/* 
        Structure Analysis:
        1. Header + Hero (White background, rounded bottom)
        2. Debt + Target (Dark background)
        3. Form Section (White background, rounded top & bottom)
        4. Services + About (Dark background)
        5. Diplomas + Cases (White background, rounded top & bottom)
        6. Reviews (Dark background)
        7. FAQ (Dark background, white footer overlay starts)
        8. Footer (White background, rounded top)
      */}
      
      <div className="bg-white rounded-b-[40px] md:rounded-b-[60px] relative z-10 pb-12">
        <Header />
        <Hero />
      </div>

      <div className="bg-brand-dark pt-16 pb-16">
        <DebtSection />
        <TargetAudience />
      </div>

      <div className="bg-white rounded-[40px] md:rounded-[60px] py-16 relative z-10 mx-0 md:mx-0">
        <FormSection />
      </div>

      <div className="bg-brand-dark pt-16 pb-16">
        <ServicesSection />
        <AboutSection />
      </div>

      <div className="bg-white rounded-[40px] md:rounded-[60px] py-16 relative z-10">
        <DiplomasSection />
        <CasesSection />
      </div>

      <div className="bg-brand-dark pt-16 pb-16">
        <ReviewsSection />
        <FaqSection />
      </div>

      <div className="bg-white rounded-t-[40px] md:rounded-t-[60px] pt-12 relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;