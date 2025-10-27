'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FileText, Heart } from 'lucide-react';
import { Card } from '@/components/Card';
import { Chip } from '@/components/Chip';
import { Modal } from '@/components/Modal';

export function About() {
  const [isLifeModalOpen, setIsLifeModalOpen] = useState(false);

  const lifeTiles = [
    { icon: '🎨', title: 'Art', caption: 'Watercolors & digital illustrations', link: '#' },
    { icon: '✍️', title: 'Poetry', caption: 'Verses on humanity & tech', link: '#' },
    { icon: '📚', title: 'Reading', caption: 'Sci-fi, philosophy, & design', link: '#' },
    { icon: '📷', title: 'Photography', caption: 'Capturing moments & patterns', link: '#' },
  ];

  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white/70 p-8 shadow-soft backdrop-blur-sm dark:bg-[#2A2420]/80 md:p-12">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-ink md:text-5xl">About Me</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/img/portrait.jpg"
                alt="Aisha Sartaj Portrait"
                fill
                className="object-cover object-[center_20%]"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 md:col-span-2">
            <Card>
              <p className="mb-4 text-lg leading-relaxed text-ink-2">
              I'm an AI Engineer pursuing my Master of Engineering in Data Science at UCLA (GPA: 3.75/4.00, expected Dec 2025). I specialize in building production-grade AI systems with a focus on LLM engineering, multi-agent architectures, and MLOps.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-ink-2">
              Currently, I'm architecting a multi-agent AI tutoring system at ILMAscent, leveraging LangGraph for state-based orchestration and AWS Bedrock for scalable LLM deployment. My work spans advanced RAG pipelines, model optimization, and building human-centered AI applications.
              </p>
              <p className="text-lg leading-relaxed text-ink-2">
              Previously at Fractal Analytics, I prototyped GenAI solutions and built robust data pipelines that scaled client revenue from $75K to nearly $500K. I'm passionate about creating intelligent systems that blend technical excellence with real-world impact.
              </p>
            </Card>

            <div>
              <h3 className="mb-3 font-serif font-semibold text-ink">Key Domains</h3>
              <div className="flex flex-wrap gap-2">
                <Chip variant="primary">AI/ML Engineering</Chip>
                <Chip variant="primary">Multi-Agent Systems</Chip>
                <Chip variant="primary">Emotion AI</Chip>
                <Chip variant="primary">Full-Stack Development</Chip>
                <Chip variant="primary">Data Infrastructure</Chip>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-accent px-4 py-3 font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift no-underline dark:bg-terra-500"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
              <button
                onClick={() => setIsLifeModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 font-medium text-ink-2 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Heart className="h-4 w-4" />
                Life
              </button>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isLifeModalOpen}
          onClose={() => setIsLifeModalOpen(false)}
          title="Life Beyond Code"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {lifeTiles.map((tile) => (
              <a
                key={tile.title}
                href={tile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lift"
              >
                <div className="mb-3 text-4xl">{tile.icon}</div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-ink group-hover:text-primary">
                  {tile.title}
                </h3>
                <p className="text-sm text-ink-2">{tile.caption}</p>
              </a>
            ))}
          </div>
        </Modal>
      </div>
    </section>
  );
}


