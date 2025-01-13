"use client";

import { FC } from "react";
import H1 from "@/components/h1";
import { motion } from "framer-motion";
import MainBtn from "@/components/main-btn";
import { useTranslations } from "next-intl";

const About: FC = () => {
  const t = useTranslations("AboutMe");
  return (
    <section className="flex flex-col justify-center items-center w-full mx-auto gap-6 px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <H1 title={t("title")} />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-x-6 lg:gap-x-12 items-center flex-wrap justify-center gap-y-6 lg:gap-y-12"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="w-full h-[60px] flex justify-center items-center pt-4"
      >
        <MainBtn title={t("moreInfo")} />
      </motion.div>
    </section>
  );
};

export default About;
