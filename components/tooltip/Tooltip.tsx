"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/tooltip/TooltipContainer";
import githubLogo from "/public/github-logo.png";
import linkedinLogo from "/public/linkedin.png";
import twitterLogo from "/public/twitter.png";
import mailIcon from "/public/mail.png";

const items = [
  {
    id: 1,
    name: "GitHub",
    designation: "Software Engineer",
    image: githubLogo,
    href: "https://github.com/haseeb302",
  },
  {
    id: 2,
    name: "LinkedIn",
    designation: "",
    image: linkedinLogo,
    href: "https://www.linkedin.com/in/haseeeb/",
  },
  {
    id: 3,
    name: "Twitter",
    designation: "",
    image: twitterLogo,
    href: "https://twitter.com/mabdulhaseeeb",
  },
  {
    id: 4,
    name: "Email Me",
    designation: "Full Stack Developer",
    image: mailIcon,
    href: "mailto:mabdulhaseeeb@gmail.com",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <AnimatedTooltip items={items} />
    </div>
  );
}
