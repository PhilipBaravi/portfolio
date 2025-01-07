import { motion } from "framer-motion";
import { FC } from "react";
import AboutDescription from "./about-description";
import AboutHeader from "./about-header";
import CodingChallenges from "./coding-challenge";
import CurrentProject from "./current-project";
import LearningFocus from "./learning-focus";

const AboutMeText: FC = () => {
  return (
    <article className="space-y-8">
      <motion.div
        className="flex flex-col gap-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <AboutDescription />
        <AboutHeader />
        <CodingChallenges />
        <CurrentProject />
        <LearningFocus />
      </motion.div>
    </article>
  );
};

export default AboutMeText;
