"use client";

import { FC, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleDownload } from "@/lib/download";
import { useTranslations } from "next-intl";

const ResumeButton: FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const t = useTranslations("HomePage");

  const downloadResume = () =>
    handleDownload(
      "/resume.pdf",
      "resume.pdf",
      () => setIsDownloading(true),
      () => setIsDownloading(false)
    );

  return (
    <Button
      onClick={downloadResume}
      disabled={isDownloading}
      variant="outline"
      className="bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300 hover:border-stone-400 font-medium py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDownloading ? (
        <span className="flex items-center">
          <Download className="animate-spin mr-2" size={20} />
          {t("resumeBtnDownloading")}
        </span>
      ) : (
        <span className="flex items-center">
          <Download className="mr-2" size={20} />
          {t("resumeBtn")}
        </span>
      )}
    </Button>
  );
};

export default ResumeButton;
