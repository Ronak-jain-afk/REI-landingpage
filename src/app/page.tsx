import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { FAQ } from "@/components/sections/faq"
import { DownloadSection } from "@/components/sections/download"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <DownloadSection />
    </div>
  )
}
