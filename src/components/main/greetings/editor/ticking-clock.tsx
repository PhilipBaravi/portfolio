"use client";

import { useState, useEffect } from "react";

const TickingClock: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };

    updateTime(); // Set initial time
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className="text-xs text-stone-400">{time}</div>;
};

export default TickingClock;
