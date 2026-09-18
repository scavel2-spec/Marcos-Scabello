import React from 'react';
import { Sparkles, Flame, VolumeX, Cpu, Sun, Zap, ArrowUpRight } from 'lucide-react';
import { HIGHLIGHTS, INTEREST_FORM_URL } from '../data/apartmentData';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
  Flame: <Flame className="w-6 h-6 text-amber-400" />,
  VolumeX: <VolumeX className="w-6 h-6 text-amber-400" />,
  Cpu: <Cpu className="w-6 h-6 text-amber-400" />,
  Sun: <Sun className="w-6 h-6 text-amber-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
};

export const Highlights: React.FC = () => {
  return (
    <section id="destaques" className="py-20 bg-stone-900/40 border-y border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Diferenciais de Engenharia & Conforto
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
            Cada detalhe pensado para a sua máxima experiência
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Construção de alto padrão que une arquitetura contemporânea, privacidade acústica e tecnologia de ponta.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="group bg-stone-900/80 border border-stone-800 hover:border-amber-500/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-amber-400" />}
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-800/60 flex items-center justify-between text-xs text-stone-500 group-hover:text-amber-400 transition-colors">
                <span>Padrão construtivo A+</span>
                <span className="font-medium">Alto padrão</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl font-bold text-stone-100">
              Gostaria de ver o memorial descritivo completo deste imóvel?
            </h4>
            <p className="text-sm text-stone-400">
              Receba todos os detalhes técnicos, acabamentos das louças e garantias construtivas.
            </p>
          </div>
          <a
            id="highlights-interest-button"
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg cursor-pointer"
          >
            <span>Tenho interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
