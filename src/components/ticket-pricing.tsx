import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TicketPricing() {
  const cards = [
    {
      key: "ga-left",
      src: "/images/tickets/ticket-1.webp",
      alt: "General Admission card",
      ctas: [
        { href: "https://www.ticketmelon.com/cadevents/ctrlaltdlt/", label: "Purchase via Ticketmelon", color:'#0101FA', border:'#0101FA', size:"grow-1 w-2/5", textColor:'#fff', status:"buy",},
        { href: "http://ctrlaltdlt.tixr.com/countdown2025", label: "Purchase via Tixr", color:'#000', border:'#0101FA', size:"grow-1 w-2/5", textColor:'#fff', status:"buy", },
      ],
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
        { href: "https://www.ticketmelon.com/cadevents/ctrlaltdlt/", label: "Purchase via Ticketmelon", color:'#7000FF', border:'#0101FA', size:"grow-1 w-2/5" , textColor:'#fff', status:"buy", },
        { href: "http://ctrlaltdlt.tixr.com/countdown2025", label: "Purchase via Tixr", color:'#000', border:'#7000FF', size:"grow-1 w-2/5", textColor:'#fff', status:"buy", },
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
                  <Button
                    asChild
                    key={cta.label}
                    disabled={cta.status === "comingsoon"}
                    className={`
                    grow md:${cta.size} font-[inter] text-center whitespace-normal px-6 font-bold border py-6 rounded-md text-white transition-transform
                    ${cta.status === "comingsoon"
                      ? "opacity-50 cursor-not-allowed  hover:scale-100"
                      : "hover:scale-105"}
                    `}
                    style={{
                    backgroundColor: cta.color,
                    borderColor: cta.border,
                    color: cta.textColor,
                    }}
                    >
                   {cta.status === "comingsoon" ? (
                      // ⛔ non-clickable version
                      <span>Tickets on sale will be on 23rd Oct, 12pm </span>
                    ) : (
                      // ✅ clickable version
                      <Link target="_blank" href={cta.href}>{cta.label}</Link>
                    )}
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
      <div className="mx-auto max-w-7xl px-4 flex flex-col justify-center gap-4 items-center">
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 items-center">
          <p className="text-center uppercase text-sm text-[#fff] font-bold font-[Rajdhani]">Buy now pay later (via TicketMelon)</p>  
          <div className="flex items-center gap-3">
            <img src="/images/tickets/payment-image-1.png" alt="FAQ banner"    className=" w-[25px] h-[25px]" />
            <img src="/images/tickets/payment-image-3.png" alt="FAQ banner"    className="w-[50px] h-[30px] " />
            <img src="/images/tickets/payment-image-2.png" alt="FAQ banner"    className="w-[40px] h-[35px] " />

          </div>   
        </div>
        <p className="italic text-center uppercase text-[6px] self-center md:text-[8px] text-[#fff]/70 font-medium font-[Rajdhani] max-w-5xl">
           Disclaimer : Ticket Price Excludes Ticket Fee & Booking Charges</p>  
      </div>
    </section>
  )
}
