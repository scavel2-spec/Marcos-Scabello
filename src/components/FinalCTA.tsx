import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Clock, Sparkles, Building2 } from 'lucide-react';
import { INTEREST_FORM_URL, APARTMENT_INFO } from '../data/apartmentData';
import { trackInterestClick } from '../lib/analytics';

export const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Atendimento Exclusivo & Visita com Agendamento Prévio</span>
        </div>

        {/* Big Title */}
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-100 tracking-tight leading-tight max-w-3xl mx-auto">
          Pronto para dar o próximo passo e viver no{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
            Palazzo D'Oro
          </span>?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Preencha o formulário rápido de interesse para receber o book digital em alta resolução, memorial descritivo e agendar uma visita guiada com total exclusividade.
        </p>

        {/* Primary CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="final-section-interest-button"
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInterestClick('final_cta_section')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg shadow-2xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
          >
            <span>Tenho interesse</span>
            <ArrowRight className="w-5 h-5 text-stone-950 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

        {/* Guarantee and Benefits Points */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-stone-400 text-xs sm:text-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
            <span className="font-semibold text-stone-200">Retorno em até 2 Horas</span>
            <span className="text-stone-400 text-xs">Atendimento ágil em horário comercial</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <span className="font-semibold text-stone-200">Sigilo & Privacidade</span>
            <span className="text-stone-400 text-xs">Seus dados protegidos e sem spam</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="font-semibold text-stone-200">Visita Personalizada</span>
            <span className="text-stone-400 text-xs">Horários flexíveis inclusive aos finais de semana</span>
          </div>
        </div>

      </div>
    </section>
  );
};
