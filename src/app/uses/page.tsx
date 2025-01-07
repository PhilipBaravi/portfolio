import SectionHeading from "@/components/section-heading";
import Uses from "@/components/main/uses/uses";
export default function UsesPage() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto">
        <section className="w-full h-auto mx-auto">
          <SectionHeading
            sectionTitle="Uses"
            sectionDescription="This is the equipment I currently use for gaming, programming, making videos, and every day."
          />
          <Uses />
        </section>
      </div>
    </div>
  );
}
