import { Button } from "@/components/ui/button"
import { ChevronRight, Star, ArrowRight, Check, Users, BookOpen, GraduationCap, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="container px-4 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-600 text-white hover:bg-orange-700">
                #1 Rated Student Accommodation
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-orange-600">
                Your Home Away From Home
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Experience comfort, security, and convenience at our premium hostels designed for students and working
                professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/rooms">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
                >
                  Book Your Stay
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                </Link>

                <Link href="/contact">
                <Button variant="outline" size="lg" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Take a Tour
                </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80"
                      alt="User"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80"
                      alt="User"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80"
                      alt="User"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80"
                      alt="User"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-sm text-muted-foreground">(2.5k+ reviews)</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=800&q=80"
                alt="Hostel Building"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold">Modern Facilities</h3>
                <p className="text-sm opacity-90">State-of-the-art amenities for students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm transition-all hover:shadow-md hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200">
              <Users className="h-10 w-10 text-blue-700 mb-3" />
              <h3 className="text-3xl font-bold text-blue-900">1200+</h3>
              <p className="text-sm text-blue-700">Happy Students</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 shadow-sm transition-all hover:shadow-md hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-200">
              <BookOpen className="h-10 w-10 text-orange-600 mb-3" />
              <h3 className="text-3xl font-bold text-orange-900">15+</h3>
              <p className="text-sm text-orange-700">Years Experience</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm transition-all hover:shadow-md hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200">
              <GraduationCap className="h-10 w-10 text-blue-700 mb-3" />
              <h3 className="text-3xl font-bold text-blue-900">98%</h3>
              <p className="text-sm text-blue-700">Success Rate</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 shadow-sm transition-all hover:shadow-md hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-200">
              <Award className="h-10 w-10 text-orange-600 mb-3" />
              <h3 className="text-3xl font-bold text-orange-900">25+</h3>
              <p className="text-sm text-orange-700">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section id="rooms" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-700">
              ACCOMMODATION
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-2 text-blue-900">
              Comfortable Room Options
            </h2>
            <p className="mt-4 max-w-[700px] text-blue-700 md:text-xl">
              Choose from our range of well-designed rooms that cater to your comfort and budget.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
            {/* AC Room */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
                  alt="AC Room"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                AC Room
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">AC Rooms</h3>
                <p className="mt-2 text-blue-700">
                  Premium air-conditioned rooms with modern amenities for ultimate comfort in any season.
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Air Conditioning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Premium Furniture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Study Table</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">High-Speed WiFi</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-900">₹8,500</span>
                    <span className="text-blue-700">/month</span>
                  </div>
                  <Link href="/rooms" passHref>
                    <Button className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Non-AC Room */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80"
                  alt="Non-AC Room"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                Non-AC Room
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">Non-AC Rooms</h3>
                <p className="mt-2 text-blue-700">
                  Comfortable and affordable rooms with natural ventilation and essential amenities.
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Ceiling Fan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Standard Furniture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Study Table</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">WiFi Access</span>
                  </li>
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-900">₹6,000</span>
                    <span className="text-blue-700">/month</span>
                  </div>
                  <Link href="/rooms" passHref>
                    <Button className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/rooms" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium">
              View All Room Options
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hostels Section */}
      <section id="hostels" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-100 text-orange-700">
              HOSTELS
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-2 text-blue-900">
              Our Hostel Facilities
            </h2>
            <p className="mt-4 max-w-[700px] text-blue-700 md:text-xl">
              Separate hostels for boys and girls with dedicated facilities and security.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Boys Hostel */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                <Image
                  src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Boys Hostel"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">Boys Hostel</h3>
                <p className="mt-2 text-blue-700">
                  Modern accommodation designed specifically for male students with dedicated facilities.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">24/7 Security with CCTV Surveillance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">Dedicated Gym and Sports Area</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">Common Room with TV and Indoor Games</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">Hygienic Mess with Nutritious Meals</span>
                  </li>
                </ul>
                <Link href="/hostels" passHref>
                  <Button className="mt-6 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>

            {/* Girls Hostel */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                <Image
                  src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Girls Hostel"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">Girls Hostel</h3>
                <p className="mt-2 text-blue-700">
                  Safe and comfortable accommodation designed specifically for female students.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">Enhanced Security with Female Guards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">Dedicated Study Areas and Library</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">Indoor Recreation and Fitness Center</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">Hygienic Mess with Customized Menu</span>
                  </li>
                </ul>
                <Link href="/hostels" passHref>
                  <Button className="mt-6 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/hostels" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium">
              Learn More About Our Hostels
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-700">
              FACILITIES
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-2 text-blue-900">
              Premium Amenities
            </h2>
            <p className="mt-4 max-w-[700px] text-blue-700 md:text-xl">
              We provide a range of facilities to make your stay comfortable and productive.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "High-Speed WiFi",
                description: "Stay connected with unlimited high-speed internet access throughout the premises.",
                icon: (
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
                    className="h-10 w-10"
                  >
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <line x1="12" y1="20" x2="12.01" y2="20" />
                  </svg>
                ),
                color: "blue",
              },
              {
                title: "24/7 Security",
                description: "Feel safe with round-the-clock security personnel and CCTV surveillance.",
                icon: (
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
                    className="h-10 w-10"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                color: "orange",
              },
              {
                title: "Dining Facility",
                description: "Enjoy nutritious and delicious meals prepared in our hygienic kitchen.",
                icon: (
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
                    className="h-10 w-10"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                ),
                color: "blue",
              },
              {
                title: "Laundry Service",
                description: "Convenient laundry facilities to keep your clothes clean and fresh.",
                icon: (
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
                    className="h-10 w-10"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                ),
                color: "orange",
              },
              {
                title: "Study Areas",
                description: "Dedicated quiet zones for focused studying and academic work.",
                icon: (
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
                    className="h-10 w-10"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
                color: "blue",
              },
              {
                title: "Fitness Center",
                description: "Stay fit with our well-equipped gym and fitness facilities.",
                icon: (
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
                    className="h-10 w-10"
                  >
                    <path d="M6 18h3" />
                    <path d="M15 18h3" />
                    <path d="M4 9h2" />
                    <path d="M18 9h2" />
                    <rect x="6" y="6" width="12" height="12" rx="3" />
                  </svg>
                ),
                color: "orange",
              },
              {
                title: "Recreation Room",
                description: "Unwind and socialize in our recreation areas with games and entertainment.",
                icon: (
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
                    className="h-10 w-10"
                  >
                    <path d="M2 6h20v12H2z" />
                    <path d="M12 12a2 2 0 0 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M17 12h.01" />
                    <path d="M7 12h.01" />
                  </svg>
                ),
                color: "blue",
              },
              {
                title: "Transportation",
                description: "Regular shuttle service to nearby educational institutions and city centers.",
                icon: (
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
                    className="h-10 w-10"
                  >
                    <path d="M5 17h14v-5H5zm0 0v2a1 1 0 0 0 1 1h1m11-3v2a1 1 0 0 1-1 1h-1M6 9h12M7 5h10a1 1 0 0 1 1 1v3H6V6a1 1 0 0 1 1-1z" />
                    <circle cx="7.5" cy="17.5" r="1.5" />
                    <circle cx="16.5" cy="17.5" r="1.5" />
                  </svg>
                ),
                color: "orange",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm transition-all hover:shadow-md ${item.color === "blue" ? "hover:bg-blue-50" : "hover:bg-orange-50"
                  }`}
              >
                <div
                  className={`mb-4 rounded-full p-3 ${item.color === "blue" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-600"
                    }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/amenities" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium">
              View All Amenities
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-100 text-orange-700">
              CONTACT US
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-2 text-blue-900">
              Get In Touch
            </h2>
            <p className="mt-4 max-w-[700px] text-blue-700 md:text-xl">
              Have questions? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mx-auto max-w-[800px] rounded-xl border bg-white p-6 shadow-lg md:p-8">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-900"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-900"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-900"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Room Booking</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 to-orange-100">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
              Ready to Join Our Community?
            </h2>
            <p className="mt-4 max-w-[700px] text-blue-700 md:text-xl">
              Book your stay at Goel Group Of Institution hostels and experience the perfect blend of comfort, security,
              and academic excellence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/rooms">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
              >
                Book Your Stay Now
              </Button>
              </Link>
              <Link href="/contact">
              <Button variant="outline" size="lg" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                Schedule a Visit
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

