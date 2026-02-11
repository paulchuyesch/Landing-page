import React from 'react';

const DebtSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        What debts can you write off?
      </h2>
      <p className="text-slate-400 mb-10 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Large Card - Spans 2 rows on Desktop logic or just large space */}
        <div className="lg:col-span-1 lg:row-span-2 bg-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[400px]">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Loans, credit cards and microloans</h3>
            <p className="text-sm text-slate-500">
               Creditors and collectors will no longer cause stress and disturb you on legal grounds.
            </p>
          </div>
          <img 
            src="https://picsum.photos/id/1012/600/600" 
            alt="Stressed person" 
            className="absolute bottom-0 right-0 w-3/4 object-cover opacity-90 translate-x-4 translate-y-4"
          />
        </div>

        {/* Small Card 1 */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 flex items-center justify-between relative overflow-hidden h-[180px]">
          <div className="w-1/2 z-10">
            <h3 className="text-xl font-bold text-slate-900">Taxes and fines</h3>
          </div>
           <img 
            src="https://picsum.photos/id/1055/400/300" 
            alt="Gavel" 
            className="absolute right-0 top-0 h-full w-1/2 object-cover object-center"
          />
        </div>

        {/* Small Card 2 */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between h-[180px] relative overflow-hidden">
           <div className="z-10">
              <h3 className="text-xl font-bold text-slate-900">Mortgage</h3>
           </div>
           <img 
            src="https://picsum.photos/id/188/300/300" 
            alt="Keys" 
            className="absolute bottom-0 right-0 w-1/2 object-contain"
          />
        </div>

        {/* Small Card 3 */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between h-[180px] relative overflow-hidden">
           <div className="z-10">
              <h3 className="text-xl font-bold text-slate-900">Utilities</h3>
           </div>
           <img 
            src="https://picsum.photos/id/56/300/300" 
            alt="Bulb" 
            className="absolute bottom-0 right-0 w-1/2 object-contain"
          />
        </div>
        
      </div>
    </section>
  );
};

export default DebtSection;