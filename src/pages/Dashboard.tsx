import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Dashboard Section */}
      <section className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Welcome to Your RanKey Dashboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manage your ASIN scraping, view analytics, and unlock eBay profits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Stats Cards */}
            <div className="bg-card rounded-xl p-6 shadow-lg animate-fade-in">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">ASINs Scraped Today</h3>
              <p className="text-3xl font-bold text-accent">12,543</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg animate-fade-in">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Active Listings</h3>
              <p className="text-3xl font-bold text-accent">1,234</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg animate-fade-in">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Estimated Profit</h3>
              <p className="text-3xl font-bold text-accent">$4,567</p>
            </div>
          </div>

          {/* Dashboard Content Placeholder */}
          <div className="bg-card rounded-xl p-8 shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                <div>
                  <h4 className="font-semibold text-card-foreground">ASIN Scraping Job #1234</h4>
                  <p className="text-sm text-muted-foreground">Completed 2 hours ago</p>
                </div>
                <span className="text-accent font-semibold">✓ Complete</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                <div>
                  <h4 className="font-semibold text-card-foreground">eBay Upload #5678</h4>
                  <p className="text-sm text-muted-foreground">In progress</p>
                </div>
                <span className="text-muted-foreground font-semibold">⏳ Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
