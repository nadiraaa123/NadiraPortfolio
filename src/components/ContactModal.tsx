import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TRANSLATIONS, SOCIAL_LINKS, Language } from '../data/translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Science Consulting',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const t = TRANSLATIONS[lang].contactModal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Data Science Consulting', message: '' });
      onClose();
    }, 2800);
  };

  const handleOpenEmailApp = () => {
    const mailtoUrl = `mailto:${SOCIAL_LINKS.emailAddress}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Hello Nadira,\n\nMy Name: ${formData.name}\nMy Email: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#20121e] w-full max-w-lg rounded-[32px] p-6 sm:p-8 border border-[#f4dced] dark:border-[#42263e] shadow-2xl relative text-[#251723] dark:text-[#fce8f3]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#fff7f9] dark:bg-[#281827] border border-[#f4dced] dark:border-[#42263e] flex items-center justify-center text-[#564145] dark:text-[#eaddff] hover:text-[#a73453] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-[#006c4c]/10 text-[#006c4c] rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#251723] dark:text-[#fce8f3]">
              {t.receivedTitle}
            </h3>
            <p className="text-sm text-[#564145] dark:text-[#ddbfc3] leading-relaxed">
              {t.receivedDesc}
            </p>
          </div>
        ) : (
          <div>
            <span className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-wider block mb-1">
              {t.tag}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#251723] dark:text-[#fce8f3] mb-2">
              {t.title}
            </h3>

            {/* Email Explanation Box */}
            <div className="p-3 bg-[#ffeff9] dark:bg-[#2e1c2d] rounded-2xl border border-[#f4dced] dark:border-[#42263e] text-[11px] text-[#564145] dark:text-[#ddbfc3] mb-5 flex items-start gap-2">
              <span className="material-symbols-outlined text-[#a73453] dark:text-[#ef6b8a] text-base mt-0.5">
                mark_email_read
              </span>
              <span>{t.emailInfo}</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#251723] dark:text-[#fce8f3] mb-1">
                  {t.fullName}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fff7f9] dark:bg-[#281827] border border-[#f4dced] dark:border-[#42263e] rounded-xl text-xs text-[#251723] dark:text-[#fce8f3] focus:outline-none focus:border-[#a73453] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#251723] dark:text-[#fce8f3] mb-1">
                  {t.email}
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fff7f9] dark:bg-[#281827] border border-[#f4dced] dark:border-[#42263e] rounded-xl text-xs text-[#251723] dark:text-[#fce8f3] focus:outline-none focus:border-[#a73453] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#251723] dark:text-[#fce8f3] mb-1">
                  {t.subject}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fff7f9] dark:bg-[#281827] border border-[#f4dced] dark:border-[#42263e] rounded-xl text-xs text-[#251723] dark:text-[#fce8f3] focus:outline-none focus:border-[#a73453] transition-colors"
                >
                  <option value="Data Science Consulting">Data Science Consulting</option>
                  <option value="Web Development Project">Web Development Project</option>
                  <option value="Full-time Opportunity">Full-time Opportunity</option>
                  <option value="General Collaboration">General Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#251723] dark:text-[#fce8f3] mb-1">
                  {t.message}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me a bit about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fff7f9] dark:bg-[#281827] border border-[#f4dced] dark:border-[#42263e] rounded-xl text-xs text-[#251723] dark:text-[#fce8f3] focus:outline-none focus:border-[#a73453] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#a73453] text-white rounded-xl text-xs font-bold hover:bg-[#871a3c] transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">send</span>
                  {t.sendBtn}
                </button>

                <button
                  type="button"
                  onClick={handleOpenEmailApp}
                  className="w-full py-2.5 bg-[#fff7f9] dark:bg-[#281827] text-[#6c49b3] dark:text-[#c084fc] border border-[#f4dced] dark:border-[#42263e] hover:bg-[#ffe7f8] rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                  {t.openInEmailApp}
                </button>
              </div>
            </form>

            {/* Social Media Links Quick Row */}
            <div className="mt-5 pt-4 border-t border-[#f4dced] dark:border-[#42263e] flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#564145] dark:text-[#ddbfc3]">
                Social Channels:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={"https://www.linkedin.com/in/nadira-khumaira/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-[#0a66c2] hover:scale-110 transition-transform"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href={"https://github.com/nadiraaa123"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-[#24292e] dark:text-white hover:scale-110 transition-transform"
                  title="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </a>
                <a
                  href={"https://www.instagram.com/nadirakhmr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-[#e1306c] hover:scale-110 transition-transform"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
