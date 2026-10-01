'use client';

import React from 'react';
import { educations } from '@/data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

export default function Education() {
  const edu = educations[0];

  return (
    <section id="education" className="py-20 lg:py-24 relative bg-white dark:bg-[#070a11] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Degree</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & CS Foundation
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Rigorous undergraduate degree in Computer Science & Systems Engineering.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden">
            
            {/* Top decorative gradient band */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                    {edu.institution}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    {edu.faculty}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/80">
                  <Calendar className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>{edu.period}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>{edu.location}</span>
                </span>
                {edu.status && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/30 mt-1">
                    {edu.status}
                  </span>
                )}
              </div>
            </div>

            {/* Coursework & Academic Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              
              {/* Relevant Coursework (No truncation so full course names are completely visible) */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Key Coursework</span>
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {edu.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 leading-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0 mt-1" />
                      <span className="break-words">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Academic Honors */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Academic Focus</span>
                </h4>
                <ul className="space-y-3">
                  {edu.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
