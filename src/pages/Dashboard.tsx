import { useNavigate } from "react-router";
import { useChatStore } from "../store/chatStore";
import { Hash, Compass, PlusCircle, ArrowRight } from "lucide-react";

const cards = [
  {
    id: "general",
    icon: <Hash size={28} />,
    title: "General",
    description:
      "The default room where everyone hangs out. A great place to say hi, ask questions, or just chat.",
    to: "/chat/general", 
  },
  {
    id: "available-rooms",
    icon: <Compass size={28} />,
    title: "Available Rooms",
    description:
      "Browse all the rooms other people have created. Find a topic you like and jump in.",
    to: "/chat/rooms", 
  },
  {
    id: "create-room",
    icon: <PlusCircle size={28} />,
    title: "Create a Room",
    description:
      "Want to start your own conversation? Create a new room around any topic you want.",
    to: "/chat/create", 
  },
];

function Dashboard() {
  const user = useChatStore((state) => state.user);
  const navigate = useNavigate();

  // Simple time-based greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] px-4">
      <div className="w-full max-w-6xl py-10 flex flex-col gap-10">
   
        {/* Greeting Section */}
      
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
          {/* Decorative blobs – purely visual, pointer-events-none so they
            don't interfere with anything */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-[0.08] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--color-primary), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-[0.08] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--color-secondary), transparent 70%)",
            }}
          />

          {/* Text content – relative so it sits above the blobs */}
          <div className="relative z-10">
            <p className="text-body text-muted-foreground">{greeting},</p>
            <h1 className="text-h2 text-foreground mt-2">
              Welcome back,{" "}
              <span style={{ color: "var(--color-primary)" }}
               className="break-all">
                {user?.email ?? "User"}
              </span>
            </h1>
            <p className="text-body-lg text-muted-foreground mt-3">
              Pick a room below to get started, or create your own.
            </p>
          </div>
        </div>

        {/* Card Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => navigate(card.to)}
              className="group relative text-left w-full rounded-xl border border-border bg-card
                       p-6 md:p-7 flex flex-col gap-4 transition-all duration-200 cursor-pointer
                       hover:border-ring hover:shadow-lg hover:shadow-ring/10
                       focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {/* Icon row */}
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{
                  background: "var(--color-muted)",
                  color: "var(--color-primary)",
                }}
              >
                {card.icon}
              </div>

              {/* Title + description */}
              <div className="flex flex-col gap-2 flex-1">
                <h2 className="text-body-lg font-semibold text-card-foreground">
                  {card.title}
                </h2>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Arrow – slides right on hover */}
              <div
                className="flex items-center gap-1 text-body font-semibold transition-colors duration-200"
                style={{ color: "var(--color-primary)" }}
              >
                <span>Go</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;