export default function RefundPage() {
  return (
    <div className="min-h-screen py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Refund Policy
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
                This Refund Policy outlines the terms and conditions for refunds at Goel Group Of Institution. We strive
                to ensure fair and transparent refund processes for all our residents.
              </p>
            </div>

            {/* Security Deposit Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </span>
                Security Deposit
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>2.1. A security deposit is required at the time of booking.</p>
                <p>
                  2.2. The security deposit is refundable at the end of the stay, subject to the condition of the room and
                  adherence to hostel rules.
                </p>
                <p>2.3. Deductions may be made from the security deposit for:</p>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Damage to property or furnishings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Outstanding dues or fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Cleaning charges if the room is not left in a reasonable condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Loss of keys or access cards</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cancellation and Refunds Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  3
                </span>
                Cancellation and Refunds
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">3.1. Cancellation before Check-in:</h3>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Cancellations made 30 days or more before the check-in date will receive a full refund of the deposit.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Cancellations made between 15-29 days before check-in will receive a 50% refund of the deposit.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Cancellations made less than 15 days before check-in will not be eligible for a refund.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">3.2. Early Termination:</h3>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>If you choose to leave before the end of your agreed stay period, refunds will be processed according to the terms in your accommodation agreement.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Generally, a notice period of at least 30 days is required for early termination.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Refunds for the remaining period may be subject to a cancellation fee as specified in your agreement.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Refund Process Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  4
                </span>
                Refund Process
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>4.1. All refund requests must be submitted in writing to our administration office or via email to refunds@goelinstitution.com.</p>
                <p>4.2. Refunds will be processed within 15-30 business days from the date of approval.</p>
                <p>4.3. Refunds will be made using the same payment method used for the original transaction unless otherwise agreed.</p>
              </div>
            </div>

            {/* Non-Refundable Fees Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  5
                </span>
                Non-Refundable Fees
              </h2>
              <p className="text-gray-700 mb-3">The following fees are non-refundable:</p>
              <ul className="space-y-2 pl-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Registration fee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Administrative charges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Maintenance fees</span>
                </li>
              </ul>
            </div>

            {/* Special Circumstances Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  6
                </span>
                Special Circumstances
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>6.1. In case of unforeseen circumstances such as natural disasters, pandemic restrictions, or other force majeure events, special refund considerations may apply.</p>
                <p>6.2. Each case will be evaluated individually, and decisions will be made at the discretion of the management.</p>
              </div>
            </div>

            {/* Changes to Policy Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  7
                </span>
                Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon
                posting on our website.
              </p>
            </div>

            {/* Contact Information Card */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  8
                </span>
                Contact Information
              </h2>
              <div className="text-gray-700 space-y-2">
                <p>If you have any questions about our Refund Policy, please contact us at:</p>
                <p className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Email: refunds@goelinstitution.com</span>
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