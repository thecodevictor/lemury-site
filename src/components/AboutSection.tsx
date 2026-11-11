import React from "react";

const PILLARS = [
  {
    number: "01",
    tag: "Operação",
    title: "Estrutura completa",
    description:
      "Catálogo, carrinho, checkout, pagamentos e fretes configurados.",
    desktopOffset: "md:pt-0",
  },
  {
    number: "02",
    tag: "Direção Visual",
    title: "Identidade preservada",
    description:
      "Direção visual refinada e alinhada à personalidade de cada marca.",
    desktopOffset: "md:pt-8",
  },
  {
    number: "03",
    tag: "Autonomia",
    title: "Gestão descomplicada",
    description:
      "Entrega acompanhada de orientação prática para administrar a loja.",
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
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-lemury-green leading-[1.12]">
              Design, tecnologia e organização aplicados ao comércio.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-lemury-stone leading-relaxed">
            <p className="text-lemury-black/85">
              A Lemury é uma empresa especializada na criação de e-commerces
              para negócios que desejam estruturar sua presença digital. Unimos
              design, tecnologia e organização para transformar operações
              comerciais em experiências de compra online profissionais.
            </p>
            <p>
              Cuidamos da implantação técnica e visual — do planejamento de
              categorias e páginas de produto à configuração de carrinho, meios
              de pagamento e opções de entrega — para que sua empresa receba uma
              loja preparada para comercializar seus produtos pela internet.
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
