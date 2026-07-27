import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 lg:py-24 bg-[#ffeff9]/50 dark:bg-[#1f121e]/50">
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest block mb-3">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#251723] dark:text-[#fce8f3] font-semibold mb-4">
            Education & Academic Honors
          </h2>
          <p className="text-base text-[#564145] dark:text-[#ddbfc3]">
            Strong theoretical foundation in computer science, statistical inference, and software architecture.
          </p>
        </div>

        {/* Education Card */}
        {EDUCATION_DATA.map((edu) => (
          <div
            key={edu.id}
            className="bg-white dark:bg-[#20121e] p-8 sm:p-10 rounded-[32px] border border-[#f4dced] dark:border-[#42263e] shadow-md relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6 pb-6 border-b border-[#f4dced] dark:border-[#42263e]">
              <div>
                <span className="px-3.5 py-1 bg-[#a73453]/10 dark:bg-[#ef6b8a]/20 text-[#a73453] dark:text-[#ef6b8a] rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  Undergraduate Degree
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#251723] dark:text-[#fce8f3]">
                  {edu.degree}
                </h3>
                <p className="text-base font-semibold text-[#6c49b3] dark:text-[#c084fc] mt-1">
                  {edu.institution}
                </p>
              </div>

              <div className="flex flex-col lg:items-end gap-2">
                <span className="px-4 py-1.5 bg-[#6c49b3] text-white rounded-full text-xs font-bold shadow-sm">
                  GPA: {edu.gpa}
                </span>
                <p className="text-xs font-medium text-[#564145] dark:text-[#ddbfc3]">
                  {edu.period} • {edu.location}
                </p>
              </div>
            </div>

            {/* Honors */}
            {edu.honors && (
              <div className="p-4 bg-[#fff7f9] dark:bg-[#281827] rounded-2xl border border-[#f4dced] dark:border-[#42263e] flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#a73453] dark:text-[#ef6b8a] text-2xl">
                  workspace_premium
                </span>
                <div>
                  <p className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-wider">
                    Honors & Distinction
                  </p>
                  <p className="text-sm font-semibold text-[#251723] dark:text-[#fce8f3]">
                    {edu.honors}
                  </p>
                </div>
              </div>
            )}

            <p className="text-sm text-[#564145] dark:text-[#ddbfc3] leading-relaxed mb-6">
              {edu.description}
            </p>

            {/* Coursework Grid */}
            <div>
              <h4 className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest mb-3">
                Key Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {edu.relevantCoursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#ffeff9] dark:bg-[#2e1c2d] rounded-xl border border-[#f4dced] dark:border-[#42263e] text-xs font-semibold text-[#251723] dark:text-[#fce8f3] flex items-center gap-2 hover:bg-[#ffe7f8] dark:hover:bg-[#382035] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#6c49b3] dark:bg-[#c084fc]" />
                    {course}
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
