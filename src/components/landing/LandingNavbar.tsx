import { useState } from "react";
import { Link } from "react-router";
import { X, Menu } from "lucide-react";
import PlaceholderLogo from "../../assets/images/icons/placeholder-logo.svg";

function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Desktop Nav Links */}
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                className="w-6 h-6"
                src={PlaceholderLogo}
                alt="chatspace logo"
              />
              <span className="text-h3 text-foreground">chatspace</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a 
                href="#features" 
                className="text-body text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-body text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a 
                href="#faq" 
                className="text-body text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              to="/login" 
              className="btn-rectangle-outlined text-body font-medium text-foreground hover:text-primary transition-colors "
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="btn-rectangle-filled text-body font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden bg-secondary rounded-lg p-2 hover:opacity-90 transition-opacity"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${mobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}
          `}
        >
          <div className="mt-4 border border-border rounded-lg p-4 bg-background space-y-1">
            {/* Mobile Nav Links */}
            <a 
              href="#features" 
              className="block px-3 py-2 text-body text-foreground hover:bg-muted rounded-lg transition-colors"
             
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 text-body text-foreground hover:bg-muted rounded-lg transition-colors"
            
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 text-body text-foreground hover:bg-muted rounded-lg transition-colors"
             
            >
              FAQ
            </a>

            {/* Dashed Divider */}
            <hr className="border-t border-border border-dashed my-4" />

            {/* Mobile Auth Buttons */}
            <div className="space-y-2">
              <Link 
                to="/signup" 
                className="btn-rounded-filled w-full hover:opacity-90 transition-opacity"
     
              >
                Sign Up
              </Link>
              <Link 
                to="/login" 
                className="btn-rounded-outlined w-full hover:bg-secondary/10 transition-colors"
              
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar;