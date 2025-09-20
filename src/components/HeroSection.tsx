import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import folkArt1 from "@/assets/folk-art-1.jpeg";
import folkArt2 from "@/assets/folk-art-2.jpeg";
import folkArt3 from "@/assets/folk-art-3.jpeg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary to-accent/20 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div 
          className="absolute top-10 left-10 w-32 h-32 bg-cultural-red rounded-full animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-primary rounded-full animate-float"
          style={{
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent rounded-full animate-float"
          style={{
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>
        
        {/* Cultural Motifs */}
        <div className="absolute top-1/4 right-1/3 animate-rotate-slow">
          <svg width="100" height="100" className="text-accent fill-current opacity-20">
            <path d="M50 0L60 30L90 35L60 40L50 70L40 40L10 35L40 30Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground leading-tight animate-fade-in-left">
                Where <span className="text-transparent bg-gradient-cultural bg-clip-text animate-glow">Tradition</span> Meets{" "}
                <span className="text-transparent bg-gradient-heritage bg-clip-text animate-glow" style={{ animationDelay: '0.5s' }}>Innovation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-inter leading-relaxed animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
                Discover authentic Indian folk art and heritage crafts. 
                Empowering artisans through AI-powered storytelling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-gradient-cultural hover:opacity-90 text-cultural-red-foreground font-inter font-semibold shadow-cultural transform hover:scale-105 transition-all duration-300 group">
                <span className="group-hover:animate-bounce-gentle">Shop Now</span>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Explore Artisans</span>
                <div className="absolute inset-0 bg-gradient-cultural scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
              <Button variant="ghost" size="lg" className="text-accent hover:bg-accent/10 font-inter font-semibold transform hover:scale-105 transition-all duration-300 hover:animate-bounce-gentle">
                About Us
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-in-left" style={{ animationDelay: '0.9s' }}>
              {[
                { number: '500+', label: 'Artisans', color: 'text-primary', delay: '0.1s' },
                { number: '1000+', label: 'Art Pieces', color: 'text-cultural-red', delay: '0.2s' },
                { number: '50+', label: 'Art Forms', color: 'text-accent', delay: '0.3s' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group cursor-pointer">
                  <div className={`text-3xl font-playfair font-bold ${stat.color} transform group-hover:scale-110 transition-all duration-300 animate-slide-up`} style={{ animationDelay: stat.delay }}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-inter text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Folk Art Showcase */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-2 gap-6">
              {/* Main Featured Art */}
              <div className="col-span-2 relative group animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="overflow-hidden rounded-2xl shadow-heritage bg-card transform hover:scale-[1.02] transition-all duration-500 relative">
                  <img 
                    src={folkArt2} 
                    alt="Traditional Pattachitra Folk Art" 
                    className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl group-hover:from-black/40 transition-all duration-500"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 transform group-hover:translate-y-[-8px] transition-transform duration-300">
                    <h3 className="text-white font-playfair text-xl font-semibold mb-1 animate-bounce-gentle">Pattachitra Painting</h3>
                    <p className="text-white/80 font-inter text-sm">Traditional Odisha Folk Art</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Secondary Arts */}
              {[
                { src: folkArt1, title: 'Kalighat Art', delay: '0.2s' },
                { src: folkArt3, title: 'Dance Folk Art', delay: '0.3s' }
              ].map((art, index) => (
                <div key={art.title} className="relative group animate-slide-up" style={{ animationDelay: art.delay }}>
                  <div className="overflow-hidden rounded-xl shadow-elegant bg-card transform hover:scale-105 hover:rotate-1 transition-all duration-500 relative">
                    <img 
                      src={art.src} 
                      alt={art.title} 
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl group-hover:from-black/30 transition-all duration-500"></div>
                    
                    {/* Floating effect on hover */}
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    
                    <div className="absolute bottom-3 left-3 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                      <h4 className="text-white font-playfair font-semibold group-hover:animate-bounce-gentle">
                        {art.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-inter font-semibold text-sm shadow-heritage animate-float hover:animate-bounce-gentle cursor-pointer transform hover:scale-110 transition-all duration-300">
              <span className="inline-block animate-pulse-soft">✨</span> AI Enhanced
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;