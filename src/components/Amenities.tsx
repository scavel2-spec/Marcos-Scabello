import React from 'react';
import { 
  Waves, 
  Dumbbell, 
  PartyPopper, 
  Briefcase, 
  Smile, 
  ShieldCheck, 
  Dog, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { AMENITIES, INTEREST_FORM_URL } from '../data/apartmentData';

const amenityIcons: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-6 h-6 text-amber-400" />,
  Dumbbell: <Dumbbell className="w-6 h-6 text-amber-400" />,
  PartyPopper: <PartyPopper className="w-6 h-6 text-amber-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-amber-400" />,
  Smile: <Smile className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  Dog: <Dog className="w-6 h-6 text-amber-400" />,
  Sparkle: <Sparkles className="w-6 h-6 text-amber-400" />,
};

export const Amenities: React.FC = () => {
  return (
    <section id="lazer" className="py-20 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Infraestrutura de Clube Privativo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
            Lazer, bem-estar e conveniência sem sair de casa
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Áreas comuns entregues totalmente climatizadas, decoradas e mobiliadas com padrão internacional.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, index) => (
            <div
              key={index}
              className="bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-800/80 border border-stone-700/80 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors">
                {amenityIcons[amenity.icon] || <Sparkles className="w-6 h-6 text-amber-400" />}
              </div>
              <span className="text-[11px] uppercase tracking-wider text-amber-400/90 font-medium">
                {amenity.category}
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-100 mt-1 mb-2 group-hover:text-amber-300 transition-colors">
                {amenity.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900 to-stone-850 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl font-bold text-stone-100">
              Taxa de condomínio otimizada com energia solar
            </h4>
            <p className="text-sm text-stone-400">
              Geração fotovoltaica para áreas comuns e medição individualizada de água e gás (R$ 950/mês).
            </p>
          </div>
          <a
            id="amenities-interest-button"
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>Tenho interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
