import React, { useState } from 'react';
import {
  getHeroData,
  getAboutData,
  getSkillCategories,
  getProjectsData,
  getWorkExperience,
  getEducationData,
  getCertificatesData,
  getOrganizationsData
} from '../data/portfolioData';
import { Language } from '../data/translations';

interface PPTModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
}

export const PPTModal: React.FC<PPTModalProps> = ({ isOpen, onClose, lang = 'id' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const isInd = lang === 'id';
  const hero = getHeroData(lang);
  const about = getAboutData(lang);
  const skills = getSkillCategories(lang);
  const projects = getProjectsData(lang);
  const work = getWorkExperience(lang);
  const education = getEducationData(lang);
  const certs = getCertificatesData(lang);
  const orgs = getOrganizationsData(lang);

  const slides = [
    // Slide 1: Cover
    {
      type: 'cover',
      title: `${hero.name} ${hero.middleName} ${hero.lastName}`,
      subtitle: isInd ? 'Portofolio Data Science, Web Development & Analisis Sistem/Bisnis' : 'Data Science, Web Development & Business/System Analysis Portfolio',
      tagline: hero.tagline,
      badge: isInd ? 'Presentasi Slide Portofolio Interaktif' : 'Interactive Slide Presentation Deck',
      footer: 'President University — Computer Science (Information Systems)'
    },
    // Slide 2: Executive Summary & About Me
    {
      type: 'about',
      title: isInd ? 'Profil & Cerita Perjalanan' : 'Executive Profile & Story',
      subtitle: about.subtitle,
      bio: about.bio,
      highlights: [
        { label: isInd ? 'Pendidikan' : 'Education', val: `${education[0].degree} @ ${education[0].institution}` },
        { label: isInd ? 'Prestasi Akademik' : 'Academic Standing', val: `IPK ${education[0].gpa} (${education[0].honors})` },
        { label: isInd ? 'Keahlian Utama' : 'Core Expertise', val: isInd ? 'Analisis Data, Machine Learning, Web Dev, Analisis Bisnis' : 'Data Analysis, Machine Learning, Web Dev, Business Analysis' },
        { label: isInd ? 'Rekam Jejak' : 'Experience Track', val: `${about.yearsExperience} ${about.yearsLabel}` }
      ]
    },
    // Slide 3: Technical Competencies
    {
      type: 'skills',
      title: isInd ? 'Kompetensi Teknis Utama' : 'Core Technical Competencies',
      subtitle: isInd ? 'Terstruktur dalam Analisis, Pengembangan & Desain' : 'Structured across Analysis, Development & Design',
      categories: skills
    },
    // Slide 4: Project 1 - KarirNex DA
    {
      type: 'project',
      project: projects[0],
      slideTitle: isInd ? 'Studi Kasus 1: Analisis Data' : 'Featured Case Study 1: Data Analytics'
    },
    // Slide 5: Project 2 - Machine Learning Breast Cancer
    {
      type: 'project',
      project: projects[1],
      slideTitle: isInd ? 'Studi Kasus 2: Machine Learning' : 'Featured Case Study 2: Machine Learning'
    },
    // Slide 6: Project 3 - E-Commerce Behavior
    {
      type: 'project',
      project: projects[2],
      slideTitle: isInd ? 'Studi Kasus 3: Analisis E-Commerce' : 'Featured Case Study 3: E-Commerce Analytics'
    },
    // Slide 7: Project 4 - DVD Rental Dashboard
    {
      type: 'project',
      project: projects[3],
      slideTitle: isInd ? 'Studi Kasus 4: AI & Web Dashboard' : 'Featured Case Study 4: AI & Web Dashboard'
    },
    // Slide 8: Project 5 & 6 - Business & System Analysis
    {
      type: 'business_analysis',
      slideTitle: isInd ? 'Studi Kasus: Analisis Bisnis & Sistem' : 'Featured Case Studies: Business & System Analysis',
      items: [
        projects[6], // Janji Jiwa
        projects[7], // Online Booking Ticket System
        projects[5]  // Apotek K-34
      ]
    },
    // Slide 9: Work Experience & Leadership
    {
      type: 'experience',
      slideTitle: isInd ? 'Pengalaman Kerja & Paparan Industri' : 'Professional Experience & Industry Exposure',
      work: work[0],
      orgs: orgs.slice(0, 3)
    },
    // Slide 10: Certifications
    {
      type: 'certifications',
      slideTitle: isInd ? 'Sertifikasi & Kredensial Terverifikasi' : 'Verified Certifications & Credentials',
      certs: certs
    },
    // Slide 11: Contact / Closing
    {
      type: 'closing',
      title: isInd ? 'Mari Berkolaborasi!' : "Let's Collaborate!",
      subtitle: isInd ? 'Terima kasih telah meninjau presentasi portofolio ini.' : 'Thank you for reviewing this portfolio presentation.',
      contact: [
        { label: 'Email', val: 'nadirakp06@gmail.com' },
        { label: 'LinkedIn', val: 'linkedin.com/in/nadirakputri' },
        { label: 'GitHub', val: 'github.com/nadirakputri' },
        { label: 'Lokasi / Location', val: 'Jakarta / Cikarang, Indonesia' }
      ]
    }
  ];

  const totalSlides = slides.length;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#1a0e19] text-[#fce8f3] w-full max-w-6xl rounded-[28px] overflow-hidden shadow-2xl border border-[#42263e] h-[92vh] flex flex-col relative">
        
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 bg-[#251524] border-b border-[#42263e] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ef6b8a] text-2xl">slideshow</span>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                Nadira Khumaira Putri — {isInd ? 'Presentasi PPT Portofolio' : 'Portfolio PPT Presentation'}
              </h3>
              <p className="text-xs text-[#ddbfc3]">Slide {currentSlide + 1} {isInd ? 'dari' : 'of'} {totalSlides}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="px-3 py-1.5 rounded-full border border-[#42263e] text-xs font-semibold bg-[#281827] hover:bg-[#3d213a] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer text-white"
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span> {isInd ? 'Sebelum' : 'Prev'}
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlide === totalSlides - 1}
              className="px-3 py-1.5 rounded-full border border-[#42263e] text-xs font-semibold bg-[#ef6b8a] text-white hover:bg-[#a73453] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
            >
              {isInd ? 'Lanjut' : 'Next'} <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#20121e] border border-[#42263e] flex items-center justify-center text-[#ddbfc3] hover:text-[#ef6b8a] ml-2 cursor-pointer"
              title="Close Presentation"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        </div>

        {/* Slide Canvas Area */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-gradient-to-br from-[#1a0e19] via-[#241323] to-[#170a16] flex flex-col justify-center">
          
          {/* SLIDE TYPE: COVER */}
          {slides[currentSlide].type === 'cover' && (
            <div className="text-center space-y-6 my-auto max-w-4xl mx-auto animate-fade-in">
              <span className="px-4 py-1.5 rounded-full bg-[#ef6b8a]/20 text-[#ef6b8a] border border-[#ef6b8a]/30 text-xs font-bold uppercase tracking-widest inline-block">
                {slides[currentSlide].badge}
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#ef6b8a]">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-sm sm:text-base text-[#ddbfc3] max-w-2xl mx-auto leading-relaxed">
                {slides[currentSlide].tagline}
              </p>
              <div className="pt-6 border-t border-[#42263e] text-xs text-[#ddbfc3] uppercase tracking-widest font-mono">
                {slides[currentSlide].footer}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: ABOUT */}
          {slides[currentSlide].type === 'about' && (
            <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
              <div>
                <p className="text-xs text-[#ef6b8a] uppercase font-bold tracking-widest">{slides[currentSlide].subtitle}</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">{slides[currentSlide].title}</h2>
              </div>
              <p className="text-sm sm:text-base text-[#ddbfc3] leading-relaxed border-l-2 border-[#ef6b8a] pl-4 italic">
                "{slides[currentSlide].bio}"
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {slides[currentSlide].highlights?.map((h, idx) => (
                  <div key={idx} className="p-4 bg-[#281827] rounded-2xl border border-[#42263e]">
                    <p className="text-xs font-bold text-[#ef6b8a] uppercase">{h.label}</p>
                    <p className="text-sm font-semibold text-white mt-1">{h.val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: SKILLS */}
          {slides[currentSlide].type === 'skills' && (
            <div className="space-y-6 max-w-5xl mx-auto animate-fade-in">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">{slides[currentSlide].title}</h2>
                <p className="text-xs text-[#ef6b8a] mt-1">{slides[currentSlide].subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((cat, idx) => (
                  <div key={idx} className="p-6 bg-[#281827] rounded-2xl border border-[#42263e] space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ef6b8a] text-2xl">{cat.icon}</span>
                      <h3 className="font-serif font-bold text-base text-white">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((sk, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 bg-[#1a0e19] text-[#ddbfc3] rounded-md text-xs font-mono border border-[#42263e]">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: PROJECT */}
          {slides[currentSlide].type === 'project' && slides[currentSlide].project && (
            <div className="space-y-6 max-w-5xl mx-auto animate-fade-in">
              <div className="flex justify-between items-start flex-wrap gap-2 border-b border-[#42263e] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#ef6b8a] uppercase tracking-widest">{slides[currentSlide].slideTitle}</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">{slides[currentSlide].project.title}</h2>
                  <p className="text-xs text-[#ddbfc3] font-medium">{slides[currentSlide].project.subtitle}</p>
                </div>
                <span className="px-3 py-1 bg-[#ef6b8a]/20 text-[#ef6b8a] border border-[#ef6b8a]/30 rounded-full text-xs font-bold">
                  {slides[currentSlide].project.category}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-[#281827] p-4 rounded-2xl border border-[#42263e]">
                    <h4 className="text-xs font-bold text-[#ef6b8a] uppercase mb-1">{isInd ? 'Ringkasan Proyek' : 'Project Overview'}</h4>
                    <p className="text-xs sm:text-sm text-[#ddbfc3] leading-relaxed">{slides[currentSlide].project.fullStory}</p>
                  </div>

                  <div className="bg-[#281827] p-4 rounded-2xl border border-[#42263e] space-y-2">
                    <h4 className="text-xs font-bold text-[#ef6b8a] uppercase">{isInd ? 'Temuan & Hasil Utama' : 'Key Insights & Results'}</h4>
                    <ul className="space-y-1 text-xs text-[#ddbfc3]">
                      {slides[currentSlide].project.keyInsights?.map((ins, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-1.5">
                          <span className="text-[#ef6b8a] font-bold">•</span>
                          <span>{ins}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  {slides[currentSlide].project.metrics && (
                    <div className="bg-[#281827] p-4 rounded-2xl border border-[#42263e] space-y-3">
                      <h4 className="text-xs font-bold text-[#ef6b8a] uppercase">{isInd ? 'Metrik Utama' : 'Key Metrics'}</h4>
                      {slides[currentSlide].project.metrics?.map((m, mIdx) => (
                        <div key={mIdx} className="border-b border-[#42263e] last:border-none pb-2 last:pb-0">
                          <p className="text-[10px] text-[#ddbfc3] uppercase">{m.label}</p>
                          <p className="text-sm font-bold text-white">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="bg-[#281827] p-4 rounded-2xl border border-[#42263e] space-y-2">
                    <h4 className="text-xs font-bold text-[#ef6b8a] uppercase">{isInd ? 'Teknologi & Alat' : 'Tech Stack & Tools'}</h4>
                    <div className="flex flex-wrap gap-1">
                      {slides[currentSlide].project.toolsUsed?.map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 bg-[#1a0e19] text-[#ef6b8a] rounded text-[11px] font-mono border border-[#42263e]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE TYPE: BUSINESS ANALYSIS */}
          {slides[currentSlide].type === 'business_analysis' && (
            <div className="space-y-6 max-w-5xl mx-auto animate-fade-in">
              <div className="border-b border-[#42263e] pb-3">
                <span className="text-xs font-bold text-[#ef6b8a] uppercase tracking-widest">{slides[currentSlide].slideTitle}</span>
                <h2 className="font-serif text-3xl font-bold text-white mt-1">{isInd ? 'Studi Sistem, Manajemen & Proses Bisnis' : 'Systems, Management & Business Process Studies'}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {slides[currentSlide].items?.map((item, idx) => (
                  <div key={idx} className="p-5 bg-[#281827] rounded-2xl border border-[#42263e] flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#ef6b8a]">{item.category}</span>
                      <h3 className="font-serif font-bold text-base text-white mt-1">{item.title}</h3>
                      <p className="text-xs text-[#ddbfc3] mt-2 line-clamp-4">{item.description}</p>
                    </div>
                    <div className="pt-2 border-t border-[#42263e] flex flex-wrap gap-1">
                      {item.toolsUsed?.map((tool, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 bg-[#1a0e19] text-[10px] text-[#ef6b8a] rounded border border-[#42263e]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: EXPERIENCE */}
          {slides[currentSlide].type === 'experience' && (
            <div className="space-y-6 max-w-5xl mx-auto animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#ef6b8a] uppercase tracking-widest">{slides[currentSlide].slideTitle}</span>
                <h2 className="font-serif text-3xl font-bold text-white mt-1">{isInd ? 'Pengalaman Industri & Komunitas' : 'Industry Experience & Communities'}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#281827] rounded-2xl border border-[#42263e] space-y-3">
                  <span className="px-2.5 py-0.5 bg-[#ef6b8a]/20 text-[#ef6b8a] rounded-full text-xs font-bold">
                    {work[0].type}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">{work[0].role}</h3>
                  <p className="text-xs font-semibold text-[#ef6b8a]">{work[0].company} • {work[0].period}</p>
                  <ul className="space-y-1.5 text-xs text-[#ddbfc3]">
                    {work[0].achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-1.5">
                        <span className="text-[#ef6b8a] font-bold">✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-[#281827] rounded-2xl border border-[#42263e] space-y-4">
                  <h3 className="font-serif text-lg font-bold text-white">{isInd ? 'Paparan Komunitas & Korporat' : 'Community & Corporate Exposure'}</h3>
                  <div className="space-y-3">
                    {orgs.slice(0, 3).map((org, oIdx) => (
                      <div key={oIdx} className="border-b border-[#42263e] last:border-none pb-2 last:pb-0 text-xs">
                        <p className="font-bold text-white">{org.role} @ {org.organization}</p>
                        <p className="text-[11px] text-[#ddbfc3] mt-0.5">{org.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE TYPE: CERTIFICATIONS */}
          {slides[currentSlide].type === 'certifications' && (
            <div className="space-y-6 max-w-5xl mx-auto animate-fade-in">
              <div>
                <span className="text-xs font-bold text-[#ef6b8a] uppercase tracking-widest">{slides[currentSlide].slideTitle}</span>
                <h2 className="font-serif text-3xl font-bold text-white mt-1">{isInd ? 'Kredensial & Sertifikasi Terverifikasi' : 'Credentials & Certifications'}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certs.map((cert) => (
                  <div key={cert.id} className="p-4 bg-[#281827] rounded-2xl border border-[#42263e] space-y-2">
                    <p className="font-serif font-bold text-sm text-white line-clamp-2">{cert.title}</p>
                    <p className="text-xs text-[#ef6b8a] font-semibold">{cert.issuer}</p>
                    <p className="text-[10px] text-[#ddbfc3]">{isInd ? 'Diterbitkan:' : 'Issued:'} {cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: CLOSING */}
          {slides[currentSlide].type === 'closing' && (
            <div className="text-center space-y-6 my-auto max-w-2xl mx-auto animate-fade-in">
              <span className="w-16 h-16 rounded-full bg-[#ef6b8a]/20 border border-[#ef6b8a] flex items-center justify-center text-[#ef6b8a] mx-auto text-3xl">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </span>
              <h2 className="font-serif text-4xl font-bold text-white">{slides[currentSlide].title}</h2>
              <p className="text-sm text-[#ddbfc3]">{slides[currentSlide].subtitle}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-left">
                {slides[currentSlide].contact?.map((c, cIdx) => (
                  <div key={cIdx} className="p-4 bg-[#281827] rounded-2xl border border-[#42263e]">
                    <p className="text-[10px] text-[#ef6b8a] uppercase font-bold">{c.label}</p>
                    <p className="text-xs font-semibold text-white mt-1">{c.val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Slide Navigation Thumbnail Bar */}
        <div className="px-6 py-3 bg-[#251524] border-t border-[#42263e] flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-1.5 min-w-max">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentSlide === idx
                    ? 'bg-[#ef6b8a] text-white scale-110 shadow-lg'
                    : 'bg-[#20121e] text-[#ddbfc3] border border-[#42263e] hover:border-[#ef6b8a]'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <p className="text-xs text-[#ddbfc3] hidden sm:block">
            {isInd ? 'Gunakan tombol Prev & Next untuk navigasi slide' : 'Use Prev & Next buttons to navigate slides'}
          </p>
        </div>

      </div>
    </div>
  );
};
