"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import ContactSVG from "@/public/vectors/contact.svg"; // adjust path

export default function Contact() {
  return (
    <SectionWrapper>
      <section id="contact" className="py-32 bg-neutral-50">
        <div className="w-[80%] mx-auto">

          <h2 className="text-6xl font-semibold mb-6 text-center">
            Contact Me
          </h2>

          <p className="text-xl text-neutral-600 mb-16 text-center">
            Have a research idea or collaboration opportunity? Let’s connect.
          </p>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: Form */}
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-left"
            >
              <div>
                <label className="block mb-2 text-neutral-700">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="yourname@email.com"
                  className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-neutral-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full border border-neutral-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 text-white py-3 rounded-md hover:bg-neutral-800 transition"
              >
                Send Message
              </button>
            </motion.form>

            {/* Right: SVG */}
            <div className="hidden md:flex justify-center">
              <Image
                src={ContactSVG}
                alt="Contact illustration"
                className="max-w-md w-full h-auto"
              />
            </div>

          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}