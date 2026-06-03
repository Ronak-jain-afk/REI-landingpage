import Link from "next/link"
import { Download, Github, Monitor, Terminal } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroActionsProps {
  exeAsset: { browser_download_url: string } | null
  debAsset: { browser_download_url: string } | null
}

export function HeroActions({ exeAsset, debAsset }: HeroActionsProps) {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
      {exeAsset && (
        <Link
          href={exeAsset.browser_download_url}
          className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 rounded-full text-lg font-bold shadow-lg shadow-primary/25 hover:scale-105 transition-transform duration-300 gap-3")}
        >
          <Monitor className="size-6" />
          Download for Windows
        </Link>
      )}
      {debAsset && (
        <Link
          href={debAsset.browser_download_url}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 px-10 rounded-full text-lg font-bold border-primary/20 hover:bg-primary/5 hover:scale-105 transition-transform duration-300 gap-3")}
        >
          <Terminal className="size-6" />
          Download for Linux
        </Link>
      )}
      {!exeAsset && !debAsset && (
        <Link
          href="https://github.com/Ronak-jain-afk/RE-Invoice/releases"
          className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 rounded-full text-lg font-bold shadow-lg shadow-primary/25 gap-3")}
        >
          <Download className="size-6" />
          View All Releases
        </Link>
      )}
      <Link
        href="https://github.com/Ronak-jain-afk/RE-Invoice"
        target="_blank"
        className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "h-14 px-8 rounded-full text-lg font-medium opacity-70 hover:opacity-100 gap-2")}
      >
        <Github className="size-6" />
        Source Code
      </Link>
    </div>
  )
}
