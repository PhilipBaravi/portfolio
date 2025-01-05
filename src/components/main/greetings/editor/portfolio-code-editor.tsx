"use client";

import { useState, FC } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import codeTabs from "./codeTabs";

const TickingClock = dynamic(() => import("./ticking-clock"), { ssr: false });

const PortfolioCodeEditor: FC = () => {
  const [activeTab, setActiveTab] = useState(codeTabs[0].name);

  return (
    <div className="w-full max-w-3xl mx-auto bg-[#1e1e1e] rounded-lg shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <TickingClock />
      </div>
      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="flex bg-[#252526] px-4 border-b border-[#3c3c3c] pb-2">
          {codeTabs.map((tab) => (
            <TabsTrigger
              key={tab.name}
              value={tab.name}
              className="px-4 py-2 text-sm text-[#8f8f8f] data-[state=active]:text-white data-[state=active]:bg-[#252526] border-[#252526]"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="p-4">
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 0.15,
                  ease: "easeInOut",
                }}
                className="w-full"
              >
                <ScrollArea className="h-[400px] w-full rounded-md">
                  <SyntaxHighlighter
                    language={
                      codeTabs.find((tab) => tab.name === activeTab)?.language
                    }
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      background: "transparent",
                      fontSize: "14px",
                    }}
                    showLineNumbers={true}
                    lineNumberStyle={{ color: "#6e7681" }}
                  >
                    {codeTabs.find((tab) => tab.name === activeTab)?.code || ""}
                  </SyntaxHighlighter>
                </ScrollArea>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default PortfolioCodeEditor;
