import Header from "@/components/navigation/Header";
import Hero from "@/components/sections/Hero";
import PoweredBy from "@/components/sections/PoweredBy";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Difference from "@/components/sections/Difference";
import HowItWorks from "@/components/sections/HowItWorks";
import Portfolio from "@/components/sections/Portfolio";
import FAQs from "@/components/sections/FAQs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-bg-primary text-white">
      <Header />
      <Hero id="hero" />
      <PoweredBy id="poweredby" />
      <AboutUs id="about" />
      <Services id="services" />
      <Industries id="industries" />
      <Difference id="difference" />
      <HowItWorks id="howitworks" />
      <Portfolio id="portfolio" />
      <FAQs id="faqs" />
      <CTA id="cta" />
      <Footer />
      <BackToTop />
      <Chatbot />
    </main>
  );
}
