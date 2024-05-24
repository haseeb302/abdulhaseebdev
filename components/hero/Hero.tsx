"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/hero/HeroContainer";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl sm:text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl md:leading-snug lg:leading-snug"
      >
        Empowering Early-Stage Startups and SaaS Companies as a <br />
        <Highlight className="text-black dark:text-white">
          Full-Stack Developer
        </Highlight>
      </motion.h1>
      <div className="px-5 mt-5 space-y-3">
        <p className="text-zinc-400 lg:text-sm md:text-sm sm:text-[10px] text-[10px]">
          {/* Around <strong className="text-purple-400">3 years</strong> of industry
        experience. <br /> */}
          Open to new opportunities as{" "}
          <strong className="text-purple-400">
            Full-time/Contract/Freelance{" "}
          </strong>
          Full Stack Engineer.
        </p>
        <a
          href="/AbdulHaseeb_CV2.pdf"
          download="CV"
          className="bg-gradient-to-r from-purple-500 to-violet-500 text-white lg:invisible md:invisible px-2 py-1 text-xs visible rounded-md"
        >
          Download CV
        </a>
      </div>
    </HeroHighlight>
  );
}
