
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Us - Left Side */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/globallogo.png" 
                alt="1 Global Enterprises" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-white">About Us</h4>
            <p className="text-gray-400 leading-relaxed">
              At the forefront of innovation, 1 Global Enterprises is driving progress across
              renewable energy, food technology, supply chain solutions, software development,
              and lubricant distribution. We are committed to delivering sustainable growth, 
              cutting-edge technologies, and operational excellence that empower businesses 
              worldwide.
            </p>
          </div>

          {/* Contact Details - Right Side */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#16C79A] mt-1 flex-shrink-0" />
                <div className="text-gray-300 leading-relaxed">
                  1 Global Enterprises Pte Ltd<br />
                  #03-01, Keppel Distripark,<br />
                  511 Kampong Bahru Road,<br />
                  Singapore 099447
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#16C79A] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <div className="text-gray-300">+65 69080838</div>
                  <div className="text-gray-300">+65 69080849</div>
                  <div className="text-gray-300">+65 98177292</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#16C79A]" />
                <span className="text-gray-300">jp@1ge.sg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 1 Global Enterprises Pte Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
