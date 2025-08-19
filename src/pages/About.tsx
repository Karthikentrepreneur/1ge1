
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Globe, CheckCircle, Leaf, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const values = [
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Committed to reducing environmental impact through sustainable practices and innovative recycling solutions."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Building strong relationships with our community partners and creating positive local impact."
    },
    {
      icon: CheckCircle,
      title: "Transparency & Trust",
      description: "Operating with complete transparency in our processes, pricing, and environmental impact reporting."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Excellence",
      description: "Continuously improving our technology and processes to deliver the highest quality biodiesel."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Super Energy established with a vision to transform Singapore's waste oil landscape"
    },
    {
      year: "2021",
      title: "First Commercial Partnerships",
      description: "Secured partnerships with 50+ restaurants and commercial kitchens"
    },
    {
      year: "2022",
      title: "Processing Facility Launch",
      description: "Opened state-of-the-art biodiesel processing facility with 100,000L monthly capacity"
    },
    {
      year: "2023",
      title: "Expansion & Growth",
      description: "Reached 3,500+ business partnerships and 175,000+ litres collected annually"
    },
    {
      year: "2024",
      title: "Sustainability Leadership",
      description: "Recognized as Singapore's leading sustainable fuel solutions provider"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      bio: "Environmental engineer with 15+ years in renewable energy sector"
    },
    {
      name: "Michael Tan",
      position: "Chief Technology Officer",
      bio: "Biochemical engineer specializing in biodiesel production and quality control"
    },
    {
      name: "Lisa Wong",
      position: "Head of Operations",
      bio: "Logistics expert with extensive experience in waste management systems"
    },
    {
      name: "David Kumar",
      position: "Sustainability Director",
      bio: "Environmental scientist focused on carbon footprint reduction and ESG compliance"
    }
  ];

  const certifications = [
    "Singapore Food Agency (SFA) Licensed",
    "National Environment Agency (NEA) Certified",
    "ISO 14001 Environmental Management",
    "OHSAS 18001 Occupational Health & Safety",
    "Singapore Green Finance Framework Compliant",
    "Carbon Trust Standard Certified"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              🌟 About Super Energy
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Transforming{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Singapore's
              </span>
              <br />Energy Future
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're pioneering the circular economy in Singapore by converting waste cooking oil 
              into clean, renewable biodiesel, creating a sustainable future for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-eco-light rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To create a sustainable circular economy by transforming Singapore's waste cooking oil 
                into high-quality biodiesel, reducing environmental impact while supporting the nation's 
                renewable energy goals.
              </p>
              <ul className="space-y-3">
                {[
                  "Zero waste to landfill policy",
                  "100% renewable fuel production",
                  "Community-centered approach",
                  "Transparent operations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-eco-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="animate-scale-in">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be Southeast Asia's leading sustainable fuel solutions provider, setting the 
                standard for environmental responsibility and innovation in the circular economy.
              </p>
              <div className="bg-eco-surface p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3 text-primary">2030 Goals</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 1 million litres of biodiesel production annually</li>
                  <li>• 50,000 tonnes of CO₂ offset per year</li>
                  <li>• Expand to 3 countries in Southeast Asia</li>
                  <li>• Power 10,000+ vehicles with clean fuel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-eco-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-eco transition-all duration-300 hover:scale-105 bg-background">
                <div className="w-16 h-16 bg-eco-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our growth and impact
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-eco"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <Card className="p-6 hover:shadow-eco transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-sm font-bold">
                          {milestone.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-eco-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals driving our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-eco transition-all duration-300 hover:scale-105 bg-background">
                <div className="w-20 h-20 bg-gradient-eco rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Certifications & Compliance</h2>
            <p className="text-xl text-muted-foreground">
              Maintaining the highest standards of quality and environmental responsibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-eco transition-all duration-300 bg-eco-surface">
                <div className="w-12 h-12 bg-eco-success/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-eco-success" />
                </div>
                <p className="font-medium">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-eco text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of Singapore's sustainable energy transformation. Together, we can create a cleaner, greener future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    <ScrollToTop />
    </div>
  );
};

export default AboutPage;
