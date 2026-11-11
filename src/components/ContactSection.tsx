"use client";

import React, { useState } from "react";
import { RETAIL_SEGMENTS } from "@/data/lemuryData";
import { ArrowUpRight, CheckCircle2, MessageSquare } from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState(RETAIL_SEGMENTS[0]);
  const [currentChannel, setCurrentChannel] = useState("Instagram / WhatsApp");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-28 bg-lemury-white border-b border-lemury-green/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="rounded-2xl bg-lemury-green text-lemury-cream overflow-hidden shadow-editorial border border-lemury-green">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Institutional Final Call Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-10 bg-lemury-green">
              <div className="space-y-6">
                <span className="inline-block px-3.5 py-1.5 rounded-lg bg-lemury-cream/10 border border-lemury-cream/15 text-xs uppercase tracking-[0.16em] text-lemury-cream">
                  Inicie seu projeto com a Lemury
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-lemury-cream leading-[1.1]">
                  Seu negócio já existe.{" "}
                  <span className="italic font-normal text-lemury-cream/90">
                    A Lemury leva ele para o digital.
                  </span>
                </h2>

                <p className="text-base text-lemury-cream/80 leading-relaxed max-w-xl">
                  Conte-nos brevemente sobre seus produtos e como funcionam suas
                  vendas hoje. Nossa equipe apresentará como estruturar e
                  implantar o e-commerce da sua marca.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-lemury-cream/15">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-lemury-green-alt border border-lemury-cream/10">
                    <p className="text-xs uppercase tracking-[0.14em] text-lemury-cream/65">
                      Atendimento Comercial
                    </p>
                    <p className="text-sm font-medium text-lemury-cream mt-1">
                      Diagnóstico de estrutura e proposta personalizada
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-lemury-green-alt border border-lemury-cream/10">
                    <p className="text-xs uppercase tracking-[0.14em] text-lemury-cream/65">
                      Abrangência
                    </p>
                    <p className="text-sm font-medium text-lemury-cream mt-1">
                      Projetos para empresas de todas as regiões do Brasil
                    </p>
                  </div>
                </div>

                <p className="font-serif italic text-lg text-lemury-cream/85">
                  “Mais que produtos, oportunidades.”
                </p>
              </div>
            </div>

            {/* Right Interactive Proposal Request Form */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 bg-lemury-cream text-lemury-black">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 pb-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-lemury-green">
                      Solicitar proposta ou falar com a equipe
                    </h3>
                    <p className="text-xs sm:text-sm text-lemury-stone">
                      Preencha as informações abaixo para organizarmos o
                      atendimento da sua empresa.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium uppercase tracking-[0.12em] text-lemury-green mb-1.5"
                      >
                        Seu nome
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex.: Mariana Alves"
                        className="w-full px-4 py-3 rounded-xl bg-lemury-white border border-lemury-green/15 text-sm text-lemury-black placeholder:text-lemury-stone/50 focus:outline-none focus:border-lemury-green transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-medium uppercase tracking-[0.12em] text-lemury-green mb-1.5"
                      >
                        Nome da marca ou loja
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Ex.: Atelier Mariana"
                        className="w-full px-4 py-3 rounded-xl bg-lemury-white border border-lemury-green/15 text-sm text-lemury-black placeholder:text-lemury-stone/50 focus:outline-none focus:border-lemury-green transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-segment"
                        className="block text-xs font-medium uppercase tracking-[0.12em] text-lemury-green mb-1.5"
                      >
                        Segmento do negócio
                      </label>
                      <select
                        id="contact-segment"
                        value={segment}
                        onChange={(e) => setSegment(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-lemury-white border border-lemury-green/15 text-sm text-lemury-black focus:outline-none focus:border-lemury-green transition-colors"
                      >
                        {RETAIL_SEGMENTS.map((seg) => (
                          <option key={seg} value={seg}>
                            {seg}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-channel"
                        className="block text-xs font-medium uppercase tracking-[0.12em] text-lemury-green mb-1.5"
                      >
                        Como você vende hoje?
                      </label>
                      <select
                        id="contact-channel"
                        value={currentChannel}
                        onChange={(e) => setCurrentChannel(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-lemury-white border border-lemury-green/15 text-sm text-lemury-black focus:outline-none focus:border-lemury-green transition-colors"
                      >
                        <option value="Loja física + WhatsApp">
                          Loja física + WhatsApp
                        </option>
                        <option value="Instagram / WhatsApp">
                          Instagram e WhatsApp
                        </option>
                        <option value="Apenas Loja Física">
                          Apenas Loja Física
                        </option>
                        <option value="Já possuo loja online e quero reestruturar">
                          Já possuo site e quero profissionalizar
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium uppercase tracking-[0.12em] text-lemury-green mb-1.5"
                    >
                      Sobre seus produtos e objetivos (opcional)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Conte brevemente quantos produtos pretende cadastrar inicialmente ou dúvidas sobre a implantação..."
                      className="w-full px-4 py-3 rounded-xl bg-lemury-white border border-lemury-green/15 text-sm text-lemury-black placeholder:text-lemury-stone/50 focus:outline-none focus:border-lemury-green transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-lemury-green hover:bg-lemury-green-alt text-lemury-cream font-medium text-sm px-6 py-4 rounded-xl transition-all duration-200 shadow-subtle"
                  >
                    <span>Solicitar apresentação de proposta</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col justify-center space-y-6 py-6">
                  <div className="w-12 h-12 rounded-xl bg-lemury-green text-lemury-cream flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-lemury-green">
                      Resumo de Atendimento Preparado
                    </span>
                    <h3 className="font-serif text-3xl font-medium text-lemury-green">
                      Obrigado, {name}.
                    </h3>
                    <p className="text-sm text-lemury-stone leading-relaxed">
                      Organizamos o resumo da sua marca (
                      <strong className="text-lemury-black">{company}</strong> —{" "}
                      {segment}) para agilizar seu atendimento comercial com a
                      Lemury.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-lemury-white border border-lemury-green/15 text-xs space-y-1.5 text-lemury-stone">
                    <p>
                      <strong className="text-lemury-black">Marca:</strong>{" "}
                      {company} ({segment})
                    </p>
                    <p>
                      <strong className="text-lemury-black">
                        Operação atual:
                      </strong>{" "}
                      {currentChannel}
                    </p>
                    {message && (
                      <p>
                        <strong className="text-lemury-black">Contexto:</strong>{" "}
                        {message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-lemury-green/20 text-xs font-medium text-lemury-green hover:bg-lemury-green/5 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Editar informações</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

