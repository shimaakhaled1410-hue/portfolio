'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { certifications } from '@/data/portfolioData';
import { Certification } from '@/types';
import { 
  Award, 
  ExternalLink, 
  Clock, 
  Eye, 
  X, 
  ShieldCheck, 
  Building
} from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-[#070a11]/50 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 mb-3">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Specialized engineering programs from government IT institutes and academies.
          </p>
        </div>

        {/* Certifications Grid (Uniform Heights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {certifications.map((cert) => {
            const hasImage = Boolean(cert.image && cert.image.trim().length > 0);

            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer h-full"
              >
                <div className="flex flex-col flex-1">
                  
                  {/* Certificate Header Media: Image OR Polished Branded Badge */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800 flex items-center justify-center">
                    {hasImage ? (
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      /* Branded Credential Badge Fallback */
                      <div className="w-full h-full bg-gradient-to-br from-cyan-900/20 via-slate-900 to-emerald-900/20 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute top-2 right-2 opacity-10">
                          <Award className="w-24 h-24 text-cyan-400" />
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 mb-3 shadow-md">
                          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-cyan-400" />
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                          {cert.issuer}
                        </span>
                        <h4 className="text-xs font-bold text-white mt-1 line-clamp-2 px-2">
                          {cert.title}
                        </h4>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-md">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </span>
                    </div>

                    {cert.status && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500 text-slate-950 shadow-sm">
                        {cert.status}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                        <Building className="w-3.5 h-3.5" />
                        <span>{cert.issuer}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                        <span>{cert.dateOrHours}</span>
                        {cert.certificateId && (
                          <>
                            <span>•</span>
                            <span className="font-mono text-[10px] text-slate-500">
                              ID: {cert.certificateId}
                            </span>
                          </>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {cert.description}
                      </p>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1 pt-3">
                      {cert.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

                {/* Footer Action */}
                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-2">
                  <span className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-900/60 transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Credential</span>
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Certificate Inspection Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#070a11]">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-0.5">
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

              {/* View Container */}
              <div className="p-6 overflow-y-auto space-y-5">
                
                {/* Media Preview or Branded Banner */}
                {selectedCert.image ? (
                  <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-950 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex items-center justify-center p-2">
                    <Image
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-950 via-slate-950 to-emerald-950 border border-cyan-800/50 text-center space-y-3 relative overflow-hidden">
                    <Award className="w-12 h-12 text-cyan-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">{selectedCert.title}</h4>
                    <p className="text-xs text-cyan-300 max-w-md mx-auto">{selectedCert.issuer}</p>
                    <span className="inline-block text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Verified National Credential Track
                    </span>
                  </div>
                )}

                {/* Details Section */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <h5 className="font-bold uppercase text-xs tracking-wider text-slate-500 dark:text-slate-400">
                    Program Overview & Skills
                  </h5>
                  <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                    {selectedCert.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">Competencies Acquired:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCert.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 dark:bg-[#070a11] border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                {selectedCert.certificateId && (
                  <span className="font-mono text-slate-500 dark:text-slate-400">
                    Verification ID: <strong className="text-slate-900 dark:text-white">{selectedCert.certificateId}</strong>
                  </span>
                )}
                <div className="flex items-center gap-2 ml-auto">
                  {selectedCert.image && (
                    <a
                      href={selectedCert.image}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Full Image</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
