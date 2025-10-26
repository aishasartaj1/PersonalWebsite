'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Experience } from '@/lib/data';
import { Card } from './Card';

interface FlipBookProps {
  experiences: Experience[];
}

export function FlipBook({ experiences }: FlipBookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentPage < experiences.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  };

  const currentExp = experiences[currentPage];

  return (
    <div
      className="relative"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Work experience flipbook"
    >
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{ rotateY: direction > 0 ? 90 : -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: direction > 0 ? -90 : 90, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card className="min-h-[350px]">
              <div className="space-y-6">
                <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blush-300/30 to-brown-100/30">
                  <div className="flex h-full items-center justify-center text-brown-300">
                    <span className="text-sm">Company Logo</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-ink">{currentExp.role}</h3>
                  <p className="font-serif text-lg text-brown-600">
                    {currentExp.company}
                  </p>
                  <p className="text-sm text-ink-2">
                    {currentExp.period}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-serif font-semibold text-ink">Impact</h4>
                    <p className="text-ink-2">
                      {currentExp.impact}
                    </p>
                  </div>

                  <div className="rounded-2xl border-l-4 border-accent bg-blush-300/20 p-4">
                    <p className="text-sm font-medium italic text-ink-2">
                      &ldquo;{currentExp.takeaway}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 font-medium text-ink-2 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous experience"
        >
          <ChevronLeft className="h-5 w-5" />
          Previous
        </button>

        <span className="text-sm text-ink-2">
          Page {currentPage + 1} of {experiences.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === experiences.length - 1}
          className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 font-medium text-ink-2 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next experience"
        >
          Next
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}


