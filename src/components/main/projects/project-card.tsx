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
      className="w-full max-w-[400px] overflow-hidden h-[480px] flex flex-col bg-stone-50 dark:bg-stone-900 shadow-md transition-all duration-300 ease-in-out"
      style={{
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        boxShadow: isHovered
          ? "0 8px 20px rgba(0, 0, 0, 0.1)"
          : "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="100vw"
          className={`object-contain transition-transform duration-300 ease-in-out ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
      </div>

      <CardHeader className="flex-grow-0 p-4">
        <CardTitle className="text-xl font-bold text-stone-800 dark:text-stone-100">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <p className="text-sm text-stone-600 dark:text-stone-300 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-grow-0 p-4">
        <motion.div className="w-full" animate={{ y: isHovered ? 0 : 5 }}>
          <Button
            className="group w-full bg-stone-800 text-stone-100 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300 transition-colors duration-300"
            asChild
            size="sm"
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Link2 className="w-4 h-4 mr-2" />
              Visit Website
              <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
