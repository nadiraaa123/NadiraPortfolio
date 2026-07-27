import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from '../data/translations';

interface NavbarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
  onOpenContact: () => void;
  onOpenCV: () => void;
  lang?: Language;
  setLang?: (lang: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection: propActiveSection,
  setActiveSection: propSetActiveSection,
  onOpenContact,
  onOpenCV,
  lang = 'en',
  isDarkMode,
  setIsDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalActiveSection, setInternalActiveSection] = useState('home');

  const activeSection = propActiveSection ?? internalActiveSection;

  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for scroll spy
  useEffect(() => {
    const sectionIds = ['home', 'about', 'tools', 'projects', 'work', 'education', 'certificates', 'organizations'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInternalActiveSection(entry.target.id);
            propSetActiveSection?.(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [propSetActiveSection]);

  // Navigation items
  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'projects', label: t.projects },
    { id: 'work', label: t.experience },
    { id: 'certificates', label: t.certifications },
  ];

  const handleNavClick = (id: string) => {
    setInternalActiveSection(id);
    propSetActiveSection?.(id);
    setMobileMenuOpen(false);

    if (id === 'contact') {
      onOpenContact();
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fff7f9]/90 dark:bg-[#1a0e19]/90 backdrop-blur-xl shadow-md py-3'
          : 'bg-[#fff7f9]/80 dark:bg-[#1a0e19]/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between">
        {/* Brand Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif text-2xl font-bold text-[#a73453] dark:text-[#ef6b8a] tracking-tight group-hover:text-[#871a3c] transition-colors">
            Nadira K. Putri
          </span>
        </button>

        {/* Minimal Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs sm:text-sm tracking-wide transition-all cursor-pointer font-medium relative py-1 ${
                  isActive
                    ? 'text-[#a73453] dark:text-[#ef6b8a] font-bold'
                    : 'text-[#564145] dark:text-[#eaddff] hover:text-[#a73453] dark:hover:text-[#ef6b8a]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a73453] dark:bg-[#ef6b8a] rounded-full animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Controls: Dark Mode Toggle & Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle dark mode"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-8 h-8 rounded-full bg-[#f4dced] dark:bg-[#2e1c2c] text-[#251723] dark:text-[#fce8f3] flex items-center justify-center hover:bg-[#a73453] hover:text-white dark:hover:bg-[#ef6b8a] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Resume Action */}
          <button
            onClick={onOpenCV}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full border border-[#a73453]/30 text-[#a73453] dark:text-[#ef6b8a] hover:bg-[#a73453]/10 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">description</span>
            {t.resume}
          </button>

          {/* Contact / Hire CTA */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold rounded-full bg-[#a73453] text-white hover:bg-[#871a3c] transition-all shadow-sm cursor-pointer"
          >
            {t.hireMe}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 text-[#251723] dark:text-[#fce8f3] hover:text-[#a73453] focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fff7f9] dark:bg-[#1d111c] border-b border-[#f4dced] dark:border-[#382035] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#ffe7f8] dark:bg-[#341d31] text-[#a73453] dark:text-[#ef6b8a] font-bold'
                    : 'text-[#564145] dark:text-[#eaddff] hover:bg-[#ffeff9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-[#f4dced] dark:border-[#382035] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex-1 py-2 text-center text-xs font-bold rounded-full border border-[#a73453]/30 text-[#a73453] dark:text-[#ef6b8a]"
            >
              {t.resume}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-2 text-center text-xs font-bold rounded-full bg-[#a73453] text-white"
            >
              {t.contact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
