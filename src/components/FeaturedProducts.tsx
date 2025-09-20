import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";

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
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Featured <span className="text-transparent bg-gradient-cultural bg-clip-text">Artworks</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Discover handpicked masterpieces from India's most talented artisans, 
            each with its own authentic story preserved through AI.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-heritage transition-all duration-300 bg-card">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between">
                  {product.isAIEnhanced && (
                    <div className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-inter font-semibold">
                      AI Story ✨
                    </div>
                  )}
                  <Button variant="ghost" size="sm" className="ml-auto bg-white/80 hover:bg-white text-foreground rounded-full p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-gradient-cultural text-cultural-red-foreground hover:opacity-90">
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;