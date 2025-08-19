
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, FileText, Calendar, DollarSign, Award, CheckCircle } from "lucide-react";

const ForBusinesses = () => {
  const businessTypes = ["Hotels", "Restaurants", "Cloud Kitchens", "Cafeterias", "Industrial Canteens", "Caterers", "Sweet Shops & Fryers"];
  
  const benefits = [{
    icon: FileText,
    title: "Legal & Compliant Disposal",
    description: "FSSAI & PCB Approved processes"
  }, {
    icon: Building,
    title: "Secure Storage",
    description: "Sealed containers provided for safe storage"
  }, {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Pickup times that work for your business"
  }, {
    icon: DollarSign,
    title: "Revenue for Waste",
    description: "Get paid for every litre collected"
  }, {
    icon: FileText,
    title: "Digital Documentation",
    description: "Certificates for audits and compliance"
  }, {
    icon: Award,
    title: "CSR Benefits",
    description: "Fulfill ESG goals and boost sustainability ratings"
  }];
  
  const offerings = ["20L, 50L, 100L secure storage containers", "Barcode/QR-based tracking of every pickup", "Digital invoicing and documentation", "Zero-leakage handling process"];
  
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">For Businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your waste cooking oil into revenue while meeting compliance requirements
          </p>
        </div>

        {/* Business Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((type, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {type}
              </Badge>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-8">What We Offer</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((offering, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{offering}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started for Your Business
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;
