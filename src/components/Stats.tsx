import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recycle, Building, Globe, Truck } from "lucide-react";
import { useEffect, useState } from "react";
const Stats = () => {
  const [counts, setCounts] = useState({
    litres: 0,
    businesses: 0,
    carbon: 0,
    vehicles: 0
  });
  useEffect(() => {
    const targets = {
      litres: 175000,
      businesses: 3500,
      carbon: 2200,
      vehicles: 100
    };
    const steps = 60,
      duration = 2000;
    const increment = Object.fromEntries(Object.entries(targets).map(([k, v]) => [k, v / steps]));
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts(prev => {
        const updated = {} as typeof prev;
        for (let key in prev) {
          const value = Math.min(Math.floor(increment[key] * step), targets[key as keyof typeof targets]);
          updated[key as keyof typeof prev] = value;
        }
        return updated;
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);
  const stats = [{
    icon: Recycle,
    value: counts.litres.toLocaleString(),
    suffix: "+",
    label: "Litres Collected",
    color: "text-primary"
  }, {
    icon: Building,
    value: counts.businesses.toLocaleString(),
    suffix: "+",
    label: "Businesses Served",
    color: "text-eco-success"
  }, {
    icon: Globe,
    value: counts.carbon.toLocaleString(),
    suffix: "+",
    label: "Tonnes of Carbon Offset",
    color: "text-blue-600"
  }, {
    icon: Truck,
    value: counts.vehicles.toLocaleString(),
    suffix: "+",
    label: "Vehicles Powered by Super Energy",
    color: "text-orange-500"
  }];
  return <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Our <span className="bg-gradient-eco bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Real numbers, real impact. See how we're transforming waste into clean energy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => <Card key={idx} role="group" aria-label={stat.label} tabIndex={0} className="p-6 sm:p-8 text-center border-2 border-transparent rounded-xl hover:shadow-eco focus:outline-none focus:ring-4 focus:ring-primary/30 transition transform motion-safe:duration-300 motion-safe:hover:scale-105" style={{
          animationDelay: `${idx * 100}ms`
        }}>
              <div className="w-16 h-16 bg-eco-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
              </div>
              <div aria-live="polite" className="text-4xl font-bold mb-2 flex justify-center items-baseline">
                <span className={stat.color}>{stat.value}</span>
                <span className="text-2xl ml-1">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground font-medium truncate">{stat.label}</p>
            </Card>)}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-eco text-white border-0 rounded-2xl shadow-eco">
            <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="text-lg mb-6 opacity-90">Join thousands of environmentally conscious individuals and businesses</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 transition transform motion-safe:duration-200">
                Start Today
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-white/50 transition">
                Learn More
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default Stats;