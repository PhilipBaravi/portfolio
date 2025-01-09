import { useState } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      return Promise.reject("Clipboard API not available");
    }
  };

  return { copied, copyToClipboard };
}
