import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80 max-w-md">
                Subscribe to our newsletter to receive updates about hostel facilities, events, and important
                announcements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full"
              />
              <Button className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 rounded-full">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-md bg-white/10 p-2">
                <Image src="/logo.png" alt="Goel Group Logo" width={48} height={48} className="object-cover" />
              </div>
              <div> 
                <h3 className="font-display text-xl font-bold">Goel Group</h3>
                <p className="text-sm text-white/70">of Institution</p>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Providing quality education and comfortable hostel facilities for students since 1995. Our mission is to
              create a supportive environment for academic excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-amber-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-amber-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-amber-400" />
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-amber-400" />
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="/book-room"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-amber-400" />
                  Book Room
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-amber-400" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Hostel Facilities</h3>
            <ul className="space-y-4">
              <li className="text-white/80 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-amber-400" />
                24/7 Security & CCTV
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-amber-400" />
                High-Speed Wi-Fi
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-amber-400" />
                Nutritious Mess Facility
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-amber-400" />
                Laundry Service
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-amber-400" />
                Common Room & Recreation
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-amber-400" />
                Study Areas & Library
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-amber-400" />
                <span className="text-white/80">
                  Goel Group of Institution Campus, Main Road, City, State, PIN - 110001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-amber-400" />
                <span className="text-white/80">+91 1234567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-amber-400" />
                <span className="text-white/80">info@goelgroup.edu.in</span>
              </div>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2977121367485!2d81.08050667529416!3d26.89404517665833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995f2f5b8b9591%3A0xbd9e770717a687c0!2sGoel%20Group%20of%20Institutions%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1743010650457!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">© {currentYear} Goel Group of Institution. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-white/70 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-white/70 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

