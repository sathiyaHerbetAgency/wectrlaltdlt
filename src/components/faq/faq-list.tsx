import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FaqItem = { q: string; a: React.ReactNode }

const ticketing: FaqItem[] = [
  {
    q: "How can I buy tickets to CTRL ALT DLT 2025?",
    a: (
       <div className="space-y-3 text-sm/6 md:text-[14px] font-[inter] text-white ">
        <div>
          <div className="font-normal">Tickets are available via  <a className="hover:underline" href="https://www.ticketmelon.com/cadevents/Wectrlaltdlt/" target="blank">Ticket Melon</a> and <a className="hover:underline" href="https://www.ticketmelon.com/cadevents/Wectrlaltdlt/" target="blank">Tixer</a> </div>
        </div>
        </div>
    ),
  },
  {
    q: "What are the ticket categories?",
    a: (
      <div className="space-y-3 text-sm/6 md:text-[14px] font-[inter] text-white ">
        <div>
          <div className="font-normal">GENERAL ADMISSION</div>
          <div>RM188.00 onwards</div>
        </div>
        <div>
          <div className="font-normal">Reboot Pass (Stage Experience)</div>
          <div>RM648.00 onwards.</div>
        </div>
        <p className="italic">*Ticket prices exclude ticketing fees and booking charges.</p>
        <div>
          <div className="font-normal"> Premium Stage Experience (VVIP Sofa)</div>
          <div>Reserve your spot at info@ctrlaltdlt.com.</div>
        </div>
      </div>
    ),
  },
  {
    q: "How many tickets can I buy?",
    a: "Each person may purchase up to 10 tickets per transaction.",
  },
  {
    q: "What are the accepted payment methods?",
    a: "We accept card payments (Credit & Debit) and FPX Online Banking. Buy Now Pay Later payment methods are also available via Atome, PayLater by Grab and SpayLater (via Ticketmelon).",
  },
   {
    q: "Will I receive any confirmation for my purchase?",
    a: "Once your purchase is confirmed, you will receive an email. Be sure to enter the correct email address during your checkout process. ",
  },
  {
    q: "What should I do if I receive an error message?",
    a: (
       <div className="space-y-3 text-sm/6 md:text-[14px] font-[inter] text-white">
       
          <div className="font-normal">
            <p> If you receive an error message while making a purchase, kindly email us at info@wectrlaltdlt.com </p>
       
        </div>  
        </div>
    ),
    
    
  },
  {
    q: "Are the tickets refundable? ",
    a: "No, the tickets are not refundable after purchase and cannot be resold, transferred, or exchanged."
  },
  {
    q: "Am I required to create an account for my selected ticketing platform (Ticketmelon or Tixr) to purchase tickets?",
    a: "Yes, in order to purchase tickets, you are required to register an account for the selected platform."
  },
]
const eventDetails: FaqItem[] = [
  {
    q: "What are the event details?",
  a: (
        <div className="space-y-3 text-sm/6 md:text-[14px] font-[inter] text-white ">
          <div className="font-normal">Name: CTRL ALT DLT 2025 </div>
          <div>Date: 31st December 2025 (Wednesday) </div>
          <div>Location: Sepang International Circuit</div>
        </div>
    ),  },
  
  {
    q: "What time does the event start?",
    a: "Exact timing will be announced closer to the event. For more info, stay tuned on our social media platforms at @wectrlaltdlt",
  },
  {
    q: "Is there an age limit for the event?",
    a: "Entry to this event is restricted to individuals who are legally 18 years of age and older. A valid government-issued photo identification with proof of age must be presented upon entry. ",
  },
   {
    q: "Will the festival be cancelled if it rains?",
    a: "*Unless advised by officials, the festival will continue as usual even in less than ideal weather conditions.",
  },
  {
    q: "What is the lineup and timetable?",
    a: "Exact lineup and timetable will be announced closer to the event. For more info, stay tuned on our social media platforms at @wectrlaltdlt.",
  },
  
]

const venueInfo: FaqItem[] = [
  {
    q: "What items are not allowed in the venue?",
    a: (
      <div className="space-y-3 text-sm/6 md:text-[14px] font-[inter] text-white text-white">
        <div>
          <div className="font-normal">Prohibited items include: all type of cameras (except for phone camera), audio/video recording equipment, large bags, weapons, outside food/drinks, etc. Full list will be published closer to the event date.</div>
        </div>
        
        <p className="italic text-[10px]">*The organisers and/promoters reserve the rights to amend the list without any prior notice.</p>
       
      </div>
    ),
  },
  {
    q: "Is re-entry allowed?",
    a: "No re-entry is permitted once you leave the venue.",
  },
  {
    q: "Is smoking allowed in the venue? ",
    a: "No, it is not. Cigarettes/e-cigarettes and vape devices aren’t allowed inside. Vape products will be sold within the venue for those who wish to purchase it.",
  },
   {
    q: "Am I allowed to bring in medication into the venue?",
    a: "Yes, but please ensure it’s clearly labelled with your name and accompanied by any necessary documentation. If you need assistance, inform our event staff."
   },
  {
    q: "Is prayer space available?",
    a: "The availability of a prayer space is subject to venue setup and availability. Stay tuned on our social media platforms for more updates.",
  },
  {
    q: "Will lockers be available for rental at the venue?",
    a: "Locker availability is subject to the venue's setup and capacity. We recommend packing light for smoother security checks and a more comfortable experience. For updates and further information, please stay tuned to our social media platforms.",
  },
  {
    q: "Will there be parking at the venue?",
    a: "Parking is available however ride-sharing or public transport is highly recommended.",
  },
  {
    q: "Is the venue accessible for wheelchair users?",
    a: "Please contact info@wectrlaltdlt.com for assistance.",
  },
]

export default function FaqList() {
  return (
    <section className="bg-faq-content">
      <div className="mx-auto max-w-5xl md:max-w-6xl px-4 py-8 md:py-12">
        <p className="mb-4 text-xs md:text-sm font-medium font-[inter] text-white">Ticketing & Registration</p>

        <Accordion type="multiple" className="space-y-4">
          {ticketing.map((item, idx) => (
            <div key={idx+1} className="p-[1px] rounded-lg bg-gradient-to-r from-[#54DEFB] to-[#1B1E23]">
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="rounded-lg  bg-black"
            >
              <AccordionTrigger className="rounded-xl px-4 md:px-5 py-4 md:py-5 text-white font-[inter]">
                <span className="text-sm md:text-base font-[inter] font-semibold">{item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-5 pb-4 md:pb-5 font-normal text-white"><div className="text-sm/6 md:text-[14px] font-[inter] text-white text-white"> {item.a}</div></AccordionContent>
            </AccordionItem>
            </div>
          ))}
        </Accordion>
               <p className="italic text-[10px] md:text-[12px] font-normal font-[inter] text-white mt-3">*Other ticketing terms and conditions may apply. </p>
      </div>
       <div className="mx-auto max-w-5xl md:max-w-6xl px-4 py-8 md:py-12">
        <p className=" text-xs md:text-sm font-medium font-[inter] text-white mb-4">Event Details </p>


        <Accordion type="multiple" className="space-y-4">
          {eventDetails.map((item, idx) => (
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
      <div className="mx-auto max-w-5xl md:max-w-6xl px-4 py-8 md:py-12">
        <p className=" text-xs md:text-sm font-medium font-[inter] text-white">Venue & Entry Info</p>
        <p className=" text-xs md:text-sm italic pt-3 font-[inter] text-white">Stay tuned! Details will be announced closer to the event </p>

        {/* <Accordion type="multiple" className="space-y-4">
          {venueInfo.map((item, idx) => (
            <div  className="p-[1px] rounded-lg bg-gradient-to-r from-[#54DEFB] to-[#1B1E23]">
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
        </Accordion> */}
      </div>
    </section>
  )
}
