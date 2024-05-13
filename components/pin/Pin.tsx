"use client";
import React from "react";
import { PinContainer } from "@/components/pin/PinContainer";
import Image, { StaticImageData } from "next/image";

export function ProjectCard({
  img,
  alt,
  title,
  description,
  href,
}: {
  img: StaticImageData;
  alt: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <PinContainer title={title} href={href}>
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[20rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{description}</span>
        </div>
        <div className="my-4">
          <Image src={img} alt={alt} className="rounded-lg" />
        </div>
      </div>
    </PinContainer>
  );
}
