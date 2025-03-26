export default function TermsPage() {
  return (
    <div className="min-h-screen py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Terms & Conditions
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
                Welcome to Goel Group Of Institution. These Terms and Conditions govern your use of our services and
                website. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Accommodation Services Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </span>
                Accommodation Services
              </h2>
              <p className="text-gray-700">
                Goel Group Of Institution provides hostel accommodation services to students and working professionals.
                Our services include room rental, meals, and other amenities as specified in your booking agreement.
              </p>
            </div>

            {/* Booking and Payment Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  3
                </span>
                Booking and Payment
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>3.1. All bookings must be made through our official website or authorized representatives.</p>
                <p>
                  3.2. A security deposit is required at the time of booking, which is refundable subject to the condition
                  of the room upon checkout and adherence to hostel rules.
                </p>
                <p>3.3. Payment schedules and methods will be specified in your booking agreement.</p>
              </div>
            </div>

            {/* Cancellation Policy Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  4
                </span>
                Cancellation Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>4.1. Cancellations made 30 days or more before the check-in date will receive a full refund of the deposit.</p>
                <p>4.2. Cancellations made between 15-29 days before check-in will receive a 50% refund of the deposit.</p>
                <p>4.3. Cancellations made less than 15 days before check-in will not be eligible for a refund.</p>
              </div>
            </div>

            {/* Hostel Rules Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  5
                </span>
                Hostel Rules and Regulations
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>5.1. Residents must comply with all hostel rules and regulations provided at the time of check-in.</p>
                <p>
                  5.2. Violation of hostel rules may result in penalties, including but not limited to warnings, fines, or
                  termination of accommodation.
                </p>
              </div>
            </div>

            {/* Liability Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  6
                </span>
                Liability
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>6.1. Goel Group Of Institution is not responsible for any loss, damage, or theft of personal belongings.</p>
                <p>6.2. Residents are advised to secure their valuables and obtain appropriate insurance coverage.</p>
              </div>
            </div>

            {/* Privacy Policy Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  7
                </span>
                Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>7.1. We collect and process personal information in accordance with our Privacy Policy.</p>
                <p>
                  7.2. By using our services, you consent to the collection and processing of your personal information as
                  described in our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Changes to Terms Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  8
                </span>
                Changes to Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>8.1. Goel Group Of Institution reserves the right to modify these Terms and Conditions at any time.</p>
                <p>8.2. Changes will be effective immediately upon posting on our website.</p>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  9
                </span>
                Contact Information
              </h2>
              <div className="text-gray-700 space-y-2">
                <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Email: info@goelinstitution.com</span>
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