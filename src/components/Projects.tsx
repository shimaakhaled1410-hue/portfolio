'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { projects } from '@/data/portfolioData';
import { 
  FolderGit2, 
  ArrowRight, 
  Play, 
  Eye,
  Video
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenVideo: (videoUrl: string, title: string) => void;
}

export default function Projects({ onSelectProject, onOpenVideo }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI & Mobile', label: 'AI & Mobile' },
    { id: 'Real-Time & Cloud', label: 'Cloud & Realtime' },
    { id: 'Community & Social', label: 'Social & Community' },
    { id: 'Transit & Utilities', label: 'Transit & Utilities' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-[#070a11]/50 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>My Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Cross-platform mobile applications engineered with Clean Architecture and BLoC.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-md hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  {project.id === 'trivio' ? (
                    /* Trivio: full-width logo on dark-slate gradient backdrop */
                    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_#1e293b_0%,_#0f172a_60%,_#070a11_100%)]">
                      <div className="relative w-[85%] h-[60%] group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
                        />
                      </div>
                    </div>
                  ) : ['calogram', 'wedo'].includes(project.id) ? (
                    /* CaloGram & WeDo: padded contain so app bars / status bars aren't clipped */
                    <div className="absolute inset-0 flex items-center justify-center pt-4 pb-2 px-3">
                      <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-900/90 text-cyan-400 border border-cyan-800/60 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.id === 'trivio' && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/90 text-slate-950 backdrop-blur-md">
                        Graduation Project
                      </span>
                    )}
                  </div>

                  {/* Dual YouTube buttons for Trivio */}
                  {(project.demoVideoUrl || project.marketingVideoUrl) && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                      {project.demoVideoUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenVideo(project.demoVideoUrl!, `${project.name} — Demo`);
                          }}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-red-600/90 hover:bg-red-500 text-white backdrop-blur-md transition-colors"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Demo</span>
                        </button>
                      )}
                      {project.marketingVideoUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenVideo(project.marketingVideoUrl!, `${project.name} — Marketing`);
                          }}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-cyan-300 border border-cyan-800/60 backdrop-blur-md transition-colors"
                        >
                          <Video className="w-3 h-3" />
                          <span>Marketing</span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Single video button for other projects */}
                  {project.videoUrl && !project.demoVideoUrl && !project.marketingVideoUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVideo(project.videoUrl!, project.name);
                      }}
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-red-600/90 hover:bg-red-500 text-white backdrop-blur-md transition-colors"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Demo</span>
                    </button>
                  )}
                </div>

                {/* Minimal Card Details */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Key Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-md text-slate-400 font-mono">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-2 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="View GitHub Source"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
