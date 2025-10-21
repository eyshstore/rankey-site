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
                RanKey: Rank Smart, Sell Big – Scrape 100K+ ASINs in Hours
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Rank top-selling Amazon products and unlock eBay profits with AI-powered automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" className="text-lg">
                  Start Free Trial
                </Button>
                <Link to="/use-cases">
                  <Button variant="cta" size="lg" className="text-lg">
                    See How It Works
                  </Button>
                </Link>
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
            Why Choose RanKey?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Powerful features designed to help you rank and unlock profitable Amazon ASINs for eBay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Rocket}
              title="Mass Scraping"
              description="Scrape 100K+ ASINs in hours with our powerful automation engine."
              animation="fade-in"
              onLearnMore={() => window.location.href = "/use-cases"}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Smart Ranking"
              description="AI prioritizes products with 1K+ monthly sales for maximum profit potential."
              animation="slide-in"
              onLearnMore={() => window.location.href = "/use-cases"}
            />
            <FeatureCard
              icon={Key}
              title="eBay Success"
              description="Direct uploads to eBay with seamless integration for instant listings."
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
            Dropshippers Trust RanKey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "RanKey tripled my eBay sales in a month! The AI ranking is spot-on.",
                author: "Sarah M.",
                role: "eBay Seller",
              },
              {
                quote: "I scrape 50K ASINs daily now. RanKey is a game-changer for dropshipping.",
                author: "Michael T.",
                role: "Dropshipping Expert",
              },
              {
                quote: "The eBay integration saves me hours every day. Worth every penny!",
                author: "Jessica L.",
                role: "Online Entrepreneur",
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
            Ready to Rank and Unlock eBay Profits?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Button variant="cta" size="lg" className="text-lg animate-glow-pulse">
            Start 14-Day Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
