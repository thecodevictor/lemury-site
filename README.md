# Lemury — E-commerce & Digital Studio

Site institucional oficial da **Lemury**, desenvolvido em **Next.js + TypeScript + Tailwind CSS**, seguindo rigorosamente as diretrizes de identidade visual, direção criativa, posicionamento comercial e experiência de usuário do Prompt Mestre Oficial.

## Arquitetura do Projeto

- **`/` (`src/app/page.tsx`)**: Página institucional principal com 9 seções estratégicas:
  1. **Cabeçalho (`src/components/Header.tsx`)**: Identidade Lemury, navegação clara e menu mobile responsivo.
  2. **Hero Principal (`src/components/Hero.tsx`)**: Proposta de valor, chamada principal, segmentos atendidos e demonstração interativa de interface e-commerce.
  3. **Soluções (`src/components/Solutions.tsx`)**: Cartões horizontais editoriais destacando a frente comercial (**Quero criar meu e-commerce**) e a futura frente educacional (**Lemury Academy**).
  4. **O que entregamos (`src/components/Deliverables.tsx`)**: Apresentação interativa dos 8 pilares da implantação (estruturação, design, catálogo, cadastro inicial, pagamentos, fretes, testes e treinamento).
  5. **Portfólio Conceitual (`src/components/PortfolioSection.tsx`)**: Galeria editorial com os projetos demonstrativos **ATELIER NOIR** e **MAISON AUREA** (preservando a paleta e identidade exclusiva de cada marca e com alternador Desktop/Mobile).
  6. **Como funciona (`src/components/ProcessSection.tsx`)**: Linha do tempo arquitetônica em 5 etapas.
  7. **Sobre a Lemury (`src/components/AboutSection.tsx`)**: Posicionamento institucional e setores varejistas atendidos.
  8. **Chamada Final & Solicitação de Proposta (`src/components/ContactSection.tsx`)**: Diagnóstico inicial e solicitação de proposta comercial.
  9. **Rodapé (`src/components/Footer.tsx`)**: Links institucionais, demonstrações e canais de contato.
- **`/portfolio/atelier-noir` & `/portfolio/maison-aurea` (`src/app/portfolio/[slug]/page.tsx`)**: Vitrines demonstrativas interativas completas com filtro de categorias, modal de detalhes de produto e variações, sacola de compras funcional, simulador de frete, simulação de checkout e alternador de resolução Desktop / Mobile.
- **`/academy` (`src/app/academy/page.tsx`)**: Página de apresentação e lista de interesse para a **Lemury Academy** (*Minha Loja Online* e *Profissional de E-commerce*).

## Paleta Oficial

- **Verde Institucional Principal**: `#062D27`
- **Verde Escuro Alternativo**: `#073C32`
- **Off-white / Creme**: `#F5F2E9`
- **Branco**: `#FFFFFF`
- **Preto de Apoio**: `#111311`

