import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyBiodiesel from "@/components/WhyBiodiesel";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import ForHouseholds from "@/components/ForHouseholds";
import ForBusinesses from "@/components/ForBusinesses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyBiodiesel />
      <ForHouseholds />
      <ForBusinesses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
