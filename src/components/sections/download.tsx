"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Monitor, Terminal, Github } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Release {
  tag_name: string
  assets: {
    name: string
    browser_download_url: string
  }[]
}

export function DownloadSection() {
  const [release, setRelease] = useState<Release | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/repos/Ronak-jain-afk/RE-Invoice/releases/latest")
      .then((res) => res.json())
      .then((data) => setRelease(data))
      .catch((err) => console.error("Error fetching release:", err))
  }, [])

  const exeAsset = release?.assets.find((a) => a.name.endsWith(".exe"))
  const debAsset = release?.assets.find((a) => a.name.endsWith(".deb"))

  return (
    <section id="download" className="py-32 bg-primary text-primary-foreground overflow-hidden relative mx-4 md:mx-10 rounded-[3rem] my-24">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl leading-tight">
            Ready to <br />
            <span className="opacity-60 italic">Take Control?</span>
          </h2>
          <p className="mt-8 max-w-[700px] text-primary-foreground/80 text-lg sm:text-2xl font-medium leading-relaxed">
            Download RE-Invoice for free and start managing your inventory locally today. It's open source, secure, and built for speed.
          </p>
          
          <div className="mt-14 flex flex-wrap justify-center gap-6">
             {exeAsset && (
                <Link 
                  href={exeAsset.browser_download_url}
                  className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-16 px-12 rounded-full text-xl font-bold gap-4 shadow-2xl hover:scale-105 transition-transform duration-300")}
                >
                  <Monitor className="size-7" />
                  Download for Windows
                </Link>
             )}
             {debAsset && (
                <Link 
                  href={debAsset.browser_download_url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }), 
                    "h-16 px-12 rounded-full text-xl font-bold gap-4 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 shadow-xl"
                  )}
                >
                  <Terminal className="size-7" />
                  Download for Linux
                </Link>
             )}
             {!exeAsset && !debAsset && (
                <Link 
                  href="https://github.com/Ronak-jain-afk/RE-Invoice/releases"
                  className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-16 px-12 rounded-full text-xl font-bold gap-4 shadow-2xl")}
                >
                  <Github className="size-7" />
                  View All Releases
                </Link>
             )}
          </div>
          
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-black/10 border border-white/5 backdrop-blur-md">
             <div className="size-2 rounded-full bg-green-400 animate-pulse" />
             <span className="text-sm font-bold tracking-wide uppercase opacity-80">
                Latest Stable Version: {release?.tag_name || "v0.1.0"}
             </span>
          </div>
        </div>
      </div>
      
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
         <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-white/20 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 size-[800px] bg-accent/30 blur-[150px] rounded-full" />
      </div>
    </section>
  )
}
