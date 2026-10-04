'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';
import { 
  User, 
  MapPin, 
  Mail, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Smartphone,
  Copy,
  Check
} from 'lucide-react';

export default function About() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const engineeringPillars = [
    {
      icon: ShieldCheck,
      title: 'Clean Architecture Decoupling',
      description: 'Domain, Data, and Presentation separation with Dartz Either error handling and GetIt dependency injection.',
      color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/60',
    },
    {
      icon: Layers,
      title: 'Predictable State Management',
      description: 'Event-driven BLoC and Cubit architectures ensuring testable state transitions and zero UI lag.',
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60',
    },
    {
      icon: Sparkles,
      title: 'Multimodal AI Integration',
      description: 'Transforming mobile apps into intelligent agents with Google Gemini API, computer vision scanning, and STT.',
      color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800/60',
    },
    {
      icon: Smartphone,
      title: 'Offline-First & Localization',
      description: 'Local persistence (Hive, Prefs) syncing with Firestore, paired with bi-directional AR/EN localization.',
      color: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800/60',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-[#070a11]/50 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A software engineer grounded in Computer Science fundamentals, crafting enterprise Flutter applications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Bio Text & Stylized Photo (Balanced 2-Column Row) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Bio Text & Profile Overview */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Professional Philosophy Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Professional Philosophy
                </h3>

                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                  <p className="border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-r-lg font-medium text-slate-800 dark:text-slate-200">
                    &ldquo;{personalInfo.aboutStatement}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    With a solid Computer Science background from <strong>Ain Shams University (FCIS)</strong>, I build mobile applications that pair rigorous software engineering with intuitive, responsive user experiences.
                  </p>
                </div>
              </div>

              {/* Profile Overview Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                  Quick Profile Overview
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <User className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>Full Name:</span>
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {personalInfo.formalName}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>Role:</span>
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Software Engineer | Flutter
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>Location:</span>
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>University:</span>
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white text-right">
                      Ain Shams University (FCIS)
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Experience:</span>
                    </span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {personalInfo.experienceYears} Hands-on
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>Email:</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        {personalInfo.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        aria-label="Copy email address"
                        className="p-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Stylized Profile Photo Frame */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto group">
                {/* Soft ambient background glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                
                {/* Stylized photo frame */}
                <div className="relative rounded-3xl overflow-hidden border border-teal-500/20 bg-slate-900/60 shadow-2xl shadow-teal-500/10 aspect-[3/4] w-full">
                  <Image
                    src="/assets/Shimaa Khaled.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 384px, 448px"
                    priority
                  />
                  
                  {/* Subtle bottom vignette and caption badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs pointer-events-none">
                    <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-teal-500/30 flex items-center gap-2 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold text-white">{personalInfo.name}</span>
                    </div>
                    <span className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 text-cyan-300 font-medium shadow-sm">
                      Flutter Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Engineering Pillars Grid (4 columns across) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {engineeringPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors shadow-xs"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${pillar.color} mb-3`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
