import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import LineupSlider from "@/components/LineupSlider"
import TicketPricing from "@/components/ticket-pricing"
import EventLayout from "@/components/EventLayout"
import VVIP from "@/components/VVIP"


import SiteFooter from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <Navbar classname="bg-navbar" />
      <Hero />
      <section id="lineup" className="w-full bg-black py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 px-4 text-center text-balance text-2xl font-semibold text-white md:text-3xl">
            Official Lineup
          </h2>
        </div>

        <LineupSlider className="w-full" />
      </section>
        <TicketPricing />
        <EventLayout />
     <VVIP />
      <SiteFooter />
    </main>
  )
}
