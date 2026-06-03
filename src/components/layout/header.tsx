"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { HeaderLogo } from "@/components/layout/header-logo"
import { NavLinks } from "@/components/layout/header-nav"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full border border-primary/10 bg-background/50 backdrop-blur-xl transition-all duration-300 shadow-xl shadow-primary/5">
      <div className="container flex h-16 items-center justify-between px-6 md:px-8">
        <HeaderLogo />
        <NavLinks />
        <div className="flex flex-1 items-center justify-end gap-3">
          <Link
            href="https://github.com/Ronak-jain-afk/RE-Invoice"
            target="_blank"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "hidden sm:flex rounded-full gap-2")}
          >
            <Github className="size-4" />
            GitHub
          </Link>
          <ModeToggle />
          <Link
            href="#download"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full px-6 h-10 font-bold shadow-lg shadow-primary/20")}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}
