import { useEffect, useRef, useState } from "react";
import { FileText, CheckCircle, Clock, Building } from "lucide-react";

const stats = [
  {
    icon: FileText,
    label: "Total Issues Reported",
    value: 3542,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: CheckCircle,
    label: "Resolved Issues",
    value: 2847,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Clock,
    label: "In Progress",
    value: 564,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: Building,
    label: "Departments Active",
    value: 18,
    color: "text-info",
    bgColor: "bg-info/10",
  },
];

const Statistics = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            stats.forEach((stat, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.value / steps;
              let currentStep = 0;

              const timer = setInterval(() => {
                currentStep++;
                const newValue = Math.min(Math.round(increment * currentStep), stat.value);
                
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = newValue;
                  return newCounters;
                });

                if (currentStep >= steps) {
                  clearInterval(timer);
                }
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Civic Issue <span className="text-primary">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics of reported issues and resolution progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-civic hover-lift transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <div className={`text-4xl font-bold ${stat.color}`}>
                      {counters[index].toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Placeholder */}
        <div className="bg-card rounded-3xl shadow-civic p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Issue Distribution Map</h3>
          <div className="relative w-full h-96 bg-secondary/50 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Interactive map view coming soon</p>
              </div>
            </div>
            {/* Decorative map markers */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-warning rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
