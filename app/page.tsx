import { Hero } from './(home)/Hero';
import { About } from './(home)/About';
import { Now } from './(home)/Now';
import { Experience } from './(home)/Experience';
import { Projects } from './(home)/Projects';
import { Skills } from './(home)/Skills';
import { Contact } from './(home)/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Now />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}



