import { Search, ShoppingCart, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-accent to-primary text-primary-foreground shadow-heritage sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-2 text-center text-sm font-inter">
          Celebrating Indian Heritage through AI-Powered Artisan Stories
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-playfair font-bold tracking-wide">
              Indus AI
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-inter font-medium">
            <a href="#" className="hover:text-accent transition-colors">Art Prints</a>
            <a href="#" className="hover:text-accent transition-colors">Home Décor</a>
            <a href="#" className="hover:text-accent transition-colors">Handcrafted Items</a>
            <a href="#" className="hover:text-accent transition-colors">AI Folk Art</a>
            <a href="#" className="hover:text-accent transition-colors">About</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;