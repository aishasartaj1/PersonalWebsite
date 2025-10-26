'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';
import NorthernAurora from '@/components/NorthernAurora';

export function Hero() {
  const [auroraVariant, setAuroraVariant] = useState<'northern' | 'brown'>('brown');
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    
    const handle = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const mx = (e.clientX / w - 0.5) * 2; // -1..1
      const my = (e.clientY / h - 0.5) * 2; // -1..1
      // Small offsets so it stays subtle
      const l1x = mx * 30;
      const l1y = my * 30;
      const l2x = -mx * 20;
      const l2y = -my * 20;

      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${l1x}px, ${l1y}px, 0)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${l2x}px, ${l2y}px, 0)`;
      }
    };
    
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, [prefersReduced]);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pt-0 pb-20"
      aria-label="Intro"
    >
      {/* Northern Aurora Background - full screen */}
      <NorthernAurora variant={auroraVariant} />
      
      {/* OLD CODE - Original subtle blush gradient background - COMMENTED OUT */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blush-300/20 via-transparent to-transparent" /> */}
      
      {/* OLD CODE - Northern lights aurora layers - COMMENTED OUT */}
      {/* <div
        ref={layer1Ref}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 transition-transform duration-500 ease-out will-change-transform dark:opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 800px 600px at 50% 50%, rgba(232,180,162,0.4), rgba(244,164,96,0.3), transparent 70%)',
        }}
      /> */}
      {/* <div
        ref={layer2Ref}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 transition-transform duration-500 ease-out will-change-transform dark:opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 700px 500px at 50% 50%, rgba(230,200,161,0.35), rgba(198,164,139,0.3), transparent 70%)',
        }}
      /> */}

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl text-center">
        <span
          className="inline-block rounded-2xl border border-[#E5C3A1] bg-[#FFF6EF] px-4 py-2 text-sm font-medium text-[#4B3E2E] shadow-[0_2px_6px_rgba(226,174,136,0.3)] dark:border-blush-400 dark:bg-blush-400/20 dark:text-blush-300 dark:shadow-[0_2px_6px_rgba(232,180,162,0.2)]"
          aria-label="Professional focus"
        >
          AI/ML Engineer Enthusiast
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.05 }}
          className="mt-6 font-serif text-5xl font-bold leading-tight tracking-tight text-[#2E251B] md:text-7xl dark:text-[#F5EDE4]"
        >
          Aisha Sartaj
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[rgba(0,0,0,0.65)] dark:text-[#D4C8BC]"
        >
          — Exploring intelligence, empathy, and creativity through code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#D58973] px-6 py-3 font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2691E] no-underline dark:bg-blush-400"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#F4E7D9] px-6 py-3 font-medium text-[#4B3E2E] shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2691E] no-underline dark:bg-card dark:text-ink-2 dark:border dark:border-border"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
          <a
            href="https://github.com/aishasartaj1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#F4E7D9] px-6 py-3 font-medium text-[#4B3E2E] shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2691E] no-underline dark:bg-card dark:text-ink-2 dark:border dark:border-border"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aisha-sartaj-23671a195/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#F4E7D9] px-6 py-3 font-medium text-[#4B3E2E] shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2691E] no-underline dark:bg-card dark:text-ink-2 dark:border dark:border-border"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Aurora Toggle */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
        <button
          onClick={() => setAuroraVariant('northern')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            auroraVariant === 'northern' 
              ? 'bg-white text-[#001010]' 
              : 'text-white hover:bg-white/10'
          }`}
        >
          Northern
        </button>
        <button
          onClick={() => setAuroraVariant('brown')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            auroraVariant === 'brown' 
              ? 'bg-white text-[#001010]' 
              : 'text-white hover:bg-white/10'
          }`}
        >
          Brown
        </button>
      </div>
    </section>
  );
}

