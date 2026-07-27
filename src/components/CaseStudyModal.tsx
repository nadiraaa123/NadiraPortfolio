import React from 'react';
import { Project } from '../types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-white dark:bg-[#20121e] w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl border border-[#f4dced] dark:border-[#42263e] max-h-[90vh] flex flex-col my-auto relative">
        
        {/* Sticky Modal Header */}
        <div className="px-6 py-5 bg-[#fff7f9] dark:bg-[#281827] border-b border-[#f4dced] dark:border-[#42263e] flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="px-3 py-1 bg-[#a73453]/10 dark:bg-[#ef6b8a]/20 text-[#a73453] dark:text-[#ef6b8a] rounded-full text-[11px] font-bold uppercase tracking-wider">
              {project.category} Case Study
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#251723] dark:text-[#fce8f3] mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white dark:bg-[#20121e] border border-[#f4dced] dark:border-[#42263e] flex items-center justify-center text-[#564145] dark:text-[#ddbfc3] hover:text-[#a73453] dark:hover:text-[#ef6b8a] hover:bg-[#ffe7f8] dark:hover:bg-[#341d31] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Banner Image & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#ffeff9] dark:bg-[#281827] p-6 rounded-3xl border border-[#f4dced] dark:border-[#42263e]">
            <div className="md:col-span-5 aspect-video rounded-2xl overflow-hidden shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <h4 className="text-sm font-bold text-[#6c49b3] dark:text-[#c084fc] uppercase tracking-wider">
                {project.subtitle}
              </h4>
              <p className="text-sm text-[#564145] dark:text-[#ddbfc3] leading-relaxed">
                {project.fullStory || project.description}
              </p>
              
              {/* External Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#a73453] dark:bg-[#ef6b8a] text-white rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#871a3c] dark:hover:bg-[#d94668] transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    Live Dashboard
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white dark:bg-[#20121e] text-[#251723] dark:text-[#fce8f3] border border-[#f4dced] dark:border-[#42263e] rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#ffe7f8] dark:hover:bg-[#341d31] transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    GitHub Repository
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest mb-4">
                Quantitative Business Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white dark:bg-[#281827] rounded-2xl border border-[#f4dced] dark:border-[#42263e] shadow-sm text-center"
                  >
                    <p className="text-2xl font-serif font-bold text-[#a73453] dark:text-[#ef6b8a]">
                      {metric.value}
                    </p>
                    <p className="text-xs font-semibold text-[#251723] dark:text-[#fce8f3] mt-1">
                      {metric.label}
                    </p>
                    {metric.change && (
                      <p className="text-[11px] font-medium text-[#006c4c] dark:text-[#34d399] mt-1">
                        {metric.change}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Recharts Visualization (if chartData available) */}
          {project.chartData && (
            <div className="bg-white dark:bg-[#281827] p-6 rounded-3xl border border-[#f4dced] dark:border-[#42263e] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#251723] dark:text-[#fce8f3]">
                    Performance Analytics Trend
                  </h4>
                  <p className="text-xs text-[#564145] dark:text-[#ddbfc3]">
                    Measured progression vs Industry benchmark
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#6c49b3]/10 dark:bg-[#c084fc]/20 text-[#6c49b3] dark:text-[#c084fc] text-xs font-bold rounded-full">
                  Interactive Chart
                </span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={project.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#42263e" />
                    <XAxis dataKey="name" stroke="#ddbfc3" fontSize={12} />
                    <YAxis stroke="#ddbfc3" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#20121e',
                        borderColor: '#42263e',
                        color: '#fce8f3',
                        borderRadius: '12px',
                        fontSize: '12px'
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px', color: '#fce8f3' }} />
                    <Bar dataKey="value" name="Project Result" fill="#ef6b8a" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="benchmark" name="Benchmark" fill="#c084fc" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Key Analytical Insights */}
          {project.keyInsights && project.keyInsights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest mb-3">
                Key Analytical Findings
              </h4>
              <ul className="space-y-2.5">
                {project.keyInsights.map((insight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-[#fff7f9] dark:bg-[#281827] rounded-2xl border border-[#f4dced]/80 dark:border-[#42263e] text-xs sm:text-sm text-[#564145] dark:text-[#ddbfc3]"
                  >
                    <span className="material-symbols-outlined text-[#a73453] dark:text-[#ef6b8a] text-lg mt-0.5">
                      check_circle
                    </span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools & Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-[#a73453] dark:text-[#ef6b8a] uppercase tracking-widest mb-3">
              Technologies & Methodologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 bg-[#f4dced] dark:bg-[#341d31] text-[#251723] dark:text-[#fce8f3] rounded-full text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#fff7f9] dark:bg-[#281827] border-t border-[#f4dced] dark:border-[#42263e] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#a73453] dark:bg-[#ef6b8a] text-white rounded-full text-xs font-bold hover:bg-[#871a3c] dark:hover:bg-[#d94668] transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
