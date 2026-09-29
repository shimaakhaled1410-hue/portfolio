'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { 
  X, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Maximize2, 
  Play, 
  Film,
  Smartphone,
  ChevronLeft,
  ChevronRight
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
        className="relative w-full max-w-5xl my-auto rounded-3xl bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white truncate">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-1 border-b border-slate-100 dark:border-slate-800 shrink-0 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-2 border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400'
            }`}
          >
            Project Overview & Solution
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 px-2 border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400'
            }`}
          >
            Clean Architecture & State Flow
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-2.5 px-2 border-b-2 transition-colors ${
              activeTab === 'gallery'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400'
            }`}
          >
            UI Screenshots & Media ({project.gallery.length})
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Tagline & Quick Metrics */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {project.tagline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {project.description}
                  </p>
                </div>

                {project.metrics && (
                  <div className="flex items-center gap-3 shrink-0">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                        <div className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-red-50/40 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
                    <span>The Engineering Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                    <span>The Implemented Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Stack Matrix */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Technologies & Ecosystem
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Video demo prompt if available */}
              {project.videoUrl && (
                <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                      <Film className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold">Watch Full Video Demo</h5>
                      <p className="text-xs text-slate-400">Live app walkthrough and architecture presentation.</p>
                    </div>
                  </div>
                  {onOpenVideo && (
                    <button
                      onClick={() => onOpenVideo(project.videoUrl!, project.name)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Video</span>
                    </button>
                  )}
                </div>
              )}

            </div>
          )}

          {/* TAB 2: ARCHITECTURE & ENGINEERING */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span>Key Architectural Decisions</span>
                </h4>
                <ul className="space-y-2.5">
                  {project.architecturalHighlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clean Architecture Layer Diagram */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clean Architecture Separation
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  {/* Presentation Layer */}
                  <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60">
                    <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400 block mb-1">
                      1. Presentation Layer
                    </span>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">Widgets & BLoC</h5>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
                      <li>• Screen UI & Themes</li>
                      <li>• BLoC / Cubit State Handlers</li>
                      <li>• Zero Business Logic in Widgets</li>
                    </ul>
                  </div>

                  {/* Domain Layer */}
                  <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60">
                    <span className="text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-400 block mb-1">
                      2. Domain Layer (Pure Dart)
                    </span>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">Use Cases & Entities</h5>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
                      <li>• Enterprise Business Rules</li>
                      <li>• Abstract Repository Contracts</li>
                      <li>• Dartz Either&lt;Failure, Success&gt;</li>
                    </ul>
                  </div>

                  {/* Data Layer */}
                  <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60">
                    <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                      3. Data Layer
                    </span>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">Data Sources & Models</h5>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
                      <li>• Firestore & REST APIs</li>
                      <li>• Local Cache (Hive, Prefs)</li>
                      <li>• JSON Serialization & Mappers</li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: SCREENSHOTS & GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              
              {/* Selected Image Large Viewer */}
              {currentGalleryItem && (
                <div className="space-y-3">
                  <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner flex items-center justify-center">
                    <Image
                      src={currentGalleryItem.image}
                      alt={currentGalleryItem.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {currentGalleryItem.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {currentGalleryItem.description}
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-blue-600 ring-2 ring-blue-500/30'
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
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Engineered by <strong className="text-slate-700 dark:text-slate-300">Shimaa Khaled</strong>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Source Code</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
