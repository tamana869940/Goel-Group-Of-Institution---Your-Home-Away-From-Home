import RoomCard from "../../components/RoomCard";
import { rooms } from "../../data/rooms";


export default function Rooms() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </main>
  );
}
