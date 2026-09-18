import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Building2, Sparkles } from 'lucide-react';
import { INTEREST_FORM_URL, APARTMENT_INFO } from '../data/apartmentData';
import { trackInterestClick } from '../lib/analytics';

export const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls past 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      id="sticky-floating-cta-bar"
      aria-label="Barra de contato rápido"
      className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-stone-950/90 backdrop-blur-lg border-t border-stone-800/90 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Info (Hidden on small mobile) */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-stone-100 text-sm">
                Palazzo D'Oro • 14º Andar
              </span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/60 font-medium">
                Pronto para Morar
              </span>
            </div>
            <span className="text-xs text-stone-400">
              142 m² • 3 Suítes • 2 Vagas • R$ 1.290.000
            </span>
          </div>
        </div>

        {/* Mobile quick price indicator */}
        <div className="sm:hidden flex flex-col">
          <span className="text-[10px] text-stone-400 uppercase tracking-wider">Apartamento 142m²</span>
          <span className="font-serif font-bold text-amber-400 text-base">R$ 1.290.000</span>
        </div>

        {/* Main Sticky CTA Button */}
        <div className="flex items-center gap-3">
          <a
            id="sticky-interest-button"
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInterestClick('sticky_bottom_bar')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base shadow-xl shadow-amber-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Tenho interesse</span>
            <ArrowUpRight className="w-4 h-4 text-stone-950" />
          </a>
        </div>
      </div>
    </aside>
  );
};
