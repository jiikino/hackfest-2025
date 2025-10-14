"use client";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { Zap, Sparkles } from "lucide-react";

export default function HackFestCountdown() {
  const eventDate = new Date("2025-11-14T09:00:00-05:00");

  const TimeBox = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(0, 229, 255, 0.4)",
            "0 0 30px rgba(0, 229, 255, 0.6)",
            "0 0 20px rgba(0, 229, 255, 0.4)",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-cyan-400/50 
                   rounded-xl px-6 py-4 md:px-8 md:py-6 min-w-[80px] md:min-w-[120px] backdrop-blur-sm"
      >
        {/* Glowing corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-tl-xl"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400 rounded-bl-xl"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400 rounded-br-xl"></div>
        
        <motion.span
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold font-chakra text-cyan-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </motion.div>
      <span className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-wider font-semibold font-chakra">
        {label}
      </span>
    </motion.div>
  );

  return (
    <Countdown
      date={eventDate}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-2xl md:text-3xl font-bold text-center"
            >
              <motion.div
                className="flex items-center gap-3"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-purple-400" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 font-chakra">
                  HackFest is Live!
                </span>
                <Zap className="w-8 h-8 text-cyan-400" />
              </motion.div>
            </motion.div>
          );
        } else {
          return (
            <div className="flex gap-4 md:gap-6 items-center justify-center">
              <TimeBox value={days} label="Days" delay={0} />
              <span className="text-3xl md:text-5xl text-cyan-400 font-bold font-chakra animate-pulse">:</span>
              <TimeBox value={hours} label="Hours" delay={0.1} />
              <span className="text-3xl md:text-5xl text-cyan-400 font-bold font-chakra animate-pulse">:</span>
              <TimeBox value={minutes} label="Minutes" delay={0.2} />
              <span className="text-3xl md:text-5xl text-cyan-400 font-bold font-chakra animate-pulse">:</span>
              <TimeBox value={seconds} label="Seconds" delay={0.3} />
            </div>
          );
        }
      }}
    />
  );
}