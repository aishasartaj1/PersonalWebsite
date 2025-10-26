'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/data';
import { Chip } from './Chip';
import { Modal } from './Modal';

interface DragStackProps {
  projects: Project[];
}

interface DraggableCardProps {
  project: Project;
  index: number;
  zIndex: number;
  constraintsRef: React.RefObject<any>;
  onBringToFront: () => void;
  onCardClick: (project: Project, wasDragged: boolean) => void;
}

function DraggableCard({
  project,
  index,
  zIndex,
  constraintsRef,
  onBringToFront,
  onCardClick,
}: DraggableCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const getInitialPosition = () => {
    // Spread cards in an attractive initial layout
    const cols = 3;
    const row = Math.floor(index / cols);
    const col = index % cols;
    return {
      x: col * 280 + (row % 2) * 40,
      y: row * 160 + col * 20,
    };
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.1}
      dragMomentum={false}
      initial={getInitialPosition()}
      onDragStart={(event, info) => {
        setIsDragging(true);
        dragStartPos.current = { x: info.point.x, y: info.point.y };
        onBringToFront();
      }}
      onDragEnd={(event, info) => {
        const distance = Math.sqrt(
          Math.pow(info.point.x - dragStartPos.current.x, 2) +
          Math.pow(info.point.y - dragStartPos.current.y, 2)
        );
        const wasDragged = distance > 5;
        
        setTimeout(() => {
          setIsDragging(false);
          if (!wasDragged) {
            onCardClick(project, false);
          }
        }, 100);
      }}
      onClick={() => {
        if (!isDragging) {
          onBringToFront();
        }
      }}
      style={{ zIndex }}
      whileDrag={{ scale: 1.05, rotate: 2, cursor: 'grabbing' }}
      className="absolute w-80 cursor-grab active:cursor-grabbing"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
        {/* Header */}
        <div className="relative h-32 w-full bg-gradient-to-br from-blush-300/30 to-brown-100/30">
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 p-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-ink">
              {project.title}
            </h3>
            <p className="text-sm text-ink-2">
              {project.timeline}
            </p>
          </div>

          <p className="line-clamp-2 text-sm leading-relaxed text-ink-2">
            {project.blurb}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
            {project.tech.length > 4 && (
              <Chip>+{project.tech.length - 4}</Chip>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function DragStack({ projects }: DragStackProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const constraintsRef = useRef(null);

  const handleCardClick = (project: Project, wasDragged: boolean) => {
    // Only open modal if it was a click (not a drag)
    if (!wasDragged) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const bringToFront = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <div className="relative mx-auto w-full" ref={constraintsRef}>
      <div className="relative min-h-[600px] w-full rounded-2xl border-2 border-dashed border-border bg-surface/50 p-8">
        <p className="mb-4 text-center text-sm text-ink-2">
          Drag cards anywhere within this area. Click to view details.
        </p>
        
        {projects.map((project, index) => {
          const isActive = activeCardIndex === index;
          const baseZIndex = index;
          const zIndex = isActive ? 100 : baseZIndex;

          return (
            <DraggableCard
              key={project.id}
              project={project}
              index={index}
              zIndex={zIndex}
              constraintsRef={constraintsRef}
              onBringToFront={() => bringToFront(index)}
              onCardClick={handleCardClick}
            />
          );
        })}
      </div>

      {/* Card Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => bringToFront(index)}
            className={`rounded-2xl border px-4 py-2 text-sm font-medium transition-all ${
              activeCardIndex === index
                ? 'border-blush-400 bg-blush-300/30 text-brown-600 shadow-soft'
                : 'border-border bg-card text-ink-2 hover:border-blush-300 hover:shadow-soft'
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            {/* Project Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blush-300/30 to-brown-100/30">
              <div className="flex h-full items-center justify-center text-brown-300">
                <span className="text-sm">Project Image</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-ink-2">
                {selectedProject.timeline}
              </p>
              <Chip variant="primary">{selectedProject.category.toUpperCase()}</Chip>
            </div>

            {/* Description */}
            <div>
              <h3 className="mb-2 font-serif font-semibold text-ink">About This Project</h3>
              <p className="leading-relaxed text-ink-2">
                {selectedProject.blurb}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="mb-3 font-serif font-semibold text-ink">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 font-medium text-ink-2 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift no-underline"
                >
                  <Github className="h-5 w-5" />
                  View Code
                </a>
              )}
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift no-underline"
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}


