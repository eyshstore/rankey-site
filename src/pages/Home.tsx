import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp, Key } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import dashboardHero from "@/assets/dashboard-hero.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                RanKey – Discover What's Selling on Amazon Right Now
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Scan any category, get products ranked by real sales volume, and export actionable market data in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" className="text-lg">
                  Start Free Scan
                </Button>
              </div>
            </div>
            <div className="animate-zoom-in">
              <img
                src={dashboardHero}
                alt="RanKey Dashboard showing ASIN rankings and eBay integration"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Why E-commerce Teams Choose RanKey
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Powerful market research tools to discover what's selling on Amazon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Rocket}
              title="Deep Category Scans"
              description="Choose any Amazon category and define how many products to pull (each API call = one product). Results in hours."
              animation="fade-in"
              onLearnMore={() => window.location.href = "/use-cases"}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Sales-Based Popularity Rank"
              description="See exactly which items are moving fastest in the category — ranked by actual purchase data."
              animation="slide-in"
              onLearnMore={() => window.location.href = "/use-cases"}
            />
            <FeatureCard
              icon={Key}
              title="Instant Excel/Access Export"
              description="Download full results with 20+ data points per product, ready for your spreadsheets."
              animation="fade-in"
              onLearnMore={() => window.location.href = "/use-cases"}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            E-commerce Teams Trust RanKey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "RanKey shows me the top-selling items in any category before my competitors even know they exist.",
                author: "David M.",
                role: "E-commerce Buyer",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-accent text-6xl mb-4 opacity-20">"</div>
                <p className="text-card-foreground mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-card-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Discover What's Selling?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Button variant="cta" size="lg" className="text-lg animate-glow-pulse">
            Start Free Scan
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
