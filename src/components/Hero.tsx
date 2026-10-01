'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  ArrowRight, 
  Sparkles, 
  Mail, 
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface HeroProps {
  onSelectProject?: (projectId: string) => void;
}

type AppKey = 'calogram' | 'wedo' | 'monometro';

export default function Hero({ onSelectProject }: HeroProps) {
  const [activeApp, setActiveApp] = useState<AppKey>('calogram');
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>('');

  const appScreenshots: Record<AppKey, string[]> = {
    calogram: Array.from({ length: 28 }, (_, i) => `/assets/${i + 1} CaloGram.jpeg`),
    wedo: Array.from({ length: 12 }, (_, i) => `/assets/${i + 1} WeDo.jpeg`),
    monometro: Array.from({ length: 8 }, (_, i) => `/assets/${i + 1} MonoMetro.jpeg`),
  };

  const appShowcases: Record<AppKey, {
    id: string;
    name: string;
    fallbackImage: string;
  }> = {
    calogram: {
      id: 'calogram',
      name: 'CaloGram',
      fallbackImage: '/assets/CaloGram_Freelancing_Project_Dashboard.png',
    },
    wedo: {
      id: 'wedo',
      name: 'WeDo',
      fallbackImage: '/assets/WeDo_Freelancing_Project_Create_Project.png',
    },
    monometro: {
      id: 'monometro',
      name: 'MonoMetro',
      fallbackImage: '/assets/Metro_Freelancing_Project_Splash.png',
    },
  };

  const currentApp = appShowcases[activeApp];
  const slides = appScreenshots[activeApp];

  // Update current image src when activeApp or slideIndex changes
  useEffect(() => {
    setImgSrc(slides[slideIndex] || currentApp.fallbackImage);
  }, [activeApp, slideIndex, slides, currentApp.fallbackImage]);

  // Preload images for current active app
  useEffect(() => {
    slides.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [activeApp, slides]);

  // Auto-slide cycle every 2 seconds (2000ms)
  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTabChange = (key: AppKey) => {
    setActiveApp(key);
    setSlideIndex(0);
  };

  // Image error fallback
  const handleImageError = () => {
    setImgSrc(currentApp.fallbackImage);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white dark:bg-[#070a11] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Bio */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-cyan-500/10 dark:bg-cyan-950/50 border border-cyan-500/20 dark:border-cyan-800/60 text-cyan-700 dark:text-cyan-300 shadow-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Software Engineer | Flutter Developer</span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-slate-600 dark:text-slate-400 font-normal">Cairo, Egypt</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                  Shimaa Khaled
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200">
                Architecting Scalable Mobile Applications with Clean Code & AI.
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              >
                <Mail className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Focused Contact Points */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Contact:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
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
                className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="Email Shimaa Khaled"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 shadow-xs">
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

          {/* Right Column: Clean Mobile Mockup Carousel Showcase (No overlapping badges/pill overlays) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* App Switcher Tabs / Chips (1. CaloGram, 2. WeDo, 3. MonoMetro - NO count numbers) */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 mb-4 shadow-sm">
              <button
                onClick={() => handleTabChange('calogram')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeApp === 'calogram'
                    ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                CaloGram
              </button>
              <button
                onClick={() => handleTabChange('wedo')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeApp === 'wedo'
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-cyan-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                WeDo
              </button>
              <button
                onClick={() => handleTabChange('monometro')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeApp === 'monometro'
                    ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm border border-teal-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                MonoMetro
              </button>
            </div>

            {/* Phone Frame Container */}
            <div 
              className="relative group w-full max-w-[320px] sm:max-w-[340px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Glow Accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-[44px] blur-lg opacity-25 group-hover:opacity-45 transition duration-500" />

              {/* Phone Body */}
              <div className="relative rounded-[40px] p-2.5 bg-slate-900 dark:bg-slate-950 border-[3px] border-slate-700 dark:border-slate-800 shadow-2xl overflow-hidden">
                
                {/* Dynamic Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-26 h-4.5 bg-black rounded-full z-30 flex items-center justify-center pointer-events-none border border-slate-800/80">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2 border border-slate-700" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Screen Viewport with Top & Bottom Safe Area Padding */}
                <div className="relative rounded-[32px] overflow-hidden aspect-[9/18.5] bg-slate-950 flex flex-col justify-between pt-11 pb-5 px-1">
                  
                  {/* Image Display Container */}
                  <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden rounded-[20px]">
                    <img
                      src={imgSrc}
                      alt={`${currentApp.name} slide ${slideIndex + 1}`}
                      onError={handleImageError}
                      className="w-full h-full object-contain object-center transition-all duration-500 transform scale-100 group-hover:scale-[1.01]"
                    />

                    {/* Manual Navigation Overlay Arrows (on hover) */}
                    <button
                      onClick={prevSlide}
                      aria-label="Previous slide"
                      className="absolute left-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/75 text-white hover:bg-slate-900 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 z-30"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/75 text-white hover:bg-slate-900 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 z-30"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Top Right Pause / Resume Control Pill */}
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-slate-300 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => setIsPaused(!isPaused)} 
                        aria-label={isPaused ? 'Resume auto slide' : 'Pause auto slide'}
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                      >
                        {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
                        <span>{isPaused ? 'Paused' : 'Auto'}</span>
                      </button>
                    </div>

                  </div>

                </div>

                {/* Home Indicator Bar */}
                <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
