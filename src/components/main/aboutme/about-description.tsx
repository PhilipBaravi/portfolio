import { FC } from "react";
import P from "@/components/P";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutDescription: FC = () => {
  const t = useTranslations("AboutMe");
  return (
    <>
      <P>{t("description.aboutOne")}</P>

      <P>{t("description.aboutTwo")}</P>

      <P>
        {t("description.presence")}{" "}
        <Link
          href="https://github.com/PhilipBaravi"
          target="_blank"
          className="text-blue-500 hover:underline dark:text-blue-400 inline-flex items-center gap-1"
        >
          GitHub
        </Link>{" "}
        {t("description.host")}
      </P>
    </>
  );
};

export default AboutDescription;
