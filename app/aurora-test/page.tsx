"use client";
import { useState } from 'react';
import NorthernAurora from '@/components/NorthernAurora';

export default function AuroraTestPage() {
  const [variant, setVariant] = useState<'northern' | 'brown'>('northern');

  return (
    <div className="relative">
      {/* Northern Aurora Background */}
      <NorthernAurora variant={variant} />
      
      {/* Toggle Buttons */}
      <div className="absolute bottom-6 right-6 z-50 flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
        <button
          onClick={() => setVariant('northern')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            variant === 'northern' 
              ? 'bg-white text-[#001010]' 
              : 'text-white hover:bg-white/10'
          }`}
        >
          Northern
        </button>
        <button
          onClick={() => setVariant('brown')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            variant === 'brown' 
              ? 'bg-white text-[#001010]' 
              : 'text-white hover:bg-white/10'
          }`}
        >
          Brown
        </button>
      </div>

      {/* Mock Hero Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* Mock Logo */}
          <div className="mb-8">
            <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-xl">AS</span>
            </div>
          </div>

          {/* Mock Heading */}
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 font-bold">
            Build with Aisha
          </h1>

          {/* Mock Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            — Exploring intelligence, empathy, and creativity through code.
          </p>

          {/* Mock Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              AI/ML Engineer Enthusiast
            </span>
          </div>

          {/* Mock Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-all duration-200 hover:shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-2xl border border-white/30 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all duration-200"
            >
              Resume
            </a>
          </div>

          {/* Mock Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <div className="w-6 h-6 bg-white/30 rounded"></div>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <div className="w-6 h-6 bg-white/30 rounded"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-white/60 text-sm">
          Move your mouse around to see the aurora effect! • Navigate to <code className="bg-white/20 px-2 py-1 rounded">/aurora-test</code>
        </p>
      </div>
    </div>
  );
}
