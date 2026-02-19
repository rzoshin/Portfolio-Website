import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper>
    <section id="about" className="py-32 bg-white text-black">
      <div className="w-[80%] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-6xl font-semibold text-center mb-20">

            About Me
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              I am currently pursuing a Master of Science in Engineering (MSc Engg.) 
              at Rajshahi University of Engineering & Technology (RUET), after completing 
              my degree in Computer Science and Engineering.
            </p>

            <p>
              My strongest programming languages are <strong>Python</strong> and 
              <strong> JavaScript</strong>. I enjoy building practical systems 
              as well as interactive web experiences.
            </p>

            <p>
              I have strong foundations in Algorithms, Mathematics, Probability, 
              and Statistics. I am driven by logic and curiosity — always exploring 
              how things work and where they originate.
            </p>

            <p>
              I am passionate about turning ideas into visual, usable systems.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/vectors/about.svg"
            alt="About Illustration"
            width={450}
            height={450}
          />
        </div>

      </div>
    </section>
    </SectionWrapper>
  );
}
