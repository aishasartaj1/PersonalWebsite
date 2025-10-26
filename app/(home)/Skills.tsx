import { Card } from '@/components/Card';
import { Chip } from '@/components/Chip';
import { skills } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white/70 p-8 shadow-soft backdrop-blur-sm dark:bg-[#2A2420]/80 md:p-12">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-ink md:text-5xl">Skills</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="h-full">
              <h3 className="mb-4 font-serif text-xl font-semibold text-brown-600">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


