import { FC } from "react";
import Skills from "./skills";
import ResumeButton from "./resume-button";
import P from "@/components/P";

const GreetingsText: FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col justify-start items-start gap-y-6">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight mb-4">
          Hi, I'm Philip – React Frontend Developer!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          👨‍💻 I specialize in building modern, user-friendly web applications
          using React, TypeScript, and cutting-edge technologies. 🌟 My focus is
          on creating seamless user experiences and delivering scalable,
          maintainable code for dynamic projects. 🔧✨
        </p>

        <div className="flex flex-col gap-y-4">
          <P title="Feel free to reach out to me at" />{" "}
          <a
            href="mailto:philipbaravi@gmail.com"
            className="text-blue-500 hover:underline dark:text-blue-400"
          >
            philipbaravi@gmail.com
          </a>
          .
        </div>
      </div>

      <Skills />
      <ResumeButton />
    </div>
  );
};
//
//
export default GreetingsText;
