import Image from "next/image"

export default function FaqHero() {
  return (
    <header className="relative w-full bg-faq">
      {/* Background banner */}
      <div className="relative h-40 md:h-56 w-full overflow-hidden">
        {/* subtle overlay for readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/60" /> */}
      </div>

      {/* Title */}
      <div className="mx-auto max-w-6xl px-4 pb-6 md:pb-10 -mt-10 md:-mt-14">
        {/* <h1 className="font-sans text-balance text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
          Frequently Asked Questions
        </h1> */}
                <img src="/images/faq/faq-title.webp" alt="FAQ banner"    className="object-contain" />

      </div>
    </header>
  )
}
