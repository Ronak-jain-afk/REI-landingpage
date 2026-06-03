import Link from "next/link"
import { Monitor, Terminal, Github } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DownloadActionsProps {
  exeAsset: { browser_download_url: string } | null
  debAsset: { browser_download_url: string } | null
}

export function DownloadActions({ exeAsset, debAsset }: DownloadActionsProps) {
  return (
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
  )
}
