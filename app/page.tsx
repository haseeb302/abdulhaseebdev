import { HeroHighlightDemo } from "@/components/hero/Hero";
import { NavbarDemo } from "@/components/navbar/Navbar";
import { ProjectCard } from "@/components/pin/Pin";
import { AnimatedTooltipPreview } from "@/components/tooltip/Tooltip";
import { TracingBeamDemo } from "@/components/tracing-beam/TracingBeam";

import DbcDashboardImage from "/public/dbc-dashboard.png";
import AiAppImage from "/public/ai-saas.png";
import KanbanDndImage from "/public/kanban-dnd.png";

export default function Home() {
  return (
    <div className="mx-20">
      <NavbarDemo />
      <div className="flex">
        <div className="pl-10">
          <HeroHighlightDemo />
          <AnimatedTooltipPreview />
        </div>
      </div>
      <div className="flex flex-wrap gap-20 items-center justify-center mt-20">
        <ProjectCard
          img={DbcDashboardImage}
          alt="dbc-dashboard"
          title="DBC Dashboard"
          description="Made a CRM for a client using Next.js, TailwindCSS, ShadCn, NextAuth"
          href="https://dbc-crm.vercel.app/"
        />
        <ProjectCard
          img={AiAppImage}
          alt="ai-app"
          title="AI Assistant"
          description="Made an AI assistan and a SaaS app using React.js, Next.js, Clerk Authentication, SaaS, Stripe, Prisma, TailwindCSS, and Tyepscript"
          href="https://saas-nextjs-openai.vercel.app/"
        />
        <ProjectCard
          img={KanbanDndImage}
          alt="kanban"
          title="Kanban like Trello"
          description="Made a basic Trello app using React.js, Next.js, Drag n Drop, SaaS, Prisma, and TailwindCSS"
          href="https://nextjs-kanban-tool.vercel.app/home/board-1"
        />
      </div>
      <div className="mt-28">
        <TracingBeamDemo />
      </div>
    </div>
  );
}
