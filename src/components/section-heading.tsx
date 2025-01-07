import { Separator } from "@/components/ui/separator";
import { FC } from "react";

type SectionHeadingProps = {
  sectionTitle: string;
  sectionDescription: string;
};

const SectionHeading: FC<SectionHeadingProps> = ({
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <div className="mb-8 space-y-4 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        {sectionTitle}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        {sectionDescription}
      </p>
      <Separator className="h-px w-full" />
    </div>
  );
};

export default SectionHeading;
