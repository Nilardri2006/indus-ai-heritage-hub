import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Sparkles, ArrowRight, Globe } from "lucide-react";

const AboutSection = () => {
  const AboutSectionPoints = [
    {
      icon: Heart,
      title: "Preserve Heritage",
      description: "Safeguarding traditional crafts and techniques passed down through generations, ensuring they thrive in the modern world."
    },
    {
      icon: Users,
      title: "Empower Artisans",
      description: "Providing sustainable income opportunities, skill development, and global market access to master craftspeople."
    },
    {
      icon: BookOpen,
      title: "Share Stories",
      description: "Documenting and sharing the rich cultural narratives behind each craft, connecting people to their heritage."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Bringing Indian crafts to a worldwide audience while maintaining authenticity and supporting local communities."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="About" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-yellow-400 text-brown-800">
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            Bridging Tradition with
            <span className="block text-yellow-500">Tomorrow</span>
          </h2>
          <p className="text-xl text-brown-600 max-w-4xl mx-auto leading-relaxed">
            Heritage Crafts is more than a platform—we're a movement dedicated to preserving 
            India's rich cultural heritage while creating sustainable futures for traditional artisans.
          </p>
        </div>

        {/* Main AboutSection Statement */}
        <div className="mb-16">
          <Card className="bg-yellow-50 border-yellow-400/50 shadow-lg animate-scale-in">
            <CardContent className="p-8 md:p-12 text-center">
              <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-brown-800 mb-6">
                Every Thread Tells a Story, Every Purchase Preserves a Legacy
              </h3>
              <p className="text-lg text-brown-600 max-w-3xl mx-auto leading-relaxed">
                We believe that traditional crafts are living heritage—breathing, evolving art forms 
                that connect us to our roots while adapting to contemporary needs. Our AboutSection is to 
                create a sustainable ecosystem where ancient wisdom meets modern opportunity, ensuring 
                that the hands that create magic continue to thrive.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* AboutSection Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {AboutSectionPoints.map((point, index) => (
            <div
              key={index}
              className="group text-center animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 group-hover:bg-yellow-300 transition-colors duration-300">
                <point.icon className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-brown-800 mb-4">{point.title}</h3>
              <p className="text-brown-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Our Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-brown-800 mb-6">Our Approach</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-brown-800 mb-2">Direct Partnership</h4>
                  <p className="text-brown-600">We work directly with artisans, eliminating middlemen and ensuring fair compensation for their incredible skills.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-brown-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-brown-800 mb-2">Skill Development</h4>
                  <p className="text-brown-600">We provide training in modern techniques while preserving traditional methods, helping artisans expand their repertoire.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-brown-800 mb-2">Cultural Documentation</h4>
                  <p className="text-brown-600">Every craft comes with its story, techniques, and cultural significance, creating a digital heritage library.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-brown-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-brown-800 mb-2">Community Building</h4>
                  <p className="text-brown-600">We foster connections between artisans, customers, and cultural enthusiasts, creating a thriving heritage community.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <Card className="bg-yellow-50/80 border-yellow-400/50">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-brown-800 mb-6">Impact Since 2020</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-brown-600">Artisan Income Increase</span>
                    <span className="font-bold text-yellow-500">300%</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-full"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-brown-600">Craft Techniques Documented</span>
                    <span className="font-bold text-brown-500">150+</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div className="bg-brown-500 h-2 rounded-full w-4/5"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-brown-600">Young Apprentices Trained</span>
                    <span className="font-bold text-yellow-500">200+</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brown-800 mb-4">Join Our AboutSection</h3>
            <p className="text-brown-600 mb-8">
              Whether you're passionate about traditional crafts, interested in supporting artisans, 
              or want to be part of preserving cultural heritage, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-4 shadow-lg transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brown-500 text-brown-500 hover:bg-yellow-100 hover:text-brown-800 px-8 py-4 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
