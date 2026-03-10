export const siteConfig = {
  name: 'Agencia Pro Digital',
  tagline: 'Soluções Digitais',
  domain: 'https://agenciaprodigital.com',
  logo: '/agenciaprodigital-logo.png',
  links: {
    auditor: 'https://auditordesites.vercel.app',
    analyzer: 'https://analyzer-market-ai.vercel.app',
    adspilot: 'https://ads-complet.vercel.app',
  },
}

export const products = [
  {
    slug: 'auditor-ai',
    name: 'Auditor AI',
    heading: 'Auditoria de sites, landing pages e Instagram com IA',
    eyebrow: 'Auditoria inteligente para presença digital',
    description:
      'Analise site, landing page ou Instagram e descubra onde sua comunicação está travando cliques, confiança e conversão.',
    cta: 'Fazer Auditoria',
    href: siteConfig.links.auditor,
    stats: ['Score visual', 'Erros ocultos', 'Próximo passo recomendado'],
  },
  {
    slug: 'analyzer-market-ai',
    name: 'Analyzer Market AI',
    heading: 'Análise de mercado com IA para validar demanda e concorrência',
    eyebrow: 'Leitura de mercado e posicionamento',
    description:
      'Descubra demanda, concorrência, perfil do público e oportunidades antes de investir tempo e dinheiro em tráfego.',
    cta: 'Analisar Mercado',
    href: siteConfig.links.analyzer,
    stats: ['Demanda', 'Concorrência', 'Ângulo de oferta'],
  },
  {
    slug: 'adspilot',
    name: 'AdsPilot',
    heading: 'Criação de campanhas Google Ads com IA para negócios locais',
    eyebrow: 'Criação de campanhas inteligentes',
    description:
      'Gere estrutura de campanha, palavras-chave, headlines e plano de investimento com base no cenário do cliente.',
    cta: 'Criar Campanha',
    href: siteConfig.links.adspilot,
    stats: ['Campanha pronta', 'Keywords', 'Plano inicial'],
  },
]
