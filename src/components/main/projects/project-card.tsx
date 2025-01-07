"use client";

import { useState, FC } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  imageUrl: string | StaticImageData;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubUrl,
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full max-w-[600px] overflow-hidden h-[720px] flex flex-col bg-stone-50 dark:bg-stone-900 shadow-lg transition-all duration-300 ease-in-out"
      style={{
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        boxShadow: isHovered
          ? "0 10px 30px rgba(0, 0, 0, 0.1)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="relative h-[26rem] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>
      <CardHeader className="flex-grow-0 p-6">
        <CardTitle className="text-2xl font-bold text-stone-800 dark:text-stone-100">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <p className="text-stone-600 dark:text-stone-300 mb-6 line-clamp-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-grow-0 p-6">
        <motion.div className="w-full" animate={{ y: isHovered ? 0 : 10 }}>
          <Button
            className="group w-full bg-stone-800 text-stone-100 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300 transition-colors duration-300"
            asChild
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Link2 className="w-5 h-5 mr-2" />
              Visit Website
              <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
