import { HeroHighlightDemo } from "@/components/hero/Hero";
import { NavbarDemo } from "@/components/navbar/Navbar";
// import { ProjectCard } from "@/components/pin/Pin";
import { AnimatedTooltipPreview } from "@/components/tooltip/Tooltip";
import { AboutMe } from "@/components/tracing-beam/TracingBeam";

import { Projects } from "@/components/grid/bento";
import Image from "next/image";
import { IconArrowRight, IconMail } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="">
      <div className="bg-purple-500 py-2 text">
        <h3 className="text-white text-center text-sm">
          Hire me for price starting from{" "}
          <span className="font-bold">1800$/mo</span>{" "}
          <a className="text-sm underline" href="#Projects">
            see projects
          </a>
        </h3>
      </div>
      <div className="lg:mx-20 md:mx-20 mx-10">
        <NavbarDemo />
      </div>
      <div className="flex justify-center lg:h-lvh md:h-lvh md:mb-0 lg:mb-0 mb-14">
        <div className="pl-0 md:pl-10 lg:pl-10 mt-10">
          <HeroHighlightDemo />
          <div className="px-5 md:mt-0 lg:mt-0 mt-14">
            {/* <p className="text-white text-center mb-5 xl:text-[18px] lg:text-[18px] md:text-[14px] sm:text-[12px] text-[12px]">
              <span className="">Socials</span>
            </p> */}
            <h3 className="text-white text-xl text-center mb-5 md:text-2xl font-bold opacity-70 hover:opacity-100">
              Socials
            </h3>
            <AnimatedTooltipPreview />
          </div>
          <div className="flex flex-col items-center justify-center gap-5 sm:mt-14 md:mt-10 lg:mt-10 mt-14">
            <h3 className="text-white text-xl md:text-2xl font-bold opacity-70 hover:opacity-100">
              Technologies I use
            </h3>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li className="flex flex-col items-center justify-center gap-2 font-urbanist text-sm font-bold text-white hover:opacity-70">
                <Image
                  alt="Figma"
                  width="32"
                  height="48"
                  className="h-6 w-fit md:h-8"
                  src="/icons/figma.webp"
                />
                <span>Figma</span>
              </li>
              <li className="flex flex-col items-center justify-center gap-2 font-urbanist text-sm font-bold text-white hover:opacity-70">
                <Image
                  alt="React"
                  width="32"
                  height="48"
                  className="h-6 w-fit md:h-8"
                  src="/icons/react.webp"
                />
                <span>React</span>
              </li>
              <li className="flex flex-col items-center justify-center gap-2 font-urbanist text-sm font-bold text-white hover:opacity-70">
                <Image
                  alt="Next.js"
                  width="32"
                  height="48"
                  className="h-6 w-fit md:h-8"
                  src="/icons/NextJS.webp"
                />
                <span>Next.js</span>
              </li>
              <li className="flex flex-col items-center justify-center gap-2 font-urbanist text-sm font-bold text-white hover:opacity-70">
                <Image
                  alt="Tailwindcss"
                  width="32"
                  height="48"
                  className="h-6 w-fit md:h-8"
                  src="/icons/tailwind.webp"
                />
                <span>TailwindCss</span>
              </li>
              <li className="flex flex-col items-center justify-center gap-2 font-urbanist text-sm font-bold text-white hover:opacity-70">
                <Image
                  alt="Nodejs"
                  width="32"
                  height="48"
                  className="h-6 w-fit md:h-8"
                  src="/icons/nodejs.png"
                />
                <span>Node.js</span>
              </li>
              <li className="flex flex-col items-center justify-center gap-2 font-urbanist text-sm font-bold text-white hover:opacity-70">
                <Image
                  alt="databases"
                  width="32"
                  height="48"
                  className="h-6 w-fit md:h-8"
                  src="/icons/database.png"
                />
                <span>SQL/NoSQL</span>
              </li>
              <li className="flex flex-col items-center justify-center gap-2 font-urbanist text-sm font-bold text-white hover:opacity-70">
                <Image
                  alt="vercel"
                  width="32"
                  height="48"
                  className="h-6 w-fit md:h-8"
                  src="/icons/vercel.webp"
                />
                <span>Vercel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="flex justify-center" id="Projects">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-20 text-center text-black">
            Recent Projects
          </h2>
          <span className="mt-5">
            <a
              href="https://github.com/haseeb302?tab=repositories"
              target="_blank"
              className="text-blue-500 underline px-2 text-sm"
            >
              more
            </a>
          </span>
        </div>
        <div className="flex flex-wrap gap-20 items-center justify-center">
          <Projects />
        </div>
      </div>
      <section className="py-20 text-white">
        <div className="flex flex-col items-center mb-10">
          <h2
            id="Services"
            className="font-redhat text-3xl md:text-4xl font-black text-center mb-2"
          >
            Services
          </h2>
          <span className="text-sm text-center font-bold text-white text-opacity-70">
            Price starting from 1800$/month,{" "}
            <a
              href="https://cal.com/abdul-haseeb/15min"
              target="_blank"
              className="text-purple-500 underline"
            >
              book a call
            </a>{" "}
            to discuss further
          </span>
        </div>
        <ul className="flex flex-col gap-10 lg:mx-32 md:mx-24 mx-12">
          {/* <ul className="space-y-4"> */}
          <li>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-redhat text-xl md:text-2xl font-bold">
                  Web Design &amp; Development
                </h3>
                <span className="rounded-full bg-green-500 px-1 py-0.5 text-xs font-bold text-background motion-safe:animate-pulse">
                  Recommended
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <IconArrowRight className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                  <span className="font-medium lg:text-xl md:text-lg text-md">
                    Custom website and web application design and development
                    tailored to your needs.
                  </span>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-redhat text-xl md:text-2xl font-bold">
                  SaaS with OpenAI API
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <IconArrowRight className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                  <span className="font-medium lg:text-xl md:text-lg text-md">
                    Build an AI SaaS application and start earning
                  </span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* </div> */}
      </section>
      <div className="bg-white text-black py-10" id="About">
        <div className="flex flex-col items-center">
          <h2 className="font-redhat text-3xl md:text-4xl font-extrabold mb-5 text-center">
            About Me
          </h2>
          <div>
            <a
              href="/AbdulHaseeb_CV.pdf"
              download="CV"
              className="bg-transparent border-2 border-purple-500 text-purple-500 px-2 py-1 lg:px-4 lg:py-2 md:px-4 md:py-2 rounded-full hover:bg-purple-500 hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="m-5">
          <AboutMe />
        </div>
      </div>
      <section className="py-20 space-y-8">
        <h2
          id="Contact"
          className="font-redhat text-3xl md:text-4xl text-center text-white font-bold"
        >
          Contact Me
        </h2>
        <div className="flex justify-center text-white gap-5">
          <div className="flex gap-2">
            <IconMail />
            <a href="mailto:mabdulhaseeeb@gmail.com">mabdulhaseeeb@gmail.com</a>
          </div>
          <h1>OR</h1>
          <div>
            <a
              href="https://cal.com/abdul-haseeb/15min"
              target="_blank"
              className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-2 py-1 lg:px-4 lg:py-2 md:px-4 md:py-2 rounded-full"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
