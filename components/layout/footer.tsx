import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-12 md:py-16">
      <div className="container px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="relative h-10 w-10 bg-white rounded-full p-1">
                <Image
                  src="/logo.png"
                  alt="Goel Group Of Institution Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-orange-400">Goel</span> <span className="text-white">Group Of Institution</span>
              </div>
            </div>
            <p className="text-blue-200">
              Providing comfortable and secure accommodation for students and working professionals since 2010.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-orange-400" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-orange-400" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-orange-400" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-orange-400" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-blue-200 hover:text-orange-400 transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/hostels" className="text-blue-200 hover:text-orange-400 transition-colors">
                  Hostels
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-blue-200 hover:text-orange-400 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-400">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-blue-200 hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-200 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-blue-200 hover:text-orange-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-blue-200 hover:text-orange-400 transition-colors">
                  Hostel Rules
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-200 hover:text-orange-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-blue-200">123 University Road, Near College Campus, City - 380015</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400 shrink-0" />
                <span className="text-blue-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400 shrink-0" />
                <span className="text-blue-200">info@goelinstitution.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-orange-400 shrink-0" />
                <span className="text-blue-200">Office Hours: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-8 text-center">
          <p className="text-sm text-blue-300">
            © {new Date().getFullYear()} Goel Group Of Institution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

