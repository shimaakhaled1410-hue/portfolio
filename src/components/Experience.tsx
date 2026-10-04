'use client';

import React from 'react';
import { experiences } from '@/data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-white dark:bg-[#070a11] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Proven track record delivering reliable cross-platform mobile software.
          </p>
        </div>

        {/* Clean Aligned Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-teal-500 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Connected Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-[#090d16] border-2 border-cyan-500 dark:border-cyan-400 shadow-md shadow-cyan-500/50 hidden sm:flex items-center justify-center z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  </div>

                  {/* Desktop Opposite Spacer */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Timeline Card */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm transition-all duration-300">
                      
                      {/* Date Pill & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/80">
                          <Calendar className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />
                          <span>{exp.period}</span>
                        </span>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                            Current Role
                          </span>
                        )}
                      </div>

                      {/* Job Title & Company */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 mt-1 mb-4">
                        <span className="flex items-center gap-1 text-slate-800 dark:text-slate-200 font-semibold">
                          <Building2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Minimal Bullet Points (1-2 punchy lines) */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Chips */}
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
