import React from 'react';
import { Building2, ArrowUpRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { INTEREST_FORM_URL, APARTMENT_INFO } from '../data/apartmentData';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-stone-950 border-t border-stone-800/80 text-stone-400 text-xs py-14 pb-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-850">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-serif text-lg font-bold text-stone-100 tracking-wider">
                PALAZZO D'ORO
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Apartamento de alto padrão exclusivo com 142 m² privativos, 3 suítes plenas, 2 vagas e varanda gourmet integrada em bairro nobre.
            </p>
            <div className="flex items-center gap-2 text-stone-500 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Intermediação Imobiliária Autorizada • CRECI PJ-042890</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-stone-200 text-sm">
              Navegação Rápida
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#destaques" className="hover:text-amber-400 transition-colors">Diferenciais Construtivos</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria de Fotos</a>
              </li>
              <li>
                <a href="#planta" className="hover:text-amber-400 transition-colors">Planta Humanizada</a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-amber-400 transition-colors">Lazer & Estrutura</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">Simulador de Financiamento</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização & Vizinhança</a>
              </li>
            </ul>
          </div>

          {/* CTA Box in Footer */}
          <div className="md:col-span-4 space-y-4 bg-stone-900/60 border border-stone-800/80 p-5 rounded-2xl">
            <h4 className="font-serif font-bold text-stone-200 text-sm">
              Agende sua visita particular
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Atendimento exclusivo para corretores e compradores qualificados.
            </p>
            <a
              id="footer-interest-button"
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md cursor-pointer"
            >
              <span>Tenho interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px] text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Palazzo D'Oro Residencial. Todos os direitos reservados. Imagens reais e perspectivas ilustrativas.
          </p>
          <div className="flex items-center gap-4">
            <span>Privacidade & LGPD</span>
            <span>•</span>
            <a 
              href={INTEREST_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400/80 hover:text-amber-400 hover:underline"
            >
              Formulário de Interesse Oficial
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
