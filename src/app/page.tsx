'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import VideoModal from '@/components/VideoModal';
import { Project } from '@/types';
import { projects } from '@/data/portfolioData';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [videoModal, setVideoModal] = useState<{ url: string; title: string } | null>(null);

  const handleSelectProjectById = (projectId: string) => {
    const found = projects.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleOpenVideo = (videoUrl: string, title: string) => {
    setVideoModal({ url: videoUrl, title });
  };

  return (
    <main className="min-h-screen relative flex flex-col bg-white dark:bg-[#070a11] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-500 transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="flex-1">
        <Hero 
          onSelectProject={handleSelectProjectById}
        />
        <About />
        <Education />
        <Skills />
        <Projects 
          onSelectProject={(p) => setSelectedProject(p)}
          onOpenVideo={handleOpenVideo}
        />
        <Experience />
        <Certifications />
        <Services />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenVideo={handleOpenVideo}
      />

      <VideoModal
        videoUrl={videoModal?.url || null}
        title={videoModal?.title || ''}
        onClose={() => setVideoModal(null)}
      />
    </main>
  );
}

