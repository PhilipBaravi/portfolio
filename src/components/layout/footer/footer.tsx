import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import Socials from "@/components/main/greetings/socials/socials";
import Phone from "./phone";

const Footer: FC = () => {
  return (
    <footer className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto rounded-lg bg-gradient-to-r from-stone-400/10 via-stone-400/20 to-stone-400/10 dark:from-stone-800/10 dark:via-stone-800/20 dark:to-stone-800/10 backdrop-blur-md border border-white/10 dark:border-white/5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-stone-700 dark:text-stone-300">
              Philip Baravi © {new Date().getFullYear()}{" "}
              {/* Don't mind me for using getfullyear :D */}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Email:
              </p>
              <a
                href="mailto:philipbaravi@gmail.com"
                className="text-sm text-stone-700 dark:text-stone-300 hover:underline"
              >
                philipbaravi@gmail.com
              </a>
            </div>

            <Separator
              orientation="vertical"
              className="hidden sm:block h-6 bg-stone-400 dark:bg-stone-600"
            />
            <Phone />
            <Separator
              orientation="vertical"
              className="hidden sm:block h-6 bg-stone-400 dark:bg-stone-600"
            />
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
