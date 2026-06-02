import Link from "next/link"
import { Github, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <FileText className="size-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="https://github.com/Ronak-jain-afk"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Ronak Jain
            </Link>
            . Open source under MIT. The source code is available on{" "}
            <Link
              href="https://github.com/Ronak-jain-afk/RE-Invoice"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
           <Link href="https://github.com/Ronak-jain-afk/RE-Invoice" target="_blank" rel="noreferrer">
              <Github className="size-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">GitHub</span>
           </Link>
        </div>
      </div>
    </footer>
  )
}
