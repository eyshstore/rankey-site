import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Send } from "lucide-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! How can RanKey help you today?", sender: "bot" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
      // Placeholder for bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Thank you for your message! Our team will respond shortly.", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Chat with RanKey Support
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Get instant help with ASIN scraping and eBay integration.
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-xl shadow-lg overflow-hidden animate-fade-in">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-secondary/10">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-card text-card-foreground"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-card border-t border-border">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1 px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="cta" type="submit" size="icon">
                  <Send size={20} />
                </Button>
              </form>
            </div>
          </div>

          {/* Chat Tips */}
          <div className="mt-8 bg-secondary/30 rounded-xl p-6 animate-fade-in">
            <h3 className="text-lg font-bold text-foreground mb-4">Common Questions</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• How do I scrape ASINs with RanKey?</li>
              <li>• What are the pricing plans?</li>
              <li>• How do I integrate with eBay?</li>
              <li>• Can I try RanKey for free?</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chat;
