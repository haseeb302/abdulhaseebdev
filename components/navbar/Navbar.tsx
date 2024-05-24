"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/navbar/NavbarItems";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="w-full">
      <Navbar className="mt-8 shadow-lg rounded-full" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("", className)}>
      <Menu setActive={setActive}>
        {/* <div> */}
        <MenuItem setActive={setActive} active={active} item="Projects" />
        <MenuItem setActive={setActive} active={active} item="Experience" />
        <MenuItem setActive={setActive} active={active} item="Education" />
        {/* </div> */}
        <div className="!ml-auto lg:visible md:visible invisible">
          <a
            href="/AbdulHaseeb_CV2.pdf"
            download="CV"
            className="bg-gradient-to-r from-purple-500 to-violet-500 text-white lg:px-4 lg:py-2 md:px-4 md:py-2 rounded-full"
          >
            Download CV
          </a>
        </div>
      </Menu>
    </div>
  );
}
