'use client';

import React, { useEffect } from 'react';
import { personalInfo, experiences, educations, certifications, projects, skillCategories } from '@/data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  FileText,
  Copy,
  Check
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalInfo.formalName}
${personalInfo.title}
Location: ${personalInfo.location} | Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY
${personalInfo.bio}

CORE SKILLS
- Mobile Development: Flutter, Dart, Offline-First, GoRouter, Dynamic Theming, RTL/LTR Localization
- Architecture: Clean Architecture, BLoC/Cubit, Provider, GetIt, Dartz
- Cloud & AI: Firebase (Firestore, Cloud Functions, FCM, Auth), Multimodal Gemini AI, REST APIs
- Fundamentals: Data Structures, OOP, SOLID Principles, Unit Testing, CI/CD (GitHub Actions)

WORK EXPERIENCE
${experiences.map(e => `
${e.title} - ${e.company} (${e.period})
Location: ${e.location}
${e.description.map(d => `- ${d}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`).join('\n')}

FEATURED PROJECTS
${projects.map(p => `
${p.name} - ${p.tagline}
- Problem: ${p.problem}
- Solution: ${p.solution}
- Tech: ${p.technologies.join(', ')}
`).join('\n')}

EDUCATION
${educations[0].degree}
${educations[0].institution} - ${educations[0].faculty} (${educations[0].period})
Location: ${educations[0].location}

CERTIFICATIONS
${certifications.map(c => `- ${c.title} (${c.issuer})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Curriculum Vitae • Shimaa Khaled
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable / Viewable Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white text-slate-900 font-sans space-y-6">
          
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {personalInfo.formalName}
            </h1>
            <p className="text-base font-semibold text-blue-700 mt-1">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 text-blue-700 hover:underline">
                <Mail className="w-3 h-3" />
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={`tel:${personalInfo.phoneRaw}`} className="flex items-center gap-1 text-slate-700">
                <Phone className="w-3 h-3" />
                {personalInfo.phone}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-700 hover:underline">
                <LinkedinIcon className="w-3 h-3" />
                LinkedIn
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-700 hover:underline">
                <GithubIcon className="w-3 h-3" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div><strong>Mobile Development:</strong> Flutter, Dart, Responsive UI, Offline-First, GoRouter Deep Linking, AR/EN Localization</div>
              <div><strong>Architecture & State:</strong> Clean Architecture, BLoC / Cubit, Provider, GetIt, Dartz, SOLID Principles</div>
              <div><strong>Cloud & Backend:</strong> Firebase (Auth, Firestore, Cloud Functions, FCM), RESTful APIs, Hive, Node.js</div>
              <div><strong>AI & Tools:</strong> Google Gemini Multimodal AI, GitHub Actions CI/CD, Git, Flutter DevTools, Postman</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
                    <strong className="text-slate-900 font-bold">{exp.title} — {exp.company}</strong>
                    <span className="text-slate-500 font-mono text-xs">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-500 mb-1">{exp.location}</div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] text-slate-500 pt-1">
                    <strong>Tech:</strong> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineered Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
              Featured Mobile Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs space-y-0.5">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold">{proj.name} — {proj.tagline}</strong>
                    <span className="text-[10px] text-slate-500 font-mono">{proj.category}</span>
                  </div>
                  <p className="text-slate-700">{proj.description}</p>
                  <p className="text-slate-600"><strong>Architecture & Tech:</strong> {proj.technologies.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="flex flex-wrap items-start justify-between text-xs sm:text-sm">
              <div>
                <strong className="text-slate-900">{educations[0].degree}</strong>
                <div className="text-xs text-slate-600">{educations[0].institution} — {educations[0].faculty}</div>
              </div>
              <div className="text-right text-xs text-slate-500 font-mono">
                {educations[0].period} • {educations[0].location}
              </div>
            </div>
          </div>

          {/* Certifications & Specialized Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
              Certifications & Specialized Training
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
              {certifications.map((c) => (
                <li key={c.id}>
                  <strong>{c.title}</strong> — {c.issuer} ({c.dateOrHours})
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
