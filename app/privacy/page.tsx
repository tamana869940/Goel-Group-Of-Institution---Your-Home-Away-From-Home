export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            {/* Introduction Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  1
                </span>
                Introduction
              </h2>
              <p className="text-gray-700">
                At Goel Group Of Institution, we are committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our services or visit our
                website.
              </p>
            </div>

            {/* Information We Collect Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </span>
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">2.1. Personal Information:</h3>
                  <p>We may collect personal information such as your name, email address, phone number, address, date of birth, educational background, and payment information when you register for our services.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">2.2. Usage Data:</h3>
                  <p>We may collect information on how you access and use our website and services, including your IP address, browser type, pages visited, and time spent on our website.</p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  3
                </span>
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-3">We use the information we collect for various purposes, including:</p>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Providing and maintaining our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Processing your bookings and payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Communicating with you about our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Improving our website and services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Complying with legal obligations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Addressing security concerns and preventing fraud</span>
                </li>
              </ul>
            </div>

            {/* Disclosure of Your Information Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  4
                </span>
                Disclosure of Your Information
              </h2>
              <p className="text-gray-700 mb-3">We may share your information with:</p>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Service providers who assist us in operating our business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Legal authorities when required by law</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Business partners with your consent</span>
                </li>
              </ul>
            </div>

            {/* Data Security Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  5
                </span>
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
                storage is 100% secure.
              </p>
            </div>

            {/* Your Rights Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  6
                </span>
                Your Rights
              </h2>
              <p className="text-gray-700 mb-3">You have the right to:</p>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Access the personal information we hold about you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Request deletion of your information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Object to processing of your information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Request restriction of processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Request transfer of your information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Withdraw consent at any time</span>
                </li>
              </ul>
            </div>

            {/* Changes to Policy Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  7
                </span>
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Information Card */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  8
                </span>
                Contact Us
              </h2>
              <div className="text-gray-700 space-y-2">
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Email: privacy@goelinstitution.com</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Phone: +91 98765 43210</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Address: 123 University Road, Near College Campus, City - 380015</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}