"use client"

import * as React from "react"
import Link from "next/link"
import { Search, Facebook, Instagram, Twitter, LogIn, LogOut, Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Membership", href: "/membership" },
  { title: "Events", href: "/events" },
  { title: "Stories", href: "/blog" },
  { title: "Merchandise", href: "/mockups/merchandise/t-shirt" },
  { title: "Partners", href: "/partners" },
  { title: "About", href: "/about" },
  { title: "Contact Us", href: "/contact" },
]

export function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Logo size={32} className="rounded-full" />
              <span className="font-montserrat font-semibold text-lg text-primary">
                Rulang Alumni Association
              </span>
            </Link>
          </div>

          {/* Main Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search Button - Hidden on mobile */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Social Media Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>

            </div>

            {/* Login/Logout - Responsive */}
            {isLoggedIn ? (
              <Button
                variant="outline"
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center space-x-2 text-sm px-2 sm:px-4"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Member Logout</span>
              </Button>
            ) : (
              <Button
                onClick={() => setIsLoggedIn(true)}
                className="flex items-center space-x-2 text-sm px-2 sm:px-4"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Member Login</span>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                
                {/* Mobile-only actions */}
                <div className="flex flex-col space-y-3 pt-3 border-t">
                  {/* Search */}
                  <Button variant="ghost" className="justify-start px-3">
                    <Search className="h-4 w-4 mr-3" />
                    Search
                  </Button>
                  
                  {/* Social Media */}
                  <div className="flex items-center space-x-2 px-3">
                    <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label="Facebook">
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label="Instagram">
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label="Twitter">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}