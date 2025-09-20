import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Explore <span className="text-transparent bg-gradient-heritage bg-clip-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            From traditional crafts to AI-enhanced digital art, discover the rich diversity of Indian heritage
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={category.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-heritage transition-all duration-300 bg-card">
                {/* Image */}
                <div className="relative h-80">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent`}></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-playfair font-bold mb-2 group-hover:transform group-hover:translate-y-[-4px] transition-transform duration-300">
                      {category.title}
                    </h3>
                    <p className="text-white/90 font-inter text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/20 w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-inter"
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

        {/* Featured Category Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-cultural shadow-heritage">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              AI-Enhanced Heritage Collection
            </h3>
            <p className="text-xl font-inter mb-8 max-w-2xl mx-auto text-white/90">
              Experience traditional Indian art like never before with our AI-powered storytelling that brings each piece to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90 font-inter font-semibold">
                Explore AI Collection
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10 font-inter">
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