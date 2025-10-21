import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels. Our team is here to help you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:support@publicvision.in" className="text-muted-foreground hover:text-primary transition-smooth">
                    support@publicvision.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-smooth">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:+911800123456" className="text-muted-foreground hover:text-accent transition-smooth">
                    +91 1800-123-456
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-2xl bg-info/10 flex items-center justify-center flex-shrink-0 group-hover:bg-info/20 transition-smooth">
                  <MapPin className="w-6 h-6 text-info" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <p className="text-muted-foreground">
                    Smart City Office, Innovation Hub,
                    <br />
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="bg-card rounded-2xl shadow-civic p-6">
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl shadow-civic p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32 rounded-2xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full gradient-hero hover-glow"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
