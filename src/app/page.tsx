import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import LineupSlider from "@/components/LineupSlider"
import TicketPricing from "@/components/ticket-pricing"
import EventLayout from "@/components/EventLayout"
import VVIP from "@/components/VVIP"


import SiteFooter from "@/components/site-footer"
import {TextContainer} from '@/components/textContainer/text-container';

export default function Page() {
  return (
    <main>
      <Navbar classname="bg-navbar" />
      <Hero />
      <TextContainer />
      <section id="lineup" className="w-full bg-black bg-lineup py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-center">
            <img src="/images/lineup/lineup-text.webp" alt="FAQ banner"    className="object-contain w-lg" />
          </div>
        </div>
        <LineupSlider className="w-full pt-8" />
      </section>
      <section className="section-bg">
        <TicketPricing />
        <EventLayout />
        <VVIP />
     </section>
      <SiteFooter />
    </main>
  )
}
