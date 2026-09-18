import React from 'react';
import { ArrowRight, MapPin, Maximize2, BedDouble, Car, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { INTEREST_FORM_URL, APARTMENT_INFO, QUICK_STATS } from '../data/apartmentData';
import { trackInterestClick } from '../lib/analytics';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-stone-950 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: Info + Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-amber-500/30 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Oportunidade Única • 14º Andar • Vista Livre</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-100 leading-[1.12] tracking-tight">
              Viva o extraordinário no{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Palazzo D'Oro
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-light">
              Apartamento de alto padrão com <strong className="font-semibold text-white">142m² privativos</strong>,{' '}
              <strong className="font-semibold text-white">3 suítes plenas</strong> e ampla{' '}
              <strong className="font-semibold text-white">varanda gourmet integrada</strong> com churrasqueira a carvão e vista livre indevassável.
            </p>

            {/* Location Tag */}
            <div className="flex items-center gap-2 text-stone-400 text-sm">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{APARTMENT_INFO.location} — Próximo aos melhores colégios, parques e restaurantes</span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-interest-button"
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInterestClick('hero_section')}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-amber-950/40 hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Tenho interesse</span>
                <ArrowRight className="w-5 h-5 text-stone-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 bg-stone-900/80 hover:bg-stone-800 text-stone-200 font-medium px-6 py-4 rounded-xl text-base border border-stone-800 hover:border-stone-700 transition-colors"
              >
                <span>Ver fotos e planta</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Habite-se averbado & Matrícula livre</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Aceita financiamento bancário & FGTS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Visitas presenciais imediatas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Price Badge & Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 shadow-2xl group">
              {/* Main Featured Image */}
              <div className="relative h-[380px] sm:h-[450px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Living integrado do apartamento Palazzo D'Oro"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-stone-950/80 backdrop-blur-md text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    Decorado & Pronto para Morar
                  </span>
                </div>

                {/* Bottom Overlay Info inside Image */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="bg-stone-950/85 backdrop-blur-md p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase tracking-wider text-stone-400">Valor do Imóvel</span>
                      <span className="text-xs text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        Pronto p/ escritura
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
                        R$ 1.290.000
                      </span>
                      <span className="text-xs text-stone-400">
                        (R$ 9.084 / m²)
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-400 pt-1 border-t border-stone-800/60">
                      <span>Condomínio: R$ 950/mês</span>
                      <span>IPTU: R$ 210/mês</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-strip with Quick Specs */}
              <div className="p-4 grid grid-cols-3 gap-2 text-center bg-stone-900/90 border-t border-stone-800">
                <div className="px-2 py-1">
                  <div className="text-sm font-bold text-stone-100 flex items-center justify-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>142 m²</span>
                  </div>
                  <div className="text-[11px] text-stone-400">Privativos</div>
                </div>
                <div className="px-2 py-1 border-x border-stone-800">
                  <div className="text-sm font-bold text-stone-100 flex items-center justify-center gap-1">
                    <BedDouble className="w-3.5 h-3.5 text-amber-400" />
                    <span>3 Suítes</span>
                  </div>
                  <div className="text-[11px] text-stone-400">Plenas</div>
                </div>
                <div className="px-2 py-1">
                  <div className="text-sm font-bold text-stone-100 flex items-center justify-center gap-1">
                    <Car className="w-3.5 h-3.5 text-amber-400" />
                    <span>2 Vagas</span>
                  </div>
                  <div className="text-[11px] text-stone-400">Soltas + Depósito</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Stats Grid under Hero */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-stone-900/60 backdrop-blur-sm border border-stone-800/80 hover:border-amber-500/30 p-5 rounded-xl transition-all duration-200"
            >
              <span className="text-xs uppercase tracking-wider text-amber-400/90 font-medium">
                {stat.label}
              </span>
              <div className="font-serif text-2xl font-bold text-stone-100 mt-1">
                {stat.value}
              </div>
              <p className="text-xs text-stone-400 mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
