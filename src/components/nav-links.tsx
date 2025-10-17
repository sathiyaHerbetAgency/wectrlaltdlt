"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

const links = [
  { href: "/#lineup", label: "Lineup" },
  { href: "/#layout", label: "Layout" },
 
]

export function NavLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="primary" className={cn("hidden md:flex items-center gap-8", className)}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={cn(
            "font-inter text-white text-xs uppercase tracking-[0.2em]",
            " transition-colors",
          )}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  )
}

export const navLinkItems = links
