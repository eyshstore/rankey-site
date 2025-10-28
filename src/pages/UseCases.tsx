import { Rocket, TrendingUp, DollarSign, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UseCases = () => {
  const useCases = [
    {
      icon: Rocket,
      title: "Category Performance Audit",
      description: "Run a full scan to see the current best-sellers in any niche.",
      animation: "fade-in",
    },
    {
      icon: TrendingUp,
      title: "Seasonal Demand Tracking",
      description: "Schedule daily scans before peak seasons to catch rising products early.",
      animation: "slide-in",
    },
    {
      icon: DollarSign,
      title: "Product Validation",
      description: "Export ranked ASINs to validate new supplier listings against live sales.",
      animation: "zoom-in",
    },
    {
      icon: Key,
      title: "Inventory Forecasting",
      description: "Use Popularity Rank + Stock Status to predict re-order timing.",
      animation: "fade-in",
    },
  ];

  const stats = [
    { value: "50K", label: "ASINs/Month" },
    { value: "20+", label: "Data Points" },
    { value: "Hours", label: "Scan Time" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            How Merchants Use RanKey for Smarter Product Decisions
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Real workflows — from trend spotting to inventory planning.
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-${useCase.animation}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-card-foreground mb-3">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-6">{useCase.description}</p>
                      <Button variant="cta">Learn More</Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            RanKey by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-zoom-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-lg text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            How RanKey Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Choose a Category",
                  description: "Select any Amazon category and specify how many products to scan.",
                },
                {
                  step: "2",
                  title: "Wait for Results",
                  description: "Get notified when your scan completes — in-app or email alerts.",
                },
                {
                  step: "3",
                  title: "Review Rankings",
                  description: "Products are sorted by sales-based popularity rank — see what's moving fast.",
                },
                {
                  step: "4",
                  title: "Export Data",
                  description: "Download full results to Excel with 20+ data points per product.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Start Your First Scan – Free
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            14-day free trial. No credit card required.
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

export default UseCases;
