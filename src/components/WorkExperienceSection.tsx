import React from 'react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const WorkExperienceSection: React.FC = () => {
  return (
    <section id="work" className="py-16 lg:py-24 bg-white dark:bg-[#1a0e19]">
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest block mb-3">
            CAREER TRAJECTORY
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#251723] dark:text-[#fce8f3] font-semibold mb-4">
            Work & Professional Experience
          </h2>
          <p className="text-base text-[#564145] dark:text-[#ddbfc3]">
            Bringing analytical rigor and technical execution to teams in data science and web engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#f4dced] dark:border-[#42263e] ml-4 sm:ml-8 lg:ml-12 space-y-12">
          {WORK_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Marker Circle */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-[#1a0e19] border-4 border-[#a73453] dark:border-[#ef6b8a] group-hover:scale-125 transition-transform" />

              <div className="bg-[#fff7f9] dark:bg-[#20121e] p-6 sm:p-8 rounded-[28px] border border-[#f4dced] dark:border-[#42263e] shadow-sm hover:shadow-md transition-shadow">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#251723] dark:text-[#fce8f3]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-[#a73453] dark:text-[#ef6b8a] mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-[#6c49b3]/10 dark:bg-[#c084fc]/20 text-[#6c49b3] dark:text-[#c084fc] rounded-full text-xs font-bold">
                      {exp.type}
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-[#281827] border border-[#f4dced] dark:border-[#42263e] text-[#564145] dark:text-[#ddbfc3] rounded-full text-xs font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#564145] dark:text-[#ddbfc3] mb-4 font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#a73453] dark:text-[#ef6b8a]">location_on</span>
                  {exp.location}
                </p>

                <p className="text-sm text-[#564145] dark:text-[#ddbfc3] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-5">
                  <h4 className="text-xs font-bold text-[#251723] dark:text-[#fce8f3] uppercase tracking-wider">
                    Key Highlights & Impact
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#564145] dark:text-[#ddbfc3]">
                        <span className="material-symbols-outlined text-[#a73453] dark:text-[#ef6b8a] text-base mt-0.5">
                          check_circle
                        </span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f4dced]/80 dark:border-[#42263e]">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-[#f4dced] dark:bg-[#341d31] text-[#251723] dark:text-[#fce8f3] rounded-full text-[11px] font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
