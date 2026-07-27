import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface ToolsTechnologiesSectionProps {
  onLearnMoreProcess: () => void;
}

export const ToolsTechnologiesSection: React.FC<ToolsTechnologiesSectionProps> = ({ onLearnMoreProcess }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="tools" className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 lg:mb-16">
          <div className="max-w-lg">
            <span className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest block mb-3">
              TECHNICAL PROFICIENCY
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#251723] dark:text-[#fce8f3] font-semibold">
              Tools & Technologies
            </h2>
            <p className="text-base text-[#564145] dark:text-[#ddbfc3] mt-3 leading-relaxed">
              The modern stack I use to transform raw data into actionable business insights and web experiences.
            </p>
          </div>

          {/* Decorative icons stack */}
          <div className="hidden md:block">
            <div className="flex -space-x-3">
              <div className="w-11 h-11 rounded-full border-2 border-white dark:border-[#281827] bg-[#a73453]/15 flex items-center justify-center text-[#a73453] dark:text-[#ef6b8a] shadow-sm">
                <span className="material-symbols-outlined text-sm">bolt</span>
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-white dark:border-[#281827] bg-[#6c49b3]/15 flex items-center justify-center text-[#6c49b3] dark:text-[#c084fc] shadow-sm">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-white dark:border-[#281827] bg-[#006c4c]/15 flex items-center justify-center text-[#006c4c] dark:text-[#34d399] shadow-sm">
                <span className="material-symbols-outlined text-sm">token</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Columns Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = activeCategory === cat.title;
            return (
              <div
                key={idx}
                onClick={() => setActiveCategory(isSelected ? null : cat.title)}
                className={`p-8 bg-[#ffe7f8] dark:bg-[#20121e] rounded-[32px] group hover:bg-white dark:hover:bg-[#281827] hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#f4dced] dark:border-[#42263e] ${
                  isSelected ? 'bg-white dark:bg-[#281827] shadow-xl ring-2 ring-[#a73453] dark:ring-[#ef6b8a]' : ''
                }`}
              >
                {/* Icon Circle */}
                <div
                  className="w-14 h-14 bg-white dark:bg-[#2e1c2d] rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-colors group-hover:scale-105"
                  style={{
                    backgroundColor: isSelected ? `${cat.accentColor}25` : undefined
                  }}
                >
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ color: cat.accentColor }}
                  >
                    {cat.icon}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#251723] dark:text-[#fce8f3] mb-6 font-semibold">
                  {cat.title}
                </h3>

                {/* Tags List */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 rounded-full text-xs font-bold transition-all"
                      style={{
                        backgroundColor: `${cat.accentColor}20`,
                        color: cat.accentColor
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Tool Workspace Visualization Banner */}
        <div className="mt-12 lg:mt-16 rounded-[36px] overflow-hidden shadow-xl border border-white/80 dark:border-[#42263e] relative group bg-gradient-to-r from-[#ffe7f8] via-[#f9e1f2] to-[#ffeff9] dark:from-[#2e1c2d] dark:via-[#251624] dark:to-[#20121e] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3.5 py-1 bg-[#a73453]/10 dark:bg-[#ef6b8a]/20 text-[#a73453] dark:text-[#ef6b8a] rounded-full text-xs font-bold uppercase tracking-wider">
                Analytical Workflow & Architecture
              </span>
              <h4 className="font-serif text-2xl lg:text-3xl font-semibold text-[#251723] dark:text-[#fce8f3]">
                From Raw Data to Decision-Ready Dashboards
              </h4>
              <p className="text-sm text-[#564145] dark:text-[#ddbfc3] leading-relaxed max-w-xl">
                Every project combines rigorous statistical cleaning, RFM segmentation, dynamic SQL queries, and lightweight React frontend visualizations to present insights with executive clarity.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end gap-4">
              <p className="text-xs font-medium text-[#251723] dark:text-[#fce8f3] bg-white/80 dark:bg-[#281827]/80 backdrop-blur-md px-5 py-3 rounded-full border border-white/60 dark:border-[#42263e] shadow-sm">
                Explore all specialized technologies in my detailed project case studies.
              </p>
              <button
                onClick={onLearnMoreProcess}
                className="text-sm font-semibold text-[#a73453] dark:text-[#ef6b8a] flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group/link bg-white dark:bg-[#281827] px-6 py-3 rounded-full shadow-md hover:shadow-lg border border-[#f4dced] dark:border-[#42263e]"
              >
                Learn more about my process
                <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">
                  trending_flat
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
