import React from "react";
import { hostels } from "../../data/hostels";
import HostelCard from "../../components/HostelCard";

const HostelsList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hostels.map((hostel) => (
        <HostelCard key={hostel.id} {...hostel} id={hostel.id.toString()} />
      ))}
    </div>
  );
};

export default HostelsList;
