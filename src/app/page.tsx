import Greetings from "@/components/main/greetings/greetings";
import Projects from "@/components/main/projects/projects";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Greetings />
      <Projects limit={3} />
    </div>
  );
}
