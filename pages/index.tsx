"use client";
import { motion } from "framer-motion";
import SplashScreen from "../components/SplashScreen";
import HostBadge from "../components/HostBadge";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Sponsors from "../components/Sponsors";
import DiscordCTA from "../components/DiscordCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <SplashScreen />
      
      {/* Host Organization Badge - Multiple Logos Stacked */}
      <HostBadge 
        logos={[
          { path: "/sponsors/GWC.JPG", name: "Girls Who Code" },
          { path: "/sponsors/Colorstack.JPG", name: "ColorStack" }
        ]}
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen flex flex-col"
      >
        <Hero />
      
      {/* Sections with scroll-reveal animations */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <InfoSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Sponsors />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <DiscordCTA />
      </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
}