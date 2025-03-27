"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, LogOut, ChevronDown, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if user is logged in (mock implementation)
  useEffect(() => {
    // This would be replaced with actual auth check
    const checkAuth = () => {
      const token = localStorage.getItem("authToken")
      setIsLoggedIn(!!token)
    }

    if (typeof window !== "undefined") {
      checkAuth()
    }
  }, [])

  // Handle scroll effect for header
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

  // Mock logout function
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
            { name: "About", path: "/about" },
            { name: "Facilities", path: "/facilities" },
            { name: "Members", path: "/members" },
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
            <Link href="/book-room">Book Room</Link>
          </Button>
        </div>

        <Sheet>
          <SheetContent side="right">
            <div className="flex items-center gap-2 mb-8 mt-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-md">
                <Image src="/logo.jpg" alt="Goel Group Logo" width={40} height={40} className="object-cover" />
              </div>
              <div>
                <span className="font-display text-base font-bold tracking-tight">Goel Group</span>
                <p className="text-xs text-muted-foreground">of Institution</p>
              </div>
            </div>
            <nav className="flex flex-col gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "Room", path: "/rooms" },
                { name: "Amenities", path: "/Amenities" },
                { name: "Hostel", path: "/hostel" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.path ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-2" />
              {isLoggedIn ? (
                <>
                  <Link
                    href="/profile"
                    className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Button variant="outline" onClick={handleLogout} className="justify-start mt-2 text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary">
                    Login
                  </Link>
                  <Link href="/signup" className="text-sm font-medium transition-colors hover:text-primary">
                    Sign Up
                  </Link>
                </>
              )}
              <Button
                variant="secondary"
                asChild
                className="mt-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white"
              >
                <Link href="/book-room">Book Room</Link>
              </Button>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm">Theme</span>
                <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}

