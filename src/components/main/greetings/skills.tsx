import { FC } from "react";
import { skillsData } from "./skills-data";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const Skills: FC = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="w-full max-w-full flex flex-col gap-x-4 gap-y-2">
      <h2 className="text-md md:text-lg text-stone-950 dark:text-stone-50 leading-tight">
        {t("myStack")}
      </h2>
      <div className="flex flex-wrap gap-x-4 gap-y-4 items-start">
        {skillsData.map((skill, i) => (
          <Badge key={`${skill}-${i}`}>{skill}</Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
