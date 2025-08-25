import React, { useMemo } from "react";

/** ========= CONFIG ========= */
const HERO_BG_IMAGES = ["/hero1.jpg", "/hero22.png", "/hero31.png", "/hero41.png"];
const ROLES = ["Food Technology", "Lubricant Distribution", "Supply Chain Solutions", "Software Development"];
const PERSON_NAME = "Invested In";

const IgniteHero: React.FC = () => {
  const slides = useMemo(
    () =>
      HERO_BG_IMAGES.map((src, idx) => ({
        src,
        delay: `${idx * 8}s`, // each slide window ~8s
        fromPos: idx % 2 === 0 ? "50% 52%" : "48% 50%",
        toPos: idx % 2 === 0 ? "47% 49%" : "52% 53%",
      })),
    []
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen text-white overflow-hidden" aria-label="Hero">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((s) => (
          <div
            key={s.src}
            className="slide"
            style={
              {
                backgroundImage: `url('${s.src}')`,
                ["--delay" as any]: s.delay,
                ["--fromPos" as any]: s.fromPos,
                ["--toPos" as any]: s.toPos,
                ["--cycle" as any]: `${8 * HERO_BG_IMAGES.length}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              We {PERSON_NAME}
              <br />
              <span className="inline-block mt-2 text-brand-gold">
                {ROLES.join(" • ")}
              </span>
            </h1>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="group inline-flex items-center justify-center rounded-md px-6 py-4 text-base font-medium
                           bg-[#16C79A] text-white hover:brightness-110 active:brightness-95 transition shadow-lg"
              >
                <span className="mr-3">About Us</span>
                <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden">
                  <span className="absolute translate-
