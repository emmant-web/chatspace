import { useChatStore } from "../store/chatStore";
import { useParams } from "react-router";
import { useEffect } from "react";
import ChatMessages from "../components/chat/ChatMessages";
import ChatMessageForm from "../components/chat/ChatMessageForm";
import { Hash } from "lucide-react";

function ChatRoom() {
  const { user, currentRoom, setCurrentRoom } = useChatStore();
  const { roomId } = useParams();

  // If we're on /chat/rooms/:roomId, update the current room
  useEffect(() => {
    if (roomId && parseInt(roomId) !== currentRoom?.id) {
      // For now, this just fetches the roomid number instead of the name of the room
      setCurrentRoom({ id: parseInt(roomId), name: `Room ${roomId}` });
    } else if (!roomId && currentRoom?.id !== 1) {
      // We're on /chat/general, set to General room
      setCurrentRoom({ id: 1, name: "General" });
    }
  }, [roomId, currentRoom?.id, setCurrentRoom]);

  if (!currentRoom) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-body text-muted-foreground">
          Please join or create a room first.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Room Header */}
      <div className="border-b border-border bg-card px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              background: "var(--color-muted)",
              color: "var(--color-primary)",
            }}
          >
            <Hash size={20} />
          </div>
          <div>
            <h1 className="text-body-lg font-semibold text-foreground">
              {currentRoom.name}
            </h1>
            <p className="text-small text-muted-foreground">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <ChatMessages />

      {/* Message Input */}
      <ChatMessageForm />
    </div>
  );
}

export default ChatRoom;