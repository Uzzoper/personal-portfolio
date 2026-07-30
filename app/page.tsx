import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { BinaryRain } from "@/components/binary-rain";

const Projects = dynamic(() =>
  import("@/components/sections/projects").then((m) => ({ default: m.Projects }))
);
const About = dynamic(() =>
  import("@/components/sections/about").then((m) => ({ default: m.About }))
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((m) => ({ default: m.Contact }))
);

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
