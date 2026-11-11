export interface DeliverableItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  previewLabel: string;
  previewHighlights: { label: string; value: string }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverableNote: string;
}

export interface ConceptualProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  installments: string;
  image: string;
  secondaryImage?: string;
  badge?: string;
  optionsLabel: string;
  options: string[];
  description: string;
  composition: string;
}

export interface ConceptualProject {
  slug: "atelier-noir" | "maison-aurea";
  name: string;
  segment: string;
  tagline: string;
  summary: string;
  conceptNote: string;
  heroImage: string;
  secondaryImage: string;
  mobilePreviewImage: string;
  theme: {
    bgPrimary: string;
    bgSecondary: string;
    textPrimary: string;
    textMuted: string;
    accent: string;
    border: string;
    badgeBg: string;
  };
  architectureHighlights: string[];
  categories: string[];
  announcementBar: string;
  heroHeadline: string;
  heroSubheadline: string;
  products: ConceptualProduct[];
}

export const CONTACT_LINKS = {
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/5562936180338",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/lemury.io",
};

export const RETAIL_SEGMENTS = [
  "Moda feminina",
  "Joias e semijoias",
  "Moda fitness",
  "Acessórios",
  "Cosméticos",
  "Moda infantil",
  "Bolsas e calçados",
  "Varejo especializado",
];

export const POSITIONING_QUOTES = [
  "Seu negócio já existe. A Lemury leva ele para o digital.",
  "Seu cliente quer comprar. Facilite o caminho.",
  "De loja física para e-commerce.",
  "Mais que produtos, oportunidades.",
  "Seu produto já existe. Seus clientes também. Agora falta conectar os dois.",
];

export const DELIVERABLES: DeliverableItem[] = [
  {
    id: "estruturacao",
    number: "01",
    title: "Estruturação da loja",
    subtitle: "Arquitetura pensada para a jornada real de compra",
    description:
      "Planejamos a estrutura completa da sua loja virtual para que o cliente encontre produtos com clareza, compreenda diferenciais e finalize o pedido sem atritos.",
    details: [
      "Mapeamento de páginas essenciais (Home, Coleções, Produto, Sacola e Checkout)",
      "Navegação intuitiva para desktop e smartphones",
      "Páginas institucionais, políticas de troca e canais de atendimento integrados",
    ],
    previewLabel: "Arquitetura de Navegação & Jornada",
    previewHighlights: [
      { label: "Hierarquia de Acesso", value: "Home → Categoria → Produto → Sacola → Checkout" },
      { label: "Foco de Experiência", value: "Busca rápida, filtros claros e decisão de compra" },
      { label: "Dispositivos", value: "Responsividade nativa mobile-first e desktop" },
    ],
  },
  {
    id: "design-identidade",
    number: "02",
    title: "Design e identidade visual",
    subtitle: "Direção visual alinhada à personalidade da sua marca",
    description:
      "Aplicamos a identidade visual do seu negócio em uma interface refinada, valorizando as fotografias dos produtos e transmitindo confiança desde o primeiro acesso.",
    details: [
      "Personalização de cores, tipografia e banners editoriais da marca",
      "Padronização visual de vitrines, cartões de produto e páginas internas",
      "Preservação integral do DNA estético do lojista",
    ],
    previewLabel: "Sistema Visual do Lojista",
    previewHighlights: [
      { label: "Direção Estética", value: "Fidelidade à paleta e tipografia da marca cliente" },
      { label: "Apresentação Visual", value: "Destaque para fotografia, textura e acabamento" },
      { label: "Percepção de Valor", value: "Acabamento editorial que transmite segurança" },
    ],
  },
  {
    id: "organizacao-catalogo",
    number: "03",
    title: "Organização de catálogo",
    subtitle: "Categorias, filtros e variações estruturadas com lógica comercial",
    description:
      "Transformamos seu estoque físico ou catálogo de WhatsApp em uma estrutura organizada de departamentos, coleções e atributos de produto.",
    details: [
      "Definição de categorias principais, subcategorias e coleções sazonais",
      "Estruturação de grades de tamanho, cor, material ou numeração",
      "Filtros inteligentes para facilitar a descoberta de produtos",
    ],
    previewLabel: "Taxonomia & Grades de Produto",
    previewHighlights: [
      { label: "Estrutura de Grades", value: "Tamanhos, cores, materiais e variações unificadas" },
      { label: "Navegação por Coleção", value: "Lançamentos, linhas essenciais e categorias" },
      { label: "Encontrar Produtos", value: "Filtros claros por atributo e ordenação objetiva" },
    ],
  },
  {
    id: "cadastro-produtos",
    number: "04",
    title: "Cadastro inicial de produtos",
    subtitle: "Páginas de produto completas e prontas para comercialização",
    description:
      "Realizamos o cadastro inicial exemplar dos seus produtos com informações técnicas organizadas, galerias de fotos, preços, SKUs e controle de estoque.",
    details: [
      "Configuração de títulos claros, descrições informativas e ficha técnica",
      "Organização de galerias de fotos com enquadramento consistente",
      "Parametrização de peso e dimensões para cálculo preciso de envio",
    ],
    previewLabel: "Página de Produto (PDP)",
    previewHighlights: [
      { label: "Conteúdo do Produto", value: "Descrição comercial, composição e guia de medidas" },
      { label: "Dados Logísticos", value: "Pesos, dimensões e SKUs configurados" },
      { label: "Padrão de Qualidade", value: "Base pronta para novos cadastros pela sua equipe" },
    ],
  },
  {
    id: "configuracao-pagamentos",
    number: "05",
    title: "Configuração de pagamentos",
    subtitle: "Checkout transparente e meios de pagamento seguros",
    description:
      "Integramos os meios de pagamento adequados à sua operação para que seu cliente pague com praticidade via PIX, cartão de crédito ou boleto.",
    details: [
      "Integração com gateways e intermediadores de pagamento reconhecidos",
      "Configuração de regras de parcelamento e desconto para pagamento via PIX",
      "Ambiente seguro com confirmação automática de status do pedido",
    ],
    previewLabel: "Fluxo de Pagamento Seguro",
    previewHighlights: [
      { label: "Modalidades", value: "PIX imediato, Cartão de Crédito e Boleto" },
      { label: "Regras Comerciais", value: "Parcelamento configurável e condições claras" },
      { label: "Experiência", value: "Checkout transparente sem redirecionamentos confusos" },
    ],
  },
  {
    id: "configuracao-fretes",
    number: "06",
    title: "Configuração de fretes",
    subtitle: "Opções de entrega adaptadas à realidade do seu negócio",
    description:
      "Parametrizamos o cálculo automático de frete e prazos na página do produto e no carrinho, incluindo transportadoras, Correios e entrega local.",
    details: [
      "Integração com plataformas logísticas, Correios (PAC/SEDEX) e transportadoras",
      "Configuração de retirada na loja física ou entrega via motoboy local",
      "Regras opcionais de frete fixo ou frete grátis por região e valor",
    ],
    previewLabel: "Logística & Cálculo de Entrega",
    previewHighlights: [
      { label: "Abrangência", value: "Envio nacional (Correios/Transportadoras) e local" },
      { label: "Omnichannel", value: "Opção de Retirada em Loja Física quando aplicável" },
      { label: "Transparência", value: "Simulador de prazo e valor visível antes do checkout" },
    ],
  },
  {
    id: "testes",
    number: "07",
    title: "Testes de ponta a ponta",
    subtitle: "Verificação técnica rigorosa antes da inauguração",
    description:
      "Simulamos toda a jornada do comprador em computadores e celulares para garantir que navegação, carrinho, cálculo de frete e pagamento funcionem com precisão.",
    details: [
      "Testes de responsividade em diferentes tamanhos de tela (iOS, Android e Desktop)",
      "Simulação real de pedido, cálculo de frete, aplicação de cupom e pagamento",
      "Verificação de e-mails transacionais, links, formulários e desempenho",
    ],
    previewLabel: "Protocolo de Revisão Técnica",
    previewHighlights: [
      { label: "Jornada Verificada", value: "Seleção de variação → Sacola → Frete → Pagamento" },
      { label: "Multi-dispositivo", value: "Validação em smartphones, tablets e desktops" },
      { label: "Estabilidade", value: "Checagem de carregamento, links e notificações" },
    ],
  },
  {
    id: "treinamento-basico",
    number: "08",
    title: "Treinamento básico",
    subtitle: "Autonomia para você administrar sua loja no dia a dia",
    description:
      "Entregamos a loja pronta para operar e orientamos sua equipe sobre como gerenciar pedidos, atualizar estoques e cadastrar novos produtos com segurança.",
    details: [
      "Orientação prática sobre o painel administrativo da loja",
      "Passo a passo para inclusão de novos produtos, preços e promoções",
      "Fluxo de acompanhamento de pedidos, faturamento e código de rastreio",
    ],
    previewLabel: "Gestão & Autonomia Operacional",
    previewHighlights: [
      { label: "Rotina de Pedidos", value: "Visualização de vendas, separação e envio" },
      { label: "Gestão de Catálogo", value: "Atualização simples de estoque, preços e fotos" },
      { label: "Independência", value: "Operação organizada sem depender de suporte técnico diário" },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Conhecemos sua empresa",
    description:
      "Compreendemos seus produtos, o perfil do seu público, sua identidade visual e como funciona sua operação atual na loja física, Instagram ou WhatsApp.",
    deliverableNote: "Alinhamento de escopo e diagnóstico do catálogo",
  },
  {
    step: "02",
    title: "Planejamos a estrutura da loja",
    description:
      "Definimos a organização de categorias, filtros, páginas essenciais, regras de frete, meios de pagamento e a direção visual do seu e-commerce.",
    deliverableNote: "Arquitetura da informação e estrutura comercial",
  },
  {
    step: "03",
    title: "Desenvolvemos e configuramos o e-commerce",
    description:
      "Construímos a interface da loja, aplicamos a identidade da sua marca, realizamos o cadastro inicial de produtos e integramos pagamentos e entregas.",
    deliverableNote: "Implantação visual, técnica e operacional",
  },
  {
    step: "04",
    title: "Realizamos os testes",
    description:
      "Revisamos toda a experiência de compra em celulares e computadores: navegação, seleção de variações, cálculo de frete e fluxo de checkout.",
    deliverableNote: "Validação técnica e homologação de compra",
  },
  {
    step: "05",
    title: "Entregamos a loja e orientamos sua administração",
    description:
      "Publicamos sua loja virtual no domínio oficial da sua marca e realizamos o treinamento básico para que você gerencie produtos e pedidos com tranquilidade.",
    deliverableNote: "Publicação oficial e orientação de gestão",
  },
];

export const CONCEPTUAL_PROJECTS: ConceptualProject[] = [
  {
    slug: "atelier-noir",
    name: "ATELIER NOIR",
    segment: "Moda Feminina",
    tagline: "Essência contemporânea — moda atemporal para mulheres reais.",
    summary:
      "E-commerce conceitual de moda feminina com fachada editorial minimalista, vitrine de destaques alinhada e jornada de compra fluida.",
    conceptNote: "Projeto Conceitual — Demonstração Técnica Lemury",
    heroImage: "/stores/atelier-noir/hero-clean.jpg",
    secondaryImage: "/stores/atelier-noir/prod-2.jpg",
    mobilePreviewImage: "/stores/atelier-noir/prod-1.jpg",
    theme: {
      bgPrimary: "#F8F7F3",
      bgSecondary: "#EFECE6",
      textPrimary: "#1E1C1A",
      textMuted: "#6A645C",
      accent: "#2B2927",
      border: "#E6E2DA",
      badgeBg: "#EBE6DC",
    },
    architectureHighlights: [
      "Fachada panorâmica com tipografia leve e minimalista à esquerda",
      "Vitrine 'Destaques da coleção' em 3 colunas com margens rigorosamente alinhadas",
      "Sacola lateral com simulador de frete e checkout transparente",
    ],
    categories: ["Todos", "Vestidos", "Alfaiataria", "Camisas & Blusas", "Calças & Saias"],
    announcementBar: "COLEÇÃO ATEMPORAL — ENVIO PARA TODO O BRASIL E TROCA FACILITADA",
    heroHeadline: "Essência\ncontemporânea",
    heroSubheadline: "MODA ATEMPORAL PARA\nMULHERES REAIS",
    products: [
      {
        id: "an-01",
        name: "Vestido Lina",
        category: "Vestidos",
        price: 389,
        installments: "6x de R$ 64,83 sem juros",
        image: "/stores/atelier-noir/prod-1.jpg",
        optionsLabel: "Tamanho",
        options: ["PP (34)", "P (36-38)", "M (40)", "G (42)"],
        description:
          "Vestido midi em linho puro com modelagem levemente acinturada, alças finas ajustáveis e caimento natural.",
        composition: "100% Linho Europeu Certificado | Forro: 100% Viscose",
      },
      {
        id: "an-02",
        name: "Blazer Loren",
        category: "Alfaiataria",
        price: 459,
        installments: "6x de R$ 76,50 sem juros",
        image: "/stores/atelier-noir/prod-2.jpg",
        optionsLabel: "Tamanho",
        options: ["PP (34)", "P (36-38)", "M (40)", "G (42)"],
        description:
          "Blazer de alfaiataria contemporânea em linho cru com ombros estruturados e lapela clássica.",
        composition: "100% Linho Puro com acabamento macio",
      },
      {
        id: "an-03",
        name: "Calça Mara",
        category: "Calças & Saias",
        price: 279,
        installments: "6x de R$ 46,50 sem juros",
        image: "/stores/atelier-noir/prod-3.jpg",
        optionsLabel: "Tamanho",
        options: ["36", "38", "40", "42", "44"],
        description:
          "Calça pantalona de cintura alta com pregas frontais profundas e caimento fluido que alonga a silhueta.",
        composition: "78% Viscose, 22% Linho Natural",
      },
      {
        id: "an-04",
        name: "Camisa Celina",
        category: "Camisas & Blusas",
        price: 319,
        installments: "6x de R$ 53,16 sem juros",
        image: "/stores/atelier-noir/prod-4.jpg",
        optionsLabel: "Tamanho",
        options: ["PP (34)", "P (36-38)", "M (40)", "G (42)"],
        description:
          "Camisa feminina em linho e algodão com corte levemente amplo, toque macio e botões em madrepérola natural.",
        composition: "70% Linho Europeu, 30% Algodão Orgânico",
      },
      {
        id: "an-05",
        name: "Saia Midi Aurea",
        category: "Calças & Saias",
        price: 299,
        installments: "6x de R$ 49,83 sem juros",
        image: "/stores/atelier-noir/prod-5.jpg",
        optionsLabel: "Tamanho",
        options: ["36", "38", "40", "42"],
        description:
          "Saia midi feminina em linho areia de modelagem fluida com cintura alta estruturada e caimento leve.",
        composition: "100% Linho Puro",
      },
      {
        id: "an-06",
        name: "Trench Coat Clara",
        category: "Alfaiataria",
        price: 689,
        installments: "6x de R$ 114,83 sem juros",
        image: "/stores/atelier-noir/prod-6.jpg",
        optionsLabel: "Tamanho",
        options: ["P (36-38)", "M (40)", "G (42)"],
        description:
          "Trench coat feminino em linho estruturado tom aveia com faixa de amarração na cintura e lapela clássica.",
        composition: "80% Linho, 20% Algodão Natural",
      },
    ],
  },
  {
    slug: "maison-aurea",
    name: "MAISON AUREA",
    segment: "Joias & Semijoias",
    tagline: "O brilho dos seus momentos — joias para histórias reais.",
    summary:
      "E-commerce conceitual de joalheria com estética iluminada, tipografia editorial leve e curadoria 'Nossas Favoritas'.",
    conceptNote: "Projeto Conceitual — Demonstração Técnica Lemury",
    heroImage: "/stores/maison-aurea/hero-clean.jpg",
    secondaryImage: "/stores/maison-aurea/prod-1.jpg",
    mobilePreviewImage: "/stores/maison-aurea/prod-2.jpg",
    theme: {
      bgPrimary: "#FAF7F2",
      bgSecondary: "#F2EAE0",
      textPrimary: "#3D2B1F",
      textMuted: "#7A6855",
      accent: "#A68452",
      border: "#EAE0D3",
      badgeBg: "#EFE6D8",
    },
    architectureHighlights: [
      "Fachada de joalheria com tipografia leve e composições em pedra travertino",
      "Vitrine 'Nossas Favoritas' com cards alinhados e ícone de favoritos sutil",
      "Sacola com opção de embalagem para presente e cálculo de envio com seguro",
    ],
    categories: ["Todas", "Brincos", "Colares", "Anéis", "Pulseiras"],
    announcementBar: "ACOMPANHA ESTOJO DE VELUDO E CERTIFICADO DE AUTENTICIDADE — ENVIO COM SEGURO",
    heroHeadline: "O brilho dos\nseus momentos",
    heroSubheadline: "JOIAS PARA\nHISTÓRIAS REAIS",
    products: [
      {
        id: "ma-01",
        name: "Argola Lumi",
        category: "Brincos",
        price: 249,
        installments: "6x de R$ 41,50 sem juros",
        image: "/stores/maison-aurea/prod-1.jpg",
        optionsLabel: "Acabamento",
        options: ["Ouro Amarelo 18k", "Ouro Champagne"],
        description:
          "Argola escultural de superfície orgânica polida à mão com estrutura oca leve e confortável.",
        composition: "Liga nobre hipoalergênica com banho de Ouro 18k (10 milésimos)",
      },
      {
        id: "ma-02",
        name: "Colar Aura",
        category: "Colares",
        price: 329,
        installments: "6x de R$ 54,83 sem juros",
        image: "/stores/maison-aurea/prod-2.jpg",
        optionsLabel: "Comprimento",
        options: ["40 cm + extensor", "45 cm + extensor"],
        description:
          "Pingente medalha cravejada com pérola central natural de água doce em corrente veneziana delicada.",
        composition: "Pérola Natural de Água Doce | Corrente banhada a Ouro 18k",
      },
      {
        id: "ma-03",
        name: "Anel Elo",
        category: "Anéis",
        price: 189,
        installments: "6x de R$ 31,50 sem juros",
        image: "/stores/maison-aurea/prod-3.jpg",
        optionsLabel: "Aro",
        options: ["Aro 14", "Aro 16", "Aro 18", "Aro 20"],
        description:
          "Anel de elos entrelaçados com acabamento espelhado em ouro 18k. Hipoalergênico e livre de níquel.",
        composition: "Prata 925 com banho de Ouro 18k e verniz protetor",
      },
      {
        id: "ma-04",
        name: "Bracelete Duna",
        category: "Pulseiras",
        price: 289,
        installments: "6x de R$ 48,16 sem juros",
        image: "/stores/maison-aurea/prod-4.jpg",
        optionsLabel: "Pulso",
        options: ["P (15-16 cm)", "M (17-18 cm)"],
        description:
          "Bracelete rígido escultural com contorno orgânico e acabamento espelhado em banho de ouro 18k.",
        composition: "Metais nobres com banho de Ouro 18k de alta resistência",
      },
      {
        id: "ma-05",
        name: "Brinco Pérola Céleste",
        category: "Brincos",
        price: 259,
        installments: "6x de R$ 43,16 sem juros",
        image: "/stores/maison-aurea/prod-5.jpg",
        optionsLabel: "Acabamento",
        options: ["Ouro 18k & Pérola Barroca"],
        description:
          "Par de brincos delicados em ouro 18k com pérolas naturais de água doce selecionadas pelo brilho acetinado.",
        composition: "Prata 925, Banho de Ouro 18k e Pérola Natural",
      },
      {
        id: "ma-06",
        name: "Anel Solitário Lumina",
        category: "Anéis",
        price: 269,
        installments: "6x de R$ 44,83 sem juros",
        image: "/stores/maison-aurea/prod-6.jpg",
        optionsLabel: "Aro",
        options: ["Aro 14", "Aro 16", "Aro 18", "Aro 20"],
        description:
          "Anel abaulado escultural em ouro 18k com design minimalista e interior anatômico confortável.",
        composition: "Liga nobre hipoalergênica com banho de Ouro 18k (10 milésimos)",
      },
    ],
  },
];

export const ACADEMY_TRACKS = [
  {
    id: "minha-loja-online",
    badge: "Trilha para Lojistas • Em Planejamento",
    title: "Minha Loja Online",
    subtitle: "Para comerciantes que desejam construir e administrar o próprio e-commerce.",
    description:
      "Um programa prático voltado a empreendedores que possuem produtos físicos e desejam aprender o método de organização de catálogo, configuração técnica e gestão diária da sua própria loja virtual.",
    topics: [
      "Planejamento de catálogo, categorias e fotografia de produto",
      "Configuração prática de loja, meios de pagamento e logística de envio",
      "Organização da rotina de pedidos, estoque e atendimento ao cliente",
    ],
  },
  {
    id: "profissional-ecommerce",
    badge: "Trilha de Formação Técnica • Em Planejamento",
    title: "Profissional de E-commerce",
    subtitle: "Para quem deseja aprender a desenvolver lojas virtuais para terceiros e comercializar esse serviço.",
    description:
      "Formação estruturada para designers, desenvolvedores e consultores digitais que buscam dominar a metodologia de implantação de e-commerces profissionais para atender empresas do varejo.",
    topics: [
      "Metodologia de diagnóstico, arquitetura e implantação de lojas virtuais",
      "Direção visual, experiência de compra (UX/UI) e configuração técnica",
      "Processo comercial, escopo de entrega, testes e passagem de bastão ao lojista",
    ],
  },
];

