"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullName = "Raiyan Zannat";
  const [displayedText, setDisplayedText] = useState("");

  // Typing Animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="w-[80%] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-bold text-neutral-900 tracking-tight">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-xl text-neutral-600 leading-relaxed max-w-xl"
          >
            Postgraduate CSE researcher pursuing an MSc in Engineering at RUET.
            Skilled in Python and JavaScript, with strong expertise in Front-End Web Development
            and ineterests in NLP, AI Automation — focused on building intelligent and creative digital experiences.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative"
          >
            <Image
              src="/profile.png"
              alt="Raiyan Zannat"
              width={500}
              height={600}
              className="rounded-xl shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
