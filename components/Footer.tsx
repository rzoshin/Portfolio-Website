"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="w-[80%] mx-auto py-16">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 justify-between gap-20">

          {/* Column 1 — Identity */}
          <div>
            <h3 className="text-xl text-white font-semibold mb-4">
              Raiyan Zannat
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              MSc Engineering Candidate (CSE) | AI & NLP Research
            </p>

            <p className="text-gray-500 text-sm leading-relaxed">
              Focused on Generative AI, Language Technologies, and Intelligent Automation.
              Open to academic and research collaboration.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#research" className="hover:text-white transition">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Professional Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Connect
            </h4>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li className="flex items-center gap-2">
                <Github size={16} />
                <a
                  href="https://github.com/rzoshin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a
                  href="https://linkedin.com/in/raiyan-zannat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:raiyan435jgcc@gmail.com"
                  className="hover:text-white transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500 text-sm">
          © {currentYear} Raiyan Zannat. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
