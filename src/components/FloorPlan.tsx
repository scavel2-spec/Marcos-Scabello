import React, { useState } from 'react';
import { Layers, CheckCircle, ArrowUpRight, Maximize2, Compass, Layout } from 'lucide-react';
import { ROOM_DETAILS, INTEREST_FORM_URL } from '../data/apartmentData';
import { RoomDetail } from '../types';
import { trackInterestClick } from '../lib/analytics';

export const FloorPlan: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomDetail>(ROOM_DETAILS[0]);

  return (
    <section id="planta" className="py-20 bg-stone-900/40 border-y border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Arquitetura e Distribuição
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
            Planta humanizada de 142 m² privativos
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Integração perfeita entre os ambientes sociais e total privacidade para a ala íntima.
          </p>
        </div>

        {/* Interactive Floor Plan Stage */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Blueprint Visual */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
            {/* Top badges */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Posição Solar: Sol da Manhã</span>
              </div>
              <span className="bg-stone-900 px-2.5 py-1 rounded text-stone-300 font-mono">
                Escala 1:50
              </span>
            </div>

            {/* Blueprint Graphic representation */}
            <div className="relative my-6 aspect-[4/3] bg-stone-900/60 rounded-xl border border-stone-800/80 p-4 flex items-center justify-center overflow-hidden">
              {/* Background blueprint grid pattern */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Architectural Rooms Layout Simulation */}
              <div className="relative w-full h-full border-2 border-stone-700/80 rounded-lg p-3 grid grid-cols-12 grid-rows-6 gap-2 text-xs">
                
                {/* Suite Master */}
                <button
                  type="button"
                  onClick={() => setSelectedRoom(ROOM_DETAILS[2])}
                  className={`col-span-5 row-span-3 rounded-lg border p-2 flex flex-col justify-between text-left transition-all cursor-pointer ${
                    selectedRoom.id === 'suite-master'
                      ? 'bg-amber-500/20 border-amber-400 shadow-md shadow-amber-500/10'
                      : 'bg-stone-800/60 border-stone-700/70 hover:bg-stone-800 hover:border-stone-600'
                  }`}
                >
                  <span className="font-semibold text-stone-100 flex items-center justify-between">
                    Suíte Master
                    <span className="text-[10px] text-amber-400 font-mono">24,0 m²</span>
                  </span>
                  <span className="text-[10px] text-stone-400">Closet + Cuba Dupla</span>
                </button>

                {/* Suite 2 */}
                <button
                  type="button"
                  onClick={() => setSelectedRoom(ROOM_DETAILS[3])}
                  className={`col-span-4 row-span-3 rounded-lg border p-2 flex flex-col justify-between text-left transition-all cursor-pointer ${
                    selectedRoom.id === 'suite-2'
                      ? 'bg-amber-500/20 border-amber-400 shadow-md'
                      : 'bg-stone-800/60 border-stone-700/70 hover:bg-stone-800'
                  }`}
                >
                  <span className="font-semibold text-stone-100 flex items-center justify-between">
                    Suíte 02
                    <span className="text-[10px] text-amber-400 font-mono">15,8 m²</span>
                  </span>
                  <span className="text-[10px] text-stone-400">Banheiro Privativo</span>
                </button>

                {/* Suite 3 / Office */}
                <button
                  type="button"
                  onClick={() => setSelectedRoom(ROOM_DETAILS[4])}
                  className={`col-span-3 row-span-3 rounded-lg border p-2 flex flex-col justify-between text-left transition-all cursor-pointer ${
                    selectedRoom.id === 'suite-3'
                      ? 'bg-amber-500/20 border-amber-400 shadow-md'
                      : 'bg-stone-800/60 border-stone-700/70 hover:bg-stone-800'
                  }`}
                >
                  <span className="font-semibold text-stone-100 flex items-center justify-between">
                    Home Office
                    <span className="text-[10px] text-amber-400 font-mono">14,4 m²</span>
                  </span>
                  <span className="text-[10px] text-stone-400">Suíte 03</span>
                </button>

                {/* Cozinha & Área de Serviço */}
                <button
                  type="button"
                  onClick={() => setSelectedRoom(ROOM_DETAILS[5])}
                  className={`col-span-4 row-span-3 rounded-lg border p-2 flex flex-col justify-between text-left transition-all cursor-pointer ${
                    selectedRoom.id === 'cozinha'
                      ? 'bg-amber-500/20 border-amber-400 shadow-md'
                      : 'bg-stone-800/60 border-stone-700/70 hover:bg-stone-800'
                  }`}
                >
                  <span className="font-semibold text-stone-100 flex items-center justify-between">
                    Cozinha & Despensa
                    <span className="text-[10px] text-amber-400 font-mono">16,1 m²</span>
                  </span>
                  <span className="text-[10px] text-stone-400">Conceito Aberto</span>
                </button>

                {/* Living & Jantar */}
                <button
                  type="button"
                  onClick={() => setSelectedRoom(ROOM_DETAILS[0])}
                  className={`col-span-5 row-span-3 rounded-lg border p-2 flex flex-col justify-between text-left transition-all cursor-pointer ${
                    selectedRoom.id === 'living'
                      ? 'bg-amber-500/20 border-amber-400 shadow-md shadow-amber-500/10'
                      : 'bg-stone-800/60 border-stone-700/70 hover:bg-stone-800'
                  }`}
                >
                  <span className="font-semibold text-stone-100 flex items-center justify-between">
                    Living Integrado
                    <span className="text-[10px] text-amber-400 font-mono">38,5 m²</span>
                  </span>
                  <span className="text-[10px] text-stone-400">Estar + Jantar Ampliado</span>
                </button>

                {/* Varanda Gourmet */}
                <button
                  type="button"
                  onClick={() => setSelectedRoom(ROOM_DETAILS[1])}
                  className={`col-span-3 row-span-3 rounded-lg border p-2 flex flex-col justify-between text-left transition-all cursor-pointer ${
                    selectedRoom.id === 'varanda'
                      ? 'bg-amber-500/20 border-amber-400 shadow-md shadow-amber-500/10'
                      : 'bg-stone-800/60 border-stone-700/70 hover:bg-stone-800'
                  }`}
                >
                  <span className="font-semibold text-stone-100 flex items-center justify-between">
                    Varanda
                    <span className="text-[10px] text-amber-400 font-mono">19,2 m²</span>
                  </span>
                  <span className="text-[10px] text-stone-400">Churrasqueira</span>
                </button>

              </div>
            </div>

            {/* Instruction tooltip */}
            <p className="text-center text-xs text-stone-400">
              💡 Clique nos cômodos acima para ver a metragem e especificações de cada espaço.
            </p>
          </div>

          {/* Right: Selected Room Details Panel */}
          <div className="lg:col-span-5 bg-stone-950 border border-stone-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs text-amber-400 uppercase tracking-wider font-semibold">
                  Cômodo Selecionado
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-100 mt-1">
                  {selectedRoom.name}
                </h3>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1.5 rounded-lg text-sm font-mono font-bold">
                {selectedRoom.area}
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed font-light">
              {selectedRoom.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                Itens e Acabamentos Inclusos:
              </h4>
              <ul className="space-y-2">
                {selectedRoom.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-800 space-y-3">
              <div className="text-xs text-stone-400 flex items-center justify-between">
                <span>Possibilidade de alteração de layout:</span>
                <span className="text-emerald-400 font-medium">Planta Flexível</span>
              </div>

              <a
                id="floorplan-interest-button"
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInterestClick('floorplan_section')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Tenho interesse na planta do imóvel</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
