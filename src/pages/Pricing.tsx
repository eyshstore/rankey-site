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
      price: "$19",
      period: "/month",
      features: [
        "10,000 ASINs/month",
        "Category scans",
        "Excel export",
        "Email alerts",
      ],
      cta: "Sign Up",
      popular: false,
    },
    {
      name: "Pro",
      price: "$27",
      period: "/month",
      features: [
        "30,000 ASINs/month",
        "Faster scans",
        "Priority queue",
        "Email + In-app alerts",
      ],
      cta: "Sign Up",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$39",
      period: "/month",
      features: [
        "50,000 ASINs/month",
        "Max speed",
        "Dedicated support",
        "Custom export formats",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How many products can I scan per month?",
      answer:
        "Up to 50K on Enterprise — each scan pulls live Amazon data. Basic includes 10,000 ASINs/month, Pro includes 30,000 ASINs/month, and Enterprise includes 50,000 ASINs/month.",
    },
    {
      question: "What data comes with each product?",
      answer:
        "ASIN, Title, Price, Stock Status, Prime, Brand, Category, Rating, Availability, Color, Size, First Available, Coupon, and more — over 20 data points per product ready for Excel.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Simple Plans for Every Research Volume
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            14-day free trial · No credit card required
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
            Frequently Asked Questions
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
            Start Your Market Research Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join e-commerce teams using RanKey to discover what's selling on Amazon.
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

export default Pricing;
