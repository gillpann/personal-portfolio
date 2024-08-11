"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-primary text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100  smooth-bounce" : "opacity-0"
      } z-[9999]`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default BackToTopButton;
