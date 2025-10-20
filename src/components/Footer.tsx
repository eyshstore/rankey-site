import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-primary-foreground">Ran</span>
                <span className="text-accent">Key</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-md">
              Rank Smart, Sell Big. RanKey helps you scrape and rank Amazon ASINs for eBay dropshipping success.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-4">
              RanKey = Rank + Key: Unlock your eBay profits today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#docs" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} RanKey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
