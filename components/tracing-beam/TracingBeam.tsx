"use client";
import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/tracing-beam/TracingBeamContainer";
import CBLogo from "/public/cb-logo.svg";
import LSLogo from "/public/ls-logo.png";
import MDXLogo from "/public/mdx.webp";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10" id={item?.id}>
            <h2 className="text-2xl font-bold leading-tight mb-4 underline underline-offset-2 text-white">
              {item?.id === "Education" ? "Education" : "Experience"}
            </h2>

            <p
              className={twMerge(
                roboto.className,
                "text-xl mb-4 dark:text-white"
              )}
            >
              {item.title}
            </p>
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 font-bold">
              {item.badge}
            </h2>
            <div className="text-sm  prose prose-sm dark:prose-invert dark:text-white">
              {item?.image && (
                <a href={item?.href} target="_blank">
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="800"
                    width="400"
                    className="rounded-lg mb-10 object-cover bg-white p-4"
                  />
                </a>
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const content = [
  {
    badge: "Sep, 2022 - Oct, 2023",
    title: "MSc Data Science",
    id: "Education",
    description: (
      <div>
        <h3 className="text-lg font-bold leading-tight mb-4 text-purple-400">
          Grade: 2:1
        </h3>
        <ul>
          <li>
            <span className="font-bold">Dissertation:</span> Comparing Vision
            Transformers and other Deep Learning Techniques on Plant Disease
            Detection <span className="font-bold">(Distinction)</span>
            <a
              href="https://colab.research.google.com/drive/1WhwgO-A95Nj7vdiZKNTz0fCUKW_Xp5bE?usp=sharing"
              target="_blank"
              className="text-blue-500 underline px-2"
            >
              Check Notebook here
            </a>
          </li>
          <li>
            <span className="font-bold mr-2">Modules:</span>● Machine Learning ●
            Data Analytics ● Big Data ● Ethics in AI
          </li>
        </ul>

        <hr className="my-8" />
      </div>
    ),
    image: MDXLogo,
    href: "https://creditbook.pk/",
  },
  {
    title: "Full Stack Developer",
    id: "Experience",
    description: (
      <div>
        <h3 className="text-lg font-bold leading-tight mb-4">
          Raised $11 million pre-series A round by top global VC firms like
          Tiger Global.
        </h3>
        <ul>
          <li>● Created UI components used by 1 million+ users</li>
          <li>
            ● Minimized technical debt by 40% by writing automated tests, using
            Typescript, code refactoring
          </li>
          <li>
            ● Enhanced scalability of the product by 50% by implementing a
            design system using StoryBook
          </li>
        </ul>
        <hr className="my-8" />
      </div>
    ),
    badge: "Feb, 2022 - Sep, 2022",
    image: CBLogo,
    href: "https://creditbook.pk/",
  },
  {
    title: "Full Stack Developer",
    description: (
      <>
        <h3 className="text-lg font-bold leading-tight mb-4">
          Leads Consolidation Platform via different Marketing Channels. Granted
          a UK Innovator Visa.
        </h3>
        <ul>
          <li>● Led the product from 0 to 1</li>
          <li>
            ● Optimized core feature performance, enhancing user productivity by
            50%
          </li>
          <li>
            ● Migrated frontend from old AngularJS to React.js, improved user
            feedback by 80%
          </li>
          <li>
            ● Led a team of 5, including freshies, developers and designers
          </li>
          <li>
            ● Improved product roadmap by writing documentation and redesigning,
            increased efficiency by 50%
          </li>
        </ul>
      </>
    ),
    badge: "July, 2020 - January, 2022",
    image: LSLogo,
    href: "https://lastingsales.com/",
  },
];
