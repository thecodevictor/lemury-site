import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lemury — Criação e Implantação de E-commerces Profissionais",
  description:
    "A Lemury transforma negócios que já possuem produtos em operações de e-commerce com estrutura profissional, design refinado e experiência de compra pensada para seus clientes.",
  keywords: [
    "Lemury",
    "implantação de e-commerce",
    "criação de loja virtual",
    "e-commerce moda feminina",
    "e-commerce joias",
    "desenvolvimento de e-commerce",
    "loja virtual profissional",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-lemury-cream text-lemury-black antialiased selection:bg-lemury-green selection:text-lemury-cream">
        {children}
      </body>
    </html>
  );
}
