"use client";

import { useState, useEffect } from "react";

const TypingAnimation = ({
  texts,
  speed = 100,
  eraseSpeed = 50,
  delay = 1500,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("typing");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (phase === "typing") {
      interval = setInterval(() => {
        setDisplayText((prev) => prev + texts[textIndex][index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (phase === "erasing") {
      interval = setInterval(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, eraseSpeed);
    }

    if (phase === "typing" && index === texts[textIndex].length) {
      clearInterval(interval);
      setTimeout(() => {
        setPhase("erasing");
        setIndex(texts[textIndex].length);
      }, delay);
    } else if (phase === "erasing" && index === 0) {
      clearInterval(interval);
      setTimeout(() => {
        setPhase("typing");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, delay);
    }

    return () => clearInterval(interval);
  }, [index, phase, textIndex, texts, speed, eraseSpeed, delay]);

  return (
    <span className="inline-block border-r-2 border-gray-500 animate-blink text-primary">
      {displayText}
    </span>
  );
};

export default TypingAnimation;
