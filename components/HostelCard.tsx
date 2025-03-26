"use client";  // ✅ Important: Marking this as a Client Component

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Next.js router

interface HostelProps {
  id: string;  // Hostel ID for dynamic routing
  name: string;
  description: string;
  facilities: string[];
  image: string;
  themeColor: string;
  btnColor: string;
}

const HostelCard: React.FC<HostelProps> = ({ id, name, description, facilities, image, themeColor, btnColor }) => {
  const router = useRouter(); // ✅ Next.js router

  const handleViewDetails = () => {
    router.push(`/rooms`);  // ✅ Next.js navigation
  };

  return (
    <div className="max-w-lg w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-64 object-cover" loading="lazy" />

      {/* Content */}
      <div className="p-6">
        <h2 className={`text-2xl font-bold ${themeColor} mb-2`}>{name}</h2>
        <p className="text-gray-600 mb-3">{description}</p>
        
        {/* Facilities List */}
        <ul className="mb-4 space-y-1">
          {facilities.map((item, index) => (
            <li key={index} className="text-gray-700 flex items-center gap-2">
              <span className="text-green-600">✔</span> {item}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className={`px-4 py-2 rounded-lg text-white font-semibold ${btnColor} hover:opacity-80 transition`}
          onClick={handleViewDetails}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HostelCard;
