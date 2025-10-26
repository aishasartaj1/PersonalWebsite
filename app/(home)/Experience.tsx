'use client';

import { FlipBook } from '@/components/FlipBook';
import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white/70 p-8 shadow-soft backdrop-blur-sm dark:bg-[#2A2420]/80 md:p-12">
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-ink md:text-5xl">Work Experience</h2>
        <p className="mb-12 text-center text-lg leading-relaxed text-ink-2">
          Navigate with arrows or click buttons
        </p>

        <FlipBook experiences={experiences} />
      </div>
    </section>
  );
}


