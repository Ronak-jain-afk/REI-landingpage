"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full border border-primary/10 bg-background/50 backdrop-blur-xl transition-all duration-300 shadow-xl shadow-primary/5">
      <div className="container flex h-16 items-center justify-between px-6 md:px-8">
        {/* Logo (Left) */}
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative size-9 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
               <Image 
                src="/images/app-icon.png" 
                alt="RE-Invoice Logo" 
                fill 
                sizes="36px"
                className="object-contain"
               />
            </div>
            <span className="inline-block font-black text-xl tracking-tighter">RE-INVOICE</span>
          </Link>
        </div>

        {/* Navigation (Center) */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  render={<Link href="#features" />} 
                  className={cn(navigationMenuTriggerStyle(), "rounded-full px-5 h-10 hover:bg-primary/5 bg-transparent")}
                >
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  render={<Link href="#how-it-works" />} 
                  className={cn(navigationMenuTriggerStyle(), "rounded-full px-5 h-10 hover:bg-primary/5 bg-transparent")}
                >
                  Workflow
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions (Right) */}
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
