import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dashboardHero from "@/assets/dashboard-hero.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Sign-up attempt:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Sign-Up Form */}
      <section className="flex-1 bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Sign-Up Form */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Free Trial</h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Join RanKey today and unlock profitable ASINs for your eBay store.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-xl p-8 shadow-2xl">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>

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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-card-foreground">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="bg-background"
                  />
                </div>

                <Button type="submit" variant="cta" className="w-full">
                  Start Free Trial
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="text-accent hover:underline font-semibold">
                      Log In
                    </Link>
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
            Join Thousands of Successful Dropshippers
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignUp;
