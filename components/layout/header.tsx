"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isMenuOpen) {
        const menu = document.getElementById("mobile-menu")
        if (menu && !menu.contains(event.target as Node)) {
          setIsMenuOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/logo.png"
              alt="Goel Group Of Institution Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight font-bold">
            <span className="text-xl text-orange-600">Goel Group</span>
            <span className="text-sm text-blue-700">Of Institution</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/rooms" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Rooms
          </Link>
          <Link href="/hostels" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Hostels
          </Link>
          <Link href="/amenities" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Amenities
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
          Contact
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
        <Link href="/login">
          <Button variant="outline" size="sm" className="hidden md:flex border-orange-600 text-orange-600 hover:bg-orange-50">
            Login
          </Button>
          </Link>
          <Link href="/rooms">
          <Button size="sm" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white">
            Book Now
          </Button>
          </Link>
          <button className="md:hidden" aria-label="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg border-l p-4 z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close (X) Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-sm font-medium hover:text-orange-600 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/rooms" className="text-sm font-medium hover:text-orange-600 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                  Rooms
                </Link>
                <Link href="/hostels" className="text-sm font-medium hover:text-orange-600 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                  Hostels
                </Link>
                <Link href="/amenities" className="text-sm font-medium hover:text-orange-600 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                  Amenities
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-orange-600 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <div className="pt-4">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 mb-2">
                    Login
                  </Button>
                  </Link>
                  <Link href="/rooms">
                  <Button size="sm" className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white">
                    Book Now
                  </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
