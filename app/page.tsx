import { Navbar } from "@/components/guana/navbar"
import { Hero } from "@/components/guana/hero"
import { Stats } from "@/components/guana/stats"
import { Benefits } from "@/components/guana/benefits"
import { Pricing } from "@/components/guana/pricing"
import { HowItWorks } from "@/components/guana/how"
import { Streaming } from "@/components/guana/streaming"
import { Testimonials } from "@/components/guana/testimonials"
import { Faq } from "@/components/guana/faq"
import { Contact } from "@/components/guana/contact"
import { Footer } from "@/components/guana/footer"
import { StickyCta } from "@/components/guana/sticky-cta"

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <Streaming />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <StickyCta />
    </main>
  )
}
