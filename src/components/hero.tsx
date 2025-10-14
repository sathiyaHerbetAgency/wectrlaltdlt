import { Tagline } from "./tagline"
import { Countdown } from "./countdown"
import { CTAButtons } from "./cta-buttons"

export function Hero() {
  const target = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)

  return (
    <section className="relative isolate overflow-hidden bg-hero-background text-hero-foreground">
      {/* Background image swaps for mobile/desktop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
       
        {/* Subtle top blue glow */}
        <div className="absolute inset-x-0 top-0 h-40 md:h-56 bg-[radial-gradient(50%_70%_at_50%_0%,rgba(40,98,255,0.35),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 md:px-6 py-20 md:py-28 min-h-[80svh] md:min-h-[85svh] flex flex-col items-center justify-center">
        <Tagline />
        <Countdown target={target} />
        <CTAButtons />
      </div>
    </section>
  )
}
