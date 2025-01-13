import SectionHeading from "@/components/section-heading";
import Uses from "@/components/main/uses/uses";
import { useTranslations } from "next-intl";

export default function TechnologiesPage() {
  const t = useTranslations("Technologies");
  return (
    <section className="w-full h-auto mx-auto">
      <SectionHeading
        sectionTitle={t("title")}
        sectionDescription={t("subtitle")}
      />
      <Uses />
    </section>
  );
}
