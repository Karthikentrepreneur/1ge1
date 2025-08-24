
import { Link } from "react-router-dom";

const Header = () => {
  // Brand colors from logo
  const BRAND = {
    primary: "#07B5C9",     // teal
    text: "#565657",        // dark grey
    border: "#C3C5C5",      // light grey
    soft: "#F8F9F9",        // off-white
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-soft transition-colors"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: `1px solid ${BRAND.border}`,
      }}
    >
      <div className="container mx-auto px-4" style={{ backgroundColor: BRAND.soft }}>
        <div className="flex items-center justify-center py-4" style={{ backgroundColor: BRAND.soft }}>
          {/* Centered Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img alt="1 Global Enterprises" className="h-12 w-auto object-contain" src="/globallogo.png" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
