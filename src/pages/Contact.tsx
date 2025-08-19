
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, Users, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from '../components/ScrollToTop';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+65 6XXX XXXX",
      subtitle: "Available 24/7 for emergencies",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "info@superenergy.sg",
      subtitle: "Response within 2 hours",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: "1001 Tai Seng Avenue, #01-2526",
      subtitle: "Singapore 534420",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday",
      subtitle: "9:00 AM - 7:00 PM",
      color: "text-orange-500"
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Household Pickup",
      description: "Free collection service for residential customers",
      action: "Schedule Pickup"
    },
    {
      icon: Building,
      title: "Commercial Services",
      description: "Bulk collection for restaurants and businesses",
      action: "Get Quote"
    },
    {
      icon: MessageSquare,
      title: "Partnership Inquiry",
      description: "Explore franchise and partnership opportunities",
      action: "Learn More"
    },
    {
      icon: Calendar,
      title: "Consultation",
      description: "Free sustainability consultation for businesses",
      action: "Book Consultation"
    }
  ];

  const faqs = [
    {
      question: "What types of cooking oil do you collect?",
      answer: "We collect all types of used cooking oil including vegetable oil, palm oil, canola oil, and other food-grade oils."
    },
    {
      question: "Is there a minimum quantity for pickup?",
      answer: "For households, the minimum is 1 liter. For businesses, we can collect any quantity from 5 liters upwards."
    },
    {
      question: "How much do you pay for used cooking oil?",
      answer: "Pricing varies based on quality and quantity. Contact us for current rates and to discuss your specific requirements."
    },
    {
      question: "How often can I schedule pickups?",
      answer: "You can schedule pickups as needed. Many businesses opt for weekly or bi-weekly collections."
    },
    {
      question: "Do you provide collection containers?",
      answer: "Yes, we provide appropriate storage containers for both household and commercial customers at no additional cost."
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
              📞 Contact Us
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get in{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your sustainable journey? Contact us today for free pickup scheduling, 
              partnership opportunities, or any questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-eco transition-all duration-300 hover:scale-105 bg-eco-surface">
                <div className="w-16 h-16 bg-eco-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.details}</p>
                <p className="text-muted-foreground text-sm">{info.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-20 bg-eco-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <Card className="p-8 bg-background">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input placeholder="+65 XXXX XXXX" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="household">Household Pickup</SelectItem>
                        <SelectItem value="commercial">Commercial Collection</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="consultation">Business Consultation</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      rows={5} 
                      placeholder="Tell us about your requirements, questions, or how we can help you..."
                    />
                  </div>
                  
                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Services Quick Actions */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Quick Service Access</h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 hover:shadow-eco transition-all duration-300 bg-background">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-eco-light rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                        <Button variant="outline" size="sm">
                          {service.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-eco transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-eco-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Singapore's business district
            </p>
          </div>

          <Card className="p-8 bg-background">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Super Energy Head Office</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">1001 Tai Seng Avenue, #01-2526</p>
                      <p className="text-muted-foreground">Singapore 534420</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+65 6XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@superenergy.sg</span>
                  </div>
                </div>
                <Button asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
              
              <div className="bg-eco-surface rounded-2xl p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map integration would be implemented here showing our exact location 
                  with nearby landmarks and transportation options.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
   <ScrollToTop />
    </div>
  );
};

export default ContactPage;
