import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 12);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 bg-[#1A1A1A] z-[99999] flex flex-col items-center justify-center text-white"
    >
      <div className="text-center px-4">
        {/* Initials Logo */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.22em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-display text-[48px] md:text-[64px] font-bold text-[#D4AF37]"
        >
          AR
        </motion.h1>
        
        {/* Wordmark */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-xs md:text-sm font-medium tracking-[0.35em] text-white/80 uppercase mt-2 mb-8"
        >
          I N T E R I O R
        </motion.p>

        {/* Custom Progress Container */}
        <div className="w-[180px] md:w-[240px] h-[2px] bg-white/10 relative overflow-hidden rounded-full mx-auto">
          <motion.div
            style={{ width: `${progress}%` }}
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#D4AF37] to-[#F5D062] rounded-full transition-all duration-75 ease-out"
          />
        </div>

        {/* Progress Text */}
        <p className="font-mono text-[10px] text-white/45 mt-3 uppercase tracking-wider">
          Crafting TIMELINESS - {progress}%
        </p>
      </div>
    </motion.div>
  );
}
