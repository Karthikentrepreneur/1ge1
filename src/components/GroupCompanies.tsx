
import React from "react";
import { Card } from "@/components/ui/card";

const GroupCompanies: React.FC = () => {
  const companies = [
    {
      name: "GC",
      logo: "/lovable-uploads/579c1b5c-1d47-4d12-af61-1e94945ab0b9.png", // Using the uploaded image as placeholder
      solution: "Specialized in Consolidation & Freight Management",
      website: "http://globalconsol.com/"
    },
    {
      name: "OECL",
      logo: "/lovable-uploads/579c1b5c-1d47-4d12-af61-1e94945ab0b9.png", // Using the uploaded image as placeholder
      solution: "Customized Supply Chain Solutions, Liquid Logistics, Projects & Freight Management",
      website: "http://oecl.sg/"
    },
    {
      name: "MOLTECH",
      logo: "/lovable-uploads/579c1b5c-1d47-4d12-af61-1e94945ab0b9.png", // Using the uploaded image as placeholder
      solution: "Renewal Energy Supplies & Clean Technology",
      website: "http://moltechglobal.com/"
    },
    {
      name: "CITYGVN",
      logo: "/lovable-uploads/579c1b5c-1d47-4d12-af61-1e94945ab0b9.png", // Using the uploaded image as placeholder
      solution: "Products Distribution & Marketing Company",
      website: "http://cityvenergy.com/"
    },
    {
      name: "SHIPSOFT",
      logo: "/lovable-uploads/579c1b5c-1d47-4d12-af61-1e94945ab0b9.png", // Using the uploaded image as placeholder
      solution: "Maritime Software Solutions",
      website: "http://shipsoft.sg/"
    },
    {
      name: "GGL",
      logo: "/lovable-uploads/579c1b5c-1d47-4d12-af61-1e94945ab0b9.png", // Using the uploaded image as placeholder
      solution: "3 PL & Freight Management",
      website: "http://ggl.sg/"
    },
  ];

  return (
    <section id="group-companies" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-900">
            <span className="bg-gradient-to-r from-[#16C79A] via-[#12B5D0] to-[#0A84FF] bg-clip-text text-transparent">
              Our Group Companies
            </span>
          </h2>
          <div className="h-1 w-24 rounded-full mb-6 bg-gradient-to-r from-[#16C79A] via-[#12B5D0] to-[#0A84FF] mx-auto" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our diverse portfolio of companies delivering innovative solutions across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-[#16C79A]/30"
              onClick={() => window.open(company.website, '_blank')}
            >
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#16C79A]/10 to-[#12B5D0]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#16C79A] transition-colors">
                  {company.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {company.solution}
                </p>
                
                <div className="inline-flex items-center text-[#16C79A] font-medium group-hover:gap-3 gap-2 transition-all">
                  <span>Visit Website</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;
