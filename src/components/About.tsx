import { Target, Users, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Empower citizens to actively participate in improving their communities through technology",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a bridge between citizens and government for better civic engagement",
  },
  {
    icon: TrendingUp,
    title: "Real Impact",
    description: "Driving measurable change with transparent issue tracking and resolution",
  },
  {
    icon: Award,
    title: "Smart Initiative",
    description: "Part of Smart India Hackathon 2025 - innovating for a better tomorrow",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-primary">Public Vision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An initiative under Smart India Hackathon 2025 to empower citizens and create
            smarter, cleaner, and more responsive communities through technology-driven civic engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-civic hover-lift text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto transition-smooth hover:scale-110">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-civic p-8 md:p-12 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-center">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Public Vision aims to revolutionize civic engagement by providing a transparent,
              efficient platform where every citizen's voice matters. We believe that when
              communities actively participate in identifying and resolving issues, cities
              become cleaner, safer, and more livable for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <div className="flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Transparent</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Efficient</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-info/10 rounded-full">
                <div className="w-2 h-2 bg-info rounded-full"></div>
                <span className="text-sm font-medium">Inclusive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Placeholder */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
            Powered by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="px-6 py-3 bg-card rounded-lg shadow-md">
              <span className="font-bold text-lg text-primary">Smart India Hackathon</span>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg shadow-md">
              <span className="font-bold text-lg text-foreground">Smart Cities Mission</span>
            </div>
            <div className="px-6 py-3 bg-card rounded-lg shadow-md">
              <span className="font-bold text-lg text-foreground">Digital India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
