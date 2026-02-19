import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function Research() {
  return (
    <SectionWrapper>
    <section id="research" className="py-32 bg-white text-black">
      <div className="w-[80%] mx-auto px-6 space-y-28">
        <h2 className="text-6xl font-semibold text-center mb-20">

            Research
          </h2>
        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image src="/vectors/research.svg" alt="Research" width={450} height={450}/>
          </div>

          <div>
            <h2 className="text-4xl font-semibold mb-8">
              Overview
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed">
              My research focus lies in Artificial Intelligence, particularly 
              in Large Language Models, Generative AI, and AI Automation...
            </p>
          </div>
        </div>

        {/* Thesis */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-6">
              Thesis Work
            </h2>

            <p className="italic text-neutral-800 mb-4">
              A Deep-Learning Based Approach for Bangla Dialect Region Classification and Translation of Regional Dialects to Standard Bangla.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed">
              My undergraduate thesis focused on NLP for Bangla regional dialects.
            </p>
          </div>

          <div>
            <Image src="/vectors/thesis.svg" alt="Thesis" width={450} height={450}/>
          </div>
        </div>

        {/* Interests */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image src="/vectors/interests.svg" alt="Interests" width={450} height={450}/>
          </div>

          <div>
            <h2 className="text-4xl font-semibold mb-8">
              Interests
            </h2>

            <ul className="text-lg text-neutral-700 space-y-3 list-disc list-inside">
              <li>Large Language Models (LLMs)</li>
              <li>Generative Artificial Intelligence</li>
              <li>Natural Language Processing</li>
              <li>AI Automation Systems</li>
              <li>Machine Learning Applications</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    </SectionWrapper>
  );
}
