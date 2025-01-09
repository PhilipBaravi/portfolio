import SectionHeading from "@/components/section-heading";
import Uses from "@/components/main/uses/uses";
export default function TechnologiesPage() {
  return (
    <section className="w-full h-auto mx-auto">
      <SectionHeading
        sectionTitle="Technologies"
        sectionDescription="I specialize in building applications using the following technologies."
      />
      <Uses />
    </section>
  );
}
