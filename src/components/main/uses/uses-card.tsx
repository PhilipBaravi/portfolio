"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

type UsesCardProps = {
  name: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const UsesCard = ({ name, description, icon, href }: UsesCardProps) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    href ? (
      <Link href={href} className="block">
        {children}
      </Link>
    ) : (
      <motion.div className="block">{children}</motion.div>
    );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <Wrapper>
        <Card className="border border-stone-200 bg-white shadow-sm transition-colors hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-950 dark:hover:bg-stone-900">
          <CardContent className="flex flex-col items-center p-6">
            <motion.div
              className="relative mb-4 h-16 w-16"
              variants={iconVariants}
            >
              {icon}
            </motion.div>
            <h3 className="mb-1 text-center text-lg font-semibold text-stone-900 dark:text-stone-100">
              {name}
            </h3>
            <p className="text-center text-sm text-stone-600 dark:text-stone-400">
              {description}
            </p>
          </CardContent>
        </Card>
      </Wrapper>
    </motion.div>
  );
};

export default UsesCard;
