'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Sparkles, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Smartphone,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface HeroProps {
  onOpenResume?: () => void;
  onSelectProject?: (projectId: string) => void;
}

export default function Hero({ onOpenResume, onSelectProject }: HeroProps) {
  const [activeApp, setActiveApp] = useState<'calogram' | 'wedo' | 'metro'>('calogram');

  const appShowcases = {
    calogram: {
      id: 'calogram',
      name: 'CaloGram',
      badge: 'Multimodal AI & Nutrition',
      tagline: 'Instant AI calorie scanner & macro tracking',
      image: '/assets/CaloGram_Freelancing_Project_Dashboard.png',
      color: 'from-emerald-500 to-green-600',
      pillBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      stack: ['Flutter', 'Gemini AI', 'Clean Arch', 'Firestore'],
    },
    wedo: {
      id: 'wedo',
      name: 'WeDo',
      badge: 'Real-Time SaaS Collaboration',
      tagline: 'Real-time task synchronization & team roles',
      image: '/assets/WeDo_Freelancing_Project_Create_Project.png',
      color: 'from-blue-600 to-indigo-600',
      pillBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      stack: ['Flutter', 'BLoC', 'Cloud Functions', 'FCM'],
    },
    metro: {
      id: 'metro-transit',
      name: 'Cairo Metro',
      badge: 'Offline Transit & AR/EN',
      tagline: 'Bilingual offline route planner & accessibility',
      image: '/assets/Metro_Freelancing_Project_Splash.png',
      color: 'from-sky-500 to-blue-700',
      pillBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
      stack: ['Flutter', 'Dart', 'Localization', 'Routing'],
    },
  };

  const currentApp = appShowcases[activeApp];

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 shadow-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Software Engineer | Flutter Developer</span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">Cairo, Egypt</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                  Shimaa Khaled
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200">
                Architecting Scalable Mobile Applications with Clean Code & AI.
              </p>
            </div>

            {/* Summary Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <Sparkles className="w-4 h-4" />
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <FileDown className="w-4 h-4 text-blue-500" />
                  <span>Download CV</span>
                </button>
              )}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="Email Shimaa Khaled"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

            {/* Key Metrics / Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                  <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Mobile Mockup Device Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* App Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 dark:bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-800 mb-4 shadow-sm">
              <button
                onClick={() => setActiveApp('calogram')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeApp === 'calogram'
                    ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                CaloGram (AI)
              </button>
              <button
                onClick={() => setActiveApp('wedo')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeApp === 'wedo'
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm border border-blue-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                WeDo (SaaS)
              </button>
              <button
                onClick={() => setActiveApp('metro')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeApp === 'metro'
                    ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm border border-sky-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Cairo Metro
              </button>
            </div>

            {/* Realistic Device Frame */}
            <div className="relative group w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[44px] blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* Phone Body */}
              <div className="relative rounded-[40px] p-2.5 bg-slate-900 border-[3px] border-slate-700/80 shadow-2xl overflow-hidden">
                
                {/* Dynamic Island / Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2 border border-slate-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Screen Content */}
                <div className="relative rounded-[32px] overflow-hidden aspect-[9/18.5] bg-slate-950 flex flex-col">
                  
                  {/* Image Display */}
                  <div className="relative w-full h-full">
                    <Image
                      src={currentApp.image}
                      alt={currentApp.name}
                      fill
                      priority
                      className="object-contain object-top transition-opacity duration-300 hover:scale-[1.02] transform transition-transform"
                    />

                    {/* Bottom Floating Info Pill inside phone */}
                    <div className="absolute inset-x-2 bottom-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 shadow-lg text-left">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${currentApp.pillBg}`}>
                          {currentApp.badge}
                        </span>
                        {onSelectProject && (
                          <button
                            onClick={() => onSelectProject(currentApp.id)}
                            className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                          >
                            <span>Explore</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white mt-1">
                        {currentApp.name}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-1">
                        {currentApp.tagline}
                      </p>
                      
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {currentApp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Home indicator bar */}
                <div className="w-28 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-4 -left-4 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Clean Architecture</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Strict Layer Decoupling</div>
                </div>
              </div>

              {/* Floating State Management Badge */}
              <div className="absolute -top-4 -right-4 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">BLoC & Cubit</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Predictable State Flows</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
