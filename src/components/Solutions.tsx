import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="py-20 lg:py-28 bg-lemury-cream border-b border-lemury-green/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-lemury-green">
            01 • Soluções & Frentes de Atuação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-lemury-green leading-[1.12]">
            Dois caminhos estruturados para levar produtos físicos ao ambiente digital.
          </h2>
          <p className="text-base sm:text-lg text-lemury-stone leading-relaxed">
            Atuamos na implantação completa de lojas virtuais para empresas que
            desejam contratar nossa equipe técnica e estruturamos nossa futura
            linha educacional voltada ao ensino de e-commerce.
          </p>
        </div>

        {/* Horizontal Editorial Banner Cards */}
        <div className="space-y-8">
          {/* Card 1 — Primary Commercial Priority: Implantação de E-commerce */}
          <div className="group relative rounded-2xl overflow-hidden bg-lemury-green text-lemury-cream border border-lemury-green shadow-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Content Column */}
              <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-lemury-cream text-lemury-green text-xs font-semibold uppercase tracking-[0.14em]">
                      Contratação de Projeto • Prioridade Comercial
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-lemury-cream/75">
                      Para Empresas & Lojistas
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-medium leading-[1.1] text-lemury-cream">
                    Quero criar meu e-commerce
                  </h3>

                  <p className="text-base sm:text-lg text-lemury-cream/85 leading-relaxed max-w-2xl">
                    Para empresários que já vendem por loja física, Instagram ou
                    WhatsApp e desejam contratar a Lemury para desenvolver e
                    entregar sua loja virtual pronta para operar.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Design refinado com a identidade da sua marca",
                      "Catálogo, categorias e produtos organizados",
                      "Carrinho, checkout, PIX e cartões integrados",
                      "Cálculo de frete e treinamento de gestão",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-lemury-cream/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-lemury-cream shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-lemury-cream/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="font-serif italic text-lg text-lemury-cream/90">
                    “Seu cliente quer comprar. Facilite o caminho.”
                  </p>
                  <Link
                    href="#contato"
                    className="inline-flex items-center justify-center gap-2.5 bg-lemury-cream hover:bg-lemury-white text-lemury-green font-medium text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shrink-0"
                  >
                    <span>Solicitar proposta de implantação</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Editorial Visual Column */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden bg-lemury-green-alt">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
                  alt="Ambiente de loja contemporânea e curadoria de produtos físicos"
                  className="w-full h-full object-cover object-center opacity-85 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lemury-green via-lemury-green/30 to-transparent lg:bg-gradient-to-r lg:from-lemury-green lg:via-lemury-green/20 lg:to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-lemury-green/90 backdrop-blur-md border border-lemury-cream/15">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-lemury-cream/70">
                    De loja física para e-commerce
                  </p>
                  <p className="text-sm font-medium text-lemury-cream mt-1">
                    Receba uma estrutura profissional pronta para comercializar seus produtos pela internet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Lemury Academy (Future Educational Line) */}
          <div className="group relative rounded-2xl overflow-hidden bg-lemury-white border border-lemury-green/15 shadow-subtle transition-all duration-300 hover:border-lemury-green/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Content Column */}
              <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lemury-green/[0.08] text-lemury-green text-xs font-medium uppercase tracking-[0.14em]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Lemury Academy • Em Planejamento
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-lemury-stone">
                      Frente Educacional Futura
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-lemury-green leading-tight">
                    Quero aprender e-commerce
                  </h3>

                  <p className="text-base text-lemury-stone leading-relaxed max-w-2xl">
                    Nossa futura linha educacional está sendo estruturada para
                    atender dois perfis distintos de aprendizado no comércio
                    eletrônico:
                  </p>

                  {/* Two Academy Audience Tracks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-lemury-cream/70 border border-lemury-green/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lemury-green mb-1">
                        01. Minha Loja Online
                      </p>
                      <p className="text-sm text-lemury-stone leading-relaxed">
                        Destinado a comerciantes que desejam construir e
                        administrar o próprio e-commerce com método e clareza.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-lemury-cream/70 border border-lemury-green/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lemury-green mb-1">
                        02. Profissional de E-commerce
                      </p>
                      <p className="text-sm text-lemury-stone leading-relaxed">
                        Destinado a quem deseja aprender a desenvolver lojas
                        virtuais para terceiros e comercializar esse serviço.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-lemury-green/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-lemury-stone">
                    Programas em fase de estruturação curricular. Cadastre-se na lista de interesse.
                  </span>
                  <Link
                    href="/academy"
                    className="inline-flex items-center justify-center gap-2 bg-lemury-green/5 hover:bg-lemury-green hover:text-lemury-cream text-lemury-green border border-lemury-green/20 font-medium text-sm px-5 py-3 rounded-xl transition-all duration-200 shrink-0"
                  >
                    <span>Conhecer a Lemury Academy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Visual Column */}
              <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-full overflow-hidden bg-lemury-cream-dark">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
                  alt="Estúdio de design e planejamento arquitetônico minimalista"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lemury-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-lemury-white/95 backdrop-blur-md border border-lemury-green/10">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-lemury-green font-semibold">
                    Lista de Interesse Aberta
                  </p>
                  <p className="text-xs text-lemury-stone mt-0.5">
                    Receba em primeira mão o cronograma oficial de lançamento das trilhas educacionais.
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

