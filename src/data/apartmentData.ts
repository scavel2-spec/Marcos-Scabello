import { GalleryImage, RoomDetail, Amenity, FAQItem, NeighborhoodSpot } from '../types';

export const INTEREST_FORM_URL = "https://forms.gle/bxh46JovZ96Z5Z8E6";

export const APARTMENT_INFO = {
  name: "Residencial Palazzo D'Oro",
  subtitle: "Apartamento Exclusivo de Alto Padrão",
  tagline: "Sofisticação, vista panorâmica definitiva e conforto inigualável no endereço mais desejado da cidade.",
  location: "Bairro Nobre • Jardim das Américas",
  city: "Região Nobre e Central",
  price: 1290000,
  condoFee: 950,
  iptuMonthly: 210,
  privateArea: "142 m²",
  totalArea: "215 m²",
  suites: 3,
  bathrooms: 4,
  parkingSpots: 2,
  floor: "14º Andar (Vista Panorâmica Privilegiada)",
  deliveryStatus: "Pronto para Morar (100% Impecável)",
};

export const QUICK_STATS = [
  { label: "Área Privativa", value: "142 m²", detail: "Planta inteligente sem corredores perdidos" },
  { label: "Suítes Plenas", value: "3 Suítes", detail: "Master com closet e cuba dupla" },
  { label: "Vagas de Garagem", value: "2 Vagas", detail: "Soltas, cobertas + depósito privativo" },
  { label: "Varanda Gourmet", value: "Integrada", detail: "Churrasqueira a carvão e vidro Reiki" },
];

export const HIGHLIGHTS = [
  {
    icon: "Sparkles",
    title: "Acabamentos Nobres",
    description: "Porcelanato 120x120cm nas áreas sociais, bancadas em quartzo e mármore Michelangelo, louças e metais deca de primeira linha."
  },
  {
    icon: "Flame",
    title: "Varanda Gourmet com Vista",
    description: "Churrasqueira a carvão com duto individual, bancada em granito escovado e cortina de vidro retrátil com isolamento térmico."
  },
  {
    icon: "VolumeX",
    title: "Isolamento Acústico Premium",
    description: "Manta acústica entre lajes e esquadrias de alumínio com vidros laminados para total privacidade e silêncio absoluto."
  },
  {
    icon: "Cpu",
    title: "Casa Inteligente e Automação",
    description: "Infraestrutura pronta para automação de iluminação, climatização, cortinas motorizadas e fechadura biométrica digital."
  },
  {
    icon: "Sun",
    title: "Sol da Manhã & Ventilação Cruzada",
    description: "Posição solar privilegiada garantindo excelente iluminação natural, conforto térmico durante o ano todo e economia de energia."
  },
  {
    icon: "Zap",
    title: "Infraestrutura para Carro Elétrico",
    description: "Vaga de garagem com ponto individual de recarga para veículos híbridos e elétricos ligado diretamente ao quadro do apartamento."
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "living-1",
    title: "Living Ampliado com Pé-Direito Alto",
    category: "living",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    description: "Ambiente social integrado para até 3 ambientes com iluminação embutida e marcenaria de design."
  },
  {
    id: "varanda-1",
    title: "Varanda Gourmet com Vista Panorâmica",
    category: "varanda",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    description: "Espaço perfeito para receber amigos e família, com churrasqueira a carvão e vista livre para o horizonte."
  },
  {
    id: "suite-master",
    title: "Suíte Master com Amplo Closet",
    category: "quartos",
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
    description: "Refúgio de tranquilidade com piso vinílico amadeirado, persianas 100% blackout e cabeceira estofada."
  },
  {
    id: "suite-banheiro",
    title: "Banheiro da Suíte Master",
    category: "quartos",
    url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85",
    description: "Bancada esculpida em mármore, duas cubas, nichos iluminados e chuveiro duplo com aquecimento a gás."
  },
  {
    id: "cozinha",
    title: "Cozinha Conceito Aberto",
    category: "living",
    url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
    description: "Ilha central com cooktop por indução, torre quente embutida e ampla despensa de apoio."
  },
  {
    id: "piscina-lazer",
    title: "Piscina Aquecida com Borda Infinita",
    category: "lazer",
    url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85",
    description: "Área de lazer com solarium, deck molhado e espreguiçadeiras com vista contemplativa."
  },
  {
    id: "fitness",
    title: "Espaço Fitness & Academia Equipada",
    category: "lazer",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
    description: "Equipamentos profissionais de musculação e cárdio com ar-condicionado e vista para o jardim."
  },
  {
    id: "fachada",
    title: "Fachada Contemporânea e Imponente",
    category: "fachada",
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
    description: "Torre única com linhas arquitetônicas elegantes, brises metálicos e paisagismo assinado."
  },
];

export const ROOM_DETAILS: RoomDetail[] = [
  {
    id: "living",
    name: "Living & Sala de Jantar",
    area: "38,5 m²",
    description: "Espaço integrado para até 3 ambientes, com pé direito de 2,80m e ampla luz natural.",
    features: ["Piso em porcelanato 120x120", "Rebaixo em gesso com cortineiro iluminado", "Esquadria de ponta a ponta"],
    x: 42,
    y: 48
  },
  {
    id: "varanda",
    name: "Varanda Gourmet Integrada",
    area: "19,2 m²",
    description: "Área gourmet com churrasqueira a carvão, pia em granito e fechamento em vidro.",
    features: ["Churrasqueira a carvão", "Bancada de apoio com cuba funda", "Vidro retrátil tipo Reiki"],
    x: 72,
    y: 65
  },
  {
    id: "suite-master",
    name: "Suíte Master com Closet",
    area: "24,0 m²",
    description: "Espaço para cama King Size, closet privativo espaçoso e janela com persiana elétrica blackout.",
    features: ["Closet isolado", "Persiana integrada motorizada", "Ar condicionado split inverter"],
    x: 22,
    y: 28
  },
  {
    id: "suite-2",
    name: "Suíte 02 (Dormitório/Hóspedes)",
    area: "15,8 m²",
    description: "Conforto total com armários planejados e banheiro privativo com ventilação natural.",
    features: ["Janela acústica", "Armário embutido", "Piso laminado com conforto térmico"],
    x: 48,
    y: 22
  },
  {
    id: "suite-3",
    name: "Suíte 03 / Home Office",
    area: "14,4 m²",
    description: "Ambiente flexível perfeito para escritório de alto rendimento ou suíte para filhos.",
    features: ["Pontos de rede cabeada", "Iluminação de tarefa dimerizável", "Banheiro privativo completo"],
    x: 74,
    y: 25
  },
  {
    id: "cozinha",
    name: "Cozinha & Área de Serviço",
    area: "16,1 m²",
    description: "Conexão fluida com a sala de jantar e acesso à área de serviço independente com despensa.",
    features: ["Bancada em quartzo branco", "Ponto de água para geladeira e filtro", "Entrada de serviço dedicada"],
    x: 20,
    y: 72
  },
];

export const AMENITIES: Amenity[] = [
  {
    icon: "Waves",
    title: "Piscina Climatizada e Deck",
    category: "Relaxamento",
    description: "Piscina adulto com raia de 20m, piscina infantil e solarium cercado por jardins tropicais."
  },
  {
    icon: "Dumbbell",
    title: "Fitness Center Premium",
    category: "Saúde & Esporte",
    description: "Academia completa com esteiras, elípticos, pesos livres e espaço dedicado para pilates/yoga."
  },
  {
    icon: "PartyPopper",
    title: "Salão de Festas & Lounge",
    category: "Convivência",
    description: "Ambiente climatizado e decorado para até 60 convidados com cozinha gourmet de apoio."
  },
  {
    icon: "Briefcase",
    title: "Coworking & Sala de Reunião",
    category: "Trabalho",
    description: "Espaço silencioso com internet de alta velocidade, mesas individuais e sala de reunião com TV."
  },
  {
    icon: "Smile",
    title: "Brinquedoteca & Playground",
    category: "Família",
    description: "Espaço lúdico e seguro para crianças com piso emborrachado e brinquedos educativos."
  },
  {
    icon: "ShieldCheck",
    title: "Segurança 24h & Clausura",
    category: "Tranquilidade",
    description: "Portaria blindada, monitoramento por câmeras IP de alta resolução e controle de acesso facial."
  },
  {
    icon: "Dog",
    title: "Pet Place & Pet Care",
    category: "Pets",
    description: "Área verde cercada para passeio e socialização dos pets com circuito de agilidade."
  },
  {
    icon: "Sparkle",
    title: "Rooftop Sky Lounge",
    category: "Exclusividade",
    description: "Espaço no topo do edifício para contemplar o pôr do sol com lareira ecológica ao ar livre."
  },
];

export const NEIGHBORHOOD_SPOTS: NeighborhoodSpot[] = [
  { name: "Parque Ecológico Municipal", time: "3 min a pé", type: "Lazer e Natureza", distance: "250m" },
  { name: "Colégio Internacional Bilíngue", time: "4 min de carro", type: "Educação de Excelência", distance: "1,2 km" },
  { name: "Supermercado Gourmet Pão de Açúcar", time: "2 min a pé", type: "Conveniência Diária", distance: "180m" },
  { name: "Shopping Center & Cinemas", time: "5 min de carro", type: "Compras e Entretenimento", distance: "1,8 km" },
  { name: "Hospital & Centro Clínico Albert Einstein", time: "6 min de carro", type: "Saúde e Urgência", distance: "2,3 km" },
  { name: "Polo Gastronômico e Bistrôs", time: "4 min a pé", type: "Alta Gastronomia", distance: "350m" },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como funciona para demonstrar interesse ou agendar uma visita?",
    answer: "É muito simples e rápido: basta clicar no botão 'Tenho interesse' em qualquer parte da página. Você será direcionado para o nosso formulário oficial onde poderá preencher seus contatos e indicar os melhores horários para a visita."
  },
  {
    question: "O imóvel aceita financiamento bancário e uso de FGTS?",
    answer: "Sim! O apartamento está com toda a documentação 100% regularizada, com matrícula individualizada e habite-se averbado. Aceita financiamento por qualquer instituição financeira (Caixa, Itaú, Bradesco, Santander, etc.) e utilização do saldo de FGTS."
  },
  {
    question: "O apartamento está pronto para morar?",
    answer: "Sim, imóvel desocupado, recém-finalizado com acabamentos de primeira linha, marcenaria planejada, iluminação e metais instalados. É chave na mão, pronto para morar imediatamente após a assinatura da escritura."
  },
  {
    question: "Posso fazer uma proposta com permuta de outro imóvel ou veículo?",
    answer: "Estudamos propostas com veículos como parte do pagamento e também imóveis de menor valor sujeitos a avaliação prévia. Preencha o formulário clicando em 'Tenho interesse' para que possamos analisar sua proposta com exclusividade."
  },
  {
    question: "Quais são os valores de condomínio e IPTU?",
    answer: "O condomínio é de aproximadamente R$ 950,00 mensais (incluindo segurança 24h, manutenção de todas as áreas de lazer e água), e o IPTU é de aproximadamente R$ 210,00 por cota mensal."
  },
];
