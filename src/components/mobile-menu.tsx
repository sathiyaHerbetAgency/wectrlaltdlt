"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useLockBody } from "@/hooks/use-lock-body"
import { Logo } from "./logo mob"
import { navLinkItems } from "./nav-links-mob"
import { cn } from "@/lib/utils"

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useLockBody(open)

  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus()
    }
  }, [open])

  if (!mounted) return null

  return createPortal(
    <div
      aria-hidden={!open}
      id="mobile-menu"
      className={cn(
        "fixed inset-0 z-[9999] md:hidden transition-[opacity,transform] duration-300 ease-out",
        "w-dvw h-dvh", // ensure dynamic viewport coverage
        open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2 bg-black",
      )}
    >
      <div className="menu-grid absolute inset-0 bg-black/95" />
      <div className="relative h-full w-full flex flex-col">
        {/* Close button */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="absolute right-4 top-4 p-3 text-white"
        >
         X
          
        </button>

        {/* Center content */}
        <div className="flex h-full flex-col items-center justify-center gap-10">
          <Logo className="text-2xl md:text-3xl" />
          <ul className="flex flex-col items-center gap-6">
            {navLinkItems.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={onClose}
                  className={cn(
                    "font-inter text-white text-base tracking-[0.3em] uppercase",
                  
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  )
}
