
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Globe, Zap, TreePine, Droplets, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SustainabilityPage = () => {
  const impacts = [
    {
      icon: Globe,
      title: "Carbon Footprint Reduction",
      value: "2,200+",
      unit: "Tonnes CO₂ Offset",
      description: "Our biodiesel reduces greenhouse gas emissions by 78% compared to fossil diesel",
      color: "text-blue-600"
    },
    {
      icon: Recycle,
      title: "Waste Diverted",
      value: "175,000+",
      unit: "Litres Recycled",
      description: "Preventing waste oil from contaminating water sources and landfills",
      color: "text-primary"
    },
    {
      icon: TreePine,
      title: "Forest Conservation",
      value: "550+",
      unit: "Trees Equivalent",
      description: "Carbon offset equivalent to planting and maintaining 550 trees annually",
      color: "text-green-600"
    },
    {
      icon: Droplets,
      title: "Water Protection",
      value: "100%",
      unit: "Clean Processing",
      description: "Zero discharge policy protecting Singapore's water resources",
      color: "text-cyan-600"
    }
  ];

  const sdgGoals = [
    {
      number: "7",
      title: "Affordable and Clean Energy",
      description: "Providing renewable biodiesel as an alternative to fossil fuels"
    },
    {
      number: "11",
      title: "Sustainable Cities",
      description: "Creating sustainable waste management solutions for urban environments"
    },
    {
      number: "12",
      title: "Responsible Consumption",
      description: "Promoting circular economy principles in waste oil management"
    },
    {
      number: "13",
      title: "Climate Action",
      description: "Reducing greenhouse gas emissions through renewable fuel production"
    },
    {
      number: "14",
      title: "Life Below Water",
      description: "Preventing oil contamination of marine ecosystems"
    },
    {
      number: "15",
      title: "Life on Land",
      description: "Protecting terrestrial ecosystems from waste oil pollution"
    }
  ];

  const initiatives = [
    {
      icon: Zap,
      title: "Zero Waste Operations",
      description: "100% of collected oil is processed into useful products with zero waste to landfill",
      achievements: [
        "Zero liquid discharge facility",
        "Glycerol by-product recycling",
        "Minimal packaging materials",
        "Digital documentation system"
      ]
    },
    {
      icon: Leaf,
      title: "Carbon Neutral Fleet",
      description: "Our collection vehicles run on our own biodiesel, creating a closed-loop system",
      achievements: [
        "B20 biodiesel blend in all vehicles",
        "Route optimization for efficiency",
        "Electric vehicle pilot program",
        "Carbon offset for remaining emissions"
      ]
    },
    {
      icon: Award,
      title: "Community Engagement",
      description: "Educating and engaging communities on sustainable practices and circular economy",
      achievements: [
        "School education programs",
        "Business sustainability workshops",
        "Community recycling drives",
        "Environmental awareness campaigns"
      ]
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Constantly improving our processes to maximize environmental benefits",
      achievements: [
        "Monthly sustainability audits",
        "Technology upgrade programs",
        "Research partnerships",
        "Industry best practice adoption"
      ]
    }
  ];

  const certifications = [
    {
      name: "Carbon Trust Standard",
      description: "Certified for measuring, managing and reducing carbon emissions",
      year: "2023"
    },
    {
      name: "Singapore Green Finance",
      description: "Compliant with Singapore's Green Finance Framework",
      year: "2023"
    },
    {
      name: "ISO 14001",
      description: "Environmental Management System certification",
      year: "2022"
    },
    {
      name: "Singapore Sustainability Reporting",
      description: "Committed to transparent sustainability reporting",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              🌱 Sustainability
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Creating a{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Sustainable
              </span>
              <br />Future Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our commitment to environmental stewardship goes beyond just recycling cooking oil. 
              We're building a comprehensive sustainability framework that benefits communities, 
              businesses, and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Environmental Impact</h2>
            <p className="text-xl text-muted-foreground">
              Measurable results from our sustainable operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-eco transition-all duration-300 hover:scale-105 bg-eco-surface">
                <div className="w-16 h-16 bg-eco-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <impact.icon className={`h-8 w-8 ${impact.color}`} />
                </div>
                <div className={`text-4xl font-bold mb-2 ${impact.color}`}>
                  {impact.value}
                </div>
                <div className="text-lg font-semibold mb-3">{impact.unit}</div>
                <p className="text-muted-foreground text-sm">{impact.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UN SDG Alignment */}
      <section className="py-20 bg-eco-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">UN Sustainable Development Goals</h2>
            <p className="text-xl text-muted-foreground">
              Aligned with global sustainability objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgGoals.map((goal, index) => (
              <Card key={index} className="p-6 hover:shadow-eco transition-all duration-300 bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {goal.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                    <p className="text-muted-foreground text-sm">{goal.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Sustainability Initiatives</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive programs driving environmental excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="p-8 hover:shadow-eco transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-eco-light rounded-2xl flex items-center justify-center mb-4">
                    <initiative.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{initiative.title}</CardTitle>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {initiative.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-eco-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Sustainability Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Third-party validation of our environmental commitments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-eco transition-all duration-300 bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-eco-success/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-eco-success" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{cert.name}</h3>
                      <Badge variant="secondary">{cert.year}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Commitments */}
      <section className="py-20 bg-gradient-eco text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our 2030 Commitments</h2>
            <p className="text-xl mb-8 opacity-90">
              Ambitious goals for the next decade of environmental leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Carbon</div>
              <div className="text-4xl font-bold mb-2">Negative</div>
              <div className="text-lg opacity-90">Operations by 2028</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M</div>
              <div className="text-lg opacity-90">Litres annually processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K</div>
              <div className="text-lg opacity-90">Tonnes CO₂ offset yearly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-lg opacity-90">Countries expansion</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Join Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainabilityPage;
