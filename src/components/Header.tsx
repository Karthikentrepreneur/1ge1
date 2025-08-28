import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // Brand colors from logo
  const BRAND = {
    primary: "#07B5C9", // teal
    text: "#565657",    // dark grey
    border: "#C3C5C5",  // light grey
    soft: "#F8F9F9",    // off-white
  };

  const [open, setOpen] = useState(false);

  const baseLink =
    "relative font-medium transition-colors text-gray-700 hover:text-[#16C79A] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#16C79A] after:transition-all";
  const active =
    "text-[#16C79A] after:w-full"; // underline + active color

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: `1px solid ${BRAND.border}`,
      }}
    >
      <div className="container mx-auto px-4" style={{ backgroundColor: BRAND.soft }}>
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              alt="1 Global Enterprises"
              className="h-12 w-auto object-contain"
              src="/globallogo.png"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${baseLink} ${isActive ? active : ""}`}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
            {/* Optional CTA */}
            <Link
              to="/contact"
              className="rounded-full bg-[#07B5C9] px-4 py-2 text-white shadow hover:brightness-95"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-gray-700 hover:text-[#16C79A]"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-3" style={{ backgroundColor: BRAND.soft }}>
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-2 text-left ${isActive ? "text-[#16C79A]" : "text-gray-700"} font-medium hover:text-[#16C79A]`
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-[#07B5C9] px-4 py-2 text-center text-white shadow hover:brightness-95"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
