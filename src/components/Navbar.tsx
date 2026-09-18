import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';
import { INTEREST_FORM_URL, APARTMENT_INFO } from '../data/apartmentData';
import { trackInterestClick } from '../lib/analytics';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destaques', href: '#destaques' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Planta Baixa', href: '#planta' },
    { name: 'Lazer & Estrutura', href: '#lazer' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div id="announcement-bar" className="bg-stone-900 border-b border-stone-800 text-stone-300 text-xs py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Imóvel pronto para morar no 14º andar • Documentação 100% regularizada</span>
          <span className="hidden md:inline text-stone-500">•</span>
          <a 
            href={INTEREST_FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
          >
            Agendar visita exclusiva
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800 shadow-xl py-3'
            : 'bg-stone-950/70 backdrop-blur-sm border-b border-stone-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-700/30 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-inner group-hover:border-amber-400 transition-colors">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-wider text-stone-100 group-hover:text-amber-400 transition-colors">
                PALAZZO D'ORO
              </span>
              <span className="block text-[10px] text-stone-400 uppercase tracking-widest -mt-0.5">
                Residencial Exclusivo
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="navbar-interest-btn"
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInterestClick('navbar_desktop')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold px-5 py-2.5 rounded-full text-sm shadow-md hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Tenho interesse</span>
              <ArrowUpRight className="w-4 h-4 text-stone-950" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInterestClick('navbar_mobile_header')}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-3.5 py-1.5 rounded-full text-xs"
            >
              Tenho interesse
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white rounded-md focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-nav-drawer" className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 mt-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-stone-200 hover:bg-stone-800 hover:text-amber-400 rounded-lg text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-800">
              <a
                id="mobile-drawer-interest-btn"
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackInterestClick('navbar_mobile_drawer');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold py-3 px-4 rounded-xl text-center shadow-lg"
              >
                <span>Tenho interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
