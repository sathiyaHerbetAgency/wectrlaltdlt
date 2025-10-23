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
      <Navbar />
      <Hero />
      <TextContainer />
      <section id="lineup" className="w-full bg-black bg-lineup py-16">
        <div className="md:mx-auto md:max-w-7xl md:px-4">
          <div className="flex md:justify-center flex-col md:flex-row ">
            <img src="/images/lineup/lineup-text.webp" alt="FAQ banner"    className="self-center pl-5 px-2 min-w-sm max-w-sm md:min-w-lg md:max-w-md" />
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
