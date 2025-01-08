"use client";

import { FC } from "react";
import H1 from "@/components/h1";
import ProjectCard from "./project-card";
import { projectsData } from "./projects-data";
import { motion } from "framer-motion";
import MainBtn from "@/components/main-btn";
import Link from "next/link";

type ProjectsProps = {
  showButton?: boolean;
  limit?: number; // Add a limit prop to control the number of projects displayed
};

const Projects: FC<ProjectsProps> = ({ showButton = true, limit }) => {
  // Slice the projectsData array if a limit is provided
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section className="mb-8 space-y-4 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {showButton && <H1 title="Selected Projects" />}
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-x-6 lg:gap-x-12 items-center flex-wrap justify-center gap-y-6 lg:gap-y-12">
        {displayedProjects.map((project, index) => (
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

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="w-full h-[60px] flex justify-center items-center pt-4"
        >
          <div>
            <Link href="/projects">
              <MainBtn title="See all projects" />
            </Link>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
