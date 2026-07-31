import React, { useState } from 'react';
import { SOCIAL_LINKS, Language } from '../data/translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const isInd = lang === 'id';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#20121e] w-full max-w-md rounded-[32px] p-6 sm:p-8 border border-[#f4dced] dark:border-[#42263e] shadow-2xl relative text-[#251723] dark:text-[#fce8f3]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#fff7f9] dark:bg-[#281827] border border-[#f4dced] dark:border-[#42263e] flex items-center justify-center text-[#564145] dark:text-[#eaddff] hover:text-[#a73453] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div>
          <span className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-wider block mb-1">
            GET IN TOUCH
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#251723] dark:text-[#fce8f3] mb-2">
            Let's Connect & Collaborate
          </h3>
          <p className="text-xs text-[#564145] dark:text-[#ddbfc3] mb-6 leading-relaxed">
            {isInd 
              ? 'Silakan hubungi saya secara langsung melalui email atau media sosial di bawah ini:' 
              : 'Feel free to reach out to me directly via email or social channels below:'}
          </p>

          {/* Primary Email Card */}
          <div className="p-4 bg-[#ffeff9] dark:bg-[#2e1c2d] rounded-2xl border border-[#f4dced] dark:border-[#42263e] mb-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#a73453] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-bold uppercase text-[#a73453] dark:text-[#ef6b8a] tracking-wider block">
                  Direct Email
                </span>
                <span className="text-sm font-semibold text-[#251723] dark:text-[#fce8f3] block truncate">
                  {SOCIAL_LINKS.emailAddress}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={SOCIAL_LINKS.email}
                className="flex-1 py-2.5 bg-[#a73453] hover:bg-[#871a3c] text-white rounded-xl text-xs font-bold transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span className="material-symbols-outlined text-base">send</span>
                {isInd ? 'Kirim Email' : 'Send Email'}
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2.5 bg-white dark:bg-[#20121e] border border-[#f4dced] dark:border-[#42263e] text-[#251723] dark:text-[#fce8f3] hover:bg-[#fff7f9] dark:hover:bg-[#281827] rounded-xl text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy Email Address"
              >
                <span className="material-symbols-outlined text-base">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span>{copied ? (isInd ? 'Tersalin' : 'Copied') : (isInd ? 'Salin' : 'Copy')}</span>
              </button>
            </div>
          </div>

          {/* Social Links List */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#564145] dark:text-[#ddbfc3] block mb-2 uppercase tracking-wider">
              {isInd ? 'Media Sosial & Profil' : 'Social Channels & Profiles'}
            </span>

            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-[#fff7f9] dark:bg-[#281827] hover:bg-[#ffeff9] dark:hover:bg-[#2e1c2d] border border-[#f4dced] dark:border-[#42263e] rounded-xl transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0a66c2]/10 text-[#0a66c2] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#251723] dark:text-[#fce8f3] block">LinkedIn</span>
                  <span className="text-[11px] text-[#564145] dark:text-[#ddbfc3] block">linkedin.com/in/nadirakputri</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-sm text-[#564145] dark:text-[#ddbfc3] group-hover:translate-x-0.5 transition-transform">
                open_in_new
              </span>
            </a>

            {/* GitHub */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-[#fff7f9] dark:bg-[#281827] hover:bg-[#ffeff9] dark:hover:bg-[#2e1c2d] border border-[#f4dced] dark:border-[#42263e] rounded-xl transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black/10 dark:bg-white/10 text-[#24292e] dark:text-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#251723] dark:text-[#fce8f3] block">GitHub</span>
                  <span className="text-[11px] text-[#564145] dark:text-[#ddbfc3] block">github.com/nadirakputri</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-sm text-[#564145] dark:text-[#ddbfc3] group-hover:translate-x-0.5 transition-transform">
                open_in_new
              </span>
            </a>

            {/* Instagram */}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-[#fff7f9] dark:bg-[#281827] hover:bg-[#ffeff9] dark:hover:bg-[#2e1c2d] border border-[#f4dced] dark:border-[#42263e] rounded-xl transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e1306c]/10 text-[#e1306c] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#251723] dark:text-[#fce8f3] block">Instagram</span>
                  <span className="text-[11px] text-[#564145] dark:text-[#ddbfc3] block">@nadirakputri</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-sm text-[#564145] dark:text-[#ddbfc3] group-hover:translate-x-0.5 transition-transform">
                open_in_new
              </span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

