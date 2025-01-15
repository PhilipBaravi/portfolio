// A small custom React component for final message
import { useClipboard } from "@/hooks/use-clipboard";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

function FinalMessage() {
  const { copyToClipboard } = useClipboard();
  const { toast } = useToast();
  const t = useTranslations("Chat");

  const handleCopyPhone = async () => {
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
    <span>
      {t("finalMsg.moreInfo")}{" "}
      <a
        href="mailto:philip.baravi@gmail.com"
        className="text-blue-600 hover:underline"
      >
        philip.baravi@gmail.com
      </a>{" "}
      or text me at{" "}
      <button
        onClick={handleCopyPhone}
        className="text-blue-600 hover:underline"
      >
        WhatsApp +34664587841
      </button>
      .{t("finalMsg.checkSocials")}
    </span>
  );
}

export default FinalMessage;
