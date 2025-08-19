import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: MapPin,
    title: "Head Office",
    details: ["Super Energy Pvt Ltd", "Tamil Nadu, India"]
  }, {
    icon: Phone,
    title: "Phone Support",
    details: ["+91 XXXXX XXXXX"]
  }, {
    icon: Mail,
    title: "Email",
    details: ["info@superenergy.in"]
  }, {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday – Saturday", "9:00 AM – 7:00 PM"]
  }];
  const socialLinks = [{
    icon: Facebook,
    label: "Facebook",
    href: "#"
  }, {
    icon: Instagram,
    label: "Instagram",
    href: "#"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#"
  }];
  return <section id="contact" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Work Together for a{" "}
            <span className="bg-gradient-eco bg-clip-text text-transparent">
              Greener Future
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions, want to schedule a pickup, or explore a partnership? Reach out today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => <Card key={index} className="p-6 hover:shadow-eco transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-eco-light rounded-xl flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>)}
                      </div>
                    </div>
                  </Card>)}
              </div>
            </div>

            {/* Social Media */}
            <div className="animate-fade-in">
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-12 h-12 bg-eco-light rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label={social.label}>
                    <social.icon className="h-6 w-6" />
                  </a>)}
              </div>
            </div>

            {/* Quick Action Card */}
            
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="p-8 bg-eco-surface border-2 border-eco-light">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input placeholder="Your full name" className="border-2 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input placeholder="+91 XXXXX XXXXX" className="border-2 focus:border-primary" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-2 focus:border-primary" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Inquiry Type</label>
                  <Select>
                    <SelectTrigger className="border-2 focus:border-primary">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pickup">Pickup Request</SelectItem>
                      <SelectItem value="partner">Partnership</SelectItem>
                      <SelectItem value="business">Business Registration</SelectItem>
                      <SelectItem value="general">General Query</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Tell us how we can help you..." rows={5} className="border-2 focus:border-primary" />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-gradient-soft border-2 border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join the green energy revolution today. Every drop of oil counts towards a cleaner future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Free Pickup
              </Button>
              <Button variant="hero-outline" size="lg">
                Explore Partnership
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;