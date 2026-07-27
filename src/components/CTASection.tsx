import React from 'react';
import { TRANSLATIONS, Language } from '../data/translations';

interface CTASectionProps {
  onContactClick: () => void;
  onDownloadCV: () => void;
  lang: Language;
}

export const CTASection: React.FC<CTASectionProps> = ({ onContactClick, onDownloadCV, lang }) => {
  const t = TRANSLATIONS[lang].cta;

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="bg-gradient-to-r from-[#ef6b8a] via-[#a73453] to-[#871a3c] rounded-[40px] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl border border-white/20">
          
          {/* Watermark Icon */}
          <div className="absolute top-0 right-0 p-8 text-white/10 pointer-events-none select-none">
            <span className="material-symbols-outlined text-[120px] sm:text-[180px]">
              mail
            </span>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {t.title}
            </h2>
            
            <p className="text-sm sm:text-base text-white/90 mb-3 leading-relaxed max-w-2xl mx-auto font-normal">
              {t.subtitle}
            </p>

            <p className="text-xs text-white/80 italic mb-8 max-w-lg mx-auto">
              {t.note}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#871a3c] rounded-full text-xs sm:text-sm font-bold hover:bg-[#fff7f9] hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">send</span>
                {t.contactNow}
              </button>
              
              <button
                onClick={onDownloadCV}
                className="w-full sm:w-auto px-8 py-4 bg-black/20 text-white border border-white/40 rounded-full text-xs sm:text-sm font-bold hover:bg-black/40 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">file_download</span>
                {t.downloadPdf}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
