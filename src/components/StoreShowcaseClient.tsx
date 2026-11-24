"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const themeClass = isJewelry
    ? "store-theme-maison-aurea"
    : "store-theme-atelier-noir";
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
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Horizontal drag-to-scroll for categories row
  const catScrollRef = useRef<HTMLDivElement | null>(null);
  const isDraggingCat = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const dragMoved = useRef(false);

  const handleCatMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!catScrollRef.current) return;
    isDraggingCat.current = true;
    dragMoved.current = false;
    dragStartX.current = e.pageX - catScrollRef.current.offsetLeft;
    dragScrollLeft.current = catScrollRef.current.scrollLeft;
  };

  const handleCatMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingCat.current || !catScrollRef.current) return;
    const x = e.pageX - catScrollRef.current.offsetLeft;
    const walk = x - dragStartX.current;
    if (Math.abs(walk) > 5) {
      dragMoved.current = true;
    }
    catScrollRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleCatMouseUp = () => {
    isDraggingCat.current = false;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
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
    <div className={`${themeClass} min-h-screen bg-[#151716] flex flex-col`}>
      {/* Lemury Studio Demonstration Control Bar */}
      <header className="sticky top-0 z-50 bg-lemury-green text-lemury-cream border-b border-lemury-cream/15 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              scroll={false}
              onClick={() => {
                try {
                  sessionStorage.setItem("lemury_portfolio_last_slug", project.slug);
                } catch {
                  // Ignore storage access errors
                }
              }}
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
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  viewport === "desktop"
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
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  viewport === "mobile"
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
          className={`w-full transition-all duration-300 shadow-2xl overflow-hidden bg-[var(--store-bg-primary)] text-[var(--store-text-primary)] ${
            viewport === "mobile"
              ? "md:max-w-[390px] md:rounded-[34px] md:border-[8px] md:border-[#1E1E20] md:my-4"
              : "max-w-[1120px] md:rounded-xl border border-white/10"
          }`}
        >
          {/* Store Top Navigation Bar — Exact Margin Alignment (px-6 sm:px-14) */}
          <div
            className={`${
              viewport === "mobile" ? "px-5 py-4" : "px-6 sm:px-14 py-6"
            } flex items-center justify-between sticky top-0 z-30 backdrop-blur-md bg-[var(--store-bg-primary-alpha)]`}
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
                    className={`text-[13px] font-light tracking-[0.03em] py-0.5 border-b transition-all ${
                      activeCategory === cat
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

          {/* Full-Width Studio Hero Banner */}
          <div className="relative w-full overflow-hidden">
            <div
              className={`relative w-full ${
                viewport === "mobile"
                  ? "h-[350px]"
                  : "aspect-[1500/540] min-h-[340px]"
              }`}
            >
              <img
                src={project.heroImage}
                alt={`Banner principal ${project.name}`}
                className={`w-full h-full object-cover ${
                  viewport === "mobile" ? "object-right" : "object-center"
                }`}
              />

              {/* Mobile Subtle Gradient for Text Readability */}
              {viewport === "mobile" && (
                <div
                  className={`absolute inset-0 ${
                    isJewelry
                      ? "bg-[linear-gradient(180deg,rgba(250,247,242,0.10)_0%,rgba(250,247,242,0.96)_72%)]"
                      : "bg-[linear-gradient(180deg,rgba(28,26,23,0.10)_0%,rgba(28,26,23,0.65)_100%)]"
                  }`}
                />
              )}

              {/* Light & Minimalist Storefront Typography */}
              <div
                className={`absolute inset-0 ${
                  viewport === "mobile"
                    ? "px-5 pb-6 flex flex-col justify-end"
                    : "px-6 sm:px-14 flex flex-col justify-center"
                }`}
              >
                {isJewelry ? (
                  <div
                    className={`${
                      viewport === "mobile" ? "max-w-full" : "max-w-[460px]"
                    } space-y-3 sm:space-y-4`}
                  >
                    <p className="text-[10px] sm:text-[11px] font-light uppercase tracking-[0.24em] text-[#7A6855] leading-[1.55]">
                      JOIAS PARA
                      <br />
                      HISTÓRIAS REAIS
                    </p>

                    <h1
                      className={`font-serif ${
                        viewport === "mobile"
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
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-[3px] text-xs sm:text-[13px] font-normal tracking-[0.03em] transition-opacity hover:opacity-90 bg-[var(--store-accent)] text-[#FAF7F2]"
                      >
                        <span>Descubra a coleção</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${
                      viewport === "mobile" ? "max-w-full" : "max-w-[440px]"
                    } space-y-3 sm:space-y-4`}
                  >
                    <h1
                      className={`font-serif ${
                        viewport === "mobile"
                          ? "text-4xl text-white"
                          : "text-5xl sm:text-[3.65rem] text-[#1E1C1A]"
                      } font-normal leading-[1.0] tracking-[-0.01em]`}
                    >
                      Essência
                      <br />
                      contemporânea
                    </h1>

                    <p
                      className={`text-[10px] sm:text-[11px] font-light uppercase tracking-[0.24em] leading-[1.55] ${
                        viewport === "mobile"
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
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-[3px] text-xs sm:text-[13px] font-normal tracking-[0.03em] transition-opacity hover:opacity-90 bg-[var(--store-accent)] text-[#FAF8F5]"
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

          {/* Categories Section — Horizontal Circular Medallions with Drag/Swipe */}
          <div
            className={
              viewport === "mobile"
                ? "px-5 pt-6 pb-2"
                : "px-6 sm:px-14 pt-9 pb-3"
            }
          >
            <div className="pb-6 border-b border-[var(--store-border)] space-y-4">
              {/* Refined Editorial Header */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[var(--store-accent)]" />
                  <span
                    className={
                      isJewelry
                        ? "text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-normal text-[#6E5D4D]"
                        : "text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-normal text-[#5A534A]"
                    }
                  >
                    Categorias
                  </span>
                </div>

                {activeCategory !== defaultCategory ? (
                  <button
                    type="button"
                    onClick={() => setActiveCategory(defaultCategory)}
                    className="text-[11px] font-light underline underline-offset-4 transition-opacity hover:opacity-75 text-[var(--store-text-primary)]"
                  >
                    Ver todas ({project.products.length})
                  </button>
                ) : (
                  <span className="font-serif italic text-xs sm:text-[13px] text-[var(--store-text-muted)]">
                    Arraste ou selecione para filtrar →
                  </span>
                )}
              </div>

              {/* Horizontal Scrollable / Draggable Circular Category Row */}
              <div
                ref={catScrollRef}
                onMouseDown={handleCatMouseDown}
                onMouseMove={handleCatMouseMove}
                onMouseUp={handleCatMouseUp}
                onMouseLeave={handleCatMouseUp}
                className={`flex items-start ${
                  viewport === "mobile"
                    ? "gap-4"
                    : "gap-5 sm:gap-8 sm:justify-between"
                } overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing py-1 -mx-1 px-1`}
              >
                {project.categories.map((cat, idx) => {
                  const isActive = activeCategory === cat;
                  const count =
                    cat === defaultCategory
                      ? project.products.length
                      : project.products.filter((p) => p.category === cat).length;

                  const catProduct =
                    idx === 0
                      ? project.products[5] || project.products[0]
                      : project.products.find((p) => p.category === cat) ||
                        project.products[0];

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        if (dragMoved.current) return;
                        setActiveCategory(cat);
                      }}
                      className="group shrink-0 flex flex-col items-center gap-2 text-center focus:outline-none"
                    >
                      {/* Circular Product Photo Medallion */}
                      <div
                        className={`relative rounded-full p-[3px] transition-all duration-300 bg-[var(--store-bg-primary)] ${
                          isActive
                            ? "border-2 border-[var(--store-accent)] scale-[1.04] shadow-md"
                            : "border border-[var(--store-border)] opacity-85 group-hover:opacity-100 group-hover:scale-[1.02]"
                        }`}
                      >
                        <div
                          className={`${
                            viewport === "mobile"
                              ? "w-16 h-16"
                              : "w-16 h-16 sm:w-20 sm:h-20"
                          } rounded-full overflow-hidden bg-neutral-200 relative`}
                        >
                          <img
                            src={catProduct.image}
                            alt={cat}
                            draggable={false}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div
                            className={`absolute inset-0 transition-opacity duration-300 ${
                              isActive
                                ? "bg-black/0"
                                : "bg-black/[0.06] group-hover:bg-black/0"
                            }`}
                          />
                        </div>

                        {/* Subtle Item Count Pill on Bottom Right of Circle */}
                        <span
                          className={`absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full text-[9px] font-medium flex items-center justify-center border shadow-sm transition-colors ${
                            isActive
                              ? "bg-[var(--store-accent)] text-[var(--store-bg-primary)] border-[var(--store-bg-primary)]"
                              : "bg-[var(--store-bg-secondary)] text-[var(--store-text-primary)] border-[var(--store-border)]"
                          }`}
                        >
                          {count}
                        </span>
                      </div>

                      {/* Category Name Below Circle */}
                      <div className="flex flex-col items-center gap-1">
                        <span
                          className={`font-serif ${
                            viewport === "mobile"
                              ? "text-xs"
                              : "text-xs sm:text-[14px]"
                          } tracking-[0.02em] whitespace-nowrap transition-all text-[var(--store-text-primary)] ${
                            isActive
                              ? "font-medium"
                              : "font-normal opacity-80 group-hover:opacity-100"
                          }`}
                        >
                          {cat}
                        </span>
                        <span
                          className={`h-[1.5px] rounded-full transition-all duration-300 bg-[var(--store-accent)] ${
                            isActive
                              ? "w-5 opacity-100"
                              : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-40"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Featured Products Section — Strictly Aligned Margins (px-6 sm:px-14) */}
          <div
            id="vitrine-produtos"
            className={`${
              viewport === "mobile" ? "px-5 py-6" : "px-6 sm:px-14 py-8 sm:py-10"
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
                  <span className="text-[11px] px-2.5 py-0.5 rounded-[3px] font-light bg-[var(--store-bg-secondary)] text-[var(--store-text-primary)]">
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

            {/* Clean 3-Column Product Cards Grid */}
            <div
              className={`grid ${
                viewport === "mobile"
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
                            className={`w-4 h-4 stroke-[1.4] ${
                              isFav ? "fill-current" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Product Title, Price & Heart Row */}
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
                            className={`w-4 h-4 stroke-[1.5] ${
                              isFav ? "fill-current" : ""
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

          {/* Realistic Boutique E-commerce Footer */}
          <footer className="border-t border-[var(--store-border)] bg-[var(--store-bg-primary)] text-[var(--store-text-primary)] mt-4">
            {/* 1. Boutique Trust & Service Strip */}
            <div className="border-b border-[var(--store-border)] bg-[var(--store-bg-secondary)]">
              <div
                className={`grid border-[var(--store-border)] ${
                  viewport === "mobile"
                    ? "grid-cols-1 divide-y divide-[var(--store-border)]"
                    : "grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--store-border)]"
                }`}
              >
                {(isJewelry
                  ? [
                      {
                        icon: Truck,
                        title: "Envio com Seguro & Estojo",
                        desc: "Acompanha estojo de veludo e embalagem presenteável",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Garantia & Autenticidade",
                        desc: "Banho Ouro 18k hipoalergênico com 1 ano de garantia",
                      },
                      {
                        icon: Heart,
                        title: "Condições Exclusivas",
                        desc: "Até 6x sem juros no cartão ou 5% de desconto no PIX",
                      },
                    ]
                  : [
                      {
                        icon: Truck,
                        title: "Envio para todo o Brasil",
                        desc: "Frete cortesia acima de R$ 450 e embalagem perfumada",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Primeira Troca Cortesia",
                        desc: "Até 30 dias após o recebimento com logística reversa",
                      },
                      {
                        icon: Heart,
                        title: "Pagamento Facilitado",
                        desc: "Até 6x sem juros no cartão ou 5% de desconto no PIX",
                      },
                    ]
                ).map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`${
                        viewport === "mobile" ? "px-5 py-3.5" : "px-6 sm:px-8 py-5"
                      } flex items-start gap-3.5`}
                    >
                      <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[var(--store-border)] bg-[var(--store-bg-primary)] text-[var(--store-accent)] mt-0.5">
                        <IconComp className="w-3.5 h-3.5 stroke-[1.5]" />
                      </span>
                      <div className="space-y-0.5">
                        <p className="font-serif text-sm sm:text-[15px] font-medium leading-snug">
                          {item.title}
                        </p>
                        <p className="text-[11px] sm:text-xs font-light leading-relaxed text-[var(--store-text-muted)]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Main Boutique Footer Columns */}
            <div
              className={
                viewport === "mobile"
                  ? "px-5 py-8 space-y-8"
                  : "px-6 sm:px-14 py-12 grid grid-cols-1 md:grid-cols-12 gap-10"
              }
            >
              {/* Brand Manifesto & Showroom */}
              <div
                className={`${
                  viewport === "mobile" ? "" : "md:col-span-4"
                } space-y-3.5`}
              >
                <p className="font-serif text-lg sm:text-xl tracking-[0.26em] font-normal">
                  {project.name}
                </p>
                <p className="text-xs leading-relaxed font-light max-w-xs text-[var(--store-text-muted)]">
                  {isJewelry
                    ? "Joalheria contemporânea com design autoral, pérolas naturais de água doce e acabamento artesanal em Ouro 18k."
                    : "Alfaiataria feminina e peças atemporais em fibras naturais, desenhadas para acompanhar o ritmo da mulher contemporânea."}
                </p>
                <div className="pt-1 text-[11px] font-light space-y-1 text-[var(--store-text-muted)]">
                  <p>
                    <strong className="font-normal text-[var(--store-text-primary)]">
                      Atendimento:
                    </strong>{" "}
                    Seg a Sex, das 9h às 18h
                  </p>
                  <p>
                    {isJewelry
                      ? "concierge@maisonaurea.com.br"
                      : "atendimento@ateliernoir.com.br"}
                  </p>
                </div>
              </div>

              {/* Navigation Columns */}
              <div
                className={
                  viewport === "mobile"
                    ? "grid grid-cols-2 gap-6 pt-6 border-t border-[var(--store-border)]"
                    : "md:col-span-4 grid grid-cols-2 gap-6"
                }
              >
                {/* Categories Column */}
                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-medium">
                    Coleções
                  </p>
                  <ul className="space-y-2 text-xs font-light">
                    {project.categories.map((cat) => (
                      <li key={cat}>
                        <a
                          href="#vitrine-produtos"
                          onClick={() => setActiveCategory(cat)}
                          className="hover:underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100"
                        >
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Customer Care Column */}
                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-medium">
                    Cliente
                  </p>
                  <ul className="space-y-2 text-xs font-light text-[var(--store-text-muted)]">
                    {(isJewelry
                      ? [
                          "Guia de Aros & Medidas",
                          "Garantia e Cuidados",
                          "Embalagem para Presente",
                          "Trocas e Devoluções",
                          "Rastrear Pedido",
                        ]
                      : [
                          "Guia de Medidas",
                          "Cuidados com o Linho",
                          "Trocas e Devoluções",
                          "Prazo e Entrega",
                          "Rastrear Pedido",
                        ]
                    ).map((item) => (
                      <li key={item}>
                        <button
                          type="button"
                          onClick={() => setCartOpen(true)}
                          className="text-left hover:underline underline-offset-4 transition-opacity hover:opacity-100"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter / VIP Club Column */}
              <div
                className={`${
                  viewport === "mobile"
                    ? "pt-6 border-t border-[var(--store-border)]"
                    : "md:col-span-4"
                } space-y-3`}
              >
                <p className="text-[10px] uppercase tracking-[0.22em] font-medium">
                  {isJewelry ? "Clube Maison Aurea" : "Newsletter Atelier"}
                </p>
                <p className="text-xs font-light leading-relaxed text-[var(--store-text-muted)]">
                  {isJewelry
                    ? "Cadastre-se para receber lançamentos exclusivos e ganhe 10% de cortesia na primeira joia."
                    : "Inscreva-se para conhecer novas coleções em primeira mão com 10% de cortesia na primeira compra."}
                </p>

                {!newsletterSubmitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (newsletterEmail.trim()) {
                        setNewsletterSubmitted(true);
                      }
                    }}
                    className="pt-1 flex items-center gap-1.5"
                  >
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      className="flex-1 min-w-0 px-3 py-2.5 rounded-[4px] text-xs font-light border border-[var(--store-border)] text-[var(--store-text-primary)] bg-white/80 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-[4px] text-[11px] uppercase tracking-[0.14em] font-normal shrink-0 transition-opacity hover:opacity-90 bg-[var(--store-accent)] text-[var(--store-bg-primary)]"
                    >
                      Assinar
                    </button>
                  </form>
                ) : (
                  <div className="p-3 rounded-[4px] border border-[var(--store-border)] bg-[var(--store-bg-secondary)] text-xs flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0 text-[var(--store-accent)]" />
                    <span className="font-light">
                      Inscrição confirmada! Cupom:{" "}
                      <strong className="font-medium">BEMVINDA10</strong>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 3. Bottom Payment Badges, Security & Copyright Bar */}
            <div
              className={`${
                viewport === "mobile"
                  ? "px-5 py-5 flex-col items-start"
                  : "px-6 sm:px-14 py-6 flex-col sm:flex-row items-center"
              } border-t border-[var(--store-border)] bg-[var(--store-bg-secondary)] text-[var(--store-text-muted)] flex justify-between gap-4 text-[11px] font-light`}
            >
              <div className="space-y-0.5">
                <p>
                  © {new Date().getFullYear()} {project.name}. Todos os direitos
                  reservados.
                </p>
                <p className="text-[10px] opacity-75">
                  E-commerce demonstrativo implantado por{" "}
                  <strong className="font-normal text-[var(--store-text-primary)]">
                    Lemury
                  </strong>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {["PIX", "Visa", "Mastercard", "Amex", "Elo", "6x Sem Juros"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5 rounded-[3px] border border-[var(--store-border)] bg-[var(--store-bg-primary)] text-[var(--store-text-primary)] text-[10px] tracking-[0.06em] uppercase"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </footer>
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
            className={`w-full overflow-y-auto shadow-2xl border border-[var(--store-border)] bg-[var(--store-bg-primary)] text-[var(--store-text-primary)] relative transition-all ${
              viewport === "mobile"
                ? "max-w-[345px] max-h-[82vh] rounded-2xl grid grid-cols-1"
                : "max-w-[345px] md:max-w-2xl max-h-[85vh] rounded-2xl grid grid-cols-1 md:grid-cols-12"
            }`}
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
                    <p className="text-[10px] uppercase tracking-[0.16em] font-light text-[var(--store-text-muted)]">
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
                    <p className="text-[10px] font-light text-[var(--store-text-muted)]">
                      {selectedProduct.installments}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-light leading-relaxed line-clamp-3 text-[var(--store-text-muted)]">
                  {selectedProduct.description}
                </p>

                <div className="p-2.5 rounded-md border border-[var(--store-border)] bg-[var(--store-bg-secondary)] text-[11px] font-light">
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
                        className={`px-3 py-1.5 rounded-[4px] text-[11px] transition-all border ${
                          selectedOption === opt
                            ? "bg-[var(--store-accent)] text-[var(--store-bg-primary)] border-[var(--store-accent)]"
                            : "border-[var(--store-border)]"
                        }`}
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
                className="w-full py-3 px-5 rounded-[6px] text-xs uppercase tracking-[0.16em] font-medium transition-opacity hover:opacity-90 bg-[var(--store-accent)] text-[var(--store-bg-primary)]"
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
            className={`w-full flex flex-col justify-between overflow-y-auto shadow-2xl border border-[var(--store-border)] bg-[var(--store-bg-primary)] text-[var(--store-text-primary)] transition-all ${
              viewport === "mobile"
                ? "max-w-[345px] max-h-[84vh] rounded-2xl p-4 sm:p-5"
                : "max-w-[345px] max-h-[84vh] rounded-2xl p-4 sm:p-5 md:max-w-md md:max-h-none md:h-full md:rounded-none md:border-y-0 md:border-r-0 md:p-6"
            }`}
          >
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-[var(--store-border)]">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal">
                    Sacola de Compras
                  </h3>
                  <p className="text-[11px] font-light text-[var(--store-text-muted)]">
                    {totalItems}{" "}
                    {totalItems === 1 ? "item selecionado" : "itens selecionados"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  aria-label="Fechar sacola"
                  className="p-1.5 rounded-full border border-[var(--store-border)] hover:opacity-75 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-sm py-10 text-center font-light text-[var(--store-text-muted)]">
                  Sua sacola demonstrativa está vazia.
                </p>
              ) : (
                <div className="space-y-3 max-h-[240px] md:max-h-none overflow-y-auto pr-0.5">
                  {cart.map((item, idx) => (
                    <div
                      key={`${item.product.id}-${item.selectedOption}`}
                      className="flex gap-3 p-2.5 rounded-lg border border-[var(--store-border)]"
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
                        <p className="text-[11px] font-light truncate text-[var(--store-text-muted)]">
                          {item.product.optionsLabel}: {item.selectedOption}
                        </p>
                        <div className="flex items-center justify-between pt-1">
                          <div className="inline-flex items-center gap-2 border border-[var(--store-border)] rounded px-2 py-0.5">
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
                <div className="p-3 sm:p-3.5 rounded-lg border border-[var(--store-border)] bg-[var(--store-bg-secondary)] space-y-2.5">
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
                      className="flex-1 min-w-0 px-3 py-1.5 rounded-[4px] text-xs border border-[var(--store-border)] bg-white text-black"
                    />
                    <button
                      type="button"
                      onClick={() => setShippingCalculated(true)}
                      className="px-3 py-1.5 rounded-[4px] text-xs shrink-0 bg-[var(--store-accent)] text-[var(--store-bg-primary)]"
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
              <div className="pt-3.5 mt-3.5 border-t border-[var(--store-border)] space-y-3">
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
                    className="w-full py-3 px-4 rounded-[6px] text-xs uppercase tracking-[0.15em] font-normal bg-[var(--store-accent)] text-[var(--store-bg-primary)]"
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

                <div className="flex items-center justify-center gap-1.5 text-[10px] font-light text-[var(--store-text-muted)]">
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
