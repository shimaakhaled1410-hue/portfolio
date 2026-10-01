'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Mobile App Project Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject + ' - From ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/60 text-cyan-400 border border-cyan-800 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Together
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Have a new mobile app vision or an engineering opportunity? Get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials (Focused ONLY on Email, LinkedIn, GitHub) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Reach out directly via email or connect on GitHub and LinkedIn.
                </p>
              </div>

              {/* Direct Info Blocks */}
              <div className="space-y-4">
                
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-800/80 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location} (UTC+2)
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-800 transition-colors text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-800 transition-colors text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm relative">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the fields below to send a direct project inquiry.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Prepared
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your message draft has been opened in your email client. I will get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: 'Mobile App Project Inquiry',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-emerald-300 bg-emerald-900/60 rounded-xl hover:bg-emerald-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.name
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-slate-800'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.email
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-slate-800'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    >
                      <option value="Mobile App Project Inquiry">New Mobile App Development (Flutter)</option>
                      <option value="Full-Time / Contract Hiring">Full-Time / Contract Software Engineering Role</option>
                      <option value="Clean Architecture Overhaul">Clean Architecture & Code Refactoring</option>
                      <option value="Firebase / AI Integration">Firebase & AI Model Integration</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief details about your mobile app project or inquiry..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                        errors.message
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-slate-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

