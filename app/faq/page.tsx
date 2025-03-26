"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our hostel facilities and
            services.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <FAQItem
            question="What types of rooms are available at Goel Group Of Institution hostels?"
            answer="We offer both AC and Non-AC rooms. AC rooms come with air conditioning, premium furniture, study tables, and high-speed WiFi..."
          />
          <FAQItem
            question="What is the booking process for a hostel room?"
            answer="To book a room, you can apply online through our website or visit our administrative office in person..."
          />
          <FAQItem
            question="What amenities are included in the hostel fee?"
            answer="The hostel fee includes accommodation, basic utilities, WiFi, housekeeping services, security..."
          />
          <FAQItem
            question="What are the hostel timings and curfew hours?"
            answer="The main gate closes at 10:00 PM. All residents are expected to be inside the hostel by this time..."
          />
          <FAQItem
            question="Are meals provided at the hostel?"
            answer="Yes, we have a mess facility that provides nutritious vegetarian meals..."
          />
          <FAQItem
            question="What security measures are in place at the hostel?"
            answer="We have comprehensive security measures including 24/7 security personnel, CCTV surveillance..."
          />
          <FAQItem
            question="Is WiFi available in the hostel?"
            answer="Yes, high-speed WiFi is available throughout the hostel premises..."
          />
          <FAQItem
            question="What is the refund policy for the security deposit?"
            answer="The security deposit is fully refundable at the end of your stay..."
          />
          <FAQItem
            question="Are visitors allowed in the hostel?"
            answer="Visitors are allowed only in designated common areas during visiting hours..."
          />
          <FAQItem
            question="What should I do in case of a maintenance issue in my room?"
            answer="For any maintenance issues, you should report them immediately..."
          />
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg bg-white shadow-lg overflow-hidden transition-all">
      <button
        className="flex items-center justify-between w-full p-5 text-left font-medium focus:outline-none hover:bg-blue-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-blue-900 font-semibold text-lg">{question}</span>
        <span className="flex-shrink-0 ml-2">
          {isOpen ? (
            <Minus className="h-6 w-6 text-orange-600" />
          ) : (
            <Plus className="h-6 w-6 text-blue-700" />
          )}
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
}
