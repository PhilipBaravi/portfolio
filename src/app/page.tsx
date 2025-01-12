import Greetings from "@/components/main/greetings/greetings";
import Projects from "@/components/main/projects/projects";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="w-full h-auto">
      <h1>{t("title")}</h1>
      <Greetings />
      <Projects limit={3} />
    </div>
  );
}
