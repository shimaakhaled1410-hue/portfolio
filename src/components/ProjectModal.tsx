'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Play, 
  Film
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenVideo?: (videoUrl: string, title: string) => void;
}

export default function ProjectModal({ project, onClose, onOpenVideo }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'gallery'>('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentGalleryItem = project.gallery[activeImageIndex] || project.gallery[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl my-auto rounded-3xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="p-3 sm:p-6 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-slate-50 dark:bg-[#070a11]/90 backdrop-blur-md gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-md bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/60 shrink-0">
              {project.category}
            </span>
            <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white truncate">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {project.demoVideoUrl && (
              <button
                onClick={() => onOpenVideo?.(project.demoVideoUrl!, `${project.name} — Demo`)}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-600/90 hover:bg-red-500 text-white transition-colors"
                title="Watch Demo"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span className="hidden xs:inline">Watch Demo</span>
              </button>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 pt-3 pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0 text-xs sm:text-sm font-semibold bg-slate-100/50 dark:bg-[#080c16] overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 font-bold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 px-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 font-bold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span className="hidden sm:inline">Clean Arch & </span>State Flow
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-2.5 px-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'gallery'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 font-bold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Gallery ({project.gallery.length})
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5 sm:space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Tagline & Quick Metrics */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {project.tagline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {project.description}
                  </p>
                </div>

                {project.metrics && (
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center min-w-[60px]">
                        <div className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
                    The Problem
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                    The Solution
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Matrix */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Technologies & Libraries
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dual YouTube Video section (e.g. Trivio) */}
              {(project.demoVideoUrl || project.marketingVideoUrl) && (
                <div className="space-y-4">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Project Video{project.marketingVideoUrl ? 's' : ''}
                  </h5>
                  <div className={`grid grid-cols-1 ${project.marketingVideoUrl ? 'md:grid-cols-2' : 'max-w-2xl'} gap-4`}>
                    {project.demoVideoUrl && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Play className="w-4 h-4 text-red-500 fill-current" />
                            <span className="text-xs font-bold text-slate-900 dark:text-white">Watch Demo</span>
                          </div>
                          {onOpenVideo && (
                            <button
                              onClick={() => onOpenVideo(project.demoVideoUrl!, `${project.name} — Demo`)}
                              className="text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
                            >
                              <Play className="w-3 h-3 fill-current" />
                              <span>Enlarge in Modal</span>
                            </button>
                          )}
                        </div>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                          <iframe
                            src={project.demoVideoUrl
                              .replace('youtube.com/shorts/', 'youtube.com/embed/')
                              .replace('youtu.be/', 'youtube.com/embed/')
                              .replace('watch?v=', 'embed/')}
                            title={`${project.name} — Demo`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                      </div>
                    )}
                    {project.marketingVideoUrl && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Film className="w-4 h-4 text-cyan-500" />
                          <span className="text-xs font-bold text-slate-900 dark:text-white">Marketing Video</span>
                        </div>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                          <iframe
                            src={project.marketingVideoUrl
                              .replace('youtube.com/shorts/', 'youtube.com/embed/')
                              .replace('youtu.be/', 'youtube.com/embed/')
                              .replace('watch?v=', 'embed/')}
                            title={`${project.name} — Marketing`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Single Video Walkthrough trigger (non-Trivio projects) */}
              {project.videoUrl && !project.demoVideoUrl && !project.marketingVideoUrl && (
                <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white">
                      <Film className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold">Watch Video Walkthrough</h5>
                      <p className="text-xs text-slate-400">Live mobile demo and workflow walkthrough.</p>
                    </div>
                  </div>
                  {onOpenVideo && (
                    <button
                      onClick={() => onOpenVideo(project.videoUrl!, project.name)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold hover:opacity-90 transition-opacity"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Video</span>
                    </button>
                  )}
                </div>
              )}

            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Key Architectural Highlights</span>
                </h4>
                <ul className="space-y-2.5">
                  {project.architecturalHighlights.map((highlight, idx) => (
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

              {/* Clean Architecture Diagram */}
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Clean Architecture Decoupling Diagram
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900/60">
                    <span className="text-[10px] font-bold uppercase text-cyan-600 dark:text-cyan-400 block mb-1">
                      1. Presentation Layer
                    </span>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">Widgets & BLoC</h5>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px]">
                      <li>• Screen UI & Theming</li>
                      <li>• Event-driven Cubits</li>
                      <li>• Zero logic in widgets</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60">
                    <span className="text-[10px] font-bold uppercase text-teal-600 dark:text-teal-400 block mb-1">
                      2. Domain Layer
                    </span>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">Use Cases & Entities</h5>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px]">
                      <li>• Pure Dart Business Rules</li>
                      <li>• Abstract Contracts</li>
                      <li>• Functional Failure Handling</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60">
                    <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                      3. Data Layer
                    </span>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">Data Sources & Mappers</h5>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px]">
                      <li>• Firestore & REST Services</li>
                      <li>• Local Cache & Prefs</li>
                      <li>• Model Serialization</li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              {currentGalleryItem && (
                <div className="space-y-3">
                  <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner flex items-center justify-center">
                    {project.id === 'trivio' ? (
                      <div className="flex items-center justify-center w-full h-full p-8">
                        <div className="relative w-[50%] max-w-[240px] aspect-[3/1] bg-white/95 rounded-2xl shadow-lg shadow-black/40 flex items-center justify-center p-4">
                          <Image
                            src={currentGalleryItem.image}
                            alt={currentGalleryItem.title}
                            fill
                            className="object-contain p-3"
                          />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={currentGalleryItem.image}
                        alt={currentGalleryItem.title}
                        fill
                        className="object-contain p-2"
                      />
                    )}
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {currentGalleryItem.title}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      {currentGalleryItem.description}
                    </div>
                  </div>
                </div>
              )}

              {/* Thumbnails Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-cyan-500 ring-2 ring-cyan-500/30'
                        : 'border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070a11]/90 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Engineered by <strong className="text-slate-900 dark:text-white">Shimaa Khaled</strong>
          </div>

          <div className="flex items-center gap-2">
            {project.demoVideoUrl && (
              <button
                onClick={() => onOpenVideo?.(project.demoVideoUrl!, `${project.name} — Demo`)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-red-600/90 hover:bg-red-500 text-white rounded-xl transition-colors shadow-xs"
                title="Watch Demo"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Demo</span>
              </button>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-800 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
