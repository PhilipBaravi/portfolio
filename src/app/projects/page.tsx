import Projects from "@/components/main/projects/projects";
import SectionHeading from "@/components/section-heading";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  return (
    <section className="w-full h-auto mx-auto">
      <SectionHeading
        sectionTitle={t("title")}
        sectionDescription={t("subtitle")}
      />
      <Projects showButton={false} />
    </section>
  );
}
