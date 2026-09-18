import React from 'react';
import { MapPin, Navigation, Clock, Building, Trees, ShoppingBag, GraduationCap, UtensilsCrossed, ArrowUpRight } from 'lucide-react';
import { NEIGHBORHOOD_SPOTS, INTEREST_FORM_URL, APARTMENT_INFO } from '../data/apartmentData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Localização Privilegiada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
            Viva cercado de conveniência, verde e segurança
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Situado no ponto mais nobre da região, com fácil acesso às principais avenidas e serviços essenciais a poucos passos.
          </p>
        </div>

        {/* Main Location Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Neighborhood Map visual card */}
          <div className="lg:col-span-7 bg-stone-900/60 border border-stone-800 rounded-2xl overflow-hidden relative min-h-[380px] flex flex-col justify-between shadow-xl">
            {/* Background styled map preview */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-850">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Vista aérea da região do empreendimento"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

              {/* Pin Overlay on Map */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/30 border-2 border-amber-400 flex items-center justify-center animate-bounce shadow-2xl">
                  <MapPin className="w-6 h-6 text-amber-400 fill-amber-400" />
                </div>
                <span className="bg-stone-950/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/40 mt-2 shadow-lg">
                  Palazzo D'Oro • 14º Andar
                </span>
              </div>
            </div>

            {/* Bottom details inside card */}
            <div className="p-6 bg-stone-950/90 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-400">Endereço de Prestígio:</span>
                <p className="font-semibold text-stone-100 text-sm">
                  {APARTMENT_INFO.location}
                </p>
                <p className="text-xs text-emerald-400 mt-0.5">
                  Rua arborizada, estritamente residencial com guarita de segurança 24h.
                </p>
              </div>

              <a
                id="location-interest-button"
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-500 text-stone-100 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Receber localização exata</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right: Proximity List */}
          <div className="lg:col-span-5 bg-stone-900/60 border border-stone-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <h3 className="font-serif text-lg font-bold text-stone-100">
                  Mobilidade & Proximidades
                </h3>
                <span className="text-xs text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full font-medium">
                  Walk Score: 94/100
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {NEIGHBORHOOD_SPOTS.map((spot, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 hover:border-stone-700 transition-colors"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-stone-100">
                        {spot.name}
                      </h4>
                      <span className="text-[11px] text-stone-400">
                        {spot.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-amber-400 block font-mono">
                        {spot.time}
                      </span>
                      <span className="text-[10px] text-stone-500">
                        {spot.distance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                id="location-section-interest-btn"
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Tenho interesse no imóvel</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
