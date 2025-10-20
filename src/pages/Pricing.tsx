import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      features: [
        "10K ASINs per day",
        "Basic analytics dashboard",
        "Email support",
        "14-day free trial",
      ],
      cta: "Sign Up",
      popular: false,
    },
    {
      name: "Pro",
      price: "$27",
      period: "/month",
      features: [
        "30K ASINs per day",
        "Smart ranking algorithm",
        "Priority support",
        "Advanced analytics",
        "eBay integration",
        "14-day free trial",
      ],
      cta: "Sign Up",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$39",
      period: "/month",
      features: [
        "50K ASINs per day",
        "Full eBay API integration",
        "Dedicated account manager",
        "Custom analytics reports",
        "White-label options",
        "14-day free trial",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "What is RanKey?",
      answer:
        "RanKey is a powerful SaaS tool that helps dropshippers scrape and rank Amazon ASINs for eBay. Our AI-powered platform identifies high-profit products with 1K+ monthly sales, making it easy to find winning products for your eBay store.",
    },
    {
      question: "How fast can I scrape ASINs?",
      answer:
        "With RanKey, you can scrape up to 100K+ ASINs per day depending on your plan. Our Basic plan allows 10K ASINs/day, Pro allows 30K/day, and Enterprise allows 50K/day. All scraping is automated and runs in the background.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! All plans include a 14-day free trial with no credit card required. You can test RanKey's full features and see how it ranks and unlocks profitable ASINs for your eBay business before committing to a paid plan.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Choose Your RanKey Plan to Rank and Unlock Profits
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Start with a 14-day free trial – no credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative animate-fade-in ${
                  plan.popular ? "border-2 border-accent" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-accent">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="cta" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Got Questions About RanKey?
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Rank Smart, Sell Big – Start Your Free Trial!
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of dropshippers who trust RanKey to unlock their eBay profits.
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

export default Pricing;
