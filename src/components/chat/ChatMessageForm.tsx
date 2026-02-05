import { useForm } from "react-hook-form";
import { useChatStore } from "../../store/chatStore";
import { supabase } from "../../supabaseClient";
import { Send } from "lucide-react";

interface MessageFormData {
  message: string;
}

function ChatMessageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MessageFormData>();

  const { currentRoom, user } = useChatStore();

  const onSubmit = async (data: MessageFormData) => {
    if (!currentRoom) return;

    const { error } = await supabase.from("messages").insert([
      {
        content: data.message,
        user_id: user?.id,
        email: user?.email,
        room_id: currentRoom.id,
      },
    ]);

    if (error) {
      console.error("Error sending message:", error.message);
    } else {
      reset();
    }
  };

  return (
    <div className="border-t border-border bg-card p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-3 rounded-lg border border-input bg-background 
                   text-foreground placeholder:text-muted-foreground
                   focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
                   transition-all"
          placeholder={errors.message ? errors.message.message : "Type your message..."}
          {...register("message", { required: "Please type your message!" })}
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground
                   hover:opacity-90 transition-opacity disabled:opacity-50 
                   disabled:cursor-not-allowed flex items-center gap-2"
          disabled={isSubmitting}
        >
          <Send size={18} />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>
    </div>
  );
}

export default ChatMessageForm;