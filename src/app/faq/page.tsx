import FaqHero from "@/components/faq/faq-hero"
import FaqList from "@/components/faq/faq-list"
import { Navbar } from './../../components/navbar';
import { SiteFooter } from './../../components/site-footer';

export default function faq() {
  return (
    <main className="min-h-dvh w-full bg-background">
        <Navbar  />
        <FaqHero />
        <FaqList />
        <SiteFooter />
    </main>
  )
}
