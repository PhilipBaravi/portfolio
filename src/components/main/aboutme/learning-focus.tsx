import { FC } from "react";
import P from "@/components/P";
import A from "@/components/A";

const LearningFocus: FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200">
      Current Learning Focus
    </h3>
    <P>
      I'm currently deepening my expertise in{" "}
      <A href="https://nextjs.org/">Next.js 15</A> and mastering relational
      database design patterns. This continuous learning approach ensures I stay
      at the forefront of web development practices.
    </P>
  </div>
);

export default LearningFocus;
