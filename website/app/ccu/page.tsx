'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Play,
  Film,
  Sparkles,
  Tv,
  X,
  Share2,
  ThumbsUp,
  Flame,
  ArrowRight,
} from 'lucide-react';

const SHOWS = [
  {
    id: 'lie-hard',
    title: 'Lie Hard with Tech Influencers',
    episodes: '8 Episodes',
    genre: 'Roast & Lie Detector',
    description: 'Creators undergo a funny polygraph test while explaining why they upgrade their phones every 3 months.',
    thumbnail: '🎬',
    views: '2.4M Views',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'relationshit',
    title: 'Relationshit Advice: Phone Edition',
    episodes: '12 Episodes',
    genre: 'Dating & Comedy',
    description: 'Comedians give hilarious dating advice based solely on battery percentage, cracked screens, and phone wallpapers.',
    thumbnail: '💔',
    views: '3.8M Views',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'aunty-kisko-bola',
    title: 'Aunty Kisko Bola? (Street Bargaining)',
    episodes: '6 Episodes',
    genre: 'Street Humor',
    description: 'Pranksters trying to sell funny ancient gadgets on Delhi and Mumbai street markets vs the local bargaining masters.',
    thumbnail: '👵',
    views: '5.1M Views',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'judge-me',
    title: 'Judge Me If You Can',
    episodes: '10 Episodes',
    genre: 'Courtroom Comedy',
    description: 'A mock courtroom where users are put on trial for keeping 47 tabs open and charging their phone only at 1%.',
    thumbnail: '⚖️',
    views: '1.9M Views',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'nation-wants-to-guess',
    title: 'Nation Wants To Guess: Refurbished or Brand New?',
    episodes: '14 Episodes',
    genre: 'Blindfold Challenge',
    description: 'Blindfolded celebrities try to tell the difference between a ₹1.5 Lakh new flagship and a Sellbar renewed device.',
    thumbnail: '🔍',
    views: '4.6M Views',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'keep-it-kaam',
    title: 'Keep It Kaam: Office Tech Struggles',
    episodes: '5 Episodes',
    genre: 'Workplace Comedy',
    description: 'The real drama of broken corporate laptops, mute microphone fails, and Monday morning battery deaths.',
    thumbnail: '💼',
    views: '1.2M Views',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export default function ComedyUniversePage() {
  const [activeVideo, setActiveVideo] = useState<{ title: string; videoUrl: string } | null>(null);

  return (
    <div className="bg-[#0b0f19] min-h-screen text-white antialiased">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-linear-to-b from-[#091e1b] via-[#0b1220] to-[#0b0f19]">
        <div className="max-w-5xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13b59b]/20 border border-[#13b59b]/40 text-xs font-bold text-[#13b59b] uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            Sellbar Comedy Universe (SCU)
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Watch Laughs, Parodies &amp; Viral Sketches
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tech comedy shows brought to you by Sellbar. Binge all original episodes of Lie Hard, Relationshit Advice, Aunty Kisko Bola, and Nation Wants To Guess.
          </p>
        </div>
      </section>

      {/* Shows Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Tv className="w-5 h-5 text-[#13b59b]" />
              Featured Comedy Shows
            </h2>
          </div>
          <div className="text-xs text-gray-400">
            {SHOWS.length} Original Series
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWS.map((show) => (
            <div
              key={show.id}
              className="bg-gray-900/80 rounded-3xl border border-gray-800 overflow-hidden hover:border-[#13b59b] transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="relative aspect-video bg-linear-to-br from-gray-800 to-gray-950 flex items-center justify-center text-5xl">
                <span>{show.thumbnail}</span>
                <button
                  onClick={() => setActiveVideo(show)}
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition"
                  aria-label={`Play ${show.title}`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#13b59b] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </button>
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[10px] font-bold text-gray-300">
                  {show.views}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#13b59b]">
                  <span>{show.genre}</span>
                  <span className="text-gray-400">{show.episodes}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#13b59b] transition">
                  {show.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {show.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveVideo(show)}
                    className="w-full py-2.5 rounded-xl bg-gray-800 hover:bg-[#13b59b] text-xs font-bold text-white transition flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Watch Episode
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl space-y-3 p-4">
            <div className="flex items-center justify-between px-2 pt-1">
              <h4 className="text-sm font-bold text-white truncate">{activeVideo.title}</h4>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
