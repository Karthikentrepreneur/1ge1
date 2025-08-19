
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Building, Factory, Truck, Shield, Clock, Award, Users, ArrowUp, Leaf, Recycle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from '@/components/ScrollToTop';
import oilCollectionImage from "@/assets/oil-collection-service.jpg";
import biodieselProductionImage from "@/assets/biodiesel-production.jpg";
import environmentalBenefitsImage from "@/assets/environmental-benefits.jpg";
import commercialCollectionImage from "@/assets/commercial-collection.jpg";

const ServicesPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whyBiodieselCards = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Reduce CO₂ emissions by up to 78% compared to traditional diesel",
      image: environmentalBenefitsImage,
      stats: "2,200+ tonnes CO₂ offset"
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Transform waste cooking oil into valuable renewable fuel",
      image: oilCollectionImage,
      stats: "175,000+ litres collected"
    },
    {
      icon: Zap,
      title: "Energy Independence",
      description: "Create sustainable energy solutions for Singapore's future",
      image: biodieselProductionImage,
      stats: "100+ vehicles powered"
    }
  ];

  const serviceShowcase = [
    {
      icon: Home,
      title: "Household Collection",
      description: "Door-to-door collection service for residential customers",
      image: oilCollectionImage,
      features: ["Free pickup", "Reward system", "Environmental certificates"]
    },
    {
      icon: Building,
      title: "Commercial Solutions",
      description: "Complete waste oil management for restaurants and hotels",
      image: commercialCollectionImage,
      features: ["Bulk containers", "Scheduled pickups", "Compliance certificates"]
    },
    {
      icon: Factory,
      title: "Biodiesel Production",
      description: "State-of-the-art processing facilities for quality biodiesel",
      image: biodieselProductionImage,
      features: ["Quality testing", "Sustainable processing", "Environmental standards"]
    }
  ];

  const additionalServices = [
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Comprehensive collection and transportation network across Singapore"
    },
    {
      icon: Shield,
      title: "Compliance & Certification",
      description: "Full regulatory compliance with proper documentation and certificates"
    },
    {
      icon: Clock,
      title: "Emergency Collection",
      description: "Urgent pickup services for large spills or emergency situations"
    },
    {
      icon: Award,
      title: "Sustainability Consulting",
      description: "Help businesses achieve sustainability goals and ESG compliance"
    }
  ];

  const processSteps = [
    "Collection Request",
    "Quality Assessment",
    "Secure Transportation",
    "Processing & Refinement",
    "Quality Testing",
    "Distribution"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              🛠️ Our Services
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Complete{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Waste Oil
              </span>
              <br />Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From household pickups to industrial-scale processing, we provide comprehensive 
              used cooking oil collection and biodiesel production services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Biodiesel Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Biodiesel?</h2>
            <p className="text-xl text-muted-foreground">
              Creating sustainable energy solutions for a greener tomorrow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyBiodieselCards.map((card, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-eco transition-all duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center">
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  <div className="text-2xl font-bold text-primary">{card.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase */}
      <section className="py-20 bg-eco-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Complete waste oil collection and biodiesel production solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceShowcase.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-eco transition-all duration-300 hover:scale-105">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              From collection to clean biodiesel production
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {index + 1}
                </div>
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-eco text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">3,500+</div>
              <div className="text-lg opacity-90">Businesses Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">175,000+</div>
              <div className="text-lg opacity-90">Litres Collected</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,200+</div>
              <div className="text-lg opacity-90">Tonnes CO₂ Offset</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Vehicles Powered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our mission to create a sustainable future through innovative waste oil recycling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule Pickup</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
     <ScrollToTop />
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg z-50 animate-fade-in"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default ServicesPage;
