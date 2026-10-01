'use client';

import React from 'react';
import { services } from '@/data/portfolioData';
import { 
  Smartphone, 
  Palette, 
  Cloud, 
  GitBranch, 
  CheckCircle2, 
  ArrowRight,
  Briefcase
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Palette,
  Cloud,
  GitBranch,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/60 text-cyan-400 border border-cyan-800 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Value & Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mobile Engineering Services
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            End-to-end development from architectural design to production mobile deployment.
          </p>
        </div>

        {/* Services 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Smartphone;
            return (
              <div
                key={service.id}
                className="p-7 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950/50 text-cyan-300 border border-cyan-800">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-slate-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

