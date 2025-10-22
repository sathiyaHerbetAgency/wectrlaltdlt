import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VVIP() {
 

  return (
    <section className=" text-foreground pb-24">
      <div className="mx-auto max-w-6xl px-6 py-4 md:py-6">
        <header className="text-center flex justify-center mb-6">
                   <img src="/images/VVIP/VVIPText.webp" className="w-xs md:w-md md:pb-3" alt="Event Layout Map" />

        </header>

        {/* Cards: mobile stacks one-by-one; desktop shows three columns */}
      

        {/* SR-only: desktop reference image kept for QA */}
        <div className="">
          <img src="/images/VVIP/VVIPImage.webp" alt="Event Layout Map" />
        </div>
      </div>
        <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-center  items-center">
           {/* <Link
      href={"#packages"}
      className="neon-button uppercasae inline-flex text-white items-center justify-center px-4 py-2 md:px-6 md:py-2.5
                 text-[11px] md:text-sm font-[inter] font-semibold bg-cta-button w-[150px]"
      aria-label={"VVIP Packages"}
    >
      Packages
    </Link> */}
          <p className="text-center uppercase text-[12px] md:text-[15px] text-[#fff] font-medium font-[Rajdhani] max-w-5xl">
           For VVIP sofa inquiry, kindly email to info@wectrlaltdlt.com</p>  
        </div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-center">
            <img src="/images/VVIP/Logoline_CAD.png" alt="Logo Line"    className="object-contain  md:w-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
