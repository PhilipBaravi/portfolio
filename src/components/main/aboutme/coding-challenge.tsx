import { FC } from "react";
import P from "@/components/P";
import { useTranslations } from "next-intl";
import CodewarsIcon from "./codewars-svg";

const CodingChallenges: FC = () => {
  const t = useTranslations("AboutMe");
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200">
        {t("challenges.coding")}
      </h3>
      <P>{t("challenges.codewars")}</P>

      <CodewarsIcon />
    </div>
  );
};

export default CodingChallenges;
