import { useState } from "react";
import { Link } from "react-router";
import { X, Menu } from "lucide-react";

function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // how to build navbar - logo, mobile right side (use md:hidden), then for tablet and desktop show the two buttons (sign up and login)
    <nav className="bg-red-100 px-3 py-6 ">
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <div className="flex justify-between gap-8">
            <Link to="/">chatspace</Link>

            <div className="sm: hidden lg:flex lg:gap-4">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          {/* desktop buttons */}
          <div className="sm: hidden md: hidden lg:flex lg:gap-4">
            <Link to="">Sign Up</Link>
            <Link to="">Login</Link>
          </div>
        </div>

        {/* mobile burger icon */}
        <button
          className="bg-green lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* mobile menu - opening mobile menu */}
      {mobileMenuOpen && (
        <div className="flex flex-col">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
          <Link to="">Sign Up</Link>
          <Link to="">Login</Link>
        </div>
      )}
    </nav>
  );
}

export default LandingNavbar;
