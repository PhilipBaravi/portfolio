import { FC } from "react";
import Logo from "./logo";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./mode-toggle";
import LanguageSelector from "./language-selector";
import CommandSelector from "./command-selector";
import Navigation from "./navigation";
import NavigationLg from "./navigation-lg";

const Header: FC = () => {
  return (
    <header className="w-full flex justify-center items-center h-[80px] fixed top-0 left-0 right-0 z-50">
      <nav className="w-[95%] md:w-[50%] h-[60px] py-[10px] mx-auto rounded-lg bg-gradient-to-r from-stone-400/10 via-stone-400/20 to-stone-400/10 dark:from-stone-800/10 dark:via-stone-800/20 dark:to-stone-800/10 backdrop-blur-md border border-white/10 dark:border-white/5 flex justify-between items-center fixed top-6 z-50">
        <div className="ml-6">
          <Logo />
        </div>
        <div className="mr-6 flex gap-x-4 justify-between items-center">
          <div className="hidden lg:block">
            <NavigationLg />
          </div>
          <Separator orientation="vertical" className="h-6" />
          <ModeToggle />

          <LanguageSelector />
          <CommandSelector />
          <div className="lg:hidden">
            <Navigation />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
