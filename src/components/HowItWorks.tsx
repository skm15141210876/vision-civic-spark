import { Camera, MapPin, UserCheck, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Camera,
    title: "Capture & Upload Photo",
    description: "Take a photo of the civic issue using your device camera",
  },
  {
    icon: MapPin,
    title: "Pin Location & Submit",
    description: "Add location details and describe the issue clearly",
  },
  {
    icon: UserCheck,
    title: "Department Review",
    description: "Relevant department receives and reviews your complaint",
  },
  {
    icon: CheckCircle,
    title: "Issue Resolved",
    description: "Track progress and receive updates until resolution",
  },
];

const HowItWorks = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleCards.length === 0) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCards.length]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Report civic issues in four simple steps and help make your community better
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="bg-card rounded-2xl p-8 shadow-civic hover-lift h-full flex flex-col items-center text-center space-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center transition-smooth hover:scale-110">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Connector Line (except last card on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
