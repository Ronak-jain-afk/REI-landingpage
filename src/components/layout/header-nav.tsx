import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function NavLinks() {
  return (
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
  )
}
