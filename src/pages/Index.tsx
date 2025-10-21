import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ReportForm from "@/components/ReportForm";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ReportForm />
      <Statistics />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
