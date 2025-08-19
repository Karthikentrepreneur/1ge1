import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Building } from "lucide-react";
import React from "react";

const HERO_IMG = "/hero-van.png"; // put your actual hero image in /public or change this path

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245,245,245,0.85), rgba(230,230,230,0.95)), url('/greybackgound.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen overflow-hidden lg:flex lg:items-center pt-14 lg:pt-0 pb-10 bg-slate-50"
    >
      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-base font-medium bg-orange-100 inline-block"
            >
              🌱 Join the Green Revolution
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                Waste
              </span>
              <br />
              Power the{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
                Future
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join the green energy movement by recycling your{" "}
              <strong className="text-green-600">used cooking oil</strong> into
              clean, efficient biodiesel. Together, we can reduce pollution and
              build a sustainable tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero-outline"
                size="lg"
                className="w-full sm:w-auto text-white text-lg px-8 py-6 rounded-sm bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-xl"
              >
                Become a Partner
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 justify-items-center lg:justify-items-start">
              {[
                "FSSAI Approved",
                "Carbon Offset",
                "100% Eco-Friendly",
                "Free Pickup",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Van + CTA */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="Super Energy - Clean biodiesel from cooking oil"
                className="w-full h-auto rounded-3xl shadow-eco"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl" />
            </div>

            {/* Floating Stats - Bottom Left */}
            <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl p-6 shadow-soft border animate-float border-eco-light/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3,500+</div>
                  <div className="text-sm text-muted-foreground">
                    Businesses Served
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats - Top Right */}
            <div
              className="absolute -top-8 -right-8 bg-background rounded-2xl p-6 shadow-soft border animate-float border-eco-light/20"
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-eco-success/20 rounded-full flex items-center justify-center">
                  <Building className="h-6 w-6 text-eco-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-eco-success">
                    175,000+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Litres Collected
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>

        {/* ===== Bottom strip (inside hero) ===== */}
        <div className="mt-16">
          {/* 3-step How It Works */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-emerald-100 backdrop-blur p-5 shadow-sm bg-emerald-100 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                  1
                </span>
                <h3 className="font-semibold">Request Pickup</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Book a free collection—get sealed containers for your used
                cooking oil.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 backdrop-blur p-5 shadow-sm bg-emerald-100 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                  2
                </span>
                <h3 className="font-semibold">We Collect &amp; Weigh</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Trained staff, scheduled pickups &amp; digital weight slip for
                transparency.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 backdrop-blur p-5 shadow-sm bg-emerald-100 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                  3
                </span>
                <h3 className="font-semibold">
                  Collected for Licensed Recycling
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team picks up sealed containers and hands them over to
                licensed recyclers.
              </p>
            </div>
          </div>
        </div>
        {/* ===== /Bottom strip ===== */}
      </div>
    </section>
  );
};

export default Hero;
