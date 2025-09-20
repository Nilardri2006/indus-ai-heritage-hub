import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const categories = [
  {
    title: "Art Prints",
    description: "Traditional paintings and contemporary interpretations",
    image: "/api/placeholder/400/300",
    color: "from-cultural-red/80 to-cultural-red/60"
  },
  {
    title: "Home Décor",
    description: "Handcrafted pieces to beautify your living space",
    image: "/api/placeholder/400/300",
    color: "from-primary/80 to-primary/60"
  },
  {
    title: "Handcrafted Items",
    description: "Unique artifacts made with traditional techniques",
    image: "/api/placeholder/400/300",
    color: "from-accent/80 to-accent/60"
  },
  {
    title: "Digital AI Folk Art",
    description: "Traditional art enhanced with AI storytelling",
    image: "/api/placeholder/400/300",
    color: "from-purple-600/80 to-purple-400/60"
  }
];

const CategoriesSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-40 w-96 h-96 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-40 w-48 h-48 bg-cultural-red rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Explore <span className="text-transparent bg-gradient-heritage bg-clip-text animate-glow">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            From traditional crafts to AI-enhanced digital art, discover the rich diversity of Indian heritage
          </p>
        </div>

        {/* Enhanced Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title} 
              className={`group cursor-pointer transform transition-all duration-700 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-heritage transition-all duration-500 bg-card transform ${
                hoveredCategory === category.title ? 'scale-105 -translate-y-4' : 'scale-100'
              }`}>
                {/* Enhanced Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredCategory === category.title ? 'scale-125 brightness-110' : 'scale-110'
                    }`}
                  />
                  
                  {/* Shimmer effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
                    hoveredCategory === category.title ? 'translate-x-full' : '-translate-x-full'
                  }`}></div>
                  
                  {/* Enhanced Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent transition-all duration-500 ${
                    hoveredCategory === category.title ? 'opacity-90' : 'opacity-75'
                  }`}></div>
                  
                  {/* Enhanced Content */}
                  <div className={`absolute inset-0 p-6 flex flex-col justify-end text-white transition-all duration-500 ${
                    hoveredCategory === category.title ? 'transform translate-y-0' : ''
                  }`}>
                    <h3 className={`text-2xl font-playfair font-bold mb-2 transition-all duration-500 ${
                      hoveredCategory === category.title ? 'transform -translate-y-2 animate-bounce-gentle' : 'transform translate-y-0'
                    }`}>
                      {category.title}
                    </h3>
                    <p className={`text-white/90 font-inter text-sm mb-4 transition-all duration-500 ${
                      hoveredCategory === category.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {category.description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`text-white hover:bg-white/20 w-fit font-inter transition-all duration-500 ${
                        hoveredCategory === category.title ? 'opacity-100 translate-y-0 animate-bounce-gentle' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      Shop Now
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Featured Category Banner */}
        <div className={`mt-16 relative overflow-hidden rounded-3xl bg-gradient-cultural shadow-heritage transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.8s' }}>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 left-20 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4 animate-slide-up">
              AI-Enhanced Heritage Collection
            </h3>
            <p className="text-xl font-inter mb-8 max-w-2xl mx-auto text-white/90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Experience traditional Indian art like never before with our AI-powered storytelling that brings each piece to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90 font-inter font-semibold transform hover:scale-105 transition-all duration-300">
                Explore AI Collection
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10 font-inter transform hover:scale-105 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;