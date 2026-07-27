import React, { useState } from 'react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { TRANSLATIONS, Language } from '../data/translations';

interface CertificatesSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
  lang: Language;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  onSelectCertificate,
  lang
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const t = TRANSLATIONS[lang].certifications;

  const filteredCerts = CERTIFICATES_DATA.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="certificates" className="py-16 lg:py-24 bg-white dark:bg-[#1a0e19] border-t border-[#f4dced]/60 dark:border-[#382035]">
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest block mb-2">
              {t.subtitle}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#251723] dark:text-[#fce8f3] font-semibold">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-[#564145] dark:text-[#ddbfc3] mt-2">
              {t.description}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-[#564145] dark:text-[#ddbfc3]">
              search
            </span>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#fff7f9] dark:bg-[#281827] border border-[#f4dced] dark:border-[#42263e] rounded-full text-xs text-[#251723] dark:text-[#fce8f3] focus:outline-none focus:border-[#a73453] transition-all"
            />
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 bg-[#fff7f9] dark:bg-[#20121e] rounded-[28px] border border-[#f4dced] dark:border-[#42263e] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-3 bg-white dark:bg-[#281827] rounded-2xl shadow-sm border border-[#f4dced] dark:border-[#42263e]">
                    <span className="material-symbols-outlined text-2xl text-[#a73453] dark:text-[#ef6b8a]">
                      workspace_premium
                    </span>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#251723] dark:text-[#fce8f3] mb-1 group-hover:text-[#a73453] dark:group-hover:text-[#ef6b8a] transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-3 text-xs text-[#564145] dark:text-[#ddbfc3] font-medium mb-4">
                  <span>Issued: {cert.date}</span>
                  <span>•</span>
                  <span>ID: {cert.credentialId}</span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white dark:bg-[#281827] border border-[#f4dced] dark:border-[#42263e] rounded-md text-[11px] font-medium text-[#564145] dark:text-[#ddbfc3]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate (PDF) Button as requested! */}
              <button
                onClick={() => onSelectCertificate(cert)}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#a73453] text-white hover:bg-[#871a3c] rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                {t.viewMore}
              </button>
            </div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12 bg-[#fff7f9] dark:bg-[#20121e] rounded-3xl border border-[#f4dced] dark:border-[#42263e]">
            <p className="text-sm font-semibold text-[#564145] dark:text-[#ddbfc3]">
              No certifications matched "{searchTerm}".
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 text-xs text-[#a73453] dark:text-[#ef6b8a] font-bold underline cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
