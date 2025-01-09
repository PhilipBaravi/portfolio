import { FC } from "react";
import { skillsData } from "./skills-data";
import { Badge } from "@/components/ui/badge";

const Skills: FC = () => {
  return (
    <section className="w-full max-w-full flex flex-col gap-x-4 gap-y-2">
      <h2 className="text-md md:text-lg text-stone-950 dark:text-stone-50 leading-tight">
        My Go-To Technology Stack
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
