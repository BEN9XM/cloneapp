import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AIGenerator from "@/components/ai-generator";
import ImageGallery from "@/components/image-gallery";
import FeaturesSection from "@/components/features-section";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AIGenerator />
      <ImageGallery />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
