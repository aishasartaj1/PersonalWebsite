import { Github, ExternalLink, BookOpen, GraduationCap, Boxes, Mic } from 'lucide-react';
import { Card } from '@/components/Card';
import { Chip } from '@/components/Chip';
import { nowBuilding, exploring, liveSession } from '@/lib/data';

const iconMap = {
  book: BookOpen,
  course: GraduationCap,
  framework: Boxes,
  conference: Mic,
};

export function Now() {
  return (
    <section id="now" className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white/70 p-8 shadow-soft backdrop-blur-sm dark:bg-[#2A2420]/80 md:p-12">
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-ink md:text-5xl">Now</h2>
        <p className="mb-12 text-center text-lg leading-relaxed text-ink-2">
          A real-time snapshot of what I'm building, exploring, and sharing
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column - Presently Building */}
          <div className="lg:row-span-2">
            <Card className="h-full">
              <h3 className="mb-4 font-serif text-xl font-semibold text-ink">Presently Building</h3>
              <div className="space-y-6">
                {nowBuilding.map((project) => (
                  <div key={project.id} className="space-y-3">
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-primary dark:text-blush-300">
                        {project.title}
                      </h4>
                      <p className="text-sm text-ink-2">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-ink-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-primary dark:bg-blush-300" />
                      {project.status}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Chip key={tech}>{tech}</Chip>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Top Right - Currently Exploring */}
          <div>
            <Card className="h-full">
              <h3 className="mb-4 font-serif text-xl font-semibold text-ink">Currently Exploring</h3>
              <div className="space-y-3">
                {exploring.map((item) => {
                  const Icon = iconMap[item.type];
                  return (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 rounded-xl border border-border bg-blush-300/10 p-3 dark:bg-blush-400/10"
                    >
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary dark:text-blush-300" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-ink">{item.label}</p>
                        <p className="text-sm text-ink-2">
                          {item.takeaway}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Bottom Right - Live Session */}
          <div>
            <Card className="h-full overflow-hidden bg-gradient-to-br from-blush-400 to-accent text-white shadow-lift dark:from-blush-400 dark:to-terra-500">
              <h3 className="mb-4 flex flex-wrap items-center gap-2 font-serif text-xl font-semibold text-white drop-shadow-sm dark:text-[#2A221D]">
                Build / Study with Aisha
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/25 px-3 py-1 text-sm font-bold backdrop-blur-sm dark:bg-[#2A221D]/25">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] dark:bg-[#2A221D] dark:shadow-[0_0_8px_rgba(42,34,29,0.8)]" />
                  LIVE
                </span>
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-white drop-shadow-sm dark:text-[#4A3D35]">Next Live Session</p>
                  <p className="font-serif text-2xl font-black text-white drop-shadow-md dark:text-[#2A221D]">{liveSession.when}</p>
                </div>
                <p className="text-base font-bold leading-relaxed text-white drop-shadow-sm dark:text-[#2A221D]">{liveSession.theme}</p>
                <a
                  href={liveSession.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 font-black text-accent shadow-lg transition-all hover:scale-105 hover:shadow-2xl no-underline dark:bg-[#2A221D] dark:text-white"
                >
                  <ExternalLink className="h-5 w-5" />
                  Join / Watch Replay
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}


