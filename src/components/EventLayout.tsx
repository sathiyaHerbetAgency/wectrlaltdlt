import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EventLayout() {
 

  return (
    <section id="layout" className=" text-foreground pb-16">
      <div className="mx-auto max-w-6xl px-6 ">
        <header className="text-center flex justify-center mb-6">
                   <img src="/images/Event/EventText.webp" className=" min-w-sm px-3 md:min-w-md md:max-w-md pb-3" alt="Event Layout Map" />

        </header>

        {/* Cards: mobile stacks one-by-one; desktop shows three columns */}
      

        {/* SR-only: desktop reference image kept for QA */}
        <div className="flex justify-center ">
          <img src="/images/Event/Eventlayout.webp" alt="Event Layout Map" className="md:max-w-3xl items-center self-center" />
        </div>
      </div>
      <div className="md:mx-auto max-w-7xl md:px-4 pt-4 md:pt-6">
        <div className="flex justify-center items-center">
          <p className="text-center uppercase text-[8px] md:text-[15px] text-[#fff]/50 font-medium font-[Rajdhani] max-w-xs md:max-w-5xl">
            Disclaimer: Venue layout is not drawn to scale and is for ticket location purposes only. Colour indicates price category. 
            Layout is subject to change without prior notice. Ticket price excludes ticket fee & booking charges.</p>  
        </div>
      </div>
    </section>
  )
}
