import { useState } from "react";
import { Menu, X, Phone, Mail, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "How It Works",
    href: "/how-it-works"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "About Us",
    href: "/about"
  }, {
    name: "Sustainability",
    href: "/sustainability"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (href: string) => {
    return location.pathname === href;
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>+65 6XXX XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>info@superenergy.sg</span>
            </div>
          </div>
          <div className="text-primary font-medium">
            Join the Green Revolution Today!
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <img alt="Super Energy" className="h-12 w-auto object-contain" src="/lovable-uploads/a3ad0f90-3f30-4006-8027-6d25a277ad0e.png" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Clean Fuel Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => <Link key={item.name} to={item.href} className={`text-foreground hover:text-primary transition-colors duration-200 font-medium relative group ${isActive(item.href) ? 'text-primary' : ''}`}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>)}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/contact">Schedule Pickup</Link>
            </Button>
            <Button size="sm" asChild className="bg-gradient-eco hover:opacity-90 transition-opacity">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium ${isActive(item.href) ? 'text-primary' : ''}`}>
                {item.name}
              </Link>)}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" asChild className="border-primary text-primary">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Schedule Pickup</Link>
              </Button>
              <Button asChild className="bg-gradient-eco">
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>Our Services</Link>
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;