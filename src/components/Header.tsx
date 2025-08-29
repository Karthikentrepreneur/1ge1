import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/about", label: "About Us" },
    { to: "/newsroom", label: "Newsroom" },
    { to: "/insights", label: "Insights" },
    { to: "/investors", label: "Investor Relations" },
    { to: "/sustainability", label: "Corporate sustainability" },
    { to: "/careers", label: "Careers" },
  ];

  const linkBase =
    "relative text-[15px] text-gray-800 hover:text-black transition-colors";
  const linkActive = "text-black";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto w-full max-w-screen-2xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/globallogo.png"
              alt="1 Global Enterprises"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: search + mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className="hidden md:inline-flex p-2 rounded hover:bg-gray-100 text-gray-700 hover:text-black"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded hover:bg-gray-100 text-gray-700"
              onClick={() => setOpen((o) => !o)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="flex flex-col py-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-1 py-2 ${linkBase} ${isActive ? linkActive : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center gap-2 px-1 py-2 text-[15px] text-gray-800 hover:text-black"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
