"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag, Check } from "lucide-react";
import { CONTACT_LINKS } from "@/data/lemuryData";

const HERO_SCENES = [
  {
    id: "atelier",
    brand: "ATELIER NOIR",
    category: "Moda & Alfaiataria",
    mainImage: "/stores/atelier-noir/prod-2.jpg",
    mainTitle: "Blazer Loren — Linho Puro",
    mainPrice: "R$ 459,00",
    floatingImage: "/stores/atelier-noir/prod-1.jpg",
    floatingTitle: "Vestido Lina",
    floatingSubtitle: "6x de R$ 64,83 sem juros",
    floatingPrice: "R$ 389",
    statusText: "Catálogo & grade sincronizados",
  },
  {
    id: "maison",
    brand: "MAISON AUREA",
    category: "Joalheria Contemporânea",
    mainImage: "/stores/maison-aurea/prod-2.jpg",
    mainTitle: "Colar Aura — Pérola & Ouro 18k",
    mainPrice: "R$ 329,00",
    floatingImage: "/stores/maison-aurea/prod-1.jpg",
    floatingTitle: "Argola Lumi",
    floatingSubtitle: "Banho Ouro 18k • Hipoalergênico",
    floatingPrice: "R$ 249",
    statusText: "Pagamento & frete com seguro",
  },
];

export function Hero() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % HERO_SCENES.length);
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_SCENES[activeScene];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-lemury-cream pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36 border-b border-lemury-green/[0.08]"
    >
      {/* Subtle Ambient Organic Background Curves */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
        preserveAspectRatio="none"
      >
        <path
          d="M -100 480 C 320 460, 620 180, 1080 220 C 1280 238, 1390 310, 1540 290"
          stroke="#062D27"
          strokeOpacity="0.06"
          strokeWidth="1.2"
        />
        <path
          d="M 420 -40 C 560 190, 880 390, 1480 430"
          stroke="#062D27"
          strokeOpacity="0.045"
          strokeWidth="1"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] leading-[1.06] font-medium text-lemury-green tracking-tight">
                Seu negócio já existe.
                <span className="block mt-1.5 italic font-normal text-lemury-green-alt">
                  A Lemury leva ele para o digital.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-lemury-stone leading-relaxed max-w-xl font-normal">
                Criamos e-commerces profissionais para empresas que desejam
                oferecer uma experiência de compra online mais completa.
              </p>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-lemury-green hover:bg-lemury-green-alt text-lemury-cream text-sm font-medium px-7 py-3.5 h-12 sm:h-[50px] sm:min-w-[210px] rounded-[10px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lemury-green focus-visible:ring-offset-2"
              >
                <span>Fale conosco</span>
                <ArrowUpRight className="w-4 h-4 opacity-85" />
              </a>

              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center text-lemury-green bg-transparent hover:bg-lemury-green/[0.05] border border-lemury-green/30 hover:border-lemury-green/50 text-sm font-medium px-7 py-3.5 h-12 sm:h-[50px] sm:min-w-[210px] rounded-[10px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lemury-green focus-visible:ring-offset-2"
              >
                <span>Conheça nosso portfólio</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Kinetic Editorial Storefront Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[350px] sm:max-w-[390px] py-4 px-3 sm:px-4">
              {/* Slow Orbital Geometric Halo & Pearl Nodes */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 sm:-inset-4 flex items-center justify-center pointer-events-none"
              >
                <div className="w-[310px] h-[310px] sm:w-[360px] sm:h-[360px] rounded-full border border-lemury-green/[0.11] animate-hero-orbit relative">
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-lemury-green/30 bg-lemury-cream flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-lemury-green" />
                  </span>
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-lemury-green/25" />
                </div>
              </div>

              {/* Main Sculptural Editorial Store Frame */}
              <div className="relative z-10 rounded-t-[130px] rounded-b-2xl border border-lemury-green/15 bg-lemury-white/80 backdrop-blur-md p-2.5 sm:p-3 shadow-editorial">
                {/* Inner Arched Image Canvas */}
                <div className="relative rounded-t-[120px] rounded-b-xl overflow-hidden aspect-[4/4.6] bg-lemury-cream">
                  {HERO_SCENES.map((scene, idx) => (
                    <img
                      key={scene.id}
                      src={scene.mainImage}
                      alt={scene.mainTitle}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
                        idx === activeScene
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105 pointer-events-none"
                      }`}
                    />
                  ))}

                  {/* Subtle Editorial Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(17,19,17,0.22) 0%, rgba(17,19,17,0.02) 40%, rgba(6,45,39,0.72) 100%)",
                    }}
                  />

                  {/* Top Mini Storefront Header Inside Arch */}
                  <div className="absolute top-5 inset-x-0 px-6 flex items-center justify-between text-lemury-white">
                    <span className="text-[10px] uppercase tracking-[0.22em] font-light opacity-90">
                      {current.brand}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ShoppingBag className="w-3 h-3 stroke-[1.5]" />
                    </span>
                  </div>

                  {/* Bottom Curated Piece Caption Inside Frame */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-lemury-cream flex items-end justify-between gap-3">
                    <div className="space-y-0.5 min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-lemury-cream/75">
                        {current.category}
                      </p>
                      <p className="font-serif text-lg sm:text-xl font-normal truncate">
                        {current.mainTitle}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm font-medium bg-lemury-cream/15 backdrop-blur-md px-2.5 py-1 rounded-full border border-lemury-cream/20 shrink-0">
                      {current.mainPrice}
                    </span>
                  </div>
                </div>

                {/* Scene Switcher Indicators (Interactive & Auto-Cycling) */}
                <div className="pt-2.5 pb-0.5 px-2 flex items-center justify-between">
                  <span className="font-serif italic text-xs text-lemury-stone">
                    Vitrine conceitual em movimento
                  </span>
                  <div className="flex items-center gap-1.5">
                    {HERO_SCENES.map((scene, idx) => (
                      <button
                        key={scene.id}
                        type="button"
                        onClick={() => setActiveScene(idx)}
                        aria-label={`Alternar para vitrine ${scene.brand}`}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          idx === activeScene
                            ? "w-6 bg-lemury-green"
                            : "w-1.5 bg-lemury-green/25 hover:bg-lemury-green/45"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Kinetic Card 1: Secondary Product Card (Top-Left Overlap) */}
              <div className="animate-hero-float absolute -left-2 sm:-left-7 top-10 sm:top-12 z-20 w-[185px] sm:w-[205px] rounded-xl bg-lemury-white/95 backdrop-blur-md border border-lemury-green/15 p-2.5 shadow-editorial">
                <div className="flex items-center gap-2.5">
                  <img
                    src={current.floatingImage}
                    alt={current.floatingTitle}
                    className="w-11 h-12 rounded-lg object-cover shrink-0 bg-lemury-cream"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-sm font-medium text-lemury-green truncate leading-tight">
                      {current.floatingTitle}
                    </p>
                    <p className="text-[10px] text-lemury-stone truncate mt-0.5">
                      {current.floatingSubtitle}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] font-semibold text-lemury-green">
                        {current.floatingPrice}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-lemury-green/[0.08] text-lemury-green font-medium">
                        + Sacola
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Kinetic Card 2: Live Store Status Pill (Bottom-Right Overlap) */}
              <div className="animate-hero-float-delayed absolute -right-1 sm:-right-5 bottom-12 sm:bottom-14 z-20 rounded-xl bg-lemury-green text-lemury-cream px-3.5 py-2.5 shadow-editorial border border-lemury-cream/15 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-lemury-cream/15 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-lemury-cream" />
                </span>
                <div className="pr-1">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-lemury-cream/70 leading-none">
                    Loja Pronta
                  </p>
                  <p className="text-xs font-normal text-lemury-cream mt-1 whitespace-nowrap">
                    {current.statusText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
