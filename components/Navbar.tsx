"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest">
          RAIYAN ZANNAT
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <Link href="#about">About</Link>
          <Link href="#research">Research</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <a
          href="/cv.pdf"
          className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
        >
          Download CV
        </a>
      </div>
    </motion.nav>
  );
}
