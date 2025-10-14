import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EventLayout() {
 

  return (
    <section className="bg-black text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="text-center flex justify-center mb-6">
                   <img src="/images/Event/EventText.png" alt="Event Layout Map" />

        </header>

        {/* Cards: mobile stacks one-by-one; desktop shows three columns */}
      

        {/* SR-only: desktop reference image kept for QA */}
        <div className="">
          <img src="/images/Event/Eventlayout.png" alt="Event Layout Map" />
        </div>
      </div>
    </section>
  )
}
