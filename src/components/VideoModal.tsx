'use client';

import React, { useEffect, useMemo } from 'react';
import { X, Film, Play } from 'lucide-react';

interface VideoModalProps {
  videoUrl: string | null;
  title: string;
  onClose: () => void;
}

function toYouTubeEmbedUrl(url: string): string {
  // Handles: youtube.com/shorts/ID, youtu.be/ID, youtube.com/watch?v=ID
  const shortened = url
    .replace('https://youtube.com/shorts/', 'https://www.youtube.com/embed/')
    .replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    .replace('watch?v=', 'embed/');
  // Strip any extra query params after the video ID (except embed-safe ones)
  return shortened.split('?')[0];
}

export default function VideoModal({ videoUrl, title, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const isYouTube = useMemo(
    () => !!videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')),
    [videoUrl]
  );

  const embedUrl = useMemo(
    () => (videoUrl && isYouTube ? toYouTubeEmbedUrl(videoUrl) : null),
    [videoUrl, isYouTube]
  );

  if (!videoUrl) return null;

  const isDemo = title.includes('Demo');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-black border border-slate-800 shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-3 sm:p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-2 min-w-0">
            {isDemo
              ? <Play className="w-4 h-4 text-red-400 fill-current shrink-0" />
              : <Film className="w-4 h-4 text-cyan-400 shrink-0" />
            }
            <span className="text-sm font-bold truncate">{title}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 touch-manipulation"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {isYouTube && embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-900/70 border-t border-slate-800/80 text-center text-xs text-slate-400">
          Graduation Project • Faculty of Computer and Information Science, Ain Shams University
        </div>
      </div>
    </div>
  );
}
