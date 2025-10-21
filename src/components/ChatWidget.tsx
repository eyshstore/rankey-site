import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for chat functionality
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-glow-pulse"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Widget Popup */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-card rounded-xl shadow-2xl animate-fade-in border border-border">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-xl flex items-center justify-between">
            <h3 className="font-semibold">RanKey Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:text-accent transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div className="bg-secondary/50 rounded-lg p-3">
              <p className="text-card-foreground text-sm">
                Hi! How can RanKey help you today?
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question here..."
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="cta" className="w-full" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
