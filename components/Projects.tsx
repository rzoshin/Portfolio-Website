"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper>
      <section id="projects" className="py-32 bg-neutral-50">
        <div className="w-[80%] mx-auto space-y-24">

          {/* Section Title */}
          <h2 className="text-6xl font-semibold text-center">
            Projects
          </h2>

          {/* ================= PROJECT 1 ================= */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
          >
            <div className="relative w-full h-120">
              <Image
                src="/projects/techwave.png"
                alt="TechWave Project"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-12 space-y-6 text-center">
              <h3 className="text-3xl font-semibold">
                TechWave — Podcast & Tech Media Landing Page
              </h3>

              <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
                TechWave is a modern podcast landing page designed to showcase 
                tech conversations, episodes, and host content in a visually 
                engaging format. The project focuses on clean UI structure, 
                gradient-based visual identity, and interactive layout design 
                inspired by contemporary media platforms.
              </p>

              <a
                href="https://rzoshin.github.io/ph-assignment-02/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-md text-lg hover:bg-neutral-800 transition"
              >
                View Live Demo
              </a>
            </div>
          </motion.div>

          {/* ================= PROJECT 2 ================= */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
          >
            <div className="relative w-full h-120">
              <Image
                src="/projects/justice.png"
                alt="Justice Legal Website Project"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-12 space-y-6 text-center">
              <h3 className="text-3xl font-semibold">
                Justice — Legal Services Website Landing Page
              </h3>

              <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
                Justice is a professional legal services landing page designed 
                to present law firm offerings in a structured and authoritative 
                layout. The project emphasizes clean typography, service navigation, 
                and trust-oriented visual hierarchy tailored for legal and consultancy platforms.
              </p>

              <a
                href="https://rzoshin.github.io/tailwind-css/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-md text-lg hover:bg-neutral-800 transition"
              >
                View Live Demo
              </a>
            </div>
          </motion.div>

          {/* ================= PROJECT 3 ================= */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
          >
            <div className="relative w-full h-120">
              <Image
                src="/projects/fitness.png"
                alt="Fitness Tracker Website Project"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-12 space-y-6 text-center">
              <h3 className="text-3xl font-semibold">
                Fitness Tracker — Fitness & Workout Landing Page
              </h3>

              <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
                Fitness Tracker is a modern fitness landing page designed to promote 
                workout programs, video tutorials, and healthy lifestyle services 
                through an engaging web interface. The project focuses on strong 
                visual hierarchy, bold typography, and motivational call-to-action 
                sections tailored for fitness platforms.
              </p>

              <a
                href="https://rzoshin.github.io/Fitness-Tracker/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-md text-lg hover:bg-neutral-800 transition"
              >
                View Live Demo
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </SectionWrapper>
  );
}
