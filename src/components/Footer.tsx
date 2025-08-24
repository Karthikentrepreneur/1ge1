import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      {/* Top area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Left & Right pinned to corners on desktop */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* About Us — Left */}
          <div className="max-w-xl">
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

          {/* Contact — Right */}
          <div className="w-full md:max-w-md">
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#16C79A] mt-1 flex-shrink-0" />
                <address className="not-italic text-gray-300 leading-relaxed">
                  1 Global Enterprises Pte Ltd<br />
                  #03-01, Keppel Distripark,<br />
                  511 Kampong Bahru Road,<br />
                  Singapore 099447
                </address>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#16C79A] mt-1 flex-shrink-0" />
                <div className="space-y-1 text-gray-300">
                  <a href="tel:+6569080838" className="hover:text-white transition-colors">+65 69080838</a>
                  <a href="tel:+6569080849" className="hover:text-white transition-colors">+65 69080849</a>
                  <a href="tel:+6598177292" className="hover:text-white transition-colors">+65 98177292</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#16C79A]" />
                <a href="mailto:jp@1ge.sg" className="text-gray-300 hover:text-white transition-colors">
                  jp@1ge.sg
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 1 Global Enterprises Pte Ltd. All Rights Reserved.
            </p>
            {/* Optional: place quick links or a small logo on the right if desired */}
            {/* <img src="/globallogo.png" alt="1 Global" className="h-6 w-auto opacity-80" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
