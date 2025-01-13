import { FC } from "react";
import Image from "next/image";
import P from "@/components/P";
import { useTranslations } from "next-intl";

const CodingChallenges: FC = () => {
  const t = useTranslations("AboutMe");
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200">
        {t("challenges.coding")}
      </h3>
      <P>{t("challenges.codewars")}</P>

      <Image
        src="https://www.codewars.com/users/PhilipBaravi/badges/large"
        alt="Codewars Profile Badge"
        width={400}
        height={40}
        className="rounded-md"
      />
    </div>
  );
};

export default CodingChallenges;
