import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Smartphone, Truck, Cog, Fuel, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const HowItWorksPage = () => {
  const steps = [{
    icon: Droplets,
    title: "Save Your Used Oil",
    description: "After frying or cooking, let the oil cool and pour it into our provided sealed container. We provide collection containers for households and businesses.",
    step: "01",
    details: ["Let oil cool completely before storage", "Use provided containers or clean bottles", "Store in a cool, dry place", "Minimum collection: 1 liter for households"]
  }, {
    icon: Smartphone,
    title: "Book a Pickup",
    description: "Use our mobile app, website, or hotline to request a free pickup at your convenience. Schedule flexible timing that works for you.",
    step: "02",
    details: ["24/7 online booking system", "Flexible pickup scheduling", "SMS and email confirmations", "Real-time tracking updates"]
  }, {
    icon: Truck,
    title: "We Collect It",
    description: "Our trained team arrives at your doorstep. We weigh the oil, issue a receipt, and collect it safely using proper handling procedures.",
    step: "03",
    details: ["Professional collection team", "Proper weighing and documentation", "Safe handling procedures", "Immediate receipt generation"]
  }, {
    icon: Cog,
    title: "Quality Processing",
    description: "At our licensed facility, the oil is filtered and processed into biodiesel using industry-standard techniques and quality controls.",
    step: "04",
    details: ["Advanced filtration systems", "Multi-stage purification process", "Quality testing at each stage", "BIS standard compliance"]
  }, {
    icon: Fuel,
    title: "Clean Fuel Impact",
    description: "The biodiesel powers vehicles, generators, and industrial equipment, reducing dependence on imported crude oil and environmental impact.",
    step: "05",
    details: ["Direct supply to transport companies", "Industrial equipment fueling", "Reduced carbon emissions", "Support for renewable energy goals"]
  }];
  const technologies = [{
    name: "Vacuum Filtration",
    description: "Advanced filtration removes impurities and solid particles"
  }, {
    name: "Degumming & Neutralization",
    description: "Chemical process to remove phospholipids and free fatty acids"
  }, {
    name: "Transesterification",
    description: "Converting triglycerides into biodiesel and glycerol"
  }, {
    name: "Quality Testing",
    description: "Comprehensive lab testing to meet BIS and international standards"
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              How It{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From your kitchen to clean fuel - discover our simple, transparent, and impactful process 
              that transforms waste cooking oil into renewable biodiesel.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-eco"></div>
              
              <div className="grid grid-cols-5 gap-8">
                {steps.map((step, index) => <div key={index} className="relative animate-fade-in" style={{
                animationDelay: `${index * 200}ms`
              }}>
                    {/* Step Number */}
                    <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-eco">
                      {step.step}
                    </div>
                    
                    <Card className="p-6 text-center hover:shadow-eco transition-all duration-300 hover:scale-105 bg-eco-surface border-2 hover:border-primary/20">
                      <div className="w-16 h-16 bg-eco-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
                      
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-eco-success" />
                            <span>{detail}</span>
                          </div>)}
                      </div>
                    </Card>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => <Card key={index} className="p-6 hover:shadow-eco transition-all duration-300 bg-eco-surface border-2 hover:border-primary/20 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-eco">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-eco-light rounded-xl flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-eco-success" />
                          <span>{detail}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-eco-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Advanced Technology Behind Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art equipment and proven methodologies ensure highest quality biodiesel production
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => <Card key={index} className="p-6 bg-background hover:shadow-eco transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">{tech.name}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      <Footer />
<ScrollToTop />
    </div>;
};
export default HowItWorksPage;
