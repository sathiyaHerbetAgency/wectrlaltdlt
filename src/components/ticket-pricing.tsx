import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TicketPricing() {
  const cards = [
    {
      key: "ga-left",
      src: "/images/tickets/ticket-1.webp",
      alt: "General Admission card",
      ctas: [
        { href: "#ticketmelon", label: "Purchase via Ticketmelon", color:'#0101FA', border:'#0101FA', size:"grow-0 w-2/5", textColor:'#fff' },
        { href: "#tixr", label: "Purchase via Tixr", color:'#000', border:'#0101FA', size:"grow-0 w-2/5", textColor:'#fff' },
      ]
      ,
    },
    // {
    //   key: "ga-middle",
    //   src: "/images/tickets/ticket-2.webp",
    //   alt: "General Admission + Add Ons card",
    //   ctas: [{ href: "#tixr", label: "Purchase via Tixr", color:'#00FFFF' , border:'#0101FA', size:"grow-1", textColor:'#000' }],
    // },
    {
      key: "sp-right",
      src: "/images/tickets/ticket-3.webp",
      alt: "Stage Pass card",
      ctas: [
        { href: "#ticketmelon", label: "Purchase via Ticketmelon", color:'#7000FF', border:'#0101FA', size:"grow-0 w-2/5" , textColor:'#fff' },
        // { href: "#tixr", label: "Purchase via Tixr", color:'#000', border:'#7000FF', size:"grow-0 w-2/5", textColor:'#fff' },
      ],
    },
  ]

  return (
    <section id="tickets" className=" text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-center">
            <img src="/images/tickets/ticket-text.png" alt="FAQ banner"    className="object-contain w-lg pb-3" />
          </div>
        </div>

        {/* Cards: mobile stacks one-by-one; desktop shows three columns */}
        <div className="mt-10 flex flex-col gap-6 md:flex-row justify-center w-auto">
          {cards.map((card) => (
            <article key={card.key} className="flex flex-col md:basis-1/3 items-stretch">
              <img
                src={card.src || "/placeholder.svg"}
                alt={card.alt}
                className="w-full h-[500px] rounded-lg border border-foreground/10 shadow-sm"
              />
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {card.ctas.map((cta) => (
                  <Button asChild key={cta.label}
                   className={`grow md:${cta.size} text-normal font-[inter] text-center whitespace-normal px-6 font-bold border py-6 rounded-md text-white hover:scale-105 transition-transform`}
                   style={{
                            backgroundColor: cta.color,
                            borderColor: cta.border,
                            color: cta.textColor,
                          }}>
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
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 items-center">
          <p className="text-center uppercase text-sm text-[#fff] font-bold font-[Rajdhani]">Buy now pay later (via TicketMelon)</p>  
          <img src="/images/tickets/payment-img.png" alt="FAQ banner"    className="w-[140px] md:w-[240px] " />
        </div>
      </div>
    </section>
  )
}
