"use client";
import { motion } from "framer-motion";
import HackFestCountdown from "./Countdown";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <header className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 overflow-hidden">
      {/* Particles Background with fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <ParticlesBackground />
      </motion.div>

      {/* Animated Flash Effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 2, 3, 4],
          opacity: [0, 1, 0.5, 0]
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut"
        }}
        className="absolute inset-0 bg-gradient-radial from-purple-500/30 via-transparent to-transparent z-0"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center justify-center w-full"
      >
        {/* Huge Title with Dramatic Animation - CENTERED */}
        <motion.h1
          variants={{
            hidden: { 
              scale: 0.5,
              opacity: 0,
              rotateX: -90,
            },
            visible: { 
              scale: 1,
              opacity: 1,
              rotateX: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 1.2
              }
            }
          }}
          className="font-stalinist text-6xl md:text-7xl text-center"
          style={{
            fontFamily: "'Stalinist One', sans-serif",
          }}
        >
          <span 
            className="text-white"
            style={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)"
            }}
          >
            HACKFEST
          </span>{" "}
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600"
            style={{
              textShadow: "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)"
            }}
          >
            2025
          </span>
        </motion.h1>

        {/* Countdown with Animation - BIGGER AND CENTERED */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { type: "spring", stiffness: 80 }
            }
          }}
          className="mt-12 flex justify-center w-full"
        >
          <HackFestCountdown />
        </motion.div>

        {/* Register Button - SMALLER, RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Compact Button with Better Background */}
          <motion.a
            href="https://form.typeform.com/to/kygPtOm3"
            target="_blank"
            rel="noreferrer"
            whileHover={{ 
              scale: 1.08,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.92,
              rotate: 0
            }}
            className="group relative block"
          >
            {/* Animated Glow Background */}
            <motion.div
              className="absolute -inset-1.5 rounded-xl blur-lg"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)"
              }}
              animate={{
                opacity: [0.6, 0.9, 0.6],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Button Content with Click Animation */}
            <motion.div 
              className="relative px-5 py-3 rounded-xl flex items-center gap-2 shadow-2xl overflow-hidden border-2"
              initial={{
                background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 50%, #db2777 100%)",
                borderColor: "transparent"
              }}
              whileHover={{
                background: "rgba(0, 0, 0, 0.3)",
                borderColor: "#06b6d4",
                backdropFilter: "blur(10px)"
              }}
              whileTap={{
                background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 50%, #f472b6 100%)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Shine Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Content */}
              <span className="relative z-10 text-white font-bold font-chakra text-sm md:text-base whitespace-nowrap drop-shadow-lg">
                REGISTER NOW
              </span>
              
              <motion.svg 
                className="relative z-10 w-5 h-5 text-white"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>

              {/* Click Ripple Effect */}
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-xl"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ 
                  scale: 2,
                  opacity: [0, 0.5, 0],
                  transition: { duration: 0.5 }
                }}
              />
            </motion.div>

            {/* Corner Accents */}
            <motion.div
              className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-pink-400 rounded-br-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
}