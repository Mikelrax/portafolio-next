import React from "react";
import { DesktopNav } from "./DesktopNav.jsx";
import { MobileNav } from "./MobileNav.jsx";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white px-6 gap-4 py-6">
      {/* Mobile Navbar */}
      <MobileNav />
      {/* Desktop Navbar */}
      <DesktopNav />
    </nav>
  );
};

export default NavBar;
