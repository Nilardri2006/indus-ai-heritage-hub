import { Button } from "@/components/ui/button";
import folkArt1 from "@/assets/folk-art-1.jpeg";
import folkArt2 from "@/assets/folk-art-2.jpeg";
import folkArt3 from "@/assets/folk-art-3.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary to-accent/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cultural-red rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground leading-tight">
                Where <span className="text-transparent bg-gradient-cultural bg-clip-text">Tradition</span> Meets{" "}
                <span className="text-transparent bg-gradient-heritage bg-clip-text">Innovation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-inter leading-relaxed">
                Discover authentic Indian folk art and heritage crafts. 
                Empowering artisans through AI-powered storytelling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-cultural hover:opacity-90 text-cultural-red-foreground font-inter font-semibold shadow-cultural">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold">
                Explore Artisans
              </Button>
              <Button variant="ghost" size="lg" className="text-accent hover:bg-accent/10 font-inter font-semibold">
                About Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary">500+</div>
                <div className="text-sm font-inter text-muted-foreground">Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-cultural-red">1000+</div>
                <div className="text-sm font-inter text-muted-foreground">Art Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-accent">50+</div>
                <div className="text-sm font-inter text-muted-foreground">Art Forms</div>
              </div>
            </div>
          </div>

          {/* Right Content - Folk Art Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {/* Main Featured Art */}
              <div className="col-span-2 relative group">
                <div className="overflow-hidden rounded-2xl shadow-heritage bg-card">
                  <img 
                    src={folkArt2} 
                    alt="Traditional Pattachitra Folk Art" 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair text-xl font-semibold">Pattachitra Painting</h3>
                    <p className="text-white/80 font-inter text-sm">Traditional Odisha Folk Art</p>
                  </div>
                </div>
              </div>

              {/* Secondary Arts */}
              <div className="relative group">
                <div className="overflow-hidden rounded-xl shadow-elegant bg-card">
                  <img 
                    src={folkArt1} 
                    alt="Kalighat Folk Art" 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-3 left-3">
                    <h4 className="text-white font-playfair font-semibold">Kalighat Art</h4>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="overflow-hidden rounded-xl shadow-cultural bg-card">
                  <img 
                    src={folkArt3} 
                    alt="Bengal Folk Dance Art" 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-3 left-3">
                    <h4 className="text-white font-playfair font-semibold">Dance Folk Art</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-inter font-semibold text-sm shadow-heritage">
              AI Enhanced ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;