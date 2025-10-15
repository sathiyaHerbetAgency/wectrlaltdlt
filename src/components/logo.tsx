"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="CTRL ALT DLT home"
      className={cn(
        "font-inter text-sm tracking-[0.2em] uppercase select-none md:text-base",
        "text-primary",
        className
      )}
    >
      <img src="./logo.png" alt="CTRL ALT DLT" className="w-50" />
      {/* <img src="./mob-logo.webp" alt="CTRL ALT DLT" className="w-50 md:hidden " /> */}
    </Link>
  );
}
