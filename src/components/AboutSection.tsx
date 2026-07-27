import React from 'react';
import { ABOUT_DATA, HERO_DATA } from '../data/portfolioData';
import { TRANSLATIONS, Language } from '../data/translations';

interface AboutSectionProps {
  onOpenCV: () => void;
  onSelectCategory?: (categoryName: string) => void;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV, onSelectCategory, lang }) => {
  const t = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#ffeff9]/50 dark:bg-[#20121e]/50 relative">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Compact Styled Image + Experience Badge */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative max-w-[320px] sm:max-w-[350px] w-full">
              
              {/* Compact Frame with Rounded Sticker Border & Tilt */}
              <div className="rounded-[32px] overflow-hidden shadow-xl border-4 border-white dark:border-[#382035] bg-[#ffe7f8] dark:bg-[#2e1c2d] aspect-[4/3] group relative transform -rotate-1 hover:rotate-0 transition-all duration-500">
                <img
                  src={HERO_DATA.aboutImageUrl}
                  alt="Nadira about context"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Compact Floating Experience Badge */}
              <div className="absolute -bottom-5 -right-4 bg-[#6c49b3] text-white p-4 sm:p-5 rounded-2xl shadow-xl max-w-[170px] border border-white/20 transform rotate-2">
                <p className="font-serif text-3xl sm:text-4xl font-bold mb-0.5 leading-none">
                  {ABOUT_DATA.yearsExperience}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#eaddff]">
                  {t.yearsLabel}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Skills Pills */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest block mb-2">
                {t.subtitle}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#251723] dark:text-[#fce8f3] mb-4 font-semibold">
                {t.title}
              </h2>
              <p className="text-sm sm:text-base text-[#564145] dark:text-[#ddbfc3] leading-relaxed">
                {t.bio}
              </p>
            </div>

            {/* Skill Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ABOUT_DATA.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectCategory && onSelectCategory(pillar.label)}
                  className={`flex items-center gap-3 p-3.5 bg-white dark:bg-[#281827] rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-[#f4dced]/80 dark:border-[#42263e] hover:-translate-y-0.5 ${
                    idx === ABOUT_DATA.pillars.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className={`material-symbols-outlined text-2xl ${pillar.color}`}>
                    {pillar.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#251723] dark:text-[#fce8f3]">
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Download CV CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenCV}
                className="px-7 py-3.5 bg-[#f4dced] dark:bg-[#341d31] text-[#251723] dark:text-[#fce8f3] rounded-full text-xs sm:text-sm font-bold flex items-center gap-2.5 hover:bg-[#a73453] hover:text-white dark:hover:bg-[#ef6b8a] dark:hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md cursor-pointer"
              >
                {t.downloadCv}
                <span className="material-symbols-outlined text-base group-hover:translate-y-0.5 transition-transform">
                  download
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
