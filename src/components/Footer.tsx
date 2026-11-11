import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_LINKS } from "@/data/lemuryData";

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-lemury-green text-lemury-cream border-t border-lemury-cream/10"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24">
        {/* Top Institutional Closing & Contact Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-lemury-cream/10 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-lemury-cream/65">
              Contato
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-lemury-cream leading-tight">
              Seu negócio já existe.{" "}
              <span className="italic font-normal text-lemury-cream/90">
                A Lemury leva ele para o digital.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-lemury-cream/75 max-w-lg leading-relaxed">
              Converse com nossa equipe para apresentar sua empresa e conhecer
              como estruturamos a implantação do seu e-commerce.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3.5">
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-lemury-cream hover:bg-lemury-white text-lemury-green text-sm font-medium px-6 py-3.5 h-12 rounded-[10px] transition-colors duration-200"
            >
              <span>Fale conosco</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={CONTACT_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-lemury-cream/10 text-lemury-cream border border-lemury-cream/25 text-sm font-medium px-6 py-3.5 h-12 rounded-[10px] transition-colors duration-200"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>

        {/* Bottom Essential Info & Links */}
        <div className="pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <BrandLogo variant="light" size="sm" />
            <p className="text-xs text-lemury-cream/60">
              Criação e implantação de lojas virtuais profissionais.
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-lemury-cream/75"
          >
            <Link
              href="/#inicio"
              className="hover:text-lemury-cream transition-colors"
            >
              Início
            </Link>
            <Link
              href="/#portfolio"
              className="hover:text-lemury-cream transition-colors"
            >
              Portfólio
            </Link>
            <Link
              href="/#sobre"
              className="hover:text-lemury-cream transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/academy"
              className="hover:text-lemury-cream transition-colors"
            >
              Academy
            </Link>
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lemury-cream transition-colors"
            >
              WhatsApp Comercial
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-lemury-cream/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-lemury-cream/50">
          <p>© {new Date().getFullYear()} Lemury. Todos os direitos reservados.</p>
          <p>E-commerce, design e tecnologia aplicada ao comércio.</p>
        </div>
      </div>
    </footer>
  );
}
