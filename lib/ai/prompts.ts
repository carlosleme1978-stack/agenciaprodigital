export type SeoServiceType =
  | 'market'
  | 'audit'
  | 'ads'
  | 'seo'
  | 'competitors'
  | 'pricing'
  | 'strategy'
  | 'local'

export function serviceLabel(serviceType: SeoServiceType) {
  switch (serviceType) {
    case 'market':
      return 'análise de mercado'
    case 'audit':
      return 'auditoria digital'
    case 'ads':
      return 'planeamento de Google Ads'
    case 'seo':
      return 'estratégia de SEO'
    case 'competitors':
      return 'análise de concorrentes'
    case 'pricing':
      return 'orçamento de marketing'
    case 'strategy':
      return 'estratégia de crescimento'
    case 'local':
      return 'marketing local'
    default:
      return 'marketing digital'
  }
}

function serviceIntent(serviceType: SeoServiceType, niche: string) {
  switch (serviceType) {
    case 'market':
      return [
        `focar em procura, validação de mercado, sinais de procura real e oportunidade comercial no nicho ${niche}`,
        'explicar como avaliar procura, concorrência, posicionamento e potencial antes de investir',
      ].join('; ')
    case 'audit':
      return [
        `focar em auditoria de presença digital para o nicho ${niche}`,
        'avaliar site, proposta de valor, experiência mobile, confiança, captação de leads e pontos de melhoria',
      ].join('; ')
    case 'ads':
      return [
        `focar em tráfego pago e planeamento de Google Ads para o nicho ${niche}`,
        'explicar intenção de pesquisa, orçamento inicial, estrutura de campanha, landing page e erros comuns',
      ].join('; ')
    case 'seo':
      return [
        `focar em SEO prático para o nicho ${niche}`,
        'explicar pesquisa de keywords, páginas de serviço, conteúdo, SEO local, autoridade e otimizações on-page',
      ].join('; ')
    case 'competitors':
      return [
        `focar em análise de concorrentes no nicho ${niche}`,
        'explicar como identificar concorrentes, comparar oferta, posicionamento, anúncios, conteúdo e diferenciação',
      ].join('; ')
    case 'pricing':
      return [
        `focar em orçamento e investimento de marketing para o nicho ${niche}`,
        'explicar quanto investir, prioridades, distribuição de orçamento, teste inicial e controlo de retorno',
      ].join('; ')
    case 'strategy':
      return [
        `focar em estratégia de crescimento para o nicho ${niche}`,
        'explicar prioridades comerciais, captação, retenção, proposta de valor, canais e plano de execução',
      ].join('; ')
    case 'local':
      return [
        `focar em captação local de clientes para o nicho ${niche} em Portugal`,
        'explicar SEO local, Google Business Profile, páginas locais, prova social e campanhas geolocalizadas',
      ].join('; ')
    default:
      return `focar em marketing digital aplicado ao nicho ${niche}`
  }
}

function ctaHrefByService(serviceType: SeoServiceType) {
  switch (serviceType) {
    case 'market':
      return '/ferramenta-analise-de-mercado'
    case 'audit':
    case 'seo':
    case 'competitors':
    case 'local':
      return '/auditoria-de-marketing-digital'
    case 'ads':
    case 'pricing':
    case 'strategy':
      return '/adspilot'
    default:
      return '/auditoria-de-marketing-digital'
  }
}

function articleAngle(serviceType: SeoServiceType, keyword: string, niche: string) {
  switch (serviceType) {
    case 'market':
      return `O artigo deve ensinar como analisar se existe mercado real para "${keyword}" no nicho ${niche}.`
    case 'audit':
      return `O artigo deve diagnosticar falhas digitais, gargalos de conversão e oportunidades de melhoria para "${keyword}" no nicho ${niche}.`
    case 'ads':
      return `O artigo deve orientar a preparação de campanhas e investimento para "${keyword}" no nicho ${niche}.`
    case 'seo':
      return `O artigo deve orientar como ganhar visibilidade orgânica e melhorar posicionamento para "${keyword}" no nicho ${niche}.`
    case 'competitors':
      return `O artigo deve mostrar como estudar concorrentes e usar isso para decidir melhor sobre "${keyword}" no nicho ${niche}.`
    case 'pricing':
      return `O artigo deve explicar orçamento, prioridades e como evitar desperdício ao investir em "${keyword}" no nicho ${niche}.`
    case 'strategy':
      return `O artigo deve estruturar um plano de crescimento prático ligado a "${keyword}" no nicho ${niche}.`
    case 'local':
      return `O artigo deve focar captação local, visibilidade geográfica e procura próxima para "${keyword}" no nicho ${niche}.`
    default:
      return `O artigo deve ser útil, específico e comercialmente relevante para "${keyword}" no nicho ${niche}.`
  }
}

export function buildSeoPrompt(input: {
  keyword: string
  niche: string
  serviceType: SeoServiceType
  siteName?: string
}) {
  const siteName = input.siteName ?? 'Agenciaprodigital'
  const ctaHref = ctaHrefByService(input.serviceType)
  const intent = serviceIntent(input.serviceType, input.niche)
  const angle = articleAngle(input.serviceType, input.keyword, input.niche)

  return `
Você é um redator SEO sénior especializado em PMEs em Portugal, com foco em conteúdo útil, específico e orientado à intenção de pesquisa.

Crie um artigo people-first, útil e específico para a keyword principal: "${input.keyword}".
Nicho principal: ${input.niche}.
Serviço relacionado: ${serviceLabel(input.serviceType)}.
Marca citada naturalmente no CTA: ${siteName}.
Objetivo editorial: ${angle}
Intenção do conteúdo: ${intent}

Retorne APENAS JSON válido com esta estrutura exata:
{
  "title": "string",
  "slug": "string",
  "excerpt": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "ctaTitle": "string",
  "ctaText": "string",
  "ctaHref": "string",
  "readingMinutes": 0,
  "sections": [
    {
      "heading": "string",
      "paragraphs": ["string", "string"]
    }
  ],
  "faq": [
    {
      "q": "string",
      "a": "string"
    }
  ]
}

Regras obrigatórias:
- escrever em português de Portugal
- tom claro, profissional e natural
- não usar markdown
- não escrever nada fora do JSON
- entre 4 e 6 secções
- cada secção deve ter exatamente 2 parágrafos úteis, concretos e não genéricos
- o conteúdo deve ser específico para o nicho ${input.niche}
- usar exemplos práticos e realistas do nicho
- evitar keyword stuffing
- não repetir a keyword principal de forma artificial
- não inventar estatísticas, percentagens ou estudos
- não citar fontes
- não usar linguagem robótica nem frases vazias
- criar um título convincente, humano e orientado à pesquisa
- metaTitle com foco SEO e até cerca de 60 caracteres
- metaDescription apelativa, natural e até cerca de 155 caracteres
- excerpt curto, útil e comercial
- slug em minúsculas, sem acentos, sem caracteres especiais e sem prefixo "/blog/"
- readingMinutes deve ser um número inteiro realista entre 4 e 8
- FAQ com 3 a 4 perguntas úteis e respostas objetivas
- CTA natural, relevante para o tema e sem exagero comercial
- ctaHref deve ser exatamente "${ctaHref}"

Regras de qualidade:
- o artigo deve resolver a dúvida principal do utilizador
- o conteúdo deve parecer escrito por especialista humano
- incluir sinais de decisão, análise, preparação e execução
- mostrar como evitar erros comuns no nicho
- quando fizer sentido, abordar concorrência, procura, posicionamento, captação ou orçamento
- não criar secções redundantes
- evitar introduções longas demais
- headings curtos, claros e fortes

Validação final antes de responder:
- confirmar que o JSON é válido
- confirmar que não existe texto fora do JSON
- confirmar que o ctaHref é "${ctaHref}"
`.trim()
}
