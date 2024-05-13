"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/tooltip/TooltipContainer";
import logo from "/public/github-logo.png";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: logo,
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: logo,
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: logo,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
