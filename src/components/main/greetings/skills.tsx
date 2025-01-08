import { FC } from "react";
import { skillsData } from "./skills-data";
import { Badge } from "@/components/ui/badge";
import MainBtn from "@/components/main-btn";

// If you have a utility to combine classNames, like `clsx` or `cn`, you could import/use it here as well

const Skills: FC = () => {
  return (
    <section className="w-full max-w-full flex flex-col gap-x-4 gap-y-2">
      <h2 className="text-lg md:text-xl text-stone-950 dark:text-stone-50 leading-tight">
        Skills
      </h2>
      <div className="flex flex-wrap gap-x-4 gap-y-4 items-start">
        {skillsData.map((skill, i) => (
          <Badge key={`${skill}-${i}`}>{skill}</Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
