import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });
const redHat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Haseeb - Full Stack Developer",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-zinc-900 scroll-smooth">
      <body className={redHat.className}>{children}</body>
    </html>
  );
}
