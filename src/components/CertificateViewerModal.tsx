import React from 'react';
import { CertificateItem } from '../types';
import { TRANSLATIONS, Language } from '../data/translations';

interface CertificateViewerModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
  lang: Language;
}

export const CertificateViewerModal: React.FC<CertificateViewerModalProps> = ({
  certificate,
  onClose,
  lang
}) => {
  if (!certificate) return null;

  const t = TRANSLATIONS[lang].certModal;

  // Ubah fungsi ini agar membuka/mengunduh file PDF lokal alih-alih window.print()
  const handlePrintPdf = () => {
    // Prioritaskan certificatePdfUrl atau verifyUrl jika mengarah ke file PDF
    const pdfTarget = certificate.certificatePdfUrl || certificate.verifyUrl;
    
    if (pdfTarget) {
      window.open(pdfTarget, '_blank');
    } else {
      // Fallback jika tidak ada file PDF, gunakan window.print() standar
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-fade-in print:p-0 print:bg-white print:static">
      <div className="bg-white dark:bg-[#20121e] w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl border border-[#f4dced] dark:border-[#42263e] max-h-[90vh] flex flex-col my-auto relative print:max-h-none print:shadow-none print:border-none print:rounded-none">
        
        {/* Sticky Modal Header */}
        <div className="px-6 py-4 bg-[#fff7f9] dark:bg-[#281827] border-b border-[#f4dced] dark:border-[#42263e] flex items-center justify-between sticky top-0 z-10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#a73453] dark:text-[#ef6b8a]">workspace_premium</span>
            <h3 className="font-serif text-lg font-bold text-[#251723] dark:text-[#fce8f3]">
              {t.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintPdf}
              className="px-4 py-1.5 bg-[#a73453] text-white rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#871a3c] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              View / Download PDF
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white dark:bg-[#341d31] border border-[#f4dced] dark:border-[#42263e] flex items-center justify-center text-[#564145] dark:text-[#eaddff] hover:text-[#a73453] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        </div>

        {/* Certificate Document Display */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#251723] dark:text-[#fce8f3]">
          
          {/* Certificate Graphical Document Box */}
          <div className="relative bg-gradient-to-br from-[#fff7f9] via-white to-[#ffe7f8] dark:from-[#281827] dark:via-[#20121e] dark:to-[#2e1c2d] p-6 sm:p-10 rounded-3xl border-4 border-[#f4dced] dark:border-[#42263e] shadow-lg text-center space-y-6">
            
            {/* Watermark Ribbon */}
            <div className="flex justify-between items-center border-b border-[#f4dced] dark:border-[#42263e] pb-4">
              <span className="text-[11px] font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest">
                OFFICIAL CERTIFICATE OF ACCOMPLISHMENT
              </span>
              <span className="px-3 py-1 bg-[#6c49b3]/10 text-[#6c49b3] dark:text-[#c084fc] rounded-full text-[11px] font-bold">
                {certificate.issuer}
              </span>
            </div>

            {/* Certificate Title & Recipient */}
            <div className="space-y-2">
              <p className="text-xs font-serif italic text-[#564145] dark:text-[#ddbfc3]">
                This certifies that
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#a73453] dark:text-[#ef6b8a]">
                Nadira Khumaira Putri
              </h2>
              <p className="text-xs font-serif italic text-[#564145] dark:text-[#ddbfc3]">
                has successfully completed the coursework for
              </p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#251723] dark:text-[#fce8f3] pt-1">
                {certificate.title}
              </h3>
            </div>

            {/* Preview Document Image if available */}
            {certificate.certificateImageUrl && (
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-[#f4dced] dark:border-[#42263e] my-4">
                <img
                  src={certificate.certificateImageUrl}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Summary Description */}
            {certificate.summary && (
              <p className="text-xs sm:text-sm text-[#564145] dark:text-[#ddbfc3] leading-relaxed max-w-xl mx-auto italic bg-white/60 dark:bg-black/30 p-4 rounded-2xl border border-[#f4dced]/60 dark:border-[#42263e]/60">
                "{certificate.summary}"
              </p>
            )}

            {/* Certificate Footer Metadata */}
            <div className="pt-4 border-t border-[#f4dced] dark:border-[#42263e] flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-medium text-[#564145] dark:text-[#ddbfc3]">
              <div>
                <span className="font-bold text-[#251723] dark:text-[#fce8f3]">{t.credentialId}:</span> {certificate.credentialId}
              </div>
              <div>
                <span className="font-bold text-[#251723] dark:text-[#fce8f3]">Issued Date:</span> {certificate.date}
              </div>
            </div>

          </div>

          {/* Covered Skills */}
          <div>
            <h4 className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest mb-3">
              {t.skillsCovered}
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#f4dced] dark:bg-[#341d31] text-[#251723] dark:text-[#fce8f3] rounded-full text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#fff7f9] dark:bg-[#281827] border-t border-[#f4dced] dark:border-[#42263e] flex justify-between items-center print:hidden">
          {certificate.verifyUrl && (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#6c49b3] dark:text-[#c084fc] flex items-center gap-1 hover:underline"
            >
              Verify Online Ledger
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#a73453] text-white rounded-full text-xs font-bold hover:bg-[#871a3c] transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};