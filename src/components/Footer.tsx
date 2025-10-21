import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    product: [
      { name: "Home", href: "#home" },
      { name: "Report Issue", href: "#report-form" },
      { name: "Statistics", href: "#statistics" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-12 fill-background rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,100 600,100 900,50 C1050,25 1150,0 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-smooth group-hover:scale-110">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-2xl">
                Public<span className="text-primary">Vision</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              Empowering citizens to report and resolve civic issues for a better community.
              Part of Smart India Hackathon 2025 initiative.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Public Vision. Smart India Hackathon Project. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
