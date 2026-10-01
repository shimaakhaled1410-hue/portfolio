'use client';

import React, { useState } from 'react';
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Shimaa Khaled</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Mobile Solutions with Precision
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A software engineer grounded in Computer Science fundamentals, crafting enterprise Flutter applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Statement */}
          <div className="lg:col-span-7 space-y-6">
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

            {/* Engineering Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          {/* Right Column: Identity Card & Code Block */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Profile Overview Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-3">
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

            {/* Architecture Code Snippet */}
            <div className="rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-800 p-5 shadow-lg font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400">lib/core/architecture.dart</span>
                </div>
                <span className="text-[10px] text-emerald-400">Clean Arch • BLoC</span>
              </div>
              <pre className="overflow-x-auto text-[11px] leading-relaxed text-slate-300">
                <code>
{`// Presentation -> Domain -> Data
class CalorieTrackerBloc extends Bloc<CalorieEvent, CalorieState> {
  final AnalyzePlateUseCase analyzePlate;

  CalorieTrackerBloc({required this.analyzePlate}) : super(CalorieInitial()) {
    on<ScanFoodImageEvent>(_onScanFood);
  }

  Future<void> _onScanFood(
    ScanFoodImageEvent event, 
    Emitter<CalorieState> emit
  ) async {
    emit(CalorieAnalyzing());
    final result = await analyzePlate(event.imageBytes);
    result.fold(
      (failure) => emit(CalorieError(failure.message)),
      (nutrients) => emit(CalorieLoaded(nutrients)),
    );
  }
}`}
                </code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
