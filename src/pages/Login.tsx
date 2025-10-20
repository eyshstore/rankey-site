import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dashboardHero from "@/assets/dashboard-hero.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Login Form */}
      <section className="flex-1 bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Login Form */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Log In to RanKey</h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Access your ASIN scraping dashboard and start ranking.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-xl p-8 shadow-2xl">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-card-foreground">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <Link to="#forgot" className="text-accent hover:underline">
                    Forgot Password?
                  </Link>
                  <Link to="#signup" className="text-accent hover:underline">
                    Sign Up for Free
                  </Link>
                </div>

                <Button type="submit" variant="cta" className="w-full">
                  Log In
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    Rank your products, unlock your dashboard.{" "}
                    <span className="font-semibold text-accent">RanKey = Rank + Key</span>
                  </p>
                </div>
              </form>
            </div>

            {/* Right Side - Dashboard Preview */}
            <div className="hidden lg:block animate-zoom-in">
              <img
                src={dashboardHero}
                alt="RanKey Dashboard Preview"
                className="rounded-xl shadow-2xl"
              />
              <p className="text-center mt-4 text-primary-foreground/70">
                Your ASIN ranking dashboard awaits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Not a Member? Unlock eBay Profits with RanKey!
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start your 14-day free trial today and discover how RanKey can transform your dropshipping business.
          </p>
          <Link to="/">
            <Button variant="cta" size="lg">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
