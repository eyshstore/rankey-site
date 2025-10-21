import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for contact form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setName("");
    setEmail("");
    setMessage("");
    setNewsletter(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Contact RanKey
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Questions about ASIN scraping or eBay integration? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-lg animate-fade-in">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="w-4 h-4 text-accent border-input rounded focus:ring-accent"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-card-foreground">
                    Join our newsletter for ASIN tips
                  </label>
                </div>
                <Button variant="cta" className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-card rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">support@rankey.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1-800-123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Tech St, San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Support Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Rank and Sell Big?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Button variant="cta" size="lg" className="text-lg animate-glow-pulse">
            Start Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
