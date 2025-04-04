"use client";

import { useState, useEffect } from "react";

const TypingAnimation = ({
  texts,
  speed = 100,
  eraseSpeed = 50,
  delay = 1500,
  pauseBetweenTexts = 700,
  initialDelay = 800, 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPaused(false); 
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    let timer;

    const handleTyping = () => {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);

        if (currentIndex >= currentText.length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, delay);
          return;
        }
      } else {
        
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);

        if (currentIndex <= 1) {
          setIsDeleting(false);
          setCurrentIndex(0); 
          setDisplayText("");
          setIsPaused(true);
          setTimeout(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
            setIsPaused(false);
          }, pauseBetweenTexts);
          return;
        }
      }
    };

    const typingSpeed = isDeleting ? eraseSpeed : speed;
    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [
    displayText,
    currentIndex,
    isDeleting,
    textIndex,
    texts,
    speed,
    eraseSpeed,
    delay,
    pauseBetweenTexts,
    isPaused,
  ]);

  return (
    <span className="inline-block border-r-2 border-gray-500 animate-blink text-primary">
      {displayText}
    </span>
  );
};

export default TypingAnimation;
