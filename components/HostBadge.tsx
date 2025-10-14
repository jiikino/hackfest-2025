"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Logo {
  path: string;
  name: string;
}

interface HostBadgeProps {
  logos?: Logo[];
}

export default function HostBadge({ logos = [] }: HostBadgeProps) {
  if (!logos || logos.length === 0) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        {/* Animated Glow */}
        <motion.div
          className="absolute -inset-2 bg-purple-500/20 rounded-2xl blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Badge Container */}
        <div className="relative bg-black/80 backdrop-blur-md border border-purple-400/30 rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-400 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-400 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-400 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-400 rounded-br-2xl" />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-3">
            <motion.span
              animate={{
                textShadow: [
                  "0 0 10px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.8)",
                  "0 0 10px rgba(168, 85, 247, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] md:text-xs font-semibold text-purple-400 uppercase tracking-wider"
            >
              Hosted By
            </motion.span>

            {/* Side by Side Logos */}
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4">
              {logos.map((logo, index) => (
                <div key={index} className="relative w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex items-center justify-center">
                  <Image
                    src={logo.path}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scan Line Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/10 to-transparent rounded-2xl"
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

