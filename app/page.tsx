import { HeroHighlightDemo } from "@/components/hero/Hero";
import { NavbarDemo } from "@/components/navbar/Navbar";
import { ProjectCard } from "@/components/pin/Pin";
import { AnimatedTooltipPreview } from "@/components/tooltip/Tooltip";
import { TracingBeamDemo } from "@/components/tracing-beam/TracingBeam";

import DbcDashboardImage from "/public/dbc-dashboard.png";
import AiAppImage from "/public/ai-saas.png";
import KanbanDndImage from "/public/kanban-dnd.png";
import InterviewAI from "/public/interviewAI.png";

export default function Home() {
  return (
    <div className="lg:mx-20 md:mx-20 mx-10">
      <NavbarDemo />
      <div className="flex">
        <div className="pl-0 md:pl-10 lg:pl-10 mt-10">
          <HeroHighlightDemo />
          <div className="px-5 sm:mt-14 md:mt-0 lg:mt-0 mt-14">
            <p className="text-white mb-5 xl:text-[18px] lg:text-[18px] md:text-[14px] sm:text-[12px] text-[12px]">
              <span className="text-purple-400 font-bold">Contact me</span>{" "}
              using any of the links below:
            </p>
            <AnimatedTooltipPreview />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-20 text-center text-white underline">
            Latest Projects
          </h2>
          <span className="mt-5">
            <a
              href="https://github.com/haseeb302?tab=repositories"
              target="_blank"
              className="text-blue-500 underline px-2 text-sm"
            >
              see all
            </a>
          </span>
        </div>
        <div
          className="flex flex-wrap gap-20 items-center justify-center"
          id="Projects"
        >
          <ProjectCard
            img={DbcDashboardImage}
            alt="dbc-dashboard"
            title="DBC Dashboard"
            description="CRM for a client using Next.js, TailwindCSS, ShadCn, NextAuth"
            href="https://dbc-crm.vercel.app/"
          />
          <ProjectCard
            img={AiAppImage}
            alt="ai-app"
            title="AI Assistant"
            description="AI research assistant as a SaaS app that gets summary of Papers from ArXiv and summarises them as a newsletter."
            href="https://saas-nextjs-openai.vercel.app/"
          />
          <ProjectCard
            img={InterviewAI}
            alt="interviewAI"
            title="Prepare for Interviews using AI"
            description="Interview preparation app that provides questions based on your CV, Job Description, Company Profile."
            href="https://interviewai-sigma.vercel.app/"
          />
        </div>
      </div>
      <div className="mt-28">
        <h2 className="text-4xl font-bold mb-20 text-white text-center underline underline-offset-4">
          My Education & Experience
        </h2>
        <TracingBeamDemo />
      </div>
    </div>
  );
}
