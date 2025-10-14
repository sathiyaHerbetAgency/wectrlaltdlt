import type React from "react"
import Link from "next/link"

export function CTAButtons() {
  return (
    <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-5">
      <NeonButton href="faq">FAQ</NeonButton>
      <NeonButton href="#tickets">TICKETS</NeonButton>
    </div>
  )
}

function NeonButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="neon-button inline-flex text-white items-center justify-center px-4 py-2 md:px-6 md:py-2.5
                 text-[11px] md:text-sm font-[inter] font-semibold bg-cta-button w-[150px]"
      aria-label={typeof children === "string" ? (children as string) : "CTA"}
    >
      {children}
    </Link>
  )
}
