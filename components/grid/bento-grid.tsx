import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 max-w-full p-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  alt,
  imgSrc,
  href,
}: {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  alt: string;
  imgSrc: string | StaticImageData;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "flex flex-col rounded-2xl group/bento hover:shadow-2xl transition duration-200 shadow-input dark:bg-zinc-900  border-transparent",
        className
      )}
    >
      <Image src={imgSrc} alt={alt} className="rounded-tr-2xl rounded-tl-2xl" />

      <div className="group-hover/bento:translate-x-2 transition duration-200 p-4">
        <h3 className="font-sans font-bold text-2xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </h3>
        <p className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};
