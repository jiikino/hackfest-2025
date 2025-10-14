"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { Calendar, MapPin, Handshake, Users, DollarSign } from "lucide-react";

export default function InfoSection() {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);
  const count = useMotionValue(145);
  const [displayCount, setDisplayCount] = useState(145);

  useEffect(() => {
    const controls = animate(count, 150, {
      duration: 2,
      delay: 1,
      onUpdate: (latest) => setDisplayCount(Math.round(latest)),
    });

    return controls.stop;
  }, [count]);

  const eventData = [
    {
      icon: Calendar,
      title: "Dates",
      details: ["Nov 14–16", "2025"],
      color: "from-cyan-400 to-purple-500",
      glowColor: "rgba(6, 182, 212, 0.6)",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Rutgers University", "Newark"],
      color: "from-purple-500 to-pink-500",
      glowColor: "rgba(139, 92, 246, 0.6)",
    },
    {
      icon: Handshake,
      title: "Hosts",
      details: ["Girls Who Code", "ColorStack"],
      color: "from-pink-500 to-purple-500",
      glowColor: "rgba(236, 72, 153, 0.6)",
    },
    {
      icon: Users,
      title: "Attendees",
      details: [`${displayCount}+`, "Expected"],
      color: "from-cyan-400 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.6)",
      isCounter: true,
    },
    {
      icon: DollarSign,
      title: "Prize Pool",
      details: ["$3.5K", "In Prizes"],
      color: "from-purple-500 to-cyan-400",
      glowColor: "rgba(168, 85, 247, 0.6)",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* About HackFest Title - Fades in from CENTER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, type: "spring", stiffness: 80, damping: 15 }}
          className="mb-12"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 20px rgba(139, 92, 246, 0.5)",
                "0 0 30px rgba(139, 92, 246, 0.8)",
                "0 0 20px rgba(139, 92, 246, 0.5)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 mb-6"
              style={{ fontFamily: 'Chakra Petch, sans-serif' }}
            >
              ABOUT HACKFEST
            </h2>
          </motion.div>
          
          {/* Description - Fades in with DELAY */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl font-semibold max-w-4xl mx-auto leading-relaxed px-4"
          >
            HackFest is a three-day hackathon powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">
              Girls Who Code
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
              ColorStack
            </span>
            , taking place at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 font-bold">
              Rutgers University–Newark
            </span>
            . Step into an environment where innovation meets collaboration, and turn your ideas into reality.
          </motion.p>
        </motion.div>

        {/* Animated Icon Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 sm:flex flex-wrap justify-center items-start gap-4 sm:gap-6 md:gap-12 px-2 sm:px-4 py-8 max-w-5xl mx-auto">
            {/* Icons fade UP one by one */}
            {eventData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: 0.6 + index * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex flex-col items-center"
              >
                {/* Icon Button */}
                <motion.button
                  onClick={() => setActiveIcon(activeIcon === index ? null : index)}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative cursor-pointer focus:outline-none"
                >
                  {/* Pulsing Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{ background: item.glowColor }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    animate={
                      activeIcon === index
                        ? {
                            rotate: [0, -10, 10, -10, 0],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                    className={`relative p-3 sm:p-4 md:p-5 rounded-full bg-gradient-to-br ${item.color} bg-opacity-10 backdrop-blur-sm border-2 border-transparent hover:border-opacity-50`}
                    style={{
                      boxShadow: activeIcon === index ? `0 0 30px ${item.glowColor}` : "none",
                    }}
                  >
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
                  </motion.div>
                </motion.button>

                {/* Expandable Text */}
                <AnimatePresence>
                  {activeIcon === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-center overflow-hidden"
                    >
                      <h3
                        className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color} mb-2`}
                      >
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-300 text-sm">
                          {'isCounter' in item && item.isCounter && i === 0 ? `${displayCount}+` : detail}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}