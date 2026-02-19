"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "Tailwind", level: 100 },
  { name: "JavaScript", level: 70 },
  { name: "Python", level: 60 },
];

export default function Skills() {
  return (
    <SectionWrapper>
      <section id="skills" className="py-32 bg-white">
        <div className="w-[80%] mx-auto text-center space-y-20">

          {/* Section Title */}
          <h2 className="text-6xl font-semibold">
            Skills
          </h2>

          {/* Skill Bars */}
          <div className="space-y-12 max-w-3xl mx-auto text-left">

            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">

                {/* Skill Label */}
                <div className="flex justify-between text-xl font-medium text-neutral-800">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                {/* Progress Bar Background */}
                <div className="w-full h-4 bg-neutral-200 rounded-full overflow-hidden">

                  {/* Animated Progress */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-neutral-900 rounded-full"
                  />

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}
