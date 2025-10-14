"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Sponsor = 
  | { name: string; logo: string; url: string; }
  | { name: string; color: string; };

export default function Sponsors() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const sponsors: Sponsor[] = [
    { name: "Jasfel", logo: "/sponsors/jasfel-logo.webp", url: "https://www.jasfel.com" },
    { name: "T3", logo: "/sponsors/T3.jpeg", url: "#" },
    { name: "CoreWeave", logo: "/sponsors/CoreWeave.png", url: "https://www.coreweave.com" },
    { name: "Fiserv", logo: "/sponsors/Fiserv.png", url: "https://www.fiserv.com" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Animated Title - Clickable */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer inline-block w-full text-center mb-8"
      >
        <motion.div
          animate={{
            textShadow: [
              "0 0 20px rgba(0, 229, 255, 0.5)",
              "0 0 30px rgba(0, 229, 255, 0.8)",
              "0 0 20px rgba(0, 229, 255, 0.5)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative inline-block"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
            style={{ fontFamily: 'Chakra Petch, sans-serif' }}
          >
            SPONSORS
          </h2>
          
          {/* Animated underline */}
          <motion.div
            animate={{
              scaleX: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2"
          />
          
          {/* Arrow indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-cyan-400 text-2xl mt-2"
          >
            ▼
          </motion.div>
        </motion.div>
        
        <p className="text-gray-400 text-sm mt-2">
          {isExpanded ? "Click to hide" : "Click to view sponsors"}
        </p>
      </motion.div>

      {/* Collapsible Sponsors Grid */}
      <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => {
          const content = 'logo' in sponsor ? (
            <motion.a
              href={sponsor.url}
              target="_blank"
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-2 rounded-lg flex items-center justify-center h-40 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors overflow-hidden relative"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={300}
                height={150}
                className="object-contain w-full h-full"
              />
            </motion.a>
          ) : (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${'color' in sponsor ? sponsor.color : 'from-gray-500 to-gray-700'} p-6 rounded-lg flex items-center justify-center h-40 backdrop-blur-sm`}
            >
              <span className="text-white font-bold text-sm">{sponsor.name}</span>
            </motion.div>
          );
          
          return content;
        })}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}
