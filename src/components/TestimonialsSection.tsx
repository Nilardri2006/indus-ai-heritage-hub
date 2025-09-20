import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Mahapatra",
    role: "Pattachitra Artist, Odisha",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Indus AI has transformed how I share my art with the world. The AI-generated stories capture the essence of my family's 200-year tradition beautifully.",
    art: "Pattachitra Painting"
  },
  {
    name: "Sarah Johnson",
    role: "Art Collector, New York",
    image: "/api/placeholder/80/80", 
    rating: 5,
    text: "The authentic stories behind each piece make every purchase meaningful. I now understand the cultural significance and craftsmanship that goes into each artwork.",
    art: "Customer"
  },
  {
    name: "Meera Devi",
    role: "Banarasi Weaver, Varanasi",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "For the first time, my dupatta designs are reaching international customers. The platform's AI helps me tell my story in languages I never learned.",
    art: "Banarasi Textiles"
  },
  {
    name: "Dr. Priya Sharma",
    role: "Cultural Heritage Researcher",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Indus AI is doing crucial work in preserving intangible cultural heritage. The documentation and storytelling approach is revolutionary.",
    art: "Researcher"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Voices of <span className="text-transparent bg-gradient-heritage bg-clip-text">Heritage</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Hear from the artisans and collectors who are part of our mission to preserve and celebrate Indian cultural heritage
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="border-0 shadow-elegant hover:shadow-heritage transition-all duration-300 bg-card group">
              <CardContent className="p-6 space-y-6 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground font-inter leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div>
                    <h4 className="font-playfair font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm font-inter text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Art Form Badge */}
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-inter font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {testimonial.art}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Artisan Spotlight */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-cultural-red to-accent shadow-heritage">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Become Part of Our Artisan Community
            </h3>
            <p className="text-xl font-inter mb-8 max-w-2xl mx-auto text-white/90">
              Join hundreds of traditional artisans who are sharing their stories and reaching global audiences through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-foreground hover:bg-white/90 px-8 py-3 rounded-lg font-inter font-semibold transition-colors">
                Join as Artisan
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-inter font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;