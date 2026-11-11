"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const NAV_ITEMS = [
  { label: "Início", href: "/#inicio" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-lemury-cream/95 backdrop-blur-md border-b border-lemury-green/[0.08] py-4"
          : "bg-lemury-cream py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        <Link
          href="/#inicio"
          aria-label="Lemury — Página Inicial"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-lemury-green rounded-lg"
        >
          <BrandLogo variant="dark" size="sm" />
        </Link>

        {/* Desktop Minimalist Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-9"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-lemury-black/75 hover:text-lemury-green transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={
            mobileMenuOpen
              ? "Fechar menu de navegação"
              : "Abrir menu de navegação"
          }
          className="md:hidden inline-flex items-center justify-center p-2 rounded-[10px] text-lemury-green hover:bg-lemury-green/5 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-lemury-cream border-b border-lemury-green/10 px-6 pt-3 pb-6">
          <nav aria-label="Navegação mobile" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base font-normal text-lemury-black/85 hover:text-lemury-green transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
