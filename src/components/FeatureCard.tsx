import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  animation?: "fade-in" | "slide-in" | "zoom-in";
  onLearnMore?: () => void;
}

const FeatureCard = ({ icon: Icon, title, description, animation = "fade-in", onLearnMore }: FeatureCardProps) => {
  return (
    <div className={`bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-${animation}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {onLearnMore && (
          <Button variant="cta" onClick={onLearnMore}>
            Learn More
          </Button>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
