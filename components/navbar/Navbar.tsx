"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/navbar/NavbarItems";
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
        <MenuItem setActive={setActive} active={active} item="Services" />
        <MenuItem setActive={setActive} active={active} item="Products" />
        <MenuItem setActive={setActive} active={active} item="Pricing" />
      </Menu>
    </div>
  );
}
