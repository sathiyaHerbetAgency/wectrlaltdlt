"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Logo } from "./logo"
import { NavLinks } from "./nav-links"
import { NavLinks2 } from "./nav-links-2"
// import { Menu } from "@deemlol/next-icons";
import { cn } from "@/lib/utils"

const MobileMenu = dynamic(() => import("./mobile-menu"), { ssr: false })

export function Navbar({ classname }: { classname?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn("sticky top-0 z-40 w-full bg-navbar ", classname)}
    >
      <div className="mx-auto flex h-14 w-full items-center justify-items-center self-center  px-4">
<div className="flex items-center justify-center w-full gap-6">
          {/* Left links (desktop) */}
          <div>
        <NavLinks className="" />
</div>
        {/* Center logo */}
        <div>
          <Logo className="mx-4" />
        </div>
        {/* Right links (desktop) */}
        <div>
          <NavLinks2 className=" flex-1" />
        </div>
</div>
        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="md:hidden ml-2 p-2 text-white"
        >
          <span className="block h-0.5 w-5 bg-white " />
          <span className="mt-1 block h-0.5 w-5 bg-white" />
          <span className="mt-1 block h-0.5 w-5 bg-white" />
        </button>
      </div>

      {/* Mobile overlay (lazy-loaded) */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
