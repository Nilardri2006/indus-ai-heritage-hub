import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Users, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Authentic Heritage",
    description: "Every piece tells a story rooted in centuries of Indian tradition and craftsmanship"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Stories",
    description: "Experience artisan narratives brought to life through cutting-edge AI storytelling"
  },
  {
    icon: Users,
    title: "Empowering Artisans",
    description: "Direct support to traditional craftspeople, preserving their livelihoods and skills"
  },
  {
    icon: Heart,
    title: "Cultural Preservation",
    description: "Safeguarding India's intangible heritage for future generations to cherish"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground leading-tight">
                Reviving Indian Heritage with{" "}
                <span className="text-transparent bg-gradient-cultural bg-clip-text">AI</span> &{" "}
                <span className="text-transparent bg-gradient-heritage bg-clip-text">Innovation</span>
              </h2>
              
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Indus AI bridges the gap between traditional Indian artisans and the digital world. 
                We harness the power of artificial intelligence to preserve and share the authentic 
                stories behind every handcrafted masterpiece.
              </p>
              
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Our platform empowers artisans with AI-generated multilingual storytelling, 
                context-aware search capabilities, and a global marketplace that celebrates 
                the rich cultural heritage of India while ensuring fair compensation for creators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-cultural hover:opacity-90 text-cultural-red-foreground font-inter font-semibold shadow-cultural">
                Our Story
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-inter font-semibold">
                Meet Artisans
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary">500+</div>
                <div className="text-sm font-inter text-muted-foreground">Artisans Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-cultural-red">50+</div>
                <div className="text-sm font-inter text-muted-foreground">Art Forms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-accent">23</div>
                <div className="text-sm font-inter text-muted-foreground">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary">95%</div>
                <div className="text-sm font-inter text-muted-foreground">Artist Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="border-0 shadow-elegant hover:shadow-heritage transition-all duration-300 bg-card group">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-cultural rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center bg-card rounded-3xl p-12 shadow-heritage">
          <blockquote className="text-2xl md:text-3xl font-playfair font-medium text-foreground leading-relaxed italic mb-6">
            "Our mission is to ensure that no traditional craft or artisan story is lost to time, 
            while creating sustainable livelihoods through modern technology."
          </blockquote>
          <cite className="text-lg font-inter text-muted-foreground">
            — The Indus AI Team
          </cite>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;