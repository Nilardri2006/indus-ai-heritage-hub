import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Feedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment:
        "The handwoven saree I purchased tells a beautiful story. The quality is exceptional, and knowing I'm supporting Lakshmi Amma's craft makes it even more special. It's not just clothing, it's wearable heritage.",
      product: "Kasavu Handloom Saree",
      verified: true,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment:
        "Bought a set of Channapatna toys for my daughter. Ravi Mistri's craftsmanship is incredible - each toy is perfectly smooth and the natural colors are vibrant. These toys will be treasured for generations.",
      product: "Wooden Lacquer Toys Set",
      verified: true,
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Ahmedabad, Gujarat",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment:
        "The block-printed bedsheet from Meera Devi is absolutely stunning. The intricate patterns and rich colors have transformed my bedroom. I love that each piece is hand-crafted with such attention to detail.",
      product: "Rajasthani Block Print Bedsheet",
      verified: true,
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Bangalore, Karnataka",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 4,
      comment:
        "The terracotta pots from Arjun Kumhar are not just functional but artistic. The mirror work is exquisite and they've become conversation starters in my home. Great to support traditional craftsmen.",
      product: "Kutch Mirror Work Pottery",
      verified: true,
    },
    {
      id: 5,
      name: "Deepika Menon",
      location: "Kochi, Kerala",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment:
        "As someone from Kerala, I can authentically say that Lakshmi Amma's work preserves our heritage beautifully. The golden borders on the saree are just like my grandmother's, but with a contemporary touch.",
      product: "Traditional Kerala Saree",
      verified: true,
    },
    {
      id: 6,
      name: "Amit Joshi",
      location: "Pune, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      comment:
        "The wooden carvings are masterpieces. Each detail shows Ravi's years of experience. I ordered custom pieces for my office, and they perfectly blend traditional art with modern aesthetics.",
      product: "Custom Wood Carvings",
      verified: true,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 bg-yellow-200 text-yellow-800"
          >
            Customer Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Community
            <span className="block text-yellow-600">Says</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from customers who've embraced traditional crafts
            and connected with our artisan community.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in bg-white/80 backdrop-blur-sm border-yellow-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-yellow-400 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-800 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Product */}
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="text-xs text-yellow-800 border-yellow-300"
                  >
                    {testimonial.product}
                  </Badge>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-yellow-200 text-yellow-800">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-yellow-100 text-yellow-800"
                        >
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-2xl font-bold text-yellow-500">4.9</p>
              <p className="text-sm text-gray-500">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-700">2,500+</p>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">98%</p>
              <p className="text-sm text-gray-500">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
