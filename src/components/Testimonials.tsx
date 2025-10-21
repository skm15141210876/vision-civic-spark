import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Resident, Delhi",
    content: "I reported a streetlight issue and it was fixed within 2 days! Public Vision makes civic participation so easy.",
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner, Mumbai",
    content: "The platform is incredibly user-friendly. I've reported multiple drainage issues and seen real results.",
    avatar: "RK",
  },
  {
    name: "Anita Desai",
    role: "Teacher, Bangalore",
    content: "Public Vision empowers citizens to take ownership of their community. A fantastic initiative!",
    avatar: "AD",
  },
  {
    name: "Vikram Singh",
    role: "Engineer, Pune",
    content: "Finally, a transparent system to track civic issues. The response time from departments is impressive.",
    avatar: "VS",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            What <span className="text-primary">Citizens Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from people making their communities better
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-civic p-8 md:p-16">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Testimonial Content */}
            <div
              className={`space-y-6 transition-all duration-500 ${
                isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
              }`}
            >
              <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center">
                "{current.content}"
              </p>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {current.avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">{current.name}</div>
                  <div className="text-sm text-muted-foreground">{current.role}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-smooth"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-primary/50"
                    }`}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(index);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-smooth"
                onClick={nextTestimonial}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
