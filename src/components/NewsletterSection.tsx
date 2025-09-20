import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-cultural relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Enhanced Cultural Motifs */}
        <div className="absolute top-1/4 right-1/4 animate-rotate-slow">
          <svg width="60" height="60" className="text-white fill-current">
            <path d="M30 0L35 20L55 25L35 30L30 50L25 30L5 25L25 20Z" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-rotate-slow" style={{ animationDelay: '3s' }}>
          <svg width="80" height="80" className="text-white fill-current opacity-50">
            <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Enhanced Header */}
          <div className={`space-y-6 mb-12 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold leading-tight">
              Stay Connected to Your{" "}
              <span className="text-accent animate-glow">Heritage</span>
            </h2>
            <p className="text-xl font-inter leading-relaxed text-white/90 max-w-2xl mx-auto">
              Get exclusive access to new artisan stories, behind-the-scenes content, 
              and be the first to discover emerging artists and limited-edition pieces.
            </p>
          </div>

          {/* Enhanced Newsletter Form */}
          <form onSubmit={handleSubmit} className={`max-w-md mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 font-inter transition-all duration-300 focus:scale-105"
              />
              <Button 
                type="submit"
                className={`bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold whitespace-nowrap transform transition-all duration-300 ${
                  isSubmitted ? 'scale-110 animate-bounce-gentle bg-green-500' : 'hover:scale-105'
                }`}
              >
                {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
              </Button>
            </div>
          </form>

          {/* Enhanced Benefits */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.6s' }}>
            {[
              {
                icon: "📚",
                title: "Artisan Stories", 
                desc: "Weekly features on master craftspeople and their traditional techniques",
                delay: "0.1s"
              },
              {
                icon: "⚡",
                title: "Early Access", 
                desc: "Be first to discover new collections and limited-edition masterpieces",
                delay: "0.2s"
              },
              {
                icon: "🔥",
                title: "Cultural Insights", 
                desc: "Learn about the history and significance behind different art forms",
                delay: "0.3s"
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`space-y-3 group cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: benefit.delay }}
              >
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 text-2xl animate-bounce-gentle">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-playfair font-semibold group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/80 font-inter text-sm group-hover:text-white transition-colors duration-300">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Trust Indicators */}
          <div className={`mt-12 pt-8 border-t border-white/20 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.9s' }}>
            <p className="text-white/70 font-inter text-sm animate-pulse-soft">
              Join 10,000+ culture enthusiasts • No spam, ever • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;