import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HiddenAsset from "@/components/HiddenAsset";
import ProcessSection from "@/components/ProcessSection";
import WhyItWorks from "@/components/WhyItWorks";
import DataNeeded from "@/components/DataNeeded";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HiddenAsset />
      <ProcessSection />
      <WhyItWorks />
      <DataNeeded />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
