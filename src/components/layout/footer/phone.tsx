"use client";

import { FC } from "react";
import { useClipboard } from "@/hooks/use-clipboard";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

const Phone: FC = () => {
  const { copyToClipboard } = useClipboard();
  const { toast } = useToast();
  const t = useTranslations("Chat");

  const handleCopyPhoneNumber = async () => {
    try {
      await copyToClipboard("+34664587841");
      toast({
        title: t("phoneToast.success"),
        description: t("phoneToast.successMsg"),
      });
    } catch (error) {
      console.error(error);
      toast({
        title: t("phoneToast.error"),
        description: t("phoneToast.errorMsg"),
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm text-stone-600 dark:text-stone-400">Tel.:</p>
      <button
        onClick={handleCopyPhoneNumber}
        className="text-sm text-stone-700 dark:text-stone-300 hover:underline flex items-center gap-1"
      >
        +34 (664) 587-841
      </button>
    </div>
  );
};

export default Phone;
