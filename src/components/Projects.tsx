'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { projects } from '@/data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Play, 
  Layers, 
  ArrowRight, 
  Smartphone,
  Eye
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
    { id: 'AI & Mobile', label: 'AI & Vision' },
    { id: 'Real-Time & Cloud', label: 'Cloud & Realtime' },
    { id: 'Community & Social', label: 'Social & Community' },
    { id: 'Transit & Utilities', label: 'Transit & Utilities' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production Mobile Applications & Solutions
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Scalable cross-platform software engineered with Clean Architecture, BLoC state management, and real-time cloud services.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-xl"
            >
              <div>
                
                {/* Media Showcase Area */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-600/90 text-white backdrop-blur-md shadow-sm">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-500 text-slate-950">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Bottom Bar inside Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs text-slate-300 font-medium">
                      {project.gallery.length} Interactive Screens
                    </span>
                    
                    {project.videoUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenVideo(project.videoUrl!, project.name);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-red-600/90 hover:bg-red-500 text-white backdrop-blur-md transition-colors"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Watch Demo</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem / Solution snapshot */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1.5">
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">Solution: </strong>
                      <span className="text-slate-600 dark:text-slate-400">{project.solution}</span>
                    </div>
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[11px] px-2 py-1 rounded-md text-slate-400 font-mono">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
