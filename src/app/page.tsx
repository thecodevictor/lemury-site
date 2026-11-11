import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-lemury-cream text-lemury-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <PortfolioSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
