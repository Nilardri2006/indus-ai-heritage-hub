import { Search, ShoppingCart, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-gradient-to-r from-accent to-primary text-primary-foreground shadow-heritage sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-lg bg-opacity-95' : ''
    }`}>
      {/* Top Bar */}
      <div className="border-b border-primary-foreground/20 overflow-hidden">
        <div className="container mx-auto px-4 py-2 text-center text-sm font-inter animate-slide-up">
          <span className="inline-block animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]">
            Celebrating Indian Heritage through AI-Powered Artisan Stories
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="text-2xl font-playfair font-bold tracking-wide transform transition-transform duration-300 group-hover:scale-105">
              <span className="inline-block hover:animate-bounce-gentle">Indus</span>{" "}
              <span className="text-accent">AI</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-inter font-medium">
            {['Art Prints', 'Home Décor', 'Handcrafted Items', 'AI Folk Art', 'About'].map((item, index) => (
              <a 
                key={item}
                href="#" 
                className="relative hover:text-accent transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden text-primary-foreground hover:text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { icon: Search, label: 'Search' },
              { icon: User, label: 'Profile' },
              { icon: Heart, label: 'Wishlist' }
            ].map((action, index) => (
              <Button 
                key={action.label}
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 transform hover:scale-110 transition-all duration-200"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <action.icon className="h-5 w-5" />
              </Button>
            ))}
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 relative transform hover:scale-110 transition-all duration-200 group">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse-soft group-hover:animate-bounce-gentle">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary-foreground/20 animate-fade-in">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {['Art Prints', 'Home Décor', 'Handcrafted Items', 'AI Folk Art', 'About'].map((item, index) => (
                <a 
                  key={item}
                  href="#" 
                  className="block py-2 font-inter font-medium hover:text-accent transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-primary-foreground/20">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;