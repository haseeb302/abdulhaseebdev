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
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 font-bold">
              {item.badge}
            </h2>

            <p
              className={twMerge(
                roboto.className,
                "text-xl mb-4 dark:text-white"
              )}
            >
              {item.title}
            </p>

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
    description: (
      <div id="Education">
        <h2 className="text-2xl font-bold leading-tight mb-4 underline underline-offset-2">
          Education
        </h2>
        <h3 className="text-lg font-bold leading-tight mb-4">
          I went to pursue my Masters Degree in Data Science at Middlesex
          University London.
          <br />
          <span className=" text-orange-400">Grade: 2:1</span>
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
    description: (
      <div id="Experience">
        <h3 className="text-lg font-bold leading-tight mb-4">
          CreditBook raised $11 million pre-series A round by top global VC
          firms like Tiger Global. CreditBook aims to improve the financial
          outcomes of small and medium businesses across Pakistan.
        </h3>
        <ul>
          <li>
            ● Developed UI components for critical features with React Native
            based on Figma mocks and a design system for over a million users
          </li>
          <li>● Improved test coverage by 50% using Jest & RNTL</li>
          <li>
            ● Reduced errors and improved code readability by writing code in
            Typescript
          </li>
          <li>
            ● Implemented fast and secure backend services and cloud storage
            using Firebase, Firestore, and AWS
          </li>
          <li>● Worked on design system built with storybook</li>
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
          A Platform to Consolidate your Leads coming from different Marketing
          Channels. LastingSales has been granted a UK Innovator Visa.
        </h3>
        <ul>
          <li>
            ● Optimized the page load time from 2-3 minutes to less than 10
            seconds and fixed this serious problem faced by our users
          </li>
          <li>
            ● Successfully migrated the app from AngularJS to ReactJS, and
            demonstrated leadership by guiding a small team
          </li>
          <li>
            ● Improved user experience by implementing third-party libraries
            like React Drag and Drop and integrating Twilio
          </li>
          <li>
            ● Utilised EC2 instances and Amazon S3 buckets for deployments on
            AWS
          </li>
          <li>
            ● Got experience working with shell scripting including CLI tools
          </li>
          <li>
            ● Streamlined product roadmap by documenting and designing a concept
            for the new version of the product.
          </li>
          <li>
            ● Independently fixed a user matching error on a video chat app
            built with NodeJS and used libraries like socket.io and agora.io
          </li>
          <li>● Integrated 3rd party APIs like Agora, ZenDesk, Stripe</li>
          <li>
            ● Managed multiple projects built with ReactJS, NodeJS/ExpressJS,
            Laravel & MongoDB
          </li>
        </ul>
      </>
    ),
    badge: "July, 2020 - January, 2022",
    image: LSLogo,
    href: "https://lastingsales.com/",
  },
];
