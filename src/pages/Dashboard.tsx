import { useChatStore } from "../store/chatStore";

function Dashboard() {
  const user = useChatStore((state) => state.user);

  return (
    <div className="p-8">
      <h1 className="text-h2 text-foreground">Dashboard</h1>
      <p className="text-body text-muted-foreground mt-4">
        Welcome, {user?.email}!
      </p>
    </div>
  );
}

export default Dashboard;