import { FC } from "react";
import MainBtn from "@/components/main-btn";
import Link from "next/link";
import P from "@/components/P";
import A from "@/components/A";
import { useTranslations } from "next-intl";

const CurrentProject: FC = () => {
  const t = useTranslations("AboutMe");
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200">
        {t("currentProject.title")}{" "}
        <A href="https://invoicehub.space/">InvoiceHub</A>
      </h3>
      <P>{t("currentProject.description")}</P>

      <ul className="list-disc list-inside text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
        <li>{t("currentProject.architecture")}</li>
        <li>{t("currentProject.state")}</li>
        <li>{t("currentProject.performance")}</li>
        <li>{t("currentProject.security")}</li>
        <li>{t("currentProject.pipelines")}</li>
        <li>{t("currentProject.design")}</li>
      </ul>

      <P>{t("currentProject.focus")}</P>

      <div className="pt-4">
        <Link href="https://invoicehub.space">
          <MainBtn title={t("currentProject.viewBtn")} />
        </Link>
      </div>
    </div>
  );
};

export default CurrentProject;
