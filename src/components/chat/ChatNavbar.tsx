import { Link, useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";
import { useChatStore } from "../../store/chatStore";
import { useState } from "react";
import Logo from "../../assets/images/logo-v1.svg";

function ChatNavbar() {
  const navigate = useNavigate();
  const setUser = useChatStore((state) => state.setUser);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/dashboard"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img className="w-8 h-8" src={Logo} alt="chatspace logo" />
            <span className="text-h3 text-foreground hidden sm:block">
              chatspace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            <li>
              <Link
                to="/dashboard"
                className="text-body text-foreground hover:text-primary hover:bg-muted px-4 py-2 rounded-lg transition-colors"
              >
                Dashboard
              </Link>
            </li>
             <li>
              <Link
                to="/chat/general"
                className="text-body text-foreground hover:text-primary hover:bg-muted px-4 py-2 rounded-lg transition-colors"
              >
                General Chat
              </Link>
            </li>
            <li>
              <Link
                to="/chat/rooms"
                className="text-body text-foreground hover:text-primary hover:bg-muted px-4 py-2 rounded-lg transition-colors"
              >
                Available Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/chat/create"
                className="text-body text-foreground hover:text-primary hover:bg-muted px-4 py-2 rounded-lg transition-colors"
              >
                Create Room
              </Link>
            </li>
          </ul>

          {/* Desktop Logout Button */}
          <button
            onClick={handleLogout}
            className="hidden md:block btn-rectangle-outlined text-button text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            Logout
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // X icon
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <ul className="px-4 py-3 space-y-1">
            <li>
              <Link
                to="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-body text-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/chat/general"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-body text-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg transition-colors"
              >
                General Chat
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-body text-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg transition-colors"
              >
                Available Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/create-room"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-body text-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg transition-colors"
              >
                Create Room
              </Link>
            </li>
            <li className="pt-2">
              <button
                onClick={handleLogout}
                className="w-full btn-rectangle-outlined text-button text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default ChatNavbar;