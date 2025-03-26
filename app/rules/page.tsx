import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RulesPage() {
  return (
    <div className="min-h-screen py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Hostel Rules & Regulations
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
            <p className="text-lg leading-relaxed text-gray-700">
              At Goel Group Of Institution, we strive to create a safe, comfortable, and conducive environment for all
              residents. The following rules and regulations are designed to ensure harmonious living and academic
              excellence.
            </p>
          </div>

          {/* Rules Sections */}
          <div className="space-y-10">
            {rulesData.map((section, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
              >
                <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <ul className="space-y-3 pl-2">
                  {section.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note Section */}
          <div className="mt-12 bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Note to Residents</h3>
                <p className="text-gray-700 mb-3">
                  These rules are designed for your safety, comfort, and academic success. Your cooperation in following
                  these guidelines will help create a positive living and learning environment for everyone.
                </p>
                <p className="text-gray-700">
                  For any clarifications or questions regarding these rules, please contact the hostel administration
                  office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Data for rules
const rulesData = [
  {
    title: "General Rules",
    rules: [
      "Residents must carry their ID cards at all times within the hostel premises.",
      "Ragging in any form is strictly prohibited and will result in immediate expulsion.",
      "Smoking, alcohol, and drugs are strictly prohibited within the hostel premises.",
      "Residents are responsible for the cleanliness of their rooms and common areas.",
      "Noise levels should be kept to a minimum, especially during study hours and after 10:00 PM.",
      "Conservation of water and electricity is mandatory.",
    ],
  },
  {
    title: "Room Regulations",
    rules: [
      "Room allocation is at the discretion of the hostel management.",
      "Residents are not allowed to change rooms without prior permission.",
      "Cooking in rooms is strictly prohibited.",
      "Electrical appliances such as heaters, irons, and hot plates are not permitted in rooms.",
      "Residents are responsible for the furniture and fixtures in their rooms.",
      "Walls should not be defaced by posters, nails, or adhesives.",
      "Room inspections may be conducted periodically by hostel authorities.",
    ],
  },
  {
    title: "Visitors and Guests",
    rules: [
      "Visitors are allowed only in designated areas during specified hours.",
      "Overnight guests are not permitted without prior written permission.",
      "All visitors must register at the reception and provide valid identification.",
      "Residents are responsible for the conduct of their visitors.",
    ],
  },
  {
    title: "Attendance and Leave",
    rules: [
      "Attendance will be taken daily at 9:00 PM.",
      "Residents must inform the warden in advance for any planned absence.",
      "For emergency leave, residents must obtain permission from the warden.",
      "Extended absence without permission may result in disciplinary action.",
    ],
  },
  {
    title: "Mess Rules",
    rules: [
      "Meal timings must be strictly followed.",
      "Food will not be served outside the designated dining area.",
      "Wasting food is discouraged.",
      "Residents must maintain decorum in the dining hall.",
      "Complaints regarding food quality should be directed to the mess committee.",
    ],
  },
  {
    title: "Internet Usage",
    rules: [
      "Internet facilities are provided for academic purposes.",
      "Downloading illegal content or excessive bandwidth usage is prohibited.",
      "Sharing of personal Wi-Fi credentials with non-residents is not allowed.",
    ],
  },
  {
    title: "Safety and Security",
    rules: [
      "Entry and exit from the hostel must be through designated gates only.",
      "The main gate will be closed at 10:00 PM.",
      "Residents must report any suspicious activities or persons to the security staff.",
      "Fire safety equipment should not be tampered with.",
      "Valuable items should be kept secure; the management is not responsible for any loss.",
    ],
  },
  {
    title: "Disciplinary Actions",
    rules: [
      "Violation of hostel rules may result in the following disciplinary actions:",
      "Verbal warning",
      "Written warning",
      "Fine or penalty",
      "Suspension from the hostel",
      "Expulsion from the hostel",
      "Reporting to academic authorities for further action",
    ],
  },
  {
    title: "Grievance Redressal",
    rules: [
      "Residents can approach the hostel warden for any grievances.",
      "If not resolved, complaints can be escalated to the Chief Warden or Hostel Committee.",
      "A suggestion box is available at the reception for anonymous feedback.",
    ],
  },
  {
    title: "Amendments",
    rules: [
      "The hostel management reserves the right to amend these rules as and when necessary.",
      "Any changes will be communicated to the residents through notice boards and email.",
    ],
  },
]