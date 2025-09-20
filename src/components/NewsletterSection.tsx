import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-cultural relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
        
        {/* Cultural Motifs */}
        <div className="absolute top-1/4 right-1/4">
          <svg width="60" height="60" className="text-white fill-current">
            <path d="M30 0L35 20L55 25L35 30L30 50L25 30L5 25L25 20Z" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-1/3">
          <svg width="80" height="80" className="text-white fill-current opacity-50">
            <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold leading-tight">
              Stay Connected to Your{" "}
              <span className="text-accent">Heritage</span>
            </h2>
            <p className="text-xl font-inter leading-relaxed text-white/90 max-w-2xl mx-auto">
              Get exclusive access to new artisan stories, behind-the-scenes content, 
              and be the first to discover emerging artists and limited-edition pieces.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 font-inter"
              />
              <Button 
                type="submit"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-playfair font-semibold">Artisan Stories</h3>
              <p className="text-white/80 font-inter text-sm">Weekly features on master craftspeople and their traditional techniques</p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-playfair font-semibold">Early Access</h3>
              <p className="text-white/80 font-inter text-sm">Be first to discover new collections and limited-edition masterpieces</p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-playfair font-semibold">Cultural Insights</h3>
              <p className="text-white/80 font-inter text-sm">Learn about the history and significance behind different art forms</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 font-inter text-sm">
              Join 10,000+ culture enthusiasts • No spam, ever • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;