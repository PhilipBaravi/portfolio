"use client";

import { FC } from "react";
import H1 from "@/components/h1";
import ProjectCard from "./project-card";
import { projectsData } from "./projects-data";
import { motion } from "framer-motion";
import MainBtn from "@/components/main-btn";

const Projects: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full mx-auto gap-6 px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <H1>Selected Projects</H1>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-x-6 lg:gap-x-12 items-center flex-wrap justify-center gap-y-6 lg:gap-y-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={`${project.title}-${project.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              imageUrl={project.imageUrl}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="w-full h-[60px] flex justify-center items-center pt-4"
      >
        <MainBtn title="See all projects" />
      </motion.div>
    </section>
  );
};

export default Projects;
