import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ChevronRight } from "lucide-react";

// Import artisan images from assets folder
import story1 from "../assets/story1.webp";
import story2 from "../assets/story2.jpg";
import story3 from "../assets/story3.jpg";
import story4 from "../assets/story4.jpg";

const Stories = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  const artisanStories = [
    {
      id: 1,
      name: "Meera Devi",
      craft: "Block Printing",
      region: "Rajasthan, Jaipur",
      image: story1,
      rating: 4.9,
      shortStory: "Master of traditional Rajasthani block printing with 25 years of expertise.",
      fullStory: "Meera Devi learned the ancient art of block printing from her grandmother at the age of 12. Working with hand-carved wooden blocks passed down through generations, she creates intricate patterns that tell stories of Rajasthani folklore. Her workshop in Jaipur has become a sanctuary where traditional techniques flourish, employing 15 local women and preserving this 400-year-old craft. Each piece she creates carries the soul of Rajasthan - from desert roses to royal elephants, every motif has deep cultural significance.",
      speciality: "Hand-carved wooden block printing",
      experience: "25 years",
      products: 240
    },
    {
      id: 2,
      name: "Arjun Kumhar",
      craft: "Pottery",
      region: "Gujarat, Kutch",
      image: story2,
      rating: 4.8,
      shortStory: "Third-generation potter creating stunning terracotta and ceramic pieces.",
      fullStory: "From the red earth of Kutch emerges magic under Arjun's skilled hands. A third-generation potter, he has revolutionized traditional terracotta work by incorporating contemporary designs while maintaining ancient techniques. His workshop showcases everything from daily-use pottery to artistic sculptures. Arjun has trained over 50 young artisans, ensuring that the potter's wheel continues to spin stories for future generations. His pieces are known for their distinctive mirror work and vibrant Gujarat-inspired patterns.",
      speciality: "Terracotta with mirror inlay work",
      experience: "18 years",
      products: 180
    },
    {
      id: 3,
      name: "Lakshmi Amma",
      craft: "Handloom Weaving",
      region: "Kerala, Kuthampully",
      image: story3,
      rating: 5.0,
      shortStory: "Master weaver creating exquisite Kerala sarees and traditional textiles.",
      fullStory: "In the weaving village of Kuthampully, Lakshmi Amma's loom sings with the rhythm of tradition. For over 30 years, she has been weaving magic into Kerala's famous Kasavu sarees, each thread telling a story of devotion and skill. Her golden borders shine like captured sunlight, and her intricate patterns reflect the lush beauty of Kerala's backwaters. She has mentored 40 young women, keeping alive the centuries-old tradition of handloom weaving that defines Kerala's cultural identity.",
      speciality: "Traditional Kasavu sarees with gold borders",
      experience: "30 years",
      products: 320
    },
    {
      id: 4,
      name: "Ravi Mistri",
      craft: "Wood Carving",
      region: "Karnataka, Channapatna",
      image: story4,
      rating: 4.7,
      shortStory: "Channapatna toy maker preserving the art of lacquer wood craft.",
      fullStory: "Ravi's hands dance with chisels and wood, bringing life to Channapatna's famous lacquer toys. This traditional craft, over 200 years old, finds new expression through his innovative designs while maintaining its eco-friendly essence. Using natural dyes and traditional lac polish, he creates toys that are not just playthings but pieces of art. His workshop has become a training center where the sounds of wood shaping on lathes echo with laughter of children learning their heritage. Every toy he crafts carries the joy and innocence of childhood.",
      speciality: "Eco-friendly lacquer toys and decorative items",
      experience: "22 years",
      products: 500
    }
  ];

  const toggleStory = (id: number) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  return (
    <section id="Stories" className="py-20 bg-gradient-to-b from-yellow-50 via-white to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-yellow-200 text-yellow-900">
            Master Artisans
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
            Stories Behind the
            <span className="block text-yellow-600">Craft</span>
          </h2>
          <p className="text-xl text-yellow-800 max-w-3xl mx-auto">
            Meet the master artisans who pour their heart, heritage, and skill into every creation. 
            Each story is a testament to India's rich cultural tapestry.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artisanStories.map((artisan, index) => (
            <Card
              key={artisan.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-t from-yellow-100 via-white to-yellow-50 border border-yellow-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={artisan.image}
                  alt={`${artisan.name} - ${artisan.craft} artisan`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-200/90 text-yellow-900 shadow flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    {artisan.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-900/70 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{artisan.name}</h3>
                  <p className="text-yellow-300 font-semibold">{artisan.craft}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-yellow-800">{artisan.region}</span>
                </div>

                <p className="text-yellow-900 mb-4 leading-relaxed">
                  {expandedStory === artisan.id ? artisan.fullStory : artisan.shortStory}
                </p>

                {expandedStory === artisan.id && (
                  <div className="space-y-3 mb-4 animate-fade-in-up">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                        <span className="font-semibold text-yellow-900">Speciality:</span>
                        <p className="text-yellow-800 mt-1">{artisan.speciality}</p>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                        <span className="font-semibold text-yellow-900">Experience:</span>
                        <p className="text-yellow-800 mt-1">{artisan.experience}</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg text-sm border border-yellow-200">
                      <span className="font-semibold text-yellow-900">Products Created:</span>
                      <p className="text-yellow-800 mt-1">{artisan.products}+ handcrafted pieces</p>
                    </div>
                  </div>
                )}

                <Button
                  onClick={() => toggleStory(artisan.id)}
                  variant="ghost"
                  className="w-full justify-between text-yellow-800 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                >
                  {expandedStory === artisan.id ? "Show Less" : "Read Full Story"}
                  <ChevronRight className={`w-4 h-4 transition-transform ${expandedStory === artisan.id ? 'rotate-90' : ''}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 shadow-lg transition-all duration-300"
          >
            Discover All Artisans
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
