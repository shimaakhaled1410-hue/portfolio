'use client';

import React, { useState } from 'react';
import { skillCategories } from '@/data/portfolioData';
import { 
  Smartphone, 
  Layers, 
  Sparkles, 
  Database, 
  Brain, 
  Wrench, 
  Cpu
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Layers,
  Sparkles,
  Database,
  Brain,
  Wrench,
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Stack' },
    { id: 'mobile', label: 'Flutter & Mobile' },
    { id: 'architecture', label: 'Clean Arch & BLoC' },
    { id: 'ai', label: 'AI & Cloud Services' },
    { id: 'cs', label: 'CS Fundamentals' },
    { id: 'tools', label: 'DevOps & Tools' },
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'mobile') return cat.title.includes('Mobile');
    if (selectedFilter === 'architecture') return cat.title.includes('Architecture');
    if (selectedFilter === 'ai') return cat.title.includes('AI') || cat.title.includes('Backend');
    if (selectedFilter === 'cs') return cat.title.includes('Computer Science');
    if (selectedFilter === 'tools') return cat.title.includes('Tools');
    return true;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-[#070a11]/50 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Tech Stack
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Structured around production reliability, clean code principles, and modern mobile capabilities.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Cpu;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges Container */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          skill.highlight
                            ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60'
                            : 'bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className="ml-1 text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>{category.skills.length} skills</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Production Tested</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
