"use client";

import { FC, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeButton: FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/resume.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant="outline"
      className="bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300 hover:border-stone-400 font-medium py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDownloading ? (
        <span className="flex items-center">
          <Download className="animate-spin mr-2" size={20} />
          Downloading...
        </span>
      ) : (
        <span className="flex items-center">
          <Download className="mr-2" size={20} />
          Download Resume
        </span>
      )}
    </Button>
  );
};

export default ResumeButton;
