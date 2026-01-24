import { useState } from "react";
import { Link } from "react-router";
import { X, Menu } from "lucide-react";
import PlaceholderLogo from "../../assets/images/icons/placeholder-logo.svg";

function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // how to build navbar - logo, mobile right side (use md:hidden), then for tablet and desktop show the two buttons (sign up and login)
    <nav className="bg-background px-5 py-6 ">
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <div className="flex justify-between gap-8">
            <Link to="/" className="flex items-center gap-1">
              <img
                className="w-5 h-5"
                src={PlaceholderLogo}
                alt="placeholderlogo"
              />
              <p className="text-h3">chatspace</p>
            </Link>

            <div className="sm: hidden lg:flex lg:gap-4">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          {/* desktop buttons */}
          <div className="sm: hidden lg:flex lg:gap-4">
            <Link to="">Sign Up</Link>
            <Link to="">Login</Link>
          </div>
        </div>

        {/* mobile burger icon */}
        <button
          className="bg-primary rounded p-1 md:p-2 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>


      {/* mobile menu - opening mobile menu */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div className="flex flex-col justify-center mt-4 border-1 gap-2 bg-background border-border rounded-lg p-4">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
        <hr className="border-t border-border my-4 border-dashed" />

          <Link className="btn-rectangle-filled" to="">
            Sign Up
          </Link>
          <Link className="btn-rectangle-outlined" to="">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar;
