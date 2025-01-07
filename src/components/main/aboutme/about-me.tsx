"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import AboutMeText from "./about-me-text";
import CodeHighlight from "./code-highlight";

const AboutMe: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 space-y-8 w-[90%] md:w-[80%] lg:w-[70%] mx-auto"
    >
      <AboutMeText />
      <CodeHighlight />
    </motion.section>
  );
};

export default AboutMe;
