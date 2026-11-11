"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ACADEMY_TRACKS } from "@/data/lemuryData";
import { ArrowLeft, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";

export default function AcademyPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTrack, setSelectedTrack] = useState(ACADEMY_TRACKS[0].title);
  const [registered, setRegistered] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-lemury-cream text-lemury-black">
      <Header />

      <main className="flex-1">
        {/* Top Breadcrumb & Editorial Hero */}
        <section className="py-14 lg:py-20 border-b border-lemury-green/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-8">
            <Link
              href="/#solucoes"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-lemury-stone hover:text-lemury-green transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a página institucional</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-lemury-green/[0.08] border border-lemury-green/15">
                  <Sparkles className="w-3.5 h-3.5 text-lemury-green" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-lemury-green">
                    Lemury Academy • Em Fase de Planejamento
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-lemury-green leading-[1.08]">
                  Educação prática em e-commerce, método e estrutura digital.
                </h1>
              </div>

              <div className="lg:col-span-5">
                <p className="text-base sm:text-lg text-lemury-stone leading-relaxed">
                  A Lemury Academy é nossa futura frente educacional,
                  atualmente em desenvolvimento curricular. Estruturamos duas
                  trilhas distintas: para lojistas que desejam criar a própria
                  loja e para profissionais que desejam atuar na implantação de
                  e-commerces para terceiros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Two Tracks Presentation */}
        <section className="py-16 lg:py-24 bg-lemury-white border-b border-lemury-green/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-lemury-green">
                Frentes em Estruturação
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-lemury-green">
                Duas trilhas planejadas para objetivos diferentes.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ACADEMY_TRACKS.map((track, idx) => (
                <div
                  key={track.id}
                  className="rounded-2xl bg-lemury-cream border border-lemury-green/15 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-subtle"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-md bg-lemury-green text-lemury-cream text-xs font-medium uppercase tracking-[0.14em]">
                        {track.badge}
                      </span>
                      <span className="font-serif text-2xl text-lemury-stone">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-medium text-lemury-green">
                      {track.title}
                    </h3>

                    <p className="font-serif italic text-xl text-lemury-green-alt">
                      {track.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-lemury-stone leading-relaxed">
                      {track.description}
                    </p>

                    <div className="pt-3 space-y-2.5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lemury-green">
                        Pilares previstos no programa:
                      </p>
                      {track.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-start gap-2.5 text-sm text-lemury-black/85"
                        >
                          <CheckCircle2 className="w-4 h-4 text-lemury-green shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-lemury-green/10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.14em] text-lemury-stone">
                      Status: Em Planejamento (Não lançado)
                    </span>
                    <a
                      href="#lista-interesse"
                      onClick={() => setSelectedTrack(track.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-lemury-green hover:underline"
                    >
                      <span>Entrar na lista de interesse</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="lista-interesse" className="py-16 lg:py-24 bg-lemury-cream">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="rounded-2xl bg-lemury-green text-lemury-cream p-8 sm:p-12 shadow-editorial space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.18em] text-lemury-cream/70">
                  Lista de Interesse Oficial
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-lemury-cream">
                  Seja avisado quando a Lemury Academy for lançada.
                </h2>
                <p className="text-sm sm:text-base text-lemury-cream/80 leading-relaxed">
                  Os programas ainda estão em fase de planejamento e não possuem
                  turmas abertas no momento. Cadastre seu interesse abaixo para
                  receber novidades em primeira mão.
                </p>
              </div>

              {!registered ? (
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="waitlist-name"
                        className="block text-xs uppercase tracking-[0.14em] text-lemury-cream/80 mb-1.5"
                      >
                        Seu nome
                      </label>
                      <input
                        id="waitlist-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-xl bg-lemury-white text-lemury-black text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="waitlist-email"
                        className="block text-xs uppercase tracking-[0.14em] text-lemury-cream/80 mb-1.5"
                      >
                        Seu melhor e-mail
                      </label>
                      <input
                        id="waitlist-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="voce@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-lemury-white text-lemury-black text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="waitlist-track"
                      className="block text-xs uppercase tracking-[0.14em] text-lemury-cream/80 mb-1.5"
                    >
                      Trilha de maior interesse
                    </label>
                    <select
                      id="waitlist-track"
                      value={selectedTrack}
                      onChange={(e) => setSelectedTrack(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-lemury-white text-lemury-black text-sm focus:outline-none"
                    >
                      {ACADEMY_TRACKS.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title} — {t.subtitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-lemury-cream hover:bg-lemury-white text-lemury-green font-semibold text-sm transition-colors"
                  >
                    Cadastrar na lista de interesse
                  </button>
                </form>
              ) : (
                <div className="p-6 rounded-xl bg-lemury-green-alt border border-lemury-cream/20 space-y-3">
                  <div className="flex items-center gap-2 text-lemury-cream font-medium">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Interesse registrado com sucesso, {name}!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-lemury-cream/80 leading-relaxed">
                    Registramos seu e-mail ({email}) para a trilha{" "}
                    <strong>{selectedTrack}</strong>. Assim que o cronograma da
                    Lemury Academy for definido, entraremos em contato.
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-lemury-cream/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-lemury-cream/75">
                <span>
                  Deseja contratar a Lemury para criar sua loja agora?
                </span>
                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-1.5 text-lemury-cream font-medium underline underline-offset-4"
                >
                  <span>Ir para Implantação de E-commerce</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

