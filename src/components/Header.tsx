import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isHeroPage = location.pathname === "/";

  // Brand colors from logo
  const BRAND = {
    primary: "#07B5C9",     // teal
    text: "#565657",        // dark grey
    border: "#C3C5C5",      // light grey
    soft: "#F8F9F9",        // off-white
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-soft transition-colors`}
      style={{
        backgroundColor: isHeroPage ? "#ffffff" : "#ffffff",
        borderBottom: isHeroPage ? "none" : `1px solid ${BRAND.border}`,
      }}
    >
      <div className="container mx-auto px-4" style={{ backgroundColor: BRAND.soft }}>
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4" style={{ backgroundColor: BRAND.soft }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img alt="1 Global Enterprises" className="h-12 w-auto object-contain" src="/globallogo.png" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium relative group transition-colors duration-200`}
                style={{
                  color: isActive(item.href) ? BRAND.primary : BRAND.text,
                }}
              >
                {item.name}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                  style={{
                    backgroundColor: BRAND.primary,
                    width: isActive(item.href) ? "100%" : "0%",
                  }}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="transition-opacity"
              style={{
                borderColor: BRAND.primary,
                color: BRAND.primary,
              }}
            >
              <Link to="/contact">Schedule Pickup</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="transition-opacity"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND.primary}, #0593AF)`,
                color: "#ffffff",
              }}
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 transition-colors"
            style={{ color: BRAND.text }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "#ffffff", borderColor: BRAND.border }}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-2 font-medium transition-colors"
                style={{ color: isActive(item.href) ? BRAND.primary : BRAND.text }}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4" style={{ borderTop: `1px solid ${BRAND.border}` }}>
              <Button
                variant="outline"
                asChild
                style={{ borderColor: BRAND.primary, color: BRAND.primary }}
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Schedule Pickup
                </Link>
              </Button>
              <Button
                asChild
                style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.primary}, #0593AF)`, color: "#ffffff" }}
              >
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
