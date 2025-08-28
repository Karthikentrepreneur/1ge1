
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import GroupCompanies from "@/components/GroupCompanies";
import Footer from "@/components/Footer";
import ServicesAndSolutions from "@/components/ServicesAndSolutions";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesAndSolutions />
      <GroupCompanies />
      <Footer />
    </div>
  );
};

export default Index;
