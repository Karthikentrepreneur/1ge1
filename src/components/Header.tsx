
import { Link } from "react-router-dom";

const Header = () => {
  // Brand colors from logo
  const BRAND = {
    primary: "#07B5C9",     // teal
    text: "#565657",        // dark grey
    border: "#C3C5C5",      // light grey
    soft: "#F8F9F9",        // off-white
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <div className="flex items-center justify-between py-4" style={{ backgroundColor: BRAND.soft }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img alt="1 Global Enterprises" className="h-12 w-auto object-contain" src="/globallogo.png" />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-[#16C79A] transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#16C79A] transition-colors font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('group-companies')}
              className="text-gray-700 hover:text-[#16C79A] transition-colors font-medium"
            >
              Group Companies
            </button>
            <button 
              onClick={() => scrollToSection('footer')}
              className="text-gray-700 hover:text-[#16C79A] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-[#16C79A]"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4" style={{ backgroundColor: BRAND.soft }}>
          <nav className="flex flex-col space-y-2">
            <button 
              onClick={() => {
                scrollToSection('hero');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-left py-2 text-gray-700 hover:text-[#16C79A] transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => {
                scrollToSection('about');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-left py-2 text-gray-700 hover:text-[#16C79A] transition-colors font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => {
                scrollToSection('group-companies');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-left py-2 text-gray-700 hover:text-[#16C79A] transition-colors font-medium"
            >
              Group Companies
            </button>
            <button 
              onClick={() => {
                scrollToSection('footer');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-left py-2 text-gray-700 hover:text-[#16C79A] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
