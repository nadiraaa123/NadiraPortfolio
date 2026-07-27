import React from 'react';
import { HERO_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = HERO_DATA.cvPdfUrl || 'pdf/NADIRA KHUMAIRA PUTRI_CV.pdf';

  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-[#20121e] w-full max-w-5xl rounded-[28px] overflow-hidden shadow-2xl border border-[#f4dced] dark:border-[#42263e] h-[90vh] flex flex-col my-auto relative">
        
        {/* Header Bar */}
        <div className="px-5 py-3.5 bg-[#fff7f9] dark:bg-[#281827] border-b border-[#f4dced] dark:border-[#42263e] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#a73453]/10 dark:bg-[#ef6b8a]/20 flex items-center justify-center text-[#a73453] dark:text-[#ef6b8a]">
              <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#251723] dark:text-[#fce8f3]">
                Curriculum Vitae — Nadira Khumaira Putri
              </h3>
              <p className="text-xs text-[#a73453] dark:text-[#ef6b8a] font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">folder</span>
                {pdfUrl}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenNewTab}
              className="px-4 py-2 bg-[#a73453] dark:bg-[#ef6b8a] text-white rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#871a3c] transition-all duration-200 shadow-md hover:scale-105 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Buka / Download PDF
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white dark:bg-[#20121e] border border-[#f4dced] dark:border-[#42263e] flex items-center justify-center text-[#564145] dark:text-[#ddbfc3] hover:text-[#a73453] dark:hover:text-[#ef6b8a] transition-colors cursor-pointer"
              title="Tutup"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>

        {/* Embedded Real PDF Viewer */}
        <div className="flex-1 w-full bg-[#323639] relative overflow-hidden flex flex-col">
          <iframe
            src={`${pdfUrl}#toolbar=1&view=FitH`}
            title="CV Nadira Khumaira Putri"
            className="w-full h-full border-0"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-white space-y-4">
              <span className="material-symbols-outlined text-5xl text-[#ef6b8a]">description</span>
              <p className="text-sm">Browser Anda tidak mendukung preview PDF langsung.</p>
              <button
                onClick={handleOpenNewTab}
                className="px-6 py-2.5 bg-[#a73453] text-white rounded-full text-xs font-bold hover:bg-[#871a3c]"
              >
                Klik di sini untuk membuka PDF
              </button>
            </div>
          </iframe>
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-2.5 bg-[#fff7f9] dark:bg-[#281827] border-t border-[#f4dced] dark:border-[#42263e] flex items-center justify-between text-xs text-[#564145] dark:text-[#ddbfc3]">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="material-symbols-outlined text-sm text-[#006c4c]">check_circle</span>
            Menampilkan preview PDF resmi (`pdf/NADIRA KHUMAIRA PUTRI_CV.pdf`)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#f4dced] dark:bg-[#42263e] text-[#251723] dark:text-[#fce8f3] rounded-full font-semibold hover:bg-[#e6c2da] transition-colors cursor-pointer text-xs"
          >
            Tutup Preview
          </button>
        </div>

      </div>
    </div>
  );
};