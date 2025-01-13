import SectionHeading from "@/components/section-heading";
import AboutMe from "@/components/main/aboutme/about-me";
import { useTranslations } from "next-intl";

export default function AboutMePage() {
  const t = useTranslations("AboutMe");
  return (
    <section className="w-full h-auto mx-auto">
      <SectionHeading
        sectionTitle={t("title")}
        sectionDescription={t("subtitle")}
      />
      <AboutMe />
    </section>
  );
}
