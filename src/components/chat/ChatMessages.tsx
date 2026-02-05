import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useChatStore } from "../../store/chatStore";
import { supabase } from "../../supabaseClient";
import { useEffect, useRef } from "react";

interface Message {
  id: number;
  content: string;
  user_id: string;
  email: string;
  created_at: string;
  room_id: number;
}

async function fetchMessages(roomId: number): Promise<Message[]> {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("room_id", roomId)
    .order("created_at", { ascending: true });

  if (error) throw Error(error.message);

  return data as Message[];
}

function ChatMessages() {
  const { currentRoom, user } = useChatStore();
  const queryClient = useQueryClient();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    data: messages,
    error,
    isLoading,
  } = useQuery<Message[], Error>({
    queryKey: ["messages", currentRoom?.id],
    queryFn: () =>
      currentRoom?.id === null
        ? Promise.resolve([])
        : fetchMessages(currentRoom!.id),
    enabled: currentRoom?.id !== null,
  });

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  useEffect(() => {
    if (!currentRoom?.id) return;

    const channel = supabase.channel("messages-channel");

    channel
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          const newMessage = payload.new as Message;
          if (newMessage.room_id === currentRoom.id) {
            queryClient.setQueryData<Message[]>(
              ["messages", currentRoom?.id],
              (oldMessages) =>
                oldMessages ? [...oldMessages, newMessage] : [newMessage]
            );
          }
        }
      )
      .subscribe((status) => {
        console.log("Subscription status:", status);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [currentRoom?.id, queryClient]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-body text-muted-foreground">Loading messages...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-error">Error loading messages: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="max-w-4xl mx-auto space-y-3">
        {messages && messages.length > 0 ? (
          messages.map((msg: Message) => {
            const isOwnMessage = msg.user_id === user?.id;

            const date = new Date(msg.created_at);
            const hour = date.getHours().toString().padStart(2, "0");
            const minute = date.getMinutes().toString().padStart(2, "0");
            const formattedTime = `${hour}:${minute}`;

            return (
              <div
                key={msg.id}
                className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] sm:max-w-[60%] rounded-2xl px-4 py-2.5 ${
                    isOwnMessage
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border text-card-foreground rounded-bl-sm"
                  }`}
                >
                  {!isOwnMessage && (
                    <p className="text-small font-medium text-muted-foreground mb-1">
                      {msg.email}
                    </p>
                  )}
                  <p className="text-body break-words">{msg.content}</p>
                  <p className={`text-small mt-1 ${isOwnMessage ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {formattedTime}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-body text-muted-foreground mb-2">
              No messages yet
            </p>
            <p className="text-small text-muted-foreground">
              Be the first to say something!
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default ChatMessages;