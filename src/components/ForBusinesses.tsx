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
  return;
};
export default ForBusinesses;