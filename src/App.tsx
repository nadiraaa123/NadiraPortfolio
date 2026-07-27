import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ToolsTechnologiesSection } from './components/ToolsTechnologiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WorkExperienceSection } from './components/WorkExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificatesSection } from './components/CertificatesSection';
import { OrganizationsSection } from './components/OrganizationsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { CVModal } from './components/CVModal';
import { CertificateViewerModal } from './components/CertificateViewerModal';
import { Language } from './data/translations';
import { CertificateItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  // Multi-language state: default 'id' (Indonesian), changeable to 'en'
  const [lang, setLang] = useState<Language>('id');

  // Dark/Light Mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Sync dark mode class with html root element & body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Intersection observer to track which section is currently active on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'tools', 'projects', 'work', 'education', 'certificates', 'organizations', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff7f9] dark:bg-[#1a0e19] text-[#251723] dark:text-[#fce8f3] selection:bg-[#a73453] selection:text-white flex flex-col font-sans transition-colors duration-300">
      
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCV={() => setIsCVOpen(true)}
        lang={lang}
        setLang={setLang}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero */}
        <HeroSection
          onGetInTouch={() => setIsContactOpen(true)}
          onViewWork={() => scrollToSection('projects')}
          lang={lang}
        />

        {/* About */}
        <AboutSection
          onOpenCV={() => setIsCVOpen(true)}
          onSelectCategory={() => scrollToSection('projects')}
          lang={lang}
        />

        {/* Technical Proficiency / Tools & Technologies */}
        <ToolsTechnologiesSection
          onLearnMoreProcess={() => scrollToSection('projects')}
        />

        {/* Portfolio Projects & Interactive Case Studies */}
        <ProjectsSection />

        {/* Career & Work Experience */}
        <WorkExperienceSection />

        {/* Academic Education */}
        <EducationSection />

        {/* Verified Certifications */}
        <CertificatesSection
          onSelectCertificate={(cert) => setSelectedCertificate(cert)}
          lang={lang}
        />

        {/* Leadership & Organizations */}
        <OrganizationsSection />

        {/* Call To Action */}
        <CTASection
          onContactClick={() => setIsContactOpen(true)}
          onDownloadPortfolio={() => setIsCVOpen(true)}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCV={() => setIsCVOpen(true)}
        lang={lang}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />

      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      <CertificateViewerModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        lang={lang}
      />

    </div>
  );
}
