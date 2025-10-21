import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Upload } from "lucide-react";
import { toast } from "sonner";

const issueTypes = [
  "Potholes",
  "Streetlight Issue",
  "Garbage Collection",
  "Water Supply",
  "Road Maintenance",
  "Drainage Problem",
  "Park Maintenance",
  "Other",
];

const ReportForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "",
    description: "",
    location: "",
    photo: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.issueType || !formData.description || !formData.location) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitted(true);
    toast.success("Issue reported successfully!");

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        issueType: "",
        description: "",
        location: "",
        photo: null,
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="report-form" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl shadow-civic p-12 text-center space-y-6 animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto animate-pulse-glow">
                <CheckCircle className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-3xl font-bold">Thank You!</h3>
              <p className="text-lg text-muted-foreground">
                Your issue has been reported successfully. Our team will review it and take appropriate action.
              </p>
              <p className="text-sm text-muted-foreground">
                You will receive updates via email at <span className="font-medium text-foreground">{formData.email}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="report-form" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Report an <span className="text-primary">Issue</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us improve your community by reporting civic issues
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl shadow-civic p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-full"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="issueType">Issue Type *</Label>
              <Select
                value={formData.issueType}
                onValueChange={(value) => setFormData({ ...formData, issueType: value })}
              >
                <SelectTrigger className="rounded-full">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  {issueTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                placeholder="Enter location or address"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="rounded-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe the issue in detail..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="min-h-32 rounded-2xl"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo">Upload Photo (Optional)</Label>
              <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary transition-smooth cursor-pointer">
                <Input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, photo: e.target.files?.[0] || null })}
                  className="hidden"
                />
                <label htmlFor="photo" className="cursor-pointer flex flex-col items-center space-y-2">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {formData.photo ? formData.photo.name : "Click to upload image"}
                  </span>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full gradient-hero hover-glow text-lg"
            >
              Submit Report
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReportForm;
