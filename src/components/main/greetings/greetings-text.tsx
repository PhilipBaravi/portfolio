import { FC } from "react";
import Skills from "./skills";
// import ResumeButton from "./resume-button";
import P from "@/components/P";
import MainBtn from "@/components/main-btn";
import Link from "next/link";
import { useTranslations } from "next-intl";

const GreetingsText: FC = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col justify-start items-start gap-y-6">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight mb-4">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-stone-300 leading-relaxed">
          {t("subtitle")}
        </p>

        <div className="flex flex-col gap-y-4">
          <P>
            {t("reachAt")}{" "}
            <a
              href="mailto:philip.baravi@gmail.com"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              philip.baravi@gmail.com
            </a>
            .
          </P>
        </div>
      </div>

      <Skills />
      <div className="flex flex-col md:flex-row gap-x-6 gap-y-4">
        {/* <ResumeButton /> */}
        <Link href="about">
          <MainBtn title={t("aboutMeBtn")} />
        </Link>
      </div>
    </div>
  );
};
//
//
export default GreetingsText;
