import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import ChatAppLayout from "./pages/ChatAppLayout";
import ChatRoom from "./pages/ChatRoom";
import RoomList from "./pages/RoomList";
import CreateRoom from "./pages/CreateRoom";
import { supabase } from "./supabaseClient";
import { useChatStore } from "./store/chatStore";

function App() {
  const [loading, setLoading] = useState(true);

  // Get user and setUser from Zustand store
  const user = useChatStore((state) => state.user);
  const setUser = useChatStore((state) => state.setUser);

  useEffect(() => {
    // When app loads, check if user is already logged in
    supabase.auth.getSession().then((response) => {
      const session = response.data.session;

      if (session?.user) {
        // User is logged in - save to store
        setUser({
          id: session.user.id,
          email: session.user.email || "",
        });
      } else {
        // No user logged in
        setUser(null);
      }

      setLoading(false); // Done checking
    });

    // Listen for auth changes (login/logout)
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        // User logged in
        setUser({
          id: session.user.id,
          email: session.user.email || "",
        });
      } else {
        // User logged out
        setUser(null);
      }
    });

    // Cleanup listener when app closes
    return () => data.subscription.unsubscribe();
  }, [setUser]);

  // Show loading screen while checking if user is logged in
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Routes>
      {/* PUBLIC ROUTES - Anyone can access */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* PROTECTED ROUTE - Only logged in users */}
      <Route 
        element={user ? <ChatAppLayout /> : <Navigate to="/login" />}
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat/general" element={<ChatRoom />} />
        <Route path="/chat/rooms" element={<RoomList />} />
        <Route path="/chat/create" element={<CreateRoom />} />
        
      </Route>
    </Routes>
  );
}

export default App;
