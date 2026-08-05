import React, { useState } from 'react';
import { getProjectsData } from '../data/portfolioData';
import { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { TRANSLATIONS, Language } from '../data/translations';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const isInd = lang === 'id';
  const t = TRANSLATIONS[lang].projects;
  const projectsData = getProjectsData(lang);

  const categories = isInd
    ? ['Semua', 'Analisis Data', 'Data Science', 'Data Engineering', 'Web Dev', 'Analisis Bisnis & Sistem']
    : ['All', 'Data Analysis', 'Data Science', 'Data Engineering', 'Web Dev', 'Business & System Analysis'];

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  // Filter projects according to category
  const filteredProjects = (selectedCategory === 'All' || selectedCategory === 'Semua')
    ? projectsData
    : projectsData.filter((p) => {
        if (selectedCategory === 'Analisis Data' || selectedCategory === 'Data Analysis') {
          return p.category.includes('Analys') || p.category.includes('Analisi') || p.category === 'Data Analyst';
        }
        if (selectedCategory === 'Data Engineering') {
          return p.category.includes('Engineering') || p.category.includes('Engineer');
        }
        if (selectedCategory === 'Analisis Bisnis & Sistem' || selectedCategory === 'Business & System Analysis') {
          return p.category.includes('Bisnis') || p.category.includes('Business') || p.category.includes('System');
        }
        return p.category === selectedCategory;
      });

  // Limit displayed projects to 6 unless 'showAll' is active
  const INITIAL_LIMIT = 6;
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_LIMIT);
  const hasMore = filteredProjects.length > INITIAL_LIMIT;

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setShowAll(false); // Reset to collapsed view when switching tabs
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#ffeff9]/30 dark:bg-[#1f121e]/40 border-t border-[#f4dced]/50 dark:border-[#382035]">
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest block mb-3">
            {t.subtitle}
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#251723] dark:text-[#fce8f3] font-semibold mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#564145] dark:text-[#ddbfc3]">
            {t.description}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#a73453] dark:bg-[#ef6b8a] text-white shadow-md'
                    : 'bg-white dark:bg-[#281827] text-[#564145] dark:text-[#ddbfc3] hover:bg-[#ffe7f8] dark:hover:bg-[#341d31] border border-[#f4dced] dark:border-[#42263e]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#20121e] rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#f4dced] dark:border-[#42263e] flex flex-col group hover:-translate-y-1"
            >
              {/* Image Preview with Category Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ffe7f8] dark:bg-[#2e1c2d]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#281827]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#a73453] dark:text-[#ef6b8a] shadow-sm">
                  {project.category}
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-[#6c49b3] text-white px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-xs">star</span>
                    {isInd ? 'Unggulan' : 'Featured'}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tool Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 bg-[#f4dced]/60 dark:bg-[#341d31] text-[#564145] dark:text-[#ddbfc3] rounded-md text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#251723] dark:text-[#fce8f3] mb-2 group-hover:text-[#a73453] dark:group-hover:text-[#ef6b8a] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#6c49b3] dark:text-[#c084fc] mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#564145] dark:text-[#ddbfc3] leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Quick Metric Snippet */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="p-3 bg-[#ffeff9] dark:bg-[#2e1c2d] rounded-2xl border border-[#f4dced] dark:border-[#42263e] mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-[#564145] dark:text-[#ddbfc3] font-medium uppercase tracking-wider">
                          {project.metrics[0].label}
                        </p>
                        <p className="text-base font-bold text-[#a73453] dark:text-[#ef6b8a]">
                          {project.metrics[0].value}
                        </p>
                      </div>
                      {project.metrics[0].change && (
                        <span className="text-[10px] font-semibold text-[#006c4c] dark:text-[#34d399] bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                          {project.metrics[0].change}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full py-3 bg-[#ffe7f8] dark:bg-[#341d31] text-[#a73453] dark:text-[#ef6b8a] hover:bg-[#a73453] hover:text-white dark:hover:bg-[#ef6b8a] dark:hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {t.viewCaseStudy}
                  <span className="material-symbols-outlined text-base">visibility</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See All / Show Less Toggle Button */}
        {(hasMore || showAll) && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 bg-white dark:bg-[#20121e] hover:bg-[#ffeff9] dark:hover:bg-[#2e1c2d] text-[#a73453] dark:text-[#ef6b8a] border border-[#a73453]/30 dark:border-[#ef6b8a]/30 rounded-full text-xs font-bold transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>
                {showAll
                  ? (isInd ? 'Tampilkan Lebih Sedikit' : 'Show Less')
                  : (isInd 
                      ? `Lihat Semua Project (${filteredProjects.length} Project)` 
                      : `View All Projects (${filteredProjects.length} Projects)`)}
              </span>
              <span className="material-symbols-outlined text-base">
                {showAll ? 'keyboard_arrow_up' : 'grid_view'}
              </span>
            </button>
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          lang={lang}
        />
      )}
    </section>
  );
};
