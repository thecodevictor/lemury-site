import React from "react";
import Link from "next/link";
import { CONCEPTUAL_PROJECTS } from "@/data/lemuryData";
import { ArrowUpRight, Search, Heart, ShoppingBag, User, ArrowRight } from "lucide-react";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 sm:py-24 bg-lemury-cream border-b border-lemury-green/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Compact Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14 space-y-2.5">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-lemury-green/75">
            Portfólio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-lemury-green leading-[1.12]">
            Experiências de compra desenhadas para valorizar cada marca.
          </h2>
          <p className="text-sm sm:text-base text-lemury-stone leading-relaxed">
            Demonstrações conceituais desenvolvidas pela Lemury para ilustrar
            nossa direção visual, organização de catálogo e design responsivo.
          </p>
        </div>

        {/* Compact 2-Column Unified Portfolio Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CONCEPTUAL_PROJECTS.map((project) => {
            const isJewelry = project.slug === "maison-aurea";

            return (
              <article
                key={project.slug}
                className="group rounded-2xl border border-lemury-green/15 bg-lemury-white shadow-subtle hover:shadow-editorial hover:border-lemury-green/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Preview Stage (Connected to Card) */}
                <Link
                  href={`/portfolio/${project.slug}`}
                  aria-label={`Visualizar demonstração do projeto ${project.name}`}
                  className="block relative p-5 sm:p-6 pb-8 border-b border-lemury-green/10 overflow-hidden"
                  style={{ backgroundColor: "#ECE9E2" }}
                >
                  <div className="relative pr-0 sm:pr-12">
                    {/* Desktop Monitor Frame */}
                    <div
                      className="rounded-[10px] overflow-hidden border-[4px] border-[#18181A] shadow-editorial transition-transform duration-500 group-hover:translate-y-[-2px]"
                      style={{
                        backgroundColor: project.theme.bgPrimary,
                        color: project.theme.textPrimary,
                      }}
                    >
                      {/* Store Header (Aligned Margins px-5) */}
                      <div
                        className="px-5 py-2.5 flex items-center justify-between"
                        style={{ backgroundColor: project.theme.bgPrimary }}
                      >
                        <span className="font-serif text-[11px] sm:text-xs tracking-[0.24em] font-normal">
                          {project.name}
                        </span>

                        <div className="hidden sm:flex items-center gap-4 text-[8.5px] tracking-[0.04em] text-neutral-600 font-light">
                          {project.categories.map((cat) => (
                            <span key={cat}>{cat}</span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2.5 text-neutral-700">
                          <Search className="w-2.5 h-2.5 stroke-[1.5]" />
                          {isJewelry ? (
                            <Heart className="w-2.5 h-2.5 stroke-[1.5]" />
                          ) : (
                            <User className="w-2.5 h-2.5 stroke-[1.5]" />
                          )}
                          <ShoppingBag className="w-2.5 h-2.5 stroke-[1.5]" />
                        </div>
                      </div>

                      {/* Full-Width Studio Hero Banner (Clean Left Canvas + Right Subject) */}
                      <div className="relative aspect-[1500/540] w-full overflow-hidden">
                        <img
                          src={project.heroImage}
                          alt={`Fachada do e-commerce ${project.name}`}
                          className="w-full h-full object-cover object-center"
                        />

                        {/* Light Minimalist Typography Aligned to Left Margin (px-5) */}
                        <div className="absolute inset-0 px-5 flex flex-col justify-center">
                          {isJewelry ? (
                            <div className="max-w-[54%] space-y-1.5">
                              <p className="text-[6.5px] sm:text-[7px] font-light uppercase tracking-[0.22em] text-[#7A6855] leading-[1.45]">
                                JOIAS PARA
                                <br />
                                HISTÓRIAS REAIS
                              </p>
                              <h4 className="font-serif text-lg sm:text-[22px] font-normal text-[#3D2B1F] leading-[1.02] tracking-[-0.01em]">
                                O brilho dos
                                <br />
                                seus momentos
                              </h4>
                              <p className="text-[7px] font-light text-[#6E5D4D] leading-[1.35] hidden sm:block">
                                Joias que celebram o agora e acompanham
                                <br />
                                todas as suas versões.
                              </p>
                              <div className="pt-1">
                                <span
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] text-[7.5px] font-normal tracking-[0.03em]"
                                  style={{
                                    backgroundColor: project.theme.accent,
                                    color: "#FAF7F2",
                                  }}
                                >
                                  <span>Descubra a coleção</span>
                                  <ArrowRight className="w-2 h-2 stroke-[1.5]" />
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="max-w-[52%] space-y-1.5">
                              <h4 className="font-serif text-xl sm:text-[23px] font-normal text-[#1E1C1A] leading-[1.0] tracking-[-0.01em]">
                                Essência
                                <br />
                                contemporânea
                              </h4>
                              <p className="text-[6.5px] sm:text-[7px] font-light uppercase tracking-[0.22em] text-[#5A534A] leading-[1.45]">
                                MODA ATEMPORAL PARA
                                <br />
                                MULHERES REAIS
                              </p>
                              <div className="pt-1">
                                <span
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[2px] text-[7.5px] font-normal tracking-[0.03em]"
                                  style={{
                                    backgroundColor: project.theme.accent,
                                    color: "#FAF8F5",
                                  }}
                                >
                                  <span>Explore a coleção</span>
                                  <ArrowRight className="w-2 h-2 stroke-[1.5]" />
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Categories Bar Preview (Aligned to px-5 margins) */}
                      <div
                        className="px-5 pt-2.5 pb-2 border-b space-y-1.5"
                        style={{ borderColor: project.theme.border }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[6.5px] uppercase tracking-[0.18em] opacity-65">
                            Curadoria por categoria
                          </span>
                          <span className="font-serif italic text-[7px] opacity-60">
                            0{project.products.length} peças
                          </span>
                        </div>
                        <div className="grid grid-cols-5 gap-1">
                          {project.categories.map((cat, idx) => (
                            <span
                              key={cat}
                              className="px-1.5 py-0.5 rounded-[2px] font-serif text-[7px] tracking-[0.02em] truncate text-center"
                              style={
                                idx === 0
                                  ? {
                                      backgroundColor: project.theme.accent,
                                      color: project.theme.bgPrimary,
                                    }
                                  : {
                                      backgroundColor: project.theme.bgSecondary,
                                      color: project.theme.textPrimary,
                                    }
                              }
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Featured Products Section (Aligned to exact same px-5 margins) */}
                      <div className="px-5 py-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <span
                            className={
                              isJewelry
                                ? "text-[8px] uppercase tracking-[0.18em] text-[#5C4938] font-normal"
                                : "font-serif text-[11px] font-normal text-[#1E1C1A]"
                            }
                          >
                            {isJewelry
                              ? "NOSSAS FAVORITAS"
                              : "Destaques da coleção"}
                          </span>
                          <span className="text-[7.5px] text-neutral-600 inline-flex items-center gap-1 underline underline-offset-2">
                            <span>Ver todos</span>
                            <ArrowRight className="w-2 h-2" />
                          </span>
                        </div>

                        {/* 3-Column Product Grid Strictly Inside Margins */}
                        <div className="grid grid-cols-3 gap-2.5">
                          {project.products.slice(0, 3).map((prod) => (
                            <div key={prod.id} className="space-y-1">
                              <div className="aspect-[1.48/1] overflow-hidden bg-neutral-200 relative">
                                <img
                                  src={prod.image}
                                  alt={prod.name}
                                  className="w-full h-full object-cover"
                                />
                                {isJewelry && (
                                  <Heart className="w-2.5 h-2.5 text-[#5C4938] stroke-[1.4] absolute top-1.5 right-1.5" />
                                )}
                              </div>
                              <div className="flex items-start justify-between gap-1 pt-0.5">
                                <div className="min-w-0">
                                  <p className="font-serif text-[9px] font-normal text-[#1E1C1A] truncate leading-tight">
                                    {prod.name}
                                  </p>
                                  <p className="text-[8px] text-neutral-600 font-light leading-tight mt-0.5">
                                    {isJewelry
                                      ? prod.price.toLocaleString("pt-BR", {
                                          style: "currency",
                                          currency: "BRL",
                                        })
                                      : `R$ ${prod.price}`}
                                  </p>
                                </div>
                                {!isJewelry && (
                                  <Heart className="w-2.5 h-2.5 text-neutral-600 stroke-[1.4] shrink-0 mt-0.5" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Companion Smartphone Frame (Bottom Right, Matching Reference Photos) */}
                    <div
                      className="hidden sm:block w-[124px] rounded-[16px] overflow-hidden border-[3px] border-[#18181A] shadow-2xl absolute -bottom-3 right-0 transition-transform duration-500 group-hover:translate-y-[-4px]"
                      style={{
                        backgroundColor: project.theme.bgPrimary,
                        color: project.theme.textPrimary,
                      }}
                    >
                      {/* Phone Top Bar */}
                      <div className="pt-1.5 pb-1 px-2.5 flex flex-col items-center">
                        <span className="w-6 h-1 rounded-full bg-black mb-1" />
                        <div className="w-full flex items-center justify-between text-[6.5px] font-serif tracking-[0.16em]">
                          <span>☰</span>
                          <span>{project.name.split(" ")[0]}</span>
                          <ShoppingBag className="w-2 h-2 stroke-[1.5]" />
                        </div>
                      </div>

                      {/* Phone Hero */}
                      <div className="relative h-24 overflow-hidden">
                        <img
                          src={project.heroImage}
                          alt={project.name}
                          className="w-full h-full object-cover object-right"
                        />
                        <div
                          className="absolute inset-0 p-2 flex flex-col justify-end"
                          style={{
                            background: isJewelry
                              ? "linear-gradient(180deg, transparent 15%, rgba(250,247,242,0.95) 85%)"
                              : "linear-gradient(180deg, transparent 20%, rgba(28,26,23,0.55) 100%)",
                          }}
                        >
                          <p
                            className={`font-serif text-[9px] leading-[1.05] font-normal ${
                              isJewelry ? "text-[#3D2B1F]" : "text-white"
                            }`}
                          >
                            {isJewelry
                              ? "O brilho dos seus momentos"
                              : "Essência contemporânea"}
                          </p>
                          <span
                            className="mt-1 inline-block w-fit px-1.5 py-0.5 rounded-[2px] text-[5.5px]"
                            style={{
                              backgroundColor: project.theme.accent,
                              color: "#FAF8F5",
                            }}
                          >
                            {isJewelry
                              ? "Descubra a coleção →"
                              : "Explore a coleção →"}
                          </span>
                        </div>
                      </div>

                      {/* Phone Mini Grid */}
                      <div className="p-2 space-y-1">
                        <div className="flex justify-between items-center text-[6px]">
                          <span className="font-serif">
                            {isJewelry
                              ? "NOSSAS FAVORITAS"
                              : "Destaques da coleção"}
                          </span>
                          <span className="opacity-60">Ver todos →</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {project.products.slice(0, 2).map((prod) => (
                            <div key={prod.id} className="space-y-0.5">
                              <div className="aspect-[1.2/1] overflow-hidden bg-neutral-200">
                                <img
                                  src={prod.image}
                                  alt={prod.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p className="font-serif text-[6px] truncate">
                                {prod.name}
                              </p>
                              <p className="text-[5.5px] opacity-70">
                                R$ {prod.price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Connected Card Info & Action Footer */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5 bg-lemury-white">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-lemury-stone">
                        {project.segment}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-lemury-cream text-[10px] uppercase tracking-[0.12em] text-lemury-green font-medium">
                        Projeto conceitual
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-[1.75rem] font-medium text-lemury-green leading-tight">
                      {project.name}
                    </h3>

                    <p className="text-sm text-lemury-stone leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-lemury-green/10 flex items-center justify-between gap-4">
                    <span className="text-xs text-lemury-stone">
                      Vitrine interativa desktop e mobile
                    </span>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-lemury-green hover:bg-lemury-green-alt text-lemury-cream text-xs sm:text-sm font-medium px-5 py-2.5 rounded-[10px] transition-colors duration-200 shrink-0"
                    >
                      <span>Visualizar projeto</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
