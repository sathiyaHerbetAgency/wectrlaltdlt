import type React from "react"
import Link from "next/link"
import { Logo } from "./logo mob"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#tickets", label: "Tickets & Packages" },
  { href: "/faq", label: "FAQ" },
  // { href: "/contact", label: "Contact Us" },
]

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M22 12.07C22 6.49 17.52 2 11.93 2 6.35 2 1.86 6.49 1.86 12.07 1.86 17.08 5.53 21.16 10.28 22v-7.01H7.63v-2.92h2.65V9.65c0-2.62 1.56-4.07 3.95-4.07 1.14 0 2.33.2 2.33.2v2.56h-1.31c-1.3 0-1.7.81-1.7 1.64v1.98h2.89l-.46 2.92h-2.43V22c4.75-.84 8.42-4.92 8.42-9.93Z"
      />
    </svg>
  )
}

function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M23.5 7.1a4.58 4.58 0 0 0-3.22-3.24C18.6 3.4 12 3.4 12 3.4s-6.6 0-8.28.46A4.58 4.58 0 0 0 .5 7.1 47.9 47.9 0 0 0 0 12a47.9 47.9 0 0 0 .5 4.9 4.58 4.58 0 0 0 3.22 3.24C5.4 20.6 12 20.6 12 20.6s6.6 0 8.28-.46a4.58 4.58 0 0 0 3.22-3.24c.34-1.62.5-3.28.5-4.9s-.16-3.28-.5-4.9ZM9.7 15.4V8.6L15.9 12l-6.2 3.4Z"
      />
    </svg>
  )
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.34.42.59.23 1.01.5 1.46.95.45.45.72.86.95 1.46.17.43.36 1.13.42 2.33.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.42 2.33a3.87 3.87 0 0 1-.95 1.46 3.87 3.87 0 0 1-1.46.95c-.43.17-1.13.36-2.33.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.33-.42-.59-.23-1.01-.5-1.46-.95a3.87 3.87 0 0 1-.95-1.46c-.17-.43-.36-1.13-.42-2.33C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.42-2.33.23-.59.5-1.01.95-1.46.45-.45.86-.72 1.46-.95.43-.17 1.13-.36 2.33-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-.99.05-1.52.21-1.87.35-.47.18-.8.39-1.15.75-.36.35-.57.68-.75 1.15-.14.35-.3.88-.35 1.87-.07 1.24-.07 1.61-.07 4.76s0 3.52.07 4.76c.05.99.21 1.52.35 1.87.18.47.39.8.75 1.15.35.36.68.57 1.15.75.35.14.88.3 1.87.35 1.24.07 1.61.07 4.76.07s3.52 0 4.76-.07c.99-.05 1.52-.21 1.87-.35.47-.18.8-.39 1.15-.75.36-.35.57-.68.75-1.15.14-.35.3-.88.35-1.87.07-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.05-.99-.21-1.52-.35-1.87a2.51 2.51 0 0 0-.75-1.15c-.35-.36-.68-.57-1.15-.75-.35-.14-.88-.3-1.87-.35-1.24-.07-1.61-.07-4.76-.07Zm0 2.9a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8Zm0 2a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Zm5.96-2.53a1.38 1.38 0 1 1 0 2.76 1.38 1.38 0 0 1 0-2.76Z"
      />
    </svg>
  )
}

function IconTikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M21.5 9.1a8.1 8.1 0 0 1-4.84-2.02V16a6 6 0 1 1-5.9-6.01V12a3.2 3.2 0 1 0 2.3 3.07V2.5h2.36a5.76 5.76 0 0 0 5.02 4.92v1.68Z"
      />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
          {/* Logo + optional caption */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* <img src="/ctrl-alt-dlt-logo.jpg" alt="CTRL ALT DLT logo" className="h-16 w-auto" /> */}
            <Logo />

          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="space-y-4">
            {navLinks.map((l) => (
              <div key={l.href}>
                <Link
                  href={l.href}
                  className="text-lg font-medium hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background/40 focus:ring-offset-foreground"
                >
                  {l.label}
                </Link>
              </div>
            ))}
            <div className="pt-4 text-xs text-background/70 md:hidden">
              <Link href="/terms&condition" className="hover:opacity-80">
                TERMS & CONDITIONS
              </Link>
              <span className="px-2">|</span>
              <Link href="/privacy-policy" className="hover:opacity-80">
                PRIVACY POLICY
              </Link>
            </div>
          </nav>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-lg font-semibold">Follow Us</p>
            <div className="flex items-center gap-5" aria-label="Social media">
              <Link aria-label="Facebook" href="https://www.facebook.com/wectrlaltdlt" className="hover:opacity-80">
                <IconFacebook className="h-6 w-6" />
              </Link>
              {/* <Link aria-label="YouTube" href="https://youtube.com" className="hover:opacity-80">
                <IconYouTube className="h-6 w-6" />
              </Link> */}
              <Link aria-label="Instagram" href="https://www.instagram.com/wectrlaltdlt/" className="hover:opacity-80">
                <IconInstagram className="h-6 w-6" />
              </Link>
              <Link aria-label="TikTok" href="https://www.tiktok.com/@wectrlaltdlt?is_from_webapp=1&sender_device=pc" className="hover:opacity-80">
                <IconTikTok className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-background/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/70">
          <p>COPYRIGHT 2025 © ALL RIGHTS RESERVED.</p>
          <div className="hidden md:block">
            <Link href="/terms" className="hover:opacity-80">
              TERMS & CONDITIONS
            </Link>
            <span className="px-2">|</span>
            <Link href="/privacy" className="hover:opacity-80">
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
