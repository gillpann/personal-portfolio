"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LoadingScreen = ({ onLoadingComplete }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onAnimationComplete={() => {
          setTimeout(() => {
            onLoadingComplete?.();
          }, 1500);
        }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-background dark:bg-secondary"
      >
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1.2, 1, 1.2, 1],
            rotate: [0, 0, 0, 360, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="relative w-24 h-24 md:w-32 md:h-32"
        >
          <div className="absolute inset-0">
            <Image
              src="/logo.png"
              alt="Loading Logo"
              fill
              className="object-contain"
            />
          </div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 border-2 sm:border-4 border-primary rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.1, 1.3, 1.1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute inset-0 border-2 sm:border-4 border-primary/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
