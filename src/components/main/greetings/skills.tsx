import { FC } from "react";
import { skillsData } from "./skills-data";
import { Badge } from "@/components/ui/badge";
import MainBtn from "@/components/main-btn";

const Skills: FC = () => {
  return (
    <section className="flex flex-col gap-x-4 gap-y-2">
      <h2 className="text-lg md:text-xl text-stone-950 dark:text-stone-50 leading-tight">
        Skills
      </h2>
      <div className="flex gap-x-4 gap-y-4">
        {skillsData.map((skill, i) => (
          <Badge key={`${skill}-${i}`}>{skill}</Badge>
        ))}
        <MainBtn title="More about me" />
      </div>
    </section>
  );
};

export default Skills;
