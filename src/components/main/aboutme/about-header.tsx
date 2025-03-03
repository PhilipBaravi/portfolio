import MainBtn from "@/components/main-btn";
import Link from "next/link";
import { FC } from "react";
// import ResumeButton from "../greetings/resume-button";
import { useTranslations } from "next-intl";

const AboutHeader: FC = () => {
  const t = useTranslations("AboutMe");
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex flex-col md:flex-row gap-y-4 gap-4">
        {/* <ResumeButton /> */}
        <Link href="/technologies">
          <MainBtn title={t("checkStack")} />
        </Link>
      </div>
    </div>
  );
};

export default AboutHeader;
