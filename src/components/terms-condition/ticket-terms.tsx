export default function TicketTerms() {
  return (
    <article id="tickets" className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-sm font-[inter] text-white">General Ticket Sales Terms &amp; Conditions</h1>
        <p className="text-white/80 text-sm">Last updated: 21 October 2025</p>
      </header>

      <ol className="list-decimal list-inside space-y-3 text-white leading-relaxed  font-[inter] text-sm">
        <li>All ticket holders need a valid ticket to enter the event. One (1) ticket admits one (1) person only.</li>
        <li>All tickets will be sold online and issued electronically.</li>
        <li>One (1) ID may be used to purchase up to ten (10) tickets per transaction.</li>
        <li>
          The ticket price shall be the price set at the time the order is accepted. Prices may be subject to handling
          fees, ticketing fees, and other charges.
        </li>
        <li>Once tickets are sold, no exchange, cancellation, or refund is allowed under any circumstances.</li>
        <li>
          The resale of tickets is strictly prohibited. The Organiser reserves the right to cancel any tickets found to
          have been resold. Tickets are non-transferable and may be rendered invalid if resold.
        </li>
        <li>Tickets purchased from unauthorised ticket sellers or scalpers are void.</li>
        <li>Removing, altering, or defacing any part of the QR code may invalidate the ticket.</li>
        <li>The Organiser will not be responsible for any ticket that is lost, stolen, or destroyed.</li>
        <li>
          Entry to this event is restricted to individuals who are legally 18 years of age or older. You may be required
          to present a valid government-issued photo ID for age and identity verification.
        </li>
        <li>
          For multiple ticket purchases on behalf of friends and/or family, you are solely responsible for all tickets
          under your purchase. Ensure each ticket is delivered only to the intended recipient and is not shared with any
          third party.
        </li>
        <li>
          If the Identity Card (ID) used during online purchase changes before the event, the current valid ID must be
          produced for amendments. The Ticketing Agent(s) and Organiser may request additional documents to verify the
          purchaser’s identity and reserve the absolute right to refuse entry if verification is insufficient.
        </li>
        <li>
          For registration/collection, purchasers must show the e-confirmation (with QR code) sent to them and a clear
          copy of the ID submitted during purchase. Access control procedures are governed by these Terms &amp;
          Conditions and any additional provisions notified from time to time.
        </li>
        <li>
          Purchasers must present their original ID and confirmation email with QR code upon collection. Failure to
          verify identity may result in denied entry to the hall.
        </li>
        <li>Third parties are not allowed to enter the event hall on behalf of the purchaser or ticket holder.</li>
        <li>
          In the event of duplicate access attempts on the event day, the purchaser must provide proof of purchase.
          Failure to do so will result in denied entry.
        </li>
        <li>
          Ownership or possession of a ticket does not confer any rights (by implication or otherwise) to use, alter,
          copy, or deal with any symbols, trademarks, logos, or other intellectual property appearing on the ticket.
        </li>
        <li>
          Information collected by the Ticketing Agent(s) to facilitate ticketing or other services is used in
          accordance with our Privacy Policy.
        </li>
      </ol>

      <section className="space-y-2 pt-4 border-t border-white/10">
        <p className="text-sm text-white">
          Questions about ticket terms? Email{" "}
          <a href="mailto:info@wectrlaltdlt.com" className="text-white underline" style={{color:"#fff"}}>
            info@wectrlaltdlt.com
          </a>
          .
        </p>
        {/* <p className="text-xs text-white/80">
          Note: These terms are provided for general information and may be updated. They do not constitute legal
          advice.
        </p> */}
      </section>
    </article>
  );
}