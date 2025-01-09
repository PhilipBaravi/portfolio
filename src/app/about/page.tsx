import SectionHeading from "@/components/section-heading";
import AboutMe from "@/components/main/aboutme/about-me";

export default function AboutMePage() {
  return (
    <section className="w-full h-auto mx-auto">
      <SectionHeading
        sectionTitle="About me"
        sectionDescription="👋 Hi there! I am Philip, a guy who loves web development."
      />
      <AboutMe />
    </section>
  );
}
