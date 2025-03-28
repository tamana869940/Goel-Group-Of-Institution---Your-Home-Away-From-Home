"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, User, LogOut, ChevronDown } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("authToken")
      setIsLoggedIn(!!token)
    }

    if (typeof window !== "undefined") {
      checkAuth()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    setIsLoggedIn(false)
  }

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md shadow-md">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-md bg-gray-200 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gray-200 animate-pulse"></div>
            <div className="h-9 w-20 rounded-md bg-gray-200 animate-pulse"></div>
            <div className="h-9 w-20 rounded-md bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="relative h-12 w-12 overflow-hidden rounded-md">
              <Image src="/logo.png" alt="Goel Group Logo" width={48} height={48} className="object-cover" />
            </div>
            <div>
              <span className="hidden font-display text-lg font-bold tracking-tight sm:inline-block">Goel Group</span>
              <p className="hidden text-xs text-muted-foreground sm:block">of Institution</p>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "Room", path: "/rooms" },
            { name: "Amenities", path: "/amenities" },
            { name: "Hostel", path: "/hostels" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.path ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image src="/user-avatar.jpg" alt="User" width={32} height={32} className="object-cover" />
                  </div>
                  <span className="text-sm font-medium">My Account</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-destructive focus:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild className="h-9 px-4 rounded-full">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="h-9 px-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
          <Button
            variant="secondary"
            asChild
            className="h-9 px-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
          >
            <Link href="/rooms">Book Room</Link>
          </Button>
        </div>

        {/* Mobile Navigation with SheetTitle for accessibility */}
        <div className="flex md:hidden items-center gap-2">
          {!isLoggedIn && (
            <Button 
              asChild 
              size="sm" 
              className="px-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              <Link href="/login">Login</Link>
            </Button>
          )}
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <VisuallyHidden asChild>
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
              </VisuallyHidden>
              
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8 mt-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-md">
                    <Image src="/logo.png" alt="Goel Group Logo" width={40} height={40} className="object-cover" />
                  </div>
                  <div>
                    <span className="font-display text-base font-bold tracking-tight">Goel Group</span>
                    <p className="text-xs text-muted-foreground">of Institution</p>
                  </div>
                </div>

                <nav className="flex-1 flex flex-col gap-4">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Room", path: "/rooms" },
                    { name: "Amenities", path: "/amenities" },
                    { name: "Hostel", path: "/hostels" },
                    { name: "Contact", path: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        pathname === item.path ? "text-primary font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-4 border-t">
                  {isLoggedIn ? (
                    <>
                      <Link
                        href="/profile"
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 mb-2"
                      >
                        <User className="h-4 w-4" />
                        Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 mb-4"
                      >
                        <User className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <Button
                        variant="outline"
                        onClick={handleLogout}
                        className="w-full text-destructive"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    >
                      <Link href="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
                    </Button>
                  )}
                  <Button
                    asChild
                    className="w-full mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                  >
                    <Link href="/rooms" onClick={() => setOpen(false)}>Book Room</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}