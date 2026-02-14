import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { BinaryRain } from "@/components/binary-rain";

export default function Home() {
  return (
    <div className="relative">
      {/* Global Binary Rain Effect */}
      <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
        <BinaryRain className="w-full h-full" />
      </div>

      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
