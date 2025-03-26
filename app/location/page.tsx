export default function Location() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Map */}
      <div className="relative h-96 md:h-[500px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2977121367485!2d81.08050667529416!3d26.89404517665833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995f2f5b8b9591%3A0xbd9e770717a687c0!2sGoel%20Group%20of%20Institutions%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1743010650457!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0"
          title="Goel Group Of Institution Location"
        ></iframe>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-start justify-center pt-8 md:pt-16">
          <div className="text-center px-2 transform translate-y-[-20px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Find Our Campus
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Located in the heart of the city with excellent connectivity
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container px-4 md:px-6 mx-auto py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images and Details */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-3 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Campus Address
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Main Campus</h3>
                      <p>123 University Road, Near College Campus</p>
                      <p>Lucknow, Uttar Pradesh - 226028</p>
                    </div>
                  </div>

                  <div className="flex items-start mt-6">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Hostel Facility</h3>
                      <p>125 University Road (Adjacent to Main Campus)</p>
                      <p>Lucknow, Uttar Pradesh - 226028</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* College Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/college-building.jpg"
                  alt="Goel Group Of Institution Campus"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-6 bg-white">
                  <h2 className="text-xl font-bold text-blue-800 mb-2">Our Campus</h2>
                  <p className="text-gray-700">
                    Spread over 10 acres with modern infrastructure, lush green surroundings,
                    and state-of-the-art facilities for academic excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact and Transportation */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-3 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Phone</h3>
                      <p>+91 98765 43210 (Admissions)</p>
                      <p>+91 98765 43211 (Administration)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Email</h3>
                      <p>admissions@goelinstitution.com</p>
                      <p>info@goelinstitution.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Office Hours</h3>
                      <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-3 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                  How to Reach Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">By Metro</h3>
                      <p>Nearest Station: Hazratganj Metro (5 min walk)</p>
                      <p>Take the Blue Line and exit at Hazratganj Station</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">By Bus</h3>
                      <p>Bus Routes: 101, 205, 307, 410</p>
                      <p>Bus Stop: University Road (right outside campus)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">By Car</h3>
                      <p>Ample parking space available</p>
                      <p>GPS Coordinates: 26.8940° N, 81.0805° E</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}