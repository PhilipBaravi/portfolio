import type { FC } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type MainBtnProps = {
  title: string;
};

const MainBtn: FC<MainBtnProps> = ({ title }) => {
  return (
    <Button className="group max-w-[220px] h-[40px] bg-stone-800 text-stone-100 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300 dark:hover:text-stone-900 transition-colors duration-300">
      {title}
      <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
    </Button>
  );
};

export default MainBtn;
