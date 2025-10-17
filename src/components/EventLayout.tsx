import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EventLayout() {
 

  return (
    <section id="layout" className=" text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="text-center flex justify-center mb-6">
                   <img src="/images/Event/EventText.webp" className="w-lg pb-3" alt="Event Layout Map" />

        </header>

        {/* Cards: mobile stacks one-by-one; desktop shows three columns */}
      

        {/* SR-only: desktop reference image kept for QA */}
        <div className="">
          <img src="/images/Event/Eventlayout.webp" alt="Event Layout Map" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-center gap-4 items-center">
          <p className="text-center uppercase text-[10px] md:text-[15px] text-[#fff] font-medium font-[Rajdhani] max-w-5xl">
            Disclaimer :Venue layout is not drawn to scale and is for ticket location purposes only. Colour indicates price category. 
Layout is subject to change without prior notice. Ticket price excludes ticket fee & booking charges.</p>  
        </div>
      </div>
    </section>
  )
}
