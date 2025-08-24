// AboutSection.tsx
// Renders ONLY your About Us content + one image (no extra packages)

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="container px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Text */}
        <div className="md:col-span-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-[#16C79A] via-[#12B5D0] to-[#0A84FF] bg-clip-text text-transparent">
            1 Global Enterprises
          </h2>

          <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-300">
            <p>
              At the forefront of innovation, 1 Global Enterprises is driving progress across
              renewable energy, food technology, supply chain solutions, software development,
              and lubricant distribution.
            </p>
            <p>
              We are committed to delivering sustainable growth, cutting-edge technologies, and
              operational excellence that empower businesses worldwide. By combining innovation
              with responsibility, we provide impactful solutions that help industries thrive in a
              rapidly evolving global landscape.
            </p>
            <p>
              With a clear vision for the future, 1 Global Enterprises is shaping a brighter, cleaner,
              and more connected world.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:col-span-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_60px_rgba(0,0,0,0.35)]">
            <img
              src="/one-globe.png"     // place this file in your /public folder
              alt="1 Global Enterprises — a brighter, cleaner, connected world"
              className="w-full h-[340px] md:h-[460px] object-cover animate-kenburns"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Scoped styles */}
      <style>{`
        @keyframes kenburns { from { transform: scale(1.03); } to { transform: scale(1.08); } }
        .animate-kenburns { animation: kenburns 9s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
};

export default AboutSection;
