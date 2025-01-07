"use client";

import { motion } from "framer-motion";
import { tools } from "./tools";
import UsesCard from "./uses-card";
import UsesH2 from "./uses-h2";

export function UsesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Object.entries(tools).map(([category, items]) => (
        <div key={category}>
          <UsesH2 title={category} />
          <div className="flex flex-wrap items-start gap-4">
            {items.map((tool) => (
              <div
                key={tool.name}
                className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-12px)] lg:w-[calc(25%-12px)]"
              >
                <UsesCard {...tool} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
