import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Correct imports from src/assets
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import category4 from "../assets/category4.webp";

const categories = [
  {
    title: "Handloom Wonders",
    description: "Vibrant fabrics, sarees, stoles, and textiles handcrafted by skilled artisans.",
    image: category1,
    color: "from-red-600/80 to-red-400/60"
  },
  {
    title: "Artisan Jewelry",
    description: "Unique necklaces, earrings, bangles, and accessories made using age-old methods.",
    image: category2,
    color: "from-yellow-500/80 to-yellow-400/60"
  },
  {
    title: "Home & Rituals",
    description: "Decorative items, lamps, ceremonial artifacts, and puja essentials inspired by folk traditions.",
    image: category3,
    color: "from-purple-600/80 to-purple-400/60"
  },
  {
    title: "Folk Stories & Crafts",
    description: "Story-driven craft items, miniature paintings, and DIY kits connecting you to regional tales.",
    image: category4,
    color: "from-green-500/80 to-green-400/60"
  }
];

const CategoriesSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-40 w-96 h-96 bg-red-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-40 w-48 h-48 bg-yellow-400 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Explore <span className="text-transparent bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            From traditional crafts to AI-enhanced digital art, discover the rich diversity of Indian heritage
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-card transform ${hoveredCategory === category.title ? 'scale-105 -translate-y-2' : 'scale-100'}`}>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCategory === category.title ? 'scale-110 brightness-110' : 'scale-100'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent transition-opacity duration-500 ${hoveredCategory === category.title ? 'opacity-90' : 'opacity-70'}`}></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-playfair font-bold mb-2">{category.title}</h3>
                    <p className="text-white/90 font-inter text-sm mb-4">{category.description}</p>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 w-fit font-inter">
                      Shop Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
