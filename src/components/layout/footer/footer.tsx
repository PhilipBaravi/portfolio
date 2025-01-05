import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import CodeWarsIcon from "./coddewars-icon";

const Footer: FC = () => {
  return (
    <footer className="w-full flex justify-between items-center h-[80px] bottom-0 left-0 right-0 z-50">
      <div className="w-[95%] md:w-[80%] h-[60px] py-[10px] mx-auto rounded-lg bg-gradient-to-r from-stone-400/10 via-stone-400/20 to-stone-400/10 dark:from-stone-800/10 dark:via-stone-800/20 dark:to-stone-800/10 backdrop-blur-md border border-white/10 dark:border-white/5 flex justify-between items-center  top-6 z-50">
        <div className="ml-6">
          <p>2025 Philip Baravi</p>
        </div>
        <div className="mr-6 flex gap-x-4 justify-between items-center">
          <Separator orientation="vertical" className="h-6" />
          <CodeWarsIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
