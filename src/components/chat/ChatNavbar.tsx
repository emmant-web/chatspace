import { Link, useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";
import { useChatStore } from "../../store/chatStore";

function ChatNavbar() {
  const navigate = useNavigate();
  const setUser = useChatStore((state) => state.setUser);

  const handleLogout = async () => {
    // Sign out from Supabase
    await supabase.auth.signOut();
    
    // Clear user from Zustand store
    setUser(null);
    
    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul className="clearfix">
        <li>
          <Link to="/dashboard">Chat Room</Link>
        </li>
        <li>
          <Link to="/rooms">Available Rooms</Link>
        </li>
        <li>
          <Link to="/create-room">Create a Room</Link>
        </li>
      </ul>

      <button className="cursor-pointer" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default ChatNavbar;