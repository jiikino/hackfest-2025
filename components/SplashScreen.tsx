"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      {/* Expanding Circle Effect */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: [0, 1.5, 3], opacity: [1, 0.8, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-3xl"
      />

      {/* Logo/Text Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ 
          duration: 1,
          type: "spring",
          stiffness: 150,
          damping: 20
        }}
        className="relative z-10 text-center"
      >
        {/* Main Text with RU emphasized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl md:text-8xl text-white text-center"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px rgba(139, 92, 246, 0.8)",
                "0 0 40px rgba(139, 92, 246, 1)",
                "0 0 20px rgba(139, 92, 246, 0.8)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 font-bold font-iceland"
          >
            RU
          </motion.span>
          <br />
          <span 
            className="text-white font-extrabold"
            style={{
              fontFamily: "'Stalinist One', sans-serif",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)"
            }}
          >
            READY
          </span>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          />
        </motion.div>

        {/* Pulsing Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex gap-2 justify-center mt-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-cyan-400"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Corner Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-400"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-400"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-400"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-400"
      />
    </motion.div>
  );
}


