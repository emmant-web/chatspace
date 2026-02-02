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
    <div className="flex justify-center items-center h-">
      <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-8">
   
        {/* Greeting Section */}
      
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
          {/* Decorative blobs – purely visual, pointer-events-none so they
            don't interfere with anything */}
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-[0.08] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--color-primary), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full opacity-[0.08] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--color-secondary), transparent 70%)",
            }}
          />

          {/* Text content – relative so it sits above the blobs */}
          <div className="relative z-10">
            <p className="text-small text-muted-foreground">{greeting},</p>
            <h1 className="text-h3 text-foreground mt-1">
              Welcome back,{" "}
              <span style={{ color: "var(--color-primary)" }}>
                {user?.email ?? "User"}
              </span>
            </h1>
            <p className="text-body text-muted-foreground mt-2">
              Pick a room below to get started, or create your own.
            </p>
          </div>
        </div>


        {/* Card Grid */}
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => navigate(card.to)}
              className="group relative text-left w-full rounded-xl border border-border bg-card
                       p-5 flex flex-col gap-3 transition-all duration-200 cursor-pointer
                       hover:border-ring hover:shadow-lg hover:shadow-ring/10
                       focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {/* Icon row */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{
                  background: "var(--color-muted)",
                  color: "var(--color-primary)",
                }}
              >
                {card.icon}
              </div>

              {/* Title + description */}
              <div className="flex flex-col gap-1 flex-1">
                <h2 className="text-body-lg font-semibold text-card-foreground">
                  {card.title}
                </h2>
                <p className="text-small text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Arrow – slides right on hover */}
              <div
                className="flex items-center gap-1 text-small font-semibold transition-colors duration-200"
                style={{ color: "var(--color-primary)" }}
              >
                <span>Go</span>
                <ArrowRight
                  size={16}
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
