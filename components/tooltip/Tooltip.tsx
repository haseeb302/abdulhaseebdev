"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/tooltip/TooltipContainer";
import githubLogo from "/public/github-logo.png";
import linkedinLogo from "/public/linkedin.png";
import twitterLogo from "/public/twitter.png";

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
    designation: "Product Manager",
    image: linkedinLogo,
    href: "https://www.linkedin.com/in/haseeeb/",
  },
  {
    id: 3,
    name: "Twitter",
    designation: "Data Scientist",
    image: twitterLogo,
    href: "https://twitter.com/mabdulhaseeeb",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center w-full">
      <AnimatedTooltip items={items} />
    </div>
  );
}
