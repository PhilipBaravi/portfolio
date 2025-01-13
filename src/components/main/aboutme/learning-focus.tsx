import { FC } from "react";
import P from "@/components/P";
import A from "@/components/A";
import { useTranslations } from "next-intl";

const LearningFocus: FC = () => {
  const t = useTranslations("AboutMe");
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200">
        {t("learning.title")}
      </h3>
      <P>
        {t("learning.subtitle")} <A href="https://nextjs.org/">Next.js 15</A>{" "}
        {t("learning.description")}
      </P>
    </div>
  );
};

export default LearningFocus;
