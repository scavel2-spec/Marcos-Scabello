import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES, INTEREST_FORM_URL } from '../data/apartmentData';
import { GalleryImage } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas as Fotos' },
    { id: 'living', label: 'Living & Cozinha' },
    { id: 'varanda', label: 'Varanda Gourmet' },
    { id: 'quartos', label: 'Suítes & Banheiros' },
    { id: 'lazer', label: 'Lazer & Condomínio' },
    { id: 'fachada', label: 'Fachada' },
  ];

  const filteredImages = activeCategory === 'todos'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Tour Fotográfico
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
            Conheça cada ambiente do apartamento
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light">
            Fotografias reais das dependências do apartamento e da infraestrutura completa do edifício.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-stone-950 shadow-md font-semibold'
                  : 'bg-stone-900/80 text-stone-300 border border-stone-800 hover:border-stone-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-xl overflow-hidden border border-stone-800 bg-stone-900 aspect-[4/3] cursor-pointer shadow-lg hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-950/60 backdrop-blur-sm border border-stone-700 flex items-center justify-center text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider block">
                  {image.category}
                </span>
                <h4 className="text-sm font-medium text-stone-100 truncate">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <a
            id="gallery-interest-button"
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-7 py-3.5 rounded-xl text-sm shadow-xl hover:shadow-amber-500/20 transition-all duration-200 cursor-pointer"
          >
            <span>Tenho interesse em visitar pessoalmente</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Top Bar inside Modal */}
          <div
            className="w-full max-w-5xl flex items-center justify-between py-3 text-stone-300 mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">
                {selectedImageIndex + 1} de {filteredImages.length} fotos
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-4 py-1.5 rounded-lg text-xs transition-colors"
              >
                <span>Tenho interesse</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCloseLightbox}
                className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
                aria-label="Fechar galeria"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Image Container */}
          <div
            className="relative w-full max-w-5xl max-h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImageIndex].url}
              alt={filteredImages[selectedImageIndex].title}
              className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl border border-stone-800"
              referrerPolicy="no-referrer"
            />

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-900/90 border border-stone-700 text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center transition-all shadow-lg"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-900/90 border border-stone-700 text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center transition-all shadow-lg"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption info below */}
          <div
            className="w-full max-w-5xl mt-3 text-center space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-lg font-bold text-stone-100">
              {filteredImages[selectedImageIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-2xl mx-auto">
              {filteredImages[selectedImageIndex].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
