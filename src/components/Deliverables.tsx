"use client";

import React, { useState } from "react";
import { DELIVERABLES } from "@/data/lemuryData";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Deliverables() {
  const [selectedId, setSelectedId] = useState<string>(DELIVERABLES[0].id);

  const activeDeliverable =
    DELIVERABLES.find((item) => item.id === selectedId) || DELIVERABLES[0];

  return (
    <section
      id="entregas"
      className="py-20 lg:py-28 bg-lemury-white border-b border-lemury-green/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-lemury-green">
              02 • O Que Entregamos na Implantação
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-lemury-green leading-[1.12]">
              Mais do que um site bonito: uma operação completa de compra online.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-lemury-stone leading-relaxed">
              Cuidamos da implantação técnica e visual de ponta a ponta para que
              você receba uma estrutura organizada, funcional e preparada para
              comercializar seus produtos com segurança.
            </p>
          </div>
        </div>

        {/* Interactive Architectural Index + Detail Panel (No generic repetitive icon grids) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 8 Numbered Editorial Index Items */}
          <div
            role="tablist"
            aria-label="Etapas e entregas da implantação"
            className="lg:col-span-5 divide-y divide-lemury-green/10 border-y border-lemury-green/15"
          >
            {DELIVERABLES.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left py-4 px-4 transition-all duration-200 flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-lemury-green text-lemury-cream rounded-xl my-1 shadow-subtle"
                      : "hover:bg-lemury-cream/60 text-lemury-black"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-serif text-lg font-medium ${
                        isSelected ? "text-lemury-cream/70" : "text-lemury-stone"
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <p
                        className={`font-serif text-xl font-medium leading-snug ${
                          isSelected ? "text-lemury-cream" : "text-lemury-green"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-xs mt-0.5 line-clamp-1 ${
                          isSelected ? "text-lemury-cream/80" : "text-lemury-stone"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs uppercase tracking-widest shrink-0 ${
                      isSelected ? "text-lemury-cream" : "text-lemury-stone/60"
                    }`}
                  >
                    {isSelected ? "Ativo" : "Ver"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Technical & Visual Specification */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-lemury-cream border border-lemury-green/15 p-7 sm:p-10 space-y-8 shadow-subtle">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-lemury-green/10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-lemury-stone">
                    Entrega {activeDeliverable.number} de 08
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-medium text-lemury-green mt-1">
                    {activeDeliverable.title}
                  </h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-lg bg-lemury-green text-lemury-cream text-xs font-medium">
                  Incluído na Implantação
                </span>
              </div>

              <div className="space-y-4">
                <p className="font-serif italic text-xl text-lemury-green-alt">
                  {activeDeliverable.subtitle}
                </p>
                <p className="text-base text-lemury-stone leading-relaxed">
                  {activeDeliverable.description}
                </p>
              </div>

              {/* Concrete Deliverables Checklist */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-lemury-green">
                  O que fazemos nesta etapa:
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeDeliverable.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-lemury-white border border-lemury-green/10"
                    >
                      <span className="w-5 h-5 rounded-md bg-lemury-green text-lemury-cream flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm text-lemury-black leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Spec Preview Box */}
              <div className="rounded-xl bg-lemury-green text-lemury-cream p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-lemury-cream/15 pb-3">
                  <span className="text-xs uppercase tracking-[0.16em] text-lemury-cream/75">
                    Especificação da Estrutura
                  </span>
                  <span className="text-xs font-serif italic text-lemury-cream/90">
                    {activeDeliverable.previewLabel}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {activeDeliverable.previewHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-lg bg-lemury-cream/[0.06] border border-lemury-cream/10"
                    >
                      <p className="text-[11px] uppercase tracking-[0.14em] text-lemury-cream/65">
                        {item.label}
                      </p>
                      <p className="text-xs font-medium text-lemury-cream mt-1 leading-snug">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-lemury-stone">
                  Todas as 8 frentes são entregues integradas no seu projeto.
                </p>
                <Link
                  href="#contato"
                  className="inline-flex items-center gap-2 text-sm font-medium text-lemury-green hover:text-lemury-green-alt underline underline-offset-4"
                >
                  <span>Conversar sobre a estrutura da minha loja</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

