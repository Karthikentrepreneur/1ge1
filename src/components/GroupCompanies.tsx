
import React from "react";
import { Card } from "@/components/ui/card";

const GroupCompanies: React.FC = () => {
  const companies = [
    {
      name: "Super Energy",
      logo: "/lovable-uploads/1f4bd614-0ece-402a-ac57-f1dcf6bd37ff.png",
      solution: "Renewable Energy Solutions",
      website: "https://superenergy.sg"
    },
    {
      name: "Global Logistics",
      logo: "/logitics.png",
      solution: "Supply Chain & Logistics",
      website: "https://globallogistics.sg"
    },
    {
      name: "Tech Innovations",
      logo: "/globallogo.png",
      solution: "Software Development",
      website: "https://techinnovations.sg"
    },
    {
      name: "Food Tech Solutions",
      logo: "/globallogo.png",
      solution: "Food Technology",
      website: "https://foodtech.sg"
    },
    {
      name: "Premium Lubricants",
      logo: "/enoc.png",
      solution: "Lubricant Distribution",
      website: "https://premiumlubricants.sg"
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
