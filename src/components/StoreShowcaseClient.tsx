"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ConceptualProject,
  ConceptualProduct,
  CONTACT_LINKS,
} from "@/data/lemuryData";
import {
  ArrowLeft,
  ShoppingBag,
  Monitor,
  Smartphone,
  X,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  Check,
  ArrowUpRight,
  ArrowRight,
  Search,
  Heart,
  User,
} from "lucide-react";

interface CartItem {
  product: ConceptualProduct;
  selectedOption: string;
  quantity: number;
}

export function StoreShowcaseClient({ project }: { project: ConceptualProject }) {
  const isJewelry = project.slug === "maison-aurea";
  const defaultCategory = project.categories[0] || "Todos";
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);
  const [selectedProduct, setSelectedProduct] = useState<ConceptualProduct | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: project.products[0],
      selectedOption: project.products[0].options[1] || project.products[0].options[0],
      quantity: 1,
    },
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cep, setCep] = useState("");
  const [shippingCalculated, setShippingCalculated] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);

  useEffect(() => {
    const syncViewportWithScreen = () => {
      if (window.innerWidth < 768) {
        setViewport("mobile");
      }
    };
    syncViewportWithScreen();
    window.addEventListener("resize", syncViewportWithScreen);
    return () => window.removeEventListener("resize", syncViewportWithScreen);
  }, []);

  const filteredProducts =
    activeCategory === defaultCategory
      ? project.products
      : project.products.filter((p) => p.category === activeCategory);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openProductModal = (prod: ConceptualProduct) => {
    setSelectedProduct(prod);
    setSelectedOption(prod.options[0]);
  };

  const addToCart = (prod: ConceptualProduct, option: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === prod.id && item.selectedOption === option
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product: prod, selectedOption: option, quantity: 1 }];
    });
    setSelectedProduct(null);
    setCartOpen(true);
    setCheckoutDone(false);
  };

  const updateQuantity = (idx: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item, i) =>
          i === idx ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#151716] flex flex-col">
      {/* Lemury Studio Demonstration Control Bar */}
      <header className="sticky top-0 z-50 bg-lemury-green text-lemury-cream border-b border-lemury-cream/15 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-lemury-cream/85 hover:text-lemury-cream transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao portfólio Lemury</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Viewport Switcher (Desktop Only — hidden on mobile devices) */}
            <div className="hidden md:inline-flex items-center p-1 rounded-lg bg-lemury-green-alt border border-lemury-cream/15">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${viewport === "desktop"
                    ? "bg-lemury-cream text-lemury-green"
                    : "text-lemury-cream/75 hover:text-lemury-cream"
                  }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${viewport === "mobile"
                    ? "bg-lemury-cream text-lemury-green"
                    : "text-lemury-cream/75 hover:text-lemury-cream"
                  }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-lemury-cream text-lemury-green text-xs font-semibold hover:bg-lemury-white transition-colors"
            >
              <span>Fale conosco</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Storefront Viewport Wrapper */}
      <div className="flex-1 flex justify-center py-0 md:py-8 px-0 md:px-6 overflow-x-hidden">
        <div
          className={`w-full transition-all duration-300 shadow-2xl overflow-hidden ${viewport === "mobile"
              ? "md:max-w-[390px] md:rounded-[34px] md:border-[8px] md:border-[#1E1E20] md:my-4"
              : "max-w-[1120px] md:rounded-xl border border-white/10"
            }`}
          style={{
            backgroundColor: project.theme.bgPrimary,
            color: project.theme.textPrimary,
          }}
        >
          {/* Store Top Navigation Bar — Exact Margin Alignment (px-6 sm:px-14) */}
          <div
            className={`${viewport === "mobile" ? "px-5 py-4" : "px-6 sm:px-14 py-6"
              } flex items-center justify-between sticky top-0 z-30 backdrop-blur-md`}
            style={{
              backgroundColor: `${project.theme.bgPrimary}F7`,
            }}
          >
            <button
              type="button"
              onClick={() => setActiveCategory(defaultCategory)}
              className="font-serif text-lg sm:text-[22px] tracking-[0.26em] font-normal text-left"
            >
              {project.name}
            </button>

            {viewport === "desktop" && (
              <nav className="hidden md:flex items-center gap-8">
                {project.categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() =>
                      setActiveCategory(activeCategory === cat ? defaultCategory : cat)
                    }
                    className={`text-[13px] font-light tracking-[0.03em] py-0.5 border-b transition-all ${activeCategory === cat
                        ? "border-current font-normal"
                        : "border-transparent text-neutral-600 hover:text-neutral-900"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            )}

            <div className="flex items-center gap-4 sm:gap-5 text-neutral-800">
              <button
                type="button"
                aria-label="Buscar"
                className="opacity-75 hover:opacity-100 transition-opacity"
              >
                <Search className="w-[17px] h-[17px] stroke-[1.5]" />
              </button>
              {isJewelry ? (
                <button
                  type="button"
                  aria-label="Favoritos"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-[17px] h-[17px] stroke-[1.5]" />
                </button>
              ) : (
                <button
                  type="button"
                  aria-label="Minha conta"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                >
                  <User className="w-[17px] h-[17px] stroke-[1.5]" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                aria-label="Abrir sacola"
                className="inline-flex items-center gap-1 opacity-85 hover:opacity-100 transition-opacity"
              >
                <ShoppingBag className="w-[17px] h-[17px] stroke-[1.5]" />
                {totalItems > 0 && (
                  <span className="text-[11px] font-normal">({totalItems})</span>
                )}
              </button>
            </div>
          </div>

          {/* Full-Width Studio Hero Banner — Matching Exact Structure of Reference Photos */}
          <div className="relative w-full overflow-hidden">
            <div
              className={`relative w-full ${viewport === "mobile"
                  ? "h-[350px]"
                  : "aspect-[1500/540] min-h-[340px]"
                }`}
            >
              <img
                src={project.heroImage}
                alt={`Banner principal ${project.name}`}
                className={`w-full h-full object-cover ${viewport === "mobile" ? "object-right" : "object-center"
                  }`}
              />

              {/* Mobile Subtle Gradient for Text Readability */}
              {viewport === "mobile" && (
                <div
                  className="absolute inset-0"
                  style={{
                    background: isJewelry
                      ? "linear-gradient(180deg, rgba(250,247,242,0.10) 0%, rgba(250,247,242,0.96) 72%)"
                      : "linear-gradient(180deg, rgba(28,26,23,0.10) 0%, rgba(28,26,23,0.65) 100%)",
                  }}
                />
              )}

              {/* Light & Minimalist Storefront Typography — Aligned to Exact Same Left Margin (px-6 sm:px-14) */}
              <div
                className={`absolute inset-0 ${viewport === "mobile"
                    ? "px-5 pb-6 flex flex-col justify-end"
                    : "px-6 sm:px-14 flex flex-col justify-center"
                  }`}
              >
                {isJewelry ? (
                  <div
                    className={`${viewport === "mobile" ? "max-w-full" : "max-w-[460px]"
                      } space-y-3 sm:space-y-4`}
                  >
                    <p className="text-[10px] sm:text-[11px] font-light uppercase tracking-[0.24em] text-[#7A6855] leading-[1.55]">
                      JOIAS PARA
                      <br />
                      HISTÓRIAS REAIS
                    </p>

                    <h1
                      className={`font-serif ${viewport === "mobile"
                          ? "text-4xl"
                          : "text-5xl sm:text-[3.65rem]"
                        } font-normal text-[#3D2B1F] leading-[1.02] tracking-[-0.01em]`}
                    >
                      O brilho dos
                      <br />
                      seus momentos
                    </h1>

                    <p className="text-xs sm:text-[15px] font-light text-[#6E5D4D] leading-[1.5]">
                      Joias que celebram o agora e acompanham
                      <br className="hidden sm:inline" /> todas as suas versões.
                    </p>

                    <div className="pt-1.5">
                      <a
                        href="#vitrine-produtos"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-[3px] text-xs sm:text-[13px] font-normal tracking-[0.03em] transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: project.theme.accent,
                          color: "#FAF7F2",
                        }}
                      >
                        <span>Descubra a coleção</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${viewport === "mobile" ? "max-w-full" : "max-w-[440px]"
                      } space-y-3 sm:space-y-4`}
                  >
                    <h1
                      className={`font-serif ${viewport === "mobile"
                          ? "text-4xl text-white"
                          : "text-5xl sm:text-[3.65rem] text-[#1E1C1A]"
                        } font-normal leading-[1.0] tracking-[-0.01em]`}
                    >
                      Essência
                      <br />
                      contemporânea
                    </h1>

                    <p
                      className={`text-[10px] sm:text-[11px] font-light uppercase tracking-[0.24em] leading-[1.55] ${viewport === "mobile"
                          ? "text-white/85"
                          : "text-[#5A534A]"
                        }`}
                    >
                      MODA ATEMPORAL PARA
                      <br />
                      MULHERES REAIS
                    </p>

                    <div className="pt-1.5">
                      <a
                        href="#vitrine-produtos"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-[3px] text-xs sm:text-[13px] font-normal tracking-[0.03em] transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: project.theme.accent,
                          color: "#FAF8F5",
                        }}
                      >
                        <span>Explore a coleção</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Categories Section — Editorial Symmetrical Grid */}
          <div
            className={`${viewport === "mobile"
                ? "px-5 pt-6 pb-2"
                : "px-6 sm:px-14 pt-9 pb-3"
              }`}
          >
            <div
              className="pb-6 border-b space-y-4"
              style={{ borderColor: project.theme.border }}
            >
              {/* Refined Editorial Header */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rotate-45"
                    style={{ backgroundColor: project.theme.accent }}
                  />
                  <span
                    className={
                      isJewelry
                        ? "text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-normal text-[#6E5D4D]"
                        : "text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-normal text-[#5A534A]"
                    }
                  >
                    Curadoria por categoria
                  </span>
                </div>

                {activeCategory !== defaultCategory ? (
                  <button
                    type="button"
                    onClick={() => setActiveCategory(defaultCategory)}
                    className="text-[11px] font-light underline underline-offset-4 transition-opacity hover:opacity-75"
                    style={{ color: project.theme.textPrimary }}
                  >
                    Ver todas ({project.products.length})
                  </button>
                ) : (
                  <span
                    className="font-serif italic text-xs sm:text-[13px]"
                    style={{ color: project.theme.textMuted }}
                  >
                    0{project.products.length} peças na coleção
                  </span>
                )}
              </div>

              {/* Symmetrical Category Grid: 1 Full-Width + 2x2 on Mobile | 5-Column Flush Row on Desktop */}
              <div
                className={`grid gap-2 sm:gap-2.5 ${viewport === "mobile"
                    ? "grid-cols-2"
                    : "grid-cols-2 sm:grid-cols-5"
                  }`}
              >
                {project.categories.map((cat, idx) => {
                  const isActive = activeCategory === cat;
                  const isFirst = idx === 0;
                  const count =
                    cat === defaultCategory
                      ? project.products.length
                      : project.products.filter((p) => p.category === cat).length;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`group relative overflow-hidden flex items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-[6px] transition-all duration-300 border text-left ${isFirst
                          ? viewport === "mobile"
                            ? "col-span-2"
                            : "col-span-2 sm:col-span-1"
                          : "col-span-1"
                        } ${isActive ? "shadow-sm" : "hover:opacity-90"}`}
                      style={
                        isActive
                          ? {
                            backgroundColor: project.theme.accent,
                            color: project.theme.bgPrimary,
                            borderColor: project.theme.accent,
                          }
                          : {
                            backgroundColor: project.theme.bgSecondary,
                            color: project.theme.textPrimary,
                            borderColor: project.theme.border,
                          }
                      }
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : "opacity-45 group-hover:opacity-80"
                            }`}
                          style={{
                            backgroundColor: isActive
                              ? project.theme.bgPrimary
                              : project.theme.accent,
                          }}
                        />
                        <span className="font-serif text-[15px] sm:text-base tracking-[0.02em] font-normal truncate">
                          {isFirst && viewport === "mobile"
                            ? `${cat} — Coleção completa`
                            : cat}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] tracking-[0.14em] px-2 py-0.5 rounded-full shrink-0 font-light transition-colors ${isActive
                            ? "bg-white/15"
                            : "bg-black/[0.04]"
                          }`}
                      >
                        0{count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Featured Products Section — Strictly Aligned Margins (px-6 sm:px-14) */}
          <div
            id="vitrine-produtos"
            className={`${viewport === "mobile" ? "px-5 py-6" : "px-6 sm:px-14 py-8 sm:py-10"
              } space-y-6`}
          >
            {/* Section Title & "Ver todos ->" Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2
                  className={
                    isJewelry
                      ? "text-xs sm:text-[13px] uppercase tracking-[0.2em] font-normal text-[#4E3B2B]"
                      : "font-serif text-xl sm:text-[22px] font-normal text-[#1E1C1A]"
                  }
                >
                  {isJewelry ? "NOSSAS FAVORITAS" : "Destaques da coleção"}
                </h2>
                {activeCategory !== defaultCategory && (
                  <span
                    className="text-[11px] px-2.5 py-0.5 rounded-[3px] font-light"
                    style={{
                      backgroundColor: project.theme.bgSecondary,
                      color: project.theme.textPrimary,
                    }}
                  >
                    {activeCategory}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setActiveCategory(defaultCategory)}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-900 underline underline-offset-4 font-light transition-colors"
              >
                <span>Ver todos</span>
                <ArrowRight className="w-3 h-3 stroke-[1.5]" />
              </button>
            </div>

            {/* Clean 3-Column Product Cards Grid — Exact Proportions & Zero Margin Overflow */}
            <div
              className={`grid ${viewport === "mobile"
                  ? "grid-cols-2 gap-3.5"
                  : "grid-cols-1 sm:grid-cols-3 gap-6"
                }`}
            >
              {filteredProducts.map((product) => {
                const isFav = !!favorites[product.id];
                return (
                  <div
                    key={product.id}
                    onClick={() => openProductModal(product)}
                    className="group cursor-pointer space-y-2.5"
                  >
                    {/* Product Image Rectangle */}
                    <div className="aspect-[1.48/1] w-full overflow-hidden bg-neutral-200 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      {isJewelry && (
                        <button
                          type="button"
                          onClick={(e) => toggleFavorite(product.id, e)}
                          aria-label="Adicionar aos favoritos"
                          className="absolute top-3 right-3 p-1 text-[#4E3B2B] hover:scale-110 transition-transform"
                        >
                          <Heart
                            className={`w-4 h-4 stroke-[1.4] ${isFav ? "fill-current" : ""
                              }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Product Title, Price & Heart Row (Strictly Aligned Within Card Width) */}
                    <div className="flex items-start justify-between gap-2 pt-0.5">
                      <div className="min-w-0">
                        <h3 className="font-serif text-[15px] sm:text-[17px] font-normal text-[#1E1C1A] leading-snug truncate group-hover:underline">
                          {product.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] font-light text-neutral-700 mt-0.5">
                          {isJewelry
                            ? product.price.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })
                            : `R$ ${product.price}`}
                        </p>
                      </div>

                      {!isJewelry && (
                        <button
                          type="button"
                          onClick={(e) => toggleFavorite(product.id, e)}
                          aria-label="Adicionar aos favoritos"
                          className="p-0.5 text-neutral-700 hover:text-black transition-colors shrink-0 mt-0.5"
                        >
                          <Heart
                            className={`w-4 h-4 stroke-[1.5] ${isFav ? "fill-current" : ""
                              }`}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Minimal Store Footer — Aligned to Same Margins (px-6 sm:px-14) */}
          <div
            className={`${viewport === "mobile" ? "px-5 py-6" : "px-6 sm:px-14 py-8"
              } border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-4`}
            style={{
              borderColor: project.theme.border,
              backgroundColor: project.theme.bgPrimary,
              color: project.theme.textMuted,
            }}
          >
            <div>
              <span
                className="font-serif text-sm tracking-[0.22em] font-normal mr-3"
                style={{ color: project.theme.textPrimary }}
              >
                {project.name}
              </span>
              <span className="font-light">
                Projeto Conceitual Demonstrativo — Lemury
              </span>
            </div>
            <div className="flex items-center gap-4 font-light">
              <span>PIX • Cartão em até 6x</span>
              <span>•</span>
              <span>Envio para todo o Brasil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Pop-up Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[3px] flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full overflow-y-auto shadow-2xl border relative transition-all ${
              viewport === "mobile"
                ? "max-w-[345px] max-h-[82vh] rounded-2xl grid grid-cols-1"
                : "max-w-[345px] md:max-w-2xl max-h-[85vh] rounded-2xl grid grid-cols-1 md:grid-cols-12"
            }`}
            style={{
              backgroundColor: project.theme.bgPrimary,
              borderColor: project.theme.border,
              color: project.theme.textPrimary,
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Fechar detalhes do produto"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-black/70 text-white hover:bg-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div
              className={`${
                viewport === "mobile"
                  ? "h-44 w-full"
                  : "h-44 md:h-auto md:col-span-6"
              } bg-neutral-200 overflow-hidden`}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`${
                viewport === "mobile"
                  ? "p-4 space-y-4"
                  : "p-4 sm:p-6 md:col-span-6 space-y-5"
              } flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.16em] font-light"
                      style={{ color: project.theme.textMuted }}
                    >
                      {selectedProduct.category}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight mt-0.5">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-base sm:text-lg font-medium">
                      {selectedProduct.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <p
                      className="text-[10px] font-light"
                      style={{ color: project.theme.textMuted }}
                    >
                      {selectedProduct.installments}
                    </p>
                  </div>
                </div>

                <p
                  className="text-xs sm:text-sm font-light leading-relaxed line-clamp-3"
                  style={{ color: project.theme.textMuted }}
                >
                  {selectedProduct.description}
                </p>

                <div
                  className="p-2.5 rounded-md border text-[11px] font-light"
                  style={{
                    borderColor: project.theme.border,
                    backgroundColor: project.theme.bgSecondary,
                  }}
                >
                  <strong className="font-medium">Composição:</strong>{" "}
                  {selectedProduct.composition}
                </div>

                {/* Option Selector */}
                <div className="space-y-1.5 pt-0.5">
                  <label className="block text-[10px] uppercase tracking-[0.14em]">
                    Selecione: {selectedProduct.optionsLabel}
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedOption(opt)}
                        className="px-3 py-1.5 rounded-[4px] text-[11px] transition-all border"
                        style={
                          selectedOption === opt
                            ? {
                              backgroundColor: project.theme.accent,
                              color: project.theme.bgPrimary,
                              borderColor: project.theme.accent,
                            }
                            : {
                              borderColor: project.theme.border,
                            }
                        }
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addToCart(selectedProduct, selectedOption)}
                className="w-full py-3 px-5 rounded-[6px] text-xs uppercase tracking-[0.16em] font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: project.theme.accent,
                  color: project.theme.bgPrimary,
                }}
              >
                Adicionar à Sacola
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Bag & Checkout Simulation Pop-up / Drawer */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-[3px] flex ${
            viewport === "mobile"
              ? "items-center justify-center p-4"
              : "items-center justify-center p-4 md:p-0 md:justify-end"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full flex flex-col justify-between overflow-y-auto shadow-2xl border transition-all ${
              viewport === "mobile"
                ? "max-w-[345px] max-h-[84vh] rounded-2xl p-4 sm:p-5"
                : "max-w-[345px] max-h-[84vh] rounded-2xl p-4 sm:p-5 md:max-w-md md:max-h-none md:h-full md:rounded-none md:border-y-0 md:border-r-0 md:p-6"
            }`}
            style={{
              backgroundColor: project.theme.bgPrimary,
              borderColor: project.theme.border,
              color: project.theme.textPrimary,
            }}
          >
            <div className="space-y-4 sm:space-y-5">
              <div
                className="flex items-center justify-between pb-3.5 border-b"
                style={{ borderColor: project.theme.border }}
              >
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal">
                    Sacola de Compras
                  </h3>
                  <p
                    className="text-[11px] font-light"
                    style={{ color: project.theme.textMuted }}
                  >
                    {totalItems} {totalItems === 1 ? "item selecionado" : "itens selecionados"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  aria-label="Fechar sacola"
                  className="p-1.5 rounded-full border hover:opacity-75 transition-opacity"
                  style={{ borderColor: project.theme.border }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {cart.length === 0 ? (
                <p
                  className="text-sm py-10 text-center font-light"
                  style={{ color: project.theme.textMuted }}
                >
                  Sua sacola demonstrativa está vazia.
                </p>
              ) : (
                <div className="space-y-3 max-h-[240px] md:max-h-none overflow-y-auto pr-0.5">
                  {cart.map((item, idx) => (
                    <div
                      key={`${item.product.id}-${item.selectedOption}`}
                      className="flex gap-3 p-2.5 rounded-lg border"
                      style={{ borderColor: project.theme.border }}
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-14 object-cover rounded-[4px] shrink-0"
                      />
                      <div className="flex-1 min-w-0 space-y-0.5">
                        <p className="font-serif text-sm sm:text-base font-normal leading-snug truncate">
                          {item.product.name}
                        </p>
                        <p
                          className="text-[11px] font-light truncate"
                          style={{ color: project.theme.textMuted }}
                        >
                          {item.product.optionsLabel}: {item.selectedOption}
                        </p>
                        <div className="flex items-center justify-between pt-1">
                          <div className="inline-flex items-center gap-2 border rounded px-2 py-0.5">
                            <button
                              type="button"
                              onClick={() => updateQuantity(idx, -1)}
                              aria-label="Diminuir quantidade"
                            >
                              <Minus className="w-2.5 h-2.5" />
                            </button>
                            <span className="text-[11px] font-normal">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(idx, 1)}
                              aria-label="Aumentar quantidade"
                            >
                              <Plus className="w-2.5 h-2.5" />
                            </button>
                          </div>
                          <span className="text-xs font-medium">
                            {(item.product.price * item.quantity).toLocaleString(
                              "pt-BR",
                              { style: "currency", currency: "BRL" }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Shipping Calculator Simulation */}
              {cart.length > 0 && (
                <div
                  className="p-3 sm:p-3.5 rounded-lg border space-y-2.5"
                  style={{
                    borderColor: project.theme.border,
                    backgroundColor: project.theme.bgSecondary,
                  }}
                >
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider">
                    <Truck className="w-3.5 h-3.5 stroke-[1.5]" />
                    <span>Simulador de Frete</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      placeholder="Digite seu CEP"
                      className="flex-1 min-w-0 px-3 py-1.5 rounded-[4px] text-xs border bg-white text-black"
                      style={{ borderColor: project.theme.border }}
                    />
                    <button
                      type="button"
                      onClick={() => setShippingCalculated(true)}
                      className="px-3 py-1.5 rounded-[4px] text-xs shrink-0"
                      style={{
                        backgroundColor: project.theme.accent,
                        color: project.theme.bgPrimary,
                      }}
                    >
                      Calcular
                    </button>
                  </div>
                  {shippingCalculated && (
                    <div className="text-[11px] space-y-1 pt-0.5 font-light">
                      <div className="flex justify-between">
                        <span>Correios SEDEX (2 a 3 dias)</span>
                        <span className="font-medium">Grátis</span>
                      </div>
                      <div className="flex justify-between opacity-75">
                        <span>Retirada na Loja Física</span>
                        <span>Em 2h</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Checkout Action */}
            {cart.length > 0 && (
              <div
                className="pt-3.5 mt-3.5 border-t space-y-3"
                style={{ borderColor: project.theme.border }}
              >
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-light">Subtotal do pedido</span>
                  <span className="text-base sm:text-lg font-medium">
                    {subtotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>

                {!checkoutDone ? (
                  <button
                    type="button"
                    onClick={() => setCheckoutDone(true)}
                    className="w-full py-3 px-4 rounded-[6px] text-xs uppercase tracking-[0.15em] font-normal"
                    style={{
                      backgroundColor: project.theme.accent,
                      color: project.theme.bgPrimary,
                    }}
                  >
                    Simular Finalização de Compra
                  </button>
                ) : (
                  <div className="p-3.5 rounded-lg bg-lemury-green text-lemury-cream space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 font-medium">
                      <Check className="w-4 h-4 shrink-0" />
                      <span>Demonstração Concluída</span>
                    </div>
                    <p className="text-lemury-cream/85 leading-relaxed font-light text-[11px]">
                      Esta é a experiência que a Lemury implanta para o seu
                      negócio: catálogo organizado, sacola fluida e checkout
                      transparente.
                    </p>
                    <a
                      href={CONTACT_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 underline font-medium pt-0.5 text-lemury-cream"
                    >
                      <span>Falar com a Lemury sobre minha loja</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                <div
                  className="flex items-center justify-center gap-1.5 text-[10px] font-light"
                  style={{ color: project.theme.textMuted }}
                >
                  <ShieldCheck className="w-3 h-3 stroke-[1.5]" />
                  <span>Ambiente Demonstrativo • Lemury</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
