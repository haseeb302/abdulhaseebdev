import DbcDashboardImage from "/public/dbc-dashboard.png";
import AiAppImage from "/public/ai-saas.png";
import KanbanDndImage from "/public/kanban-dnd.png";
import InterviewAI from "/public/interviewAI.png";
import { BentoGrid, BentoGridItem } from "./bento-grid";

export function Projects() {
  return (
    <BentoGrid className="">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          alt={item.alt}
          imgSrc={item.imgSrc}
          href={item.href}
          //   className={i === 2 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "DBC Dashboard",
    description: "CRM for a distribution company.",
    alt: "dbc-dashboard",
    imgSrc: DbcDashboardImage,
    href: "https://dbc-crm.vercel.app/",
  },
  {
    title: "ResearchAI",
    description:
      "AI research assistant as a SaaS app that gets summary of Papers from ArXiv and summarises them as a newsletter.",
    imgSrc: AiAppImage,
    alt: "ai-app",
    href: "https://saas-nextjs-openai.vercel.app/",
  },
  {
    title: "InterviewAI",
    description:
      "Interview preparation app that provides questions based on your CV, Job Description, Company Profile.",
    imgSrc: InterviewAI,
    alt: "interviewAI",
    href: "https://interviewai-sigma.vercel.app/",
  },
];
