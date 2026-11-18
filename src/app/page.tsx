import { Hero } from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
