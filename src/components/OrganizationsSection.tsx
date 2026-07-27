import React, { useState } from 'react';
import { ORGANIZATIONS_DATA } from '../data/portfolioData';

export const OrganizationsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="organizations" className="py-16 lg:py-24 bg-[#ffeff9]/30 dark:bg-[#1a0e19]/50">
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest block mb-3">
            LEADERSHIP, ACTIVITIES & VOLUNTEERING
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#251723] dark:text-[#fce8f3] font-semibold mb-4">
            Organizations & Communities
          </h2>
          <p className="text-base text-[#564145] dark:text-[#ddbfc3]">
            Empowering peers, volunteering, and fostering data & tech literacy through community initiatives and active leadership.
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ORGANIZATIONS_DATA.map((org) => (
            <div
              key={org.id}
              className="p-7 bg-white dark:bg-[#20121e] rounded-[32px] border border-[#f4dced] dark:border-[#42263e] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Icon Header */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#a73453]/10 dark:bg-[#ef6b8a]/20 flex items-center justify-center text-[#a73453] dark:text-[#ef6b8a]">
                    <span className="material-symbols-outlined text-2xl">
                      {org.type?.includes('Volunteer') ? 'volunteer_activism' : 'groups'}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    {org.type && (
                      <span className="px-3 py-0.5 bg-[#a73453]/10 dark:bg-[#ef6b8a]/20 text-[#a73453] dark:text-[#ef6b8a] rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {org.type}
                      </span>
                    )}
                    <span className="px-3 py-0.5 bg-[#6c49b3]/10 dark:bg-[#c084fc]/20 text-[#6c49b3] dark:text-[#c084fc] rounded-full text-[11px] font-bold">
                      {org.period}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#251723] dark:text-[#fce8f3] mb-1">
                  {org.role}
                </h3>
                
                <p className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] mb-4">
                  {org.organization}
                </p>

                {/* 1-3 Image Gallery */}
                {org.images && org.images.length > 0 && (
                  <div className="mb-5 overflow-hidden rounded-2xl border border-[#f4dced] dark:border-[#42263e] bg-[#ffe7f8] dark:bg-[#2e1c2d]">
                    {org.images.length === 1 && (
                      <div
                        onClick={() => setSelectedImage(org.images![0])}
                        className="relative aspect-video overflow-hidden cursor-pointer group/img"
                      >
                        <img
                          src={org.images[0]}
                          alt={`${org.organization} activity`}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white">
                          <span className="material-symbols-outlined text-2xl">zoom_in</span>
                        </div>
                      </div>
                    )}

                    {org.images.length === 2 && (
                      <div className="grid grid-cols-2 gap-1 p-1 bg-[#f4dced] dark:bg-[#341d31]">
                        {org.images.map((imgUrl, imgIdx) => (
                          <div
                            key={imgIdx}
                            onClick={() => setSelectedImage(imgUrl)}
                            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group/img"
                          >
                            <img
                              src={imgUrl}
                              alt={`${org.organization} photo ${imgIdx + 1}`}
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white">
                              <span className="material-symbols-outlined text-xl">zoom_in</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {org.images.length >= 3 && (
                      <div className="grid grid-cols-3 gap-1 p-1 bg-[#f4dced] dark:bg-[#341d31]">
                        {org.images.slice(0, 3).map((imgUrl, imgIdx) => (
                          <div
                            key={imgIdx}
                            onClick={() => setSelectedImage(imgUrl)}
                            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group/img"
                          >
                            <img
                              src={imgUrl}
                              alt={`${org.organization} photo ${imgIdx + 1}`}
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white">
                              <span className="material-symbols-outlined text-lg">zoom_in</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <p className="text-xs text-[#564145] dark:text-[#ddbfc3] leading-relaxed mb-6">
                  {org.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#f4dced]/80 dark:border-[#42263e]">
                  <p className="text-[11px] font-bold text-[#251723] dark:text-[#fce8f3] uppercase tracking-wider">
                    Key Contributions
                  </p>
                  <ul className="space-y-2">
                    {org.keyContributions.map((contrib, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#564145] dark:text-[#ddbfc3]">
                        <span className="material-symbols-outlined text-[#a73453] dark:text-[#ef6b8a] text-sm mt-0.5">
                          arrow_right
                        </span>
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <div className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <img
              src={selectedImage}
              alt="Activity Preview"
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl border-2 border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  );
};
