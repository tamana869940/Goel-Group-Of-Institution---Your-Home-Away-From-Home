"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AmenitiesPage() {
  const amenities = [
    { name: "24/7 Security", description: "CCTV surveillance & guards for complete safety." },
    { name: "High-Speed WiFi", description: "Seamless internet access for work & entertainment." },
    { name: "Housekeeping", description: "Regular room cleaning & maintenance." },
    { name: "Laundry Service", description: "Convenient laundry service for residents." },
    { name: "Cafeteria", description: "Delicious & healthy food options available." },
    { name: "Study Rooms", description: "Quiet and comfortable study areas." },
    { name: "Gym & Fitness", description: "Fully equipped gym for fitness enthusiasts." },
    { name: "Recreation Area", description: "Indoor games & social activities." },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900"
          >
            Our Premium Amenities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Experience top-notch facilities designed for comfort, convenience, and an enhanced lifestyle.
          </motion.p>
        </div>

        {/* Amenities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 bg-white/40 shadow-xl backdrop-blur-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-orange-500 text-white p-3 rounded-full shadow-lg">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{amenity.name}</h3>
                <p className="text-gray-700 text-sm mt-1">{amenity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
