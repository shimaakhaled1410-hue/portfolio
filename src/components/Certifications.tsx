'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { certifications } from '@/data/portfolioData';
import { Certification } from '@/types';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Eye, 
  X, 
  ShieldCheck, 
  Building
} from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Certifications & Specialized Training
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Rigorous programs from leading government institutes, tech incubators, and enterprise software engineering academies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                
                {/* Certificate Image Thumbnail with View Overlay */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-100 dark:border-slate-800"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-900 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Credential</span>
                    </span>
                  </div>

                  {cert.status && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500 text-slate-950 shadow-sm">
                      {cert.status}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    <Building className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.dateOrHours}</span>
                    {cert.certificateId && (
                      <>
                        <span>•</span>
                        <span className="font-mono text-[10px] text-slate-400">
                          ID: {cert.certificateId}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Acquired Chips */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {cert.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

              {/* Action */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-3">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-900/60 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Official Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Inspection Lightbox Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">
                    {selectedCert.issuer} • {selectedCert.dateOrHours}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
                  aria-label="Close certificate lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image View */}
              <div className="relative aspect-[16/11] w-full bg-slate-950 overflow-hidden flex items-center justify-center p-2 sm:p-4">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Details Footer */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                {selectedCert.certificateId && (
                  <span className="font-mono text-slate-600 dark:text-slate-400">
                    Verification ID: <strong className="text-slate-900 dark:text-white">{selectedCert.certificateId}</strong>
                  </span>
                )}
                <div className="flex items-center gap-2 ml-auto">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Full Image</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
