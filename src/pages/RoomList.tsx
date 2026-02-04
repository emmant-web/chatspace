import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";
import { useChatStore, type Room } from "../store/chatStore";
import { Link } from "react-router";
import { Hash, Users } from "lucide-react";

async function fetchRooms(): Promise<Room[]> {
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw Error(error.message);

  return data as Room[];
}

function RoomList() {
  const {
    data: rooms,
    error,
    isLoading,
  } = useQuery({ queryKey: ["rooms"], queryFn: fetchRooms });

  const handleJoinRoom = (room: Room) => {
    useChatStore.getState().setCurrentRoom(room);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-body text-muted-foreground">Loading rooms...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-error">
          Error loading rooms: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-h2 text-foreground mb-2">Available Rooms</h1>
        <p className="text-body text-muted-foreground">
          Browse all active chat rooms and join the conversation.
        </p>
      </div>

      {/* Rooms Grid */}
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <Link
              key={room.id}
              to={`/chat/rooms/${room.id}`}
              onClick={() => handleJoinRoom(room)}
              className="group relative text-left w-full rounded-xl border border-border bg-card
                       p-6 flex flex-col gap-3 transition-all duration-200 cursor-pointer
                       hover:border-ring hover:shadow-lg hover:shadow-ring/10
                       focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{
                  background: "var(--color-muted)",
                  color: "var(--color-primary)",
                }}
              >
                <Hash size={24} />
              </div>

              {/* Room Name */}
              <div className="flex flex-col gap-1">
                <h2 className="text-body-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {room.name}
                </h2>
                <div className="flex items-center gap-1 text-small text-muted-foreground">
                  <Users size={14} />
                  <span>Active now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-border rounded-xl bg-card">
          <Hash size={48} className="mx-auto mb-4 text-muted-foreground" />
          <p className="text-body text-muted-foreground mb-2">
            No rooms available yet
          </p>
          <p className="text-small text-muted-foreground">
            Be the first to create one!
          </p>
        </div>
      )}
    </div>
  );
}

export default RoomList;