import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Pattachitra Wall Art - Jagannath",
    artist: "Ramesh Mahapatra",
    price: "₹2,499",
    originalPrice: "₹3,200",
    rating: 4.8,
    image: "/api/placeholder/300/300",
    category: "Art Prints",
    isAIEnhanced: true
  },
  {
    id: 2,
    title: "Handwoven Banarasi Silk Dupatta",
    artist: "Meera Devi",
    price: "₹4,999",
    originalPrice: "₹6,500",
    rating: 4.9,
    image: "/api/placeholder/300/300",
    category: "Textiles",
    isAIEnhanced: false
  },
  {
    id: 3,
    title: "Dokra Metal Craft - Elephant",
    artist: "Sunil Kumar",
    price: "₹1,899",
    originalPrice: "₹2,400",
    rating: 4.7,
    image: "/api/placeholder/300/300",
    category: "Home Décor",
    isAIEnhanced: true
  },
  {
    id: 4,
    title: "Madhubani Canvas Painting",
    artist: "Sunita Jha",
    price: "₹3,299",
    originalPrice: "₹4,100",
    rating: 4.8,
    image: "/api/placeholder/300/300",
    category: "Art Prints",
    isAIEnhanced: true
  }
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
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
    <section ref={sectionRef} className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Featured <span className="text-transparent bg-gradient-cultural bg-clip-text animate-glow">Artworks</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Discover handpicked masterpieces from India's most talented artisans, 
            each with its own authentic story preserved through AI.
          </p>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group overflow-hidden border-0 shadow-elegant hover:shadow-heritage transition-all duration-500 bg-card transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className={`w-full h-64 object-cover transition-all duration-500 ${
                    hoveredProduct === product.id ? 'scale-110 brightness-110' : 'scale-100'
                  }`}
                />
                
                {/* Shimmer effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
                  hoveredProduct === product.id ? 'translate-x-full' : '-translate-x-full'
                }`}></div>
                
                {/* Enhanced Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between">
                  {product.isAIEnhanced && (
                    <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-inter font-semibold animate-bounce-gentle">
                      <span className="animate-pulse-soft">✨</span> AI Story
                    </div>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`ml-auto bg-white/80 hover:bg-white text-foreground rounded-full p-2 transform transition-all duration-300 ${
                      hoveredProduct === product.id ? 'scale-110 animate-bounce-gentle' : 'scale-100'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Enhanced Overlay Actions */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-500 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button className={`bg-gradient-cultural text-cultural-red-foreground hover:opacity-90 transform transition-all duration-300 ${
                    hoveredProduct === product.id ? 'scale-100 animate-bounce-gentle' : 'scale-75'
                  }`}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <CardContent className="p-5 space-y-3">
                {/* Category & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-inter font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-inter font-medium text-foreground">{product.rating}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="font-playfair font-semibold text-foreground text-lg leading-tight line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    By {product.artist}
                  </p>
                </div>

                {/* Pricing */}
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-playfair font-bold text-foreground">
                    {product.price}
                  </span>
                  <span className="text-sm font-inter text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.8s' }}>
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">View All Products</span>
            <div className="absolute inset-0 bg-gradient-heritage scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;