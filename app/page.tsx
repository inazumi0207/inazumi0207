import { HeroSection } from "@/components/hero-section"
import { PainPoints } from "@/components/pain-points"
import { Features } from "@/components/features"
import { Works } from "@/components/works"
import { Pricing } from "@/components/pricing"
import { Timeline } from "@/components/timeline"
import { Profile } from "@/components/profile"
import { CtaSection } from "@/components/cta-section"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <PainPoints />
        <Features />
        <Works />
        <Pricing />
        <Timeline />
        <Profile />
        <CtaSection />
      </main>
    </>
  )
}

