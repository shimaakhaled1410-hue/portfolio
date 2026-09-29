'use client';

import React, { useEffect } from 'react';
import { X, Film } from 'lucide-react';

interface VideoModalProps {
  videoUrl: string | null;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, title, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-black border border-slate-800 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold truncate">{title} - Video Demo</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-900/70 border-t border-slate-800/80 text-center text-xs text-slate-400">
          Graduation Project Video Demonstration • Faculty of Computer and Information Science, Ain Shams University
        </div>
      </div>
    </div>
  );
}
