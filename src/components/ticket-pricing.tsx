import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TicketPricing() {
  const cards = [
    {
      key: "ga-left",
      src: "/images/tickets/ticket-1.png",
      alt: "General Admission card",
      ctas: [{ href: "#ticketmelon", label: "Purchase via Ticketmelon" }],
    },
    {
      key: "ga-middle",
      src: "/images/tickets/ticket-2.png",
      alt: "General Admission + Add Ons card",
      ctas: [{ href: "#tixr", label: "Purchase via Tixr" }],
    },
    {
      key: "sp-right",
      src: "/images/tickets/ticket-3.png",
      alt: "Stage Pass card",
      ctas: [
        { href: "#ticketmelon", label: "Purchase via Ticketmelon" },
        { href: "#tixr", label: "Purchase via Tixr" },
      ],
    },
  ]

  return (
    <section className="bg-black text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="text-center">
          <h2 className="text-balance text-3xl md:text-5xl font-extrabold tracking-wide uppercase">Ticket Pricing</h2>
          <p className="mt-3 text-muted-foreground">Choose your access. Add-ons available where shown.</p>
        </header>

        {/* Cards: mobile stacks one-by-one; desktop shows three columns */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.key} className="flex flex-col items-stretch">
              <img
                src={card.src || "/placeholder.svg"}
                alt={card.alt}
                className="w-full h-auto rounded-lg border border-foreground/10 shadow-sm"
              />
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {card.ctas.map((cta) => (
                  <Button asChild key={cta.label} className="grow md:grow-0">
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* SR-only: desktop reference image kept for QA */}
        <div className="sr-only">
          <img src="/images/tickets/ticket-pricing-reference.png" alt="Reference layout for ticket pricing" />
        </div>
      </div>
    </section>
  )
}
