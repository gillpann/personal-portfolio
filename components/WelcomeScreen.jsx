"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import Socials from "./hero/Socials";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* Socials */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center mb-12"
              >
                <Socials
                  containerStyles="flex gap-x-6"
                  iconsStyles="text-2xl hover:text-primary transition-all"
                />
              </motion.div>

              {/* Welcome Text */}
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-6xl font-bold space-y-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mb-4"
                  >
                    <span className="uppercase bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent  whitespace-nowrap">
                      Welcome to my
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <span className="uppercase bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent  whitespace-nowrap">
                      Portfolio Website
                    </span>
                  </motion.div>
                </h1>
              </div>

              {/* Website Link */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    <TypewriterEffect text="ahmad-gilvan.vercel.app" />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
