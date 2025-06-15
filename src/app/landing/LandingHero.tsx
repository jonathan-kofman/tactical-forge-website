"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center overflow-hidden">
      {/* Animated background accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 via-blue-900 to-gray-950 rounded-full blur-3xl z-0"
      />
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
      >
        Zephyr Defense
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 text-xl md:text-2xl max-w-2xl mb-8 text-blue-200"
      >
        Revolutionizing Defense Manufacturing with Secure, Distributed Additive Manufacturing
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow transition">Learn More</Link>
        <Link href="/contact" className="bg-transparent border border-blue-400 hover:bg-blue-800 text-blue-200 font-semibold py-3 px-8 rounded-full transition">Contact Us</Link>
      </motion.div>
      {/* Future: Add animated video or SVG overlays here */}
    </section>
  );
} 