"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

const links = [
 
  { href: "faq", label: "FAQ" },
  { href: "#tickets", label: "Tickets" },
]

export function NavLinks2({ className }: { className?: string }) {
  return (
    <nav aria-label="primary" className={cn("hidden md:flex items-center gap-8", className)}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={cn(
            "font-inter text-xs uppercase tracking-[0.2em] text-white"
          )}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  )
}

export const navLinkItems = links
