import { HeroHighlightDemo } from "@/components/hero/Hero";
import { NavbarDemo } from "@/components/navbar/Navbar";
import { AnimatedPinDemo } from "@/components/pin/Pin";
import { AnimatedTooltipPreview } from "@/components/tooltip/Tooltip";
import { TracingBeamDemo } from "@/components/tracing-beam/TracingBeam";

export default function Home() {
  return (
    <div className="mx-20">
      <NavbarDemo />
      <div className="flex">
        <div className="pl-10">
          <HeroHighlightDemo />
          <AnimatedTooltipPreview />
        </div>
      </div>
      <div className="flex">
        <AnimatedPinDemo />
        <AnimatedPinDemo />
        <AnimatedPinDemo />
      </div>
      <div>
        <TracingBeamDemo />
      </div>
    </div>
  );
}
