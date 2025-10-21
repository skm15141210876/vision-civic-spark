import { Button } from "@/components/ui/button";
import { MapPin, Camera } from "lucide-react";

const Hero = () => {
  const handleReportIssue = () => {
    document.getElementById("report-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewIssues = () => {
    document.getElementById("statistics")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-[10%] opacity-20 animate-pulse">
        <MapPin className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-[15%] opacity-20 animate-pulse delay-700">
        <Camera className="w-12 h-12 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-scale-in">
            <span className="text-sm font-medium text-primary">Smart India Hackathon 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
            Report Issues,
            <br />
            <span className="text-primary">Improve Your Community</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Together we can make our city better by reporting and resolving civic issues.
            Your voice matters in building a cleaner, safer community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full gradient-hero hover-glow text-lg px-8 py-6"
              onClick={handleReportIssue}
            >
              <Camera className="mr-2 h-5 w-5" />
              Report an Issue
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full border-2 text-lg px-8 py-6 hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={handleViewIssues}
            >
              <MapPin className="mr-2 h-5 w-5" />
              View Issues
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 animate-fade-in-up delay-500">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">2.5K+</div>
              <div className="text-sm text-muted-foreground">Issues Resolved</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
              <div className="text-sm text-muted-foreground">Departments</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,100 600,100 900,50 C1050,25 1150,0 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
