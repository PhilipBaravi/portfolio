"use client";

import { FC } from "react";
import { useClipboard } from "@/hooks/use-clipboard";
import { useToast } from "@/hooks/use-toast";

const Phone: FC = () => {
  const { copyToClipboard } = useClipboard();
  const { toast } = useToast(); // Hook for showing toasts

  const handleCopyPhoneNumber = async () => {
    try {
      await copyToClipboard("+34664587841");
      toast({
        title: "Copied!",
        description: "Phone number copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy phone number.",
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
