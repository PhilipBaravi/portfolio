import Greetings from "@/components/main/greetings/greetings";
import Projects from "@/components/main/projects/projects";
import About from "@/components/main/about/about";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Greetings />
      <Projects />
      <About />
    </div>
  );
}
