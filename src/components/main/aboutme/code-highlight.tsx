"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeHighlight: FC = () => {
  const codeSnippet = `// My coding philosophy
function writeCode(): Quality {
  return {
    clean: true,
    maintainable: true,
    tested: true,
    documented: true
  }
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="rounded-lg overflow-hidden"
    >
      <SyntaxHighlighter
        language="typescript"
        style={coldarkDark}
        className="!bg-stone-900 !p-6 rounded-lg"
      >
        {codeSnippet}
      </SyntaxHighlighter>
    </motion.div>
  );
};

export default CodeHighlight;
