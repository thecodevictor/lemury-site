import React from "react";
import { PROCESS_STEPS } from "@/data/lemuryData";

export function ProcessSection() {
  return (
    <section
      id="como-funciona"
      className="py-20 lg:py-28 bg-lemury-green text-lemury-cream border-b border-lemury-cream/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-lemury-cream/70">
              04 • Como Funciona o Processo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-lemury-cream leading-[1.12]">
              Um método claro, organizado em cinco etapas do diagnóstico à entrega.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-lemury-cream/80 leading-relaxed">
              Conduzimos todo o processo técnico e visual com organização para
              que você acompanhe cada avanço com clareza, sem sobrecarregar a
              rotina da sua empresa.
            </p>
          </div>
        </div>

        {/* 5-Step Architectural Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-lemury-green-alt/80 border border-lemury-cream/15 p-6 sm:p-7 flex flex-col justify-between space-y-8 transition-colors duration-300 hover:border-lemury-cream/35"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-lemury-cream/15 pb-4">
                  <span className="font-serif text-3xl font-medium text-lemury-cream">
                    {item.step}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-lemury-cream/60">
                    Etapa
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-lemury-cream leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-lemury-cream/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-lemury-cream/10">
                <p className="text-[11px] uppercase tracking-[0.14em] text-lemury-cream/60">
                  Marco da etapa:
                </p>
                <p className="text-xs font-medium text-lemury-cream mt-1">
                  {item.deliverableNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

