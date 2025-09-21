import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-3">ईndus AI</h3>
              <p className="text-background/80 font-inter leading-relaxed">
                Empowering Indian artisans through AI-powered storytelling and connecting traditional heritage with modern audiences worldwide.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-background/80">
                <Mail className="h-5 w-5 text-accent" />
                <span className="font-inter">hello@ईndusai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Phone className="h-5 w-5 text-accent" />
                <span className="font-inter">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-inter">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-accent">Shop</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Home</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">ArtWorks</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Stories</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">New Arrivals</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Best Sellers</a>
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-accent">Company</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">About Us</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Our Artisans</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Blog</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Press</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Careers</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Contact</a>
            </nav>
          </div>

          {/* Support & Legal */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-accent">Support</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Help Center</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Shipping Info</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Returns</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Size Guide</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Privacy Policy</a>
              <a href="#" className="block text-background/80 hover:text-accent transition-colors font-inter">Terms of Service</a>
            </nav>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-background/60 font-inter text-sm">Follow our journey:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-accent transition-colors p-2 rounded-full hover:bg-background/10">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-accent transition-colors p-2 rounded-full hover:bg-background/10">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-accent transition-colors p-2 rounded-full hover:bg-background/10">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-accent transition-colors p-2 rounded-full hover:bg-background/10">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Certifications/Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-accent font-playfair font-semibold">Fair Trade</div>
                <div className="text-background/60 font-inter text-xs">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-accent font-playfair font-semibold">Authentic</div>
                <div className="text-background/60 font-inter text-xs">Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-accent font-playfair font-semibold">Secure</div>
                <div className="text-background/60 font-inter text-xs">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-background/60 font-inter text-sm text-center md:text-left">
              © {currentYear} ईndus AI. All rights reserved. Made with ❤️ in India.
            </p>
            
            <div className="flex items-center space-x-2">
              <span className="text-background/40 font-inter text-sm">Powered by Heritage, Enhanced by AI</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;