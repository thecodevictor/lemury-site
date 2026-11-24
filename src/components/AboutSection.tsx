import React from "react";

const PILLARS = [
  {
    number: "01",
    tag: "Especialização",
    title: "Foco em e-commerce",
    description:
      "Projetos desenvolvidos exclusivamente para operações de varejo que buscam profissionalizar suas vendas online.",
    desktopOffset: "md:pt-0",
  },
  {
    number: "02",
    tag: "Titularidade e Autonomia",
    title: "A loja é 100% sua",
    description:
      "Contas configuradas em nome da sua empresa, com treinamento prático para gerenciar produtos, estoque e pedidos com facilidade.",
    desktopOffset: "md:pt-8",
  },
  {
    number: "03",
    tag: "Direção Visual",
    title: "Identidade preservada",
    description:
      "Interfaces organizadas, intuitivas e alinhadas à identidade visual da sua marca, pensadas para facilitar a jornada de compra.",
    desktopOffset: "md:pt-3",
  },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-24 sm:py-32 bg-lemury-white border-b border-lemury-green/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Editorial Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-lemury-green/75">
              Sobre a Lemury
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-medium text-lemury-green leading-[1.12]">
              Especialistas em estruturar{" "}
              <span className="italic font-normal text-lemury-green-alt">
                operações de e-commerce profissionais.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-lemury-stone leading-relaxed">
            <p className="text-lemury-black/85">
              A Lemury é especializada na criação e implantação de lojas
              virtuais para marcas que comercializam produtos físicos. Nosso
              foco exclusivo é construir o canal de vendas online que a sua
              operação precisa para crescer com organização.
            </p>
            <p>
              Cuidamos de toda a implantação técnica e visual — do catálogo às
              integrações de pagamento e frete — e entregamos a loja pronta,
              registrada em sua titularidade, para que você tenha autonomia na
              gestão diária sem depender de suporte técnico.
            </p>
          </div>
        </div>

        {/* Fluid & Elegant 3-Pillar Composition (No Boxy Frames) */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-14 border-t border-lemury-green/[0.08]">
          {/* Desktop Organic Wave Curve with Pearl Nodes */}
          <div aria-hidden="true" className="hidden md:block w-full">
            <svg
              viewBox="0 0 1200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-20 overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="lemury-curve-gradient"
                  x1="0"
                  y1="0"
                  x2="1200"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#062D27" stopOpacity="0.18" />
                  <stop offset="35%" stopColor="#062D27" stopOpacity="0.28" />
                  <stop offset="70%" stopColor="#062D27" stopOpacity="0.24" />
                  <stop offset="100%" stopColor="#062D27" stopOpacity="0.04" />
                </linearGradient>
              </defs>

              {/* Soft Sinuous Bézier Thread Passing Exactly Through Column Nodes */}
              <path
                d="M 0 26 C 180 26, 240 58, 408 58 C 576 58, 640 38, 808 38 C 960 38, 1080 50, 1200 50"
                stroke="url(#lemury-curve-gradient)"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Pillars Grid (Desktop Wave Stagger / Mobile Fluid Vertical Curve) */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            {/* Mobile Continuous Organic Vertical Curve */}
            <svg
              aria-hidden="true"
              viewBox="0 0 36 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden absolute left-0 top-2 bottom-2 w-8 h-[calc(100%-16px)] pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="lemury-mobile-curve"
                  x1="18"
                  y1="0"
                  x2="18"
                  y2="420"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#062D27" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#062D27" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#062D27" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path
                d="M 16 8 C 16 75, 26 115, 22 185 C 18 255, 10 305, 18 412"
                stroke="url(#lemury-mobile-curve)"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>

            {PILLARS.map((pillar, index) => (
              <div
                key={pillar.number}
                className={`group relative pl-11 md:pl-0 md:pr-10 lg:pr-14 ${pillar.desktopOffset} transition-transform duration-500`}
              >
                {/* Delicate Pearl Halo Node (Mobile Left / Desktop Top) */}
                <div
                  aria-hidden="true"
                  className="flex items-center gap-3 mb-5 md:-mt-[62px]"
                >
                  {/* Mobile Pearl Node on the Curve */}
                  <span
                    className={`md:hidden absolute top-1.5 ${
                      index === 1 ? "left-[15px]" : "left-[10px]"
                    } w-3.5 h-3.5 rounded-full border border-lemury-green/25 bg-lemury-white flex items-center justify-center`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lemury-green" />
                  </span>

                  {/* Desktop Pearl Node on the Wave */}
                  <span className="hidden md:flex w-4 h-4 rounded-full border border-lemury-green/25 bg-lemury-white items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-lemury-green/50 transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-lemury-green" />
                  </span>
                </div>

                {/* Editorial Number + Subtle Category Whisper */}
                <div className="flex items-baseline gap-3 mb-2.5">
                  <span className="font-serif italic text-3xl sm:text-4xl text-lemury-green/35 font-normal leading-none select-none group-hover:text-lemury-green/60 transition-colors duration-300">
                    {pillar.number}
                  </span>
                  <span className="w-4 h-[1px] bg-lemury-green/20 self-center" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-lemury-green/60">
                    {pillar.tag}
                  </span>
                </div>

                {/* Pillar Title & Description */}
                <h3 className="font-serif text-2xl sm:text-[1.65rem] font-medium text-lemury-green leading-snug">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-sm sm:text-[15px] text-lemury-stone leading-relaxed max-w-sm">
                  {pillar.description}
                </p>

                {/* Soft Fading Hairline Accent */}
                <div
                  aria-hidden="true"
                  className="mt-5 h-[1px] w-20 bg-gradient-to-r from-lemury-green/25 via-lemury-green/10 to-transparent group-hover:w-28 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
