"use client"

import { useGitHubRelease } from "@/hooks/useGitHubRelease"
import { DownloadActions } from "@/components/sections/download-actions"

export function DownloadSection() {
  const { release, exeAsset, debAsset } = useGitHubRelease()

  return (
    <section id="download" className="py-32 bg-primary text-primary-foreground overflow-hidden relative mx-4 md:mx-10 rounded-[3rem] my-24">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl leading-tight">
            Ready to <br />
            <span className="opacity-60 italic">Take Control?</span>
          </h2>
          <p className="mt-8 max-w-[700px] text-primary-foreground/80 text-lg sm:text-2xl font-medium leading-relaxed">
            Download RE-Invoice for free and start managing your inventory locally today. It&apos;s open source, secure, and built for speed.
          </p>

          <DownloadActions exeAsset={exeAsset} debAsset={debAsset} />

          {release && (
            <div className="mt-12 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-black/10 border border-white/5 backdrop-blur-md">
              <div className="size-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-bold tracking-wide uppercase opacity-80">
                Latest Stable Version: {release.tag_name}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-white/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 size-[800px] bg-accent/30 blur-[150px] rounded-full" />
      </div>
    </section>
  )
}
