import ChatNavbar from "@/components/chat/ChatNavbar";
import { Outlet } from "react-router";

function ChatAppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <ChatNavbar />
      <main>
        <Outlet /> {/* This renders the current page */}
      </main>
    </div>
  );
}

export default ChatAppLayout;