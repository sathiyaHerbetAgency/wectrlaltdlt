import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FaqItem = { q: string; a: React.ReactNode }

const ticketing: FaqItem[] = [
  {
    q: "How can I buy tickets to CTRL ALT DLT 2025?",
    a: "Tickets are available via www.wectraltdlt.com.",
  },
  {
    q: "What are the ticket categories?",
    a: (
      <div className="space-y-3 text-sm/6 md:text-[16px] font-[inter] text-white">
        <div>
          <div className="font-normal">GENERAL ADMISSION</div>
          <div>RM188.00 onwards</div>
        </div>
        <div>
          <div className="font-normal">STAGE PASS</div>
          <div>RM648.00 onwards.</div>
        </div>
        <p className="italic">*Ticket prices exclude ticketing fees and booking charges.</p>
        <div>
          <div className="font-normal">VVIP SOFA</div>
          <div>Call +601XXX to reserve your spot.</div>
        </div>
      </div>
    ),
  },
  {
    q: "How many tickets can I buy?",
    a: <p className="text-sm/6 text-foreground/80">Each person may purchase up to 10 tickets per transaction.</p>,
  },
]

export default function FaqList() {
  return (
    <section className="bg-faq-content">
      <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        <p className="mb-4 text-xs md:text-sm font-medium text-foreground/70">Ticketing & Registration</p>

        <Accordion type="multiple" className="space-y-4">
          {ticketing.map((item, idx) => (
            <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#54DEFB] to-[#1B1E23]">
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="rounded-lg  bg-black"
            >
              <AccordionTrigger className="rounded-xl px-4 md:px-5 py-4 md:py-5 text-white font-[inter]">
                <span className="text-sm md:text-base font-[inter] font-semibold">{item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-5 pb-4 md:pb-5 text-white">{item.a}</AccordionContent>
            </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
