import { useForm } from "react-hook-form";
import { supabase } from "../supabaseClient";
import { useChatStore } from "../store/chatStore";
import { useNavigate } from "react-router";
import { PlusCircle } from "lucide-react";

interface RoomFormData {
  name: string;
}

function CreateRoom() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RoomFormData>();

  const navigate = useNavigate();

  const onCreateRoom = async (data: RoomFormData) => {
    const { error, data: newRoom } = await supabase
      .from("rooms")
      .insert([
        {
          name: data.name,
        },
      ])
      .select();

    if (error) {
      console.error("Error creating room:", error.message);
      alert("Failed to create room. Please try again.");
    } else {
      const room = newRoom[0];
      useChatStore.getState().setCurrentRoom({ 
        id: room.id, 
        name: room.name,
      });

      // Navigate to the newly created room
      navigate(`/chat/rooms/${room.id}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] px-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{
                background: "var(--color-muted)",
                color: "var(--color-primary)",
              }}
            >
              <PlusCircle size={24} />
            </div>
            <div>
              <h1 className="text-h3 text-foreground">Create a New Room</h1>
              <p className="text-small text-muted-foreground">
                Start a conversation on any topic
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onCreateRoom)} className="space-y-5">
            <div>
              <label
                htmlFor="room-name"
                className="block text-body font-medium text-foreground mb-2"
              >
                Room Name
              </label>
              <input
                id="room-name"
                type="text"
                placeholder="e.g., React Developers, Gaming, Music..."
                className="w-full px-4 py-3 rounded-lg border border-input bg-background 
                         text-foreground placeholder:text-muted-foreground
                         focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
                         transition-all"
                {...register("name", { 
                  required: "Please enter a room name.",
                  minLength: {
                    value: 3,
                    message: "Room name must be at least 3 characters."
                  },
                  maxLength: {
                    value: 50,
                    message: "Room name must be less than 50 characters."
                  }
                })}
              />
              {errors.name && (
                <p className="text-error text-small mt-1.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => navigate("/chat/rooms")}
                className="flex-1 px-4 py-3 rounded-lg border border-border 
                         text-button text-foreground hover:bg-muted
                         transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 rounded-lg bg-primary 
                         text-button text-primary-foreground hover:opacity-90
                         transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create Room"}
              </button>
            </div>
          </form>
        </div>

        {/* Helper Text */}
        <p className="text-small text-muted-foreground text-center mt-4">
          Your room will be visible to all users
        </p>
      </div>
    </div>
  );
}

export default CreateRoom;