import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VVIP() {
 

  return (
    <section className="bg-black text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="text-center flex justify-center mb-6">
                   <img src="/images/VVIP/VVIPText.png" alt="Event Layout Map" />

        </header>

        {/* Cards: mobile stacks one-by-one; desktop shows three columns */}
      

        {/* SR-only: desktop reference image kept for QA */}
        <div className="">
          <img src="/images/VVIP/VVIPImage.png" alt="Event Layout Map" />
        </div>
      </div>
    </section>
  )
}
