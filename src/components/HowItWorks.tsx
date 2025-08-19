import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Smartphone, Truck, Cog, Fuel } from "lucide-react";
const HowItWorks = () => {
  const steps = [{
    icon: Droplets,
    title: "Save Your Used Oil",
    description: "After frying or cooking, let the oil cool and pour it into our provided sealed container.",
    step: "01"
  }, {
    icon: Smartphone,
    title: "Book a Pickup",
    description: "Use our mobile app, website, or hotline to request a free pickup at your convenience.",
    step: "02"
  }, {
    icon: Truck,
    title: "We Collect It",
    description: "Our team arrives at your doorstep. We weigh the oil, issue a receipt, and collect it safely.",
    step: "03"
  }, {
    icon: Cog,
    title: "Quality Processing",
    description: "At our licensed facility, the oil is filtered and processed into biodiesel using industry standards.",
    step: "04"
  }, {
    icon: Fuel,
    title: "Clean Fuel Impact",
    description: "The biodiesel powers vehicles and generators, reducing dependence on imported crude oil.",
    step: "05"
  }];
  return <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It{" "}
            <span className="bg-gradient-eco bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, Transparent, Impactful
          </p>
        </div>

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
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Technology Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Tech Behind the Process</h3>
              <ul className="space-y-3">
                {["Vacuum filtration", "Degumming & neutralization", "Esterification and transesterification", "Lab testing to meet BIS standards"].map((tech, index) => <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{tech}</span>
                  </li>)}
              </ul>
            </div>
            
            <div className="animate-scale-in">
              <Card className="p-8 bg-gradient-eco text-white border-0 shadow-eco">
                <h4 className="text-xl font-bold mb-4">Environmental Benefits</h4>
                <ul className="space-y-3">
                  {["Zero-waste recycling", "No harmful smoke or sulfur emissions", "78% fewer greenhouse gases than petroleum diesel"].map((benefit, index) => <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>{benefit}</span>
                    </li>)}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;