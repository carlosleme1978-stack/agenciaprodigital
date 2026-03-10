import type { SeoSeedKeyword } from './seed-keywords'

export type SeoCluster = {
  key: string
  label: string
  niche: string
  serviceType: SeoSeedKeyword['serviceType']
  suggestions: string[]
}

export const seoClusters: SeoCluster[] = [
  {
    key: 'petshop-market',
    label: 'Petshop — análise de mercado',
    niche: 'petshop',
    serviceType: 'market',
    suggestions: [
      'como analisar mercado para petshop',
      'como validar procura para petshop em portugal',
      'como estudar concorrência de petshop antes de anunciar',
      'como saber se um petshop tem mercado local',
      'como descobrir se vale abrir um petshop',
    ],
  },
  {
    key: 'petshop-seo',
    label: 'Petshop — SEO e captação orgânica',
    niche: 'petshop',
    serviceType: 'seo',
    suggestions: [
      'seo para petshop local',
      'como posicionar petshop no google',
      'como conseguir clientes para petshop no google',
      'como melhorar seo de petshop local',
    ],
  },
  {
    key: 'clinica-market',
    label: 'Clínica — análise de mercado',
    niche: 'clínica médica',
    serviceType: 'market',
    suggestions: [
      'como validar demanda para clínica',
      'como analisar mercado para clínica privada',
      'como saber se uma clínica tem procura local',
      'como estudar concorrentes de clínica antes de investir em tráfego',
      'como saber se vale abrir uma clínica privada',
    ],
  },
  {
    key: 'clinica-ads',
    label: 'Clínica — anúncios e captação',
    niche: 'clínica médica',
    serviceType: 'ads',
    suggestions: [
      'quanto investir em google ads para clínica',
      'como captar pacientes com google ads',
      'palavras chave para google ads clínica',
      'estratégia de anúncios para clínica privada',
    ],
  },
  {
    key: 'imobiliaria-audit',
    label: 'Imobiliária — auditoria digital',
    niche: 'imobiliária',
    serviceType: 'audit',
    suggestions: [
      'auditoria de site para imobiliária',
      'checklist de auditoria digital para imobiliária',
      'como melhorar conversão de site imobiliário',
      'como auditar site de imobiliária antes de investir em anúncios',
      'erros de marketing em imobiliárias',
    ],
  },
  {
    key: 'imobiliaria-competitors',
    label: 'Imobiliária — análise de concorrentes',
    niche: 'imobiliária',
    serviceType: 'competitors',
    suggestions: [
      'como analisar concorrentes imobiliários',
      'como estudar concorrência no mercado imobiliário',
      'como descobrir estratégia de marketing de imobiliárias',
      'como comparar imobiliárias concorrentes',
    ],
  },
  {
    key: 'dentista-ads',
    label: 'Dentista — Google Ads',
    niche: 'dentista',
    serviceType: 'ads',
    suggestions: [
      'como saber quanto investir em google ads para dentista',
      'palavras chave para google ads de dentista',
      'como estruturar campanha google ads para clínica dentária',
      'quanto custa anunciar no google para dentista',
      'como captar pacientes para dentista com anúncios',
    ],
  },
  {
    key: 'dentista-local',
    label: 'Dentista — marketing local',
    niche: 'dentista',
    serviceType: 'local',
    suggestions: [
      'como captar pacientes locais para dentista',
      'seo local para dentista',
      'como aparecer no google maps como dentista',
      'como conseguir pacientes perto da clínica dentária',
    ],
  },
  {
    key: 'transportes-market',
    label: 'Mudanças e transportes — análise de mercado',
    niche: 'empresa de mudanças',
    serviceType: 'market',
    suggestions: [
      'como analisar mercado para empresa de mudanças',
      'como validar procura para empresa de mudanças',
      'como estudar concorrência local de mudanças',
      'como saber se vale investir em anúncios para mudanças',
      'como conseguir clientes para empresa de mudanças',
    ],
  },
  {
    key: 'transportes-strategy',
    label: 'Mudanças e transportes — estratégia de crescimento',
    niche: 'empresa de mudanças',
    serviceType: 'strategy',
    suggestions: [
      'estratégia de marketing para empresa de mudanças',
      'como crescer empresa de mudanças',
      'como conseguir mais clientes para mudanças',
      'como aumentar pedidos de mudanças locais',
    ],
  },
  {
    key: 'restaurante-market',
    label: 'Restaurante — análise de mercado',
    niche: 'restaurante',
    serviceType: 'market',
    suggestions: [
      'como analisar mercado para restaurante',
      'como saber se um restaurante tem procura local',
      'como estudar concorrência de restaurantes',
      'como validar mercado para restaurante',
    ],
  },
  {
    key: 'restaurante-pricing',
    label: 'Restaurante — investimento em marketing',
    niche: 'restaurante',
    serviceType: 'pricing',
    suggestions: [
      'quanto investir em marketing para restaurante',
      'quanto investir em google ads restaurante',
      'orçamento de marketing para restaurante local',
      'quanto custa anunciar restaurante no google',
    ],
  },
]

export function getClusterByKey(key: string) {
  return seoClusters.find((cluster) => cluster.key === key) ?? null
}
