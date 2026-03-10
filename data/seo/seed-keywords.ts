export type SeoSeedKeyword = {
  keyword: string
  niche: string
  serviceType:
    | 'market'
    | 'audit'
    | 'ads'
    | 'seo'
    | 'competitors'
    | 'pricing'
    | 'strategy'
    | 'local'
}

export const seedKeywords: SeoSeedKeyword[] = [
  { keyword: 'como analisar mercado para restaurante', niche: 'restaurante', serviceType: 'market' },
  { keyword: 'como validar demanda para clínica', niche: 'clínica médica', serviceType: 'market' },
  { keyword: 'auditoria de site para imobiliária', niche: 'imobiliária', serviceType: 'audit' },
  { keyword: 'como saber quanto investir em google ads para dentista', niche: 'dentista', serviceType: 'ads' },
  { keyword: 'seo local para petshop', niche: 'petshop', serviceType: 'seo' },
  { keyword: 'como analisar concorrentes imobiliários', niche: 'imobiliária', serviceType: 'competitors' },
  { keyword: 'quanto investir em marketing para restaurante', niche: 'restaurante', serviceType: 'pricing' },
  { keyword: 'estratégia de marketing para empresa de mudanças', niche: 'empresa de mudanças', serviceType: 'strategy' },
  { keyword: 'como captar pacientes locais para dentista', niche: 'dentista', serviceType: 'local' },
  { keyword: 'como validar mercado para petshop', niche: 'petshop', serviceType: 'market' },
  { keyword: 'auditoria de marketing digital para clínica estética', niche: 'clínica estética', serviceType: 'audit' },
  { keyword: 'como começar google ads para imobiliária', niche: 'imobiliária', serviceType: 'ads' },
  { keyword: 'como analisar mercado para empresa de mudanças', niche: 'empresa de mudanças', serviceType: 'market' },
  { keyword: 'como estudar concorrência local para restaurante', niche: 'restaurante', serviceType: 'competitors' },
  { keyword: 'como auditar site de dentista antes de anunciar', niche: 'dentista', serviceType: 'audit' },
]
