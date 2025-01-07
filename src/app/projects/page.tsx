import Projects from "@/components/main/projects/projects";
import SectionHeading from "@/components/section-heading";

export default function ProjectsPage() {
  return (
    <section className="w-full h-auto mx-auto">
      <SectionHeading
        sectionTitle="Projects"
        sectionDescription="The list of my projects. Everything was made with ❤️."
      />
      <Projects showButton={false} />
    </section>
  );
}
