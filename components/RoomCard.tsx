import React from "react";

interface RoomProps {
  name: string;
  description: string;
  price: string;
  type: string;
  gender: string;
  available: boolean;
  image: string;
}

const RoomCard: React.FC<RoomProps> = ({ name, description, price, type, gender, available, image }) => {
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden w-full max-w-md bg-white">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-lg">
          {type} Room
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-800">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-700">
          <span>✔ Air Conditioning</span>
          <span>✔ Study Table</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-700">
          <span>✔ Premium Furniture</span>
          <span>✔ High-Speed WiFi</span>
        </div>
        <p className="text-lg font-semibold mt-3">{price}</p>
        <p className={`text-sm font-semibold mt-1 ${available ? "text-green-500" : "text-red-500"}`}>
          {available ? "Available" : "Booked"}
        </p>
        <button
          className={`w-full mt-3 py-2 rounded-lg text-white font-bold ${
            available ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!available}
        >
          {available ? "Book Now" : "Not Available"}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
