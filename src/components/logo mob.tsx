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
        "font-inter select-none tracking-[0.2em] text-sm md:text-base uppercase",
        "text-primary",
        className,
      )}
    >
      <img src="./mob-logo.png" alt="CTRL ALT DLT" className="w-50 " />
    </Link>
  )
}
