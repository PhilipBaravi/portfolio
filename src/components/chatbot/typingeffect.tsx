"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

const TypingEffect = ({ text, delay = 30, onComplete }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, delay, text, isComplete, onComplete]);

  return (
    <div className="inline-block">
      {displayText}
      {!isComplete && <span className="animate-blink">|</span>}
    </div>
  );
};

export default TypingEffect;
