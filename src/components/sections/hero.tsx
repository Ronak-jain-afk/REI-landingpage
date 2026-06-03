"use client"

import Image from "next/image"
import { useGitHubRelease } from "@/hooks/useGitHubRelease"
import { MeshGradient } from "@/components/sections/hero-mesh"
import { HeroActions } from "@/components/sections/hero-actions"

export function Hero() {
  const { release, exeAsset, debAsset } = useGitHubRelease()

  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
      <MeshGradient />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">
              {release ? `Version ${release.tag_name} is now available` : "Open Source & Privacy First"}
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
            Manage your business with <br />
            <span className="relative inline-block px-8 py-2 mt-4">
              <span className="relative z-10 text-primary-foreground">RE-Invoice</span>
              <div className="absolute inset-0 bg-primary rounded-[2rem] -rotate-1 scale-105 shadow-xl shadow-primary/20" />
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed font-medium">
            The precise, lightweight, and local-only tool for
            <span className="text-foreground font-bold italic ml-2 underline decoration-primary/30 underline-offset-4">inventory control</span>.
          </p>

          <HeroActions exeAsset={exeAsset} debAsset={debAsset} />
        </div>

        <div className="mt-20 md:mt-28 relative mx-auto max-w-6xl group">
          <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] -rotate-1 blur-2xl group-hover:rotate-1 transition-transform duration-1000" />
          <div className="relative rounded-[2rem] border border-primary/10 bg-card p-3 shadow-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:shadow-primary/5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-primary/5">
              <Image
                src="/images/demo_billing.png"
                alt="RE-Invoice Billing Interface"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/40 mb-10">Built with standard-setting technology</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 saturate-0 hover:saturate-100 hover:opacity-60 transition-all duration-500">
            <span className="text-2xl font-black tracking-tighter">TAURI</span>
            <span className="text-2xl font-black tracking-tighter">REACT</span>
            <span className="text-2xl font-black tracking-tighter">SQLITE</span>
            <span className="text-2xl font-black tracking-tighter">VITE</span>
            <span className="text-2xl font-black tracking-tighter">TYPESCRIPT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
