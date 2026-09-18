import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Percent, Calendar, ShieldCheck, Check, Info } from 'lucide-react';
import { APARTMENT_INFO, INTEREST_FORM_URL } from '../data/apartmentData';

export const FinancingSimulator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(APARTMENT_INFO.price);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [termYears, setTermYears] = useState<number>(30);
  const annualInterestRate = 0.098; // 9.8% annual bank average in Brazil

  // Financial calculations (SAC Amortization representation)
  const downPaymentValue = Math.round(propertyPrice * (downPaymentPercent / 100));
  const financedAmount = propertyPrice - downPaymentValue;
  const totalMonths = termYears * 12;
  const monthlyInterestRate = Math.pow(1 + annualInterestRate, 1 / 12) - 1;

  // SAC first installment: Amortization + Initial Interest
  const monthlyAmortization = financedAmount / totalMonths;
  const firstMonthInterest = financedAmount * monthlyInterestRate;
  const estimatedFirstInstallment = Math.round(monthlyAmortization + firstMonthInterest);
  
  // Last installment SAC (amortization only + minimal interest)
  const estimatedLastInstallment = Math.round(monthlyAmortization * (1 + monthlyInterestRate));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const presetDownPayments = [20, 30, 40, 50];

  return (
    <section id="simulador" className="py-20 bg-stone-900/40 border-y border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Planejamento Financeiro Inteligente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
            Simulador de Financiamento Bancário
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Faça uma estimativa personalizada das condições de aquisição e utilize seu FGTS como entrada.
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Inputs Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Valor do Imóvel Display */}
              <div>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-stone-300 font-medium">Valor do Apartamento</span>
                  <span className="font-bold text-amber-400 font-mono text-base">
                    {formatCurrency(propertyPrice)}
                  </span>
                </div>
                <div className="text-xs text-stone-500">
                  Unidade do 14º andar com vista livre e 2 vagas cobertas inclusas.
                </div>
              </div>

              {/* Entrada Slider & Presets */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-300 font-medium flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-amber-400" />
                    Valor de Entrada ({downPaymentPercent}%)
                  </span>
                  <span className="font-semibold text-stone-100 font-mono">
                    {formatCurrency(downPaymentValue)}
                  </span>
                </div>

                <input
                  type="range"
                  min={20}
                  max={70}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />

                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs text-stone-500 mr-1">Sugestões:</span>
                  {presetDownPayments.map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setDownPaymentPercent(pct)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        downPaymentPercent === pct
                          ? 'bg-amber-500 text-stone-950 font-bold'
                          : 'bg-stone-850 text-stone-400 hover:text-white border border-stone-800'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Prazo Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-300 font-medium flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    Prazo do Financiamento
                  </span>
                  <span className="font-semibold text-stone-100 font-mono">
                    {termYears} anos ({totalMonths} meses)
                  </span>
                </div>

                <input
                  type="range"
                  min={10}
                  max={35}
                  step={5}
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />

                <div className="flex justify-between text-xs text-stone-500">
                  <span>10 anos</span>
                  <span>20 anos</span>
                  <span>30 anos</span>
                  <span>35 anos</span>
                </div>
              </div>

              {/* Info Note */}
              <div className="p-3 bg-stone-900/70 border border-stone-800 rounded-xl text-xs text-stone-400 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Simulação pelo Sistema SAC com taxa de juros aproximada de 9,8% a.a. As parcelas são decrescentes ao longo do tempo. Você pode utilizar seu FGTS como parte da entrada ou amortização.
                </span>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-stone-900 to-stone-900/90 border border-amber-500/30 rounded-2xl p-6 space-y-6 shadow-xl relative">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Resumo da Simulação
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-100">
                  Condições Estimadas
                </h3>
              </div>

              <div className="space-y-4 pt-2 border-t border-stone-800">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-400">Entrada sugerida:</span>
                  <span className="font-mono font-bold text-stone-200">{formatCurrency(downPaymentValue)}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-400">Saldo financiado:</span>
                  <span className="font-mono font-bold text-stone-200">{formatCurrency(financedAmount)}</span>
                </div>

                <div className="p-4 bg-stone-950/80 border border-amber-500/40 rounded-xl space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-stone-400">
                    1ª Parcela Estimada (Decrescente)
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
                    {formatCurrency(estimatedFirstInstallment)}
                    <span className="text-xs text-stone-400 font-sans font-normal ml-1">/mês</span>
                  </div>
                  <div className="text-[11px] text-stone-500 pt-1">
                    Última parcela estimada: ~{formatCurrency(estimatedLastInstallment)}/mês
                  </div>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="space-y-3 pt-2">
                <a
                  id="simulator-interest-btn"
                  href={INTEREST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3.5 px-4 rounded-xl text-sm shadow-xl shadow-amber-950/40 transition-all cursor-pointer group"
                >
                  <span>Tenho interesse nesta proposta</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-center text-[11px] text-stone-500">
                  Assessoria bancária gratuita inclusa para aprovação de crédito.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
