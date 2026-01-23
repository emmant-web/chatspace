import { useState } from "react";
import { Link } from "react-router";
import {X, Menu} from 'lucide-react'


function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // how to build navbar - logo, mobile right side (use md:hidden), then for tablet and desktop show the two buttons (sign up and login)
    <nav className="bg-red-100 px-3 py-6 ">
      <div className="flex justify-between">
        <div>

            <div><Link to="/">chatspace</Link></div>
            <div></div>


        </div>

        {/* desktop buttons */}
        <div className="sm: hidden">
          <Link to="/"></Link>
          <Link to="/"></Link>
        </div>

        {/* mobile burger icon */}
        <button
          className="bg-green md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* mobile menu - opening mobile menu */}
      {mobileMenuOpen && (
        <div>
          <Link to=""></Link>
          <Link to=""></Link>
        </div>
      )}
    </nav>
  );
}

export default LandingNavbar;
