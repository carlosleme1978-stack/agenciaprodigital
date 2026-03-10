import { siteConfig } from '@/components/siteData'
import { getSupabaseAdmin, hasSupabaseAdminEnv } from '@/lib/db/supabase-admin'

export type SeoFaqItem = {
  q: string
  a: string
}

export type SeoArticleSection = {
  heading: string
  paragraphs: string[]
}

export type SeoArticle = {
  slug: string
  title: string
  excerpt: string
  keyword: string
  niche: string
  metaTitle: string
  metaDescription: string
  ctaTitle: string
  ctaText: string
  ctaHref: string
  status: 'draft' | 'published'
  publishedAt: string
  updatedAt: string
  readingMinutes: number
  sections: SeoArticleSection[]
  faq: SeoFaqItem[]
}

type SaveMeta = {
  source?: 'manual' | 'ai'
  model?: string | null
  qualityScore?: number | null
}

const demoArticles: SeoArticle[] = [
  {
    slug: 'como-analisar-mercado-para-restaurante',
    title: 'Como analisar mercado para restaurante antes de investir em anúncios',
    excerpt:
      'Veja como avaliar procura, concorrência, ticket médio e sinais de oportunidade antes de colocar dinheiro em tráfego pago para restaurante.',
    keyword: 'como analisar mercado para restaurante',
    niche: 'restaurante',
    metaTitle: 'Como analisar mercado para restaurante antes de anunciar',
    metaDescription:
      'Aprenda a validar procura, concorrência e viabilidade de um restaurante antes de investir em Google Ads ou Instagram Ads.',
    ctaTitle: 'Quer validar o seu mercado antes de anunciar?',
    ctaText:
      'Use a ferramenta de análise de mercado para descobrir procura, concorrência e oportunidades antes de investir em tráfego pago.',
    ctaHref: '/ferramenta-analise-de-mercado',
    status: 'published',
    publishedAt: '2026-03-07',
    updatedAt: '2026-03-07',
    readingMinutes: 7,
    sections: [
      {
        heading: 'Comece pela procura real e não pela intuição',
        paragraphs: [
          'Muitos restaurantes começam anúncios cedo demais, sem perceber se existe procura suficiente para o tipo de cozinha, faixa de preço e zona onde querem operar. Antes de investir, o primeiro passo é analisar se as pessoas já demonstram interesse por aquele tipo de oferta.',
          'Procura real aparece em sinais simples: pesquisas no Google, concorrentes ativos, anúncios recorrentes e presença consistente em mapas e diretórios. Quando estes sinais são fracos, a campanha tende a ficar cara e a converter mal.',
        ],
      },
      {
        heading: 'Mapeie concorrência, preço e posicionamento',
        paragraphs: [
          'Não basta saber que existem outros restaurantes. É preciso perceber quem domina a atenção do cliente, quais têm avaliações fortes, quem trabalha melhor o menu, quem usa promoções e que tipo de linguagem usam para vender.',
          'Ao comparar concorrentes, observe ticket médio, promessa principal, diferenciação e presença digital. Um restaurante de delivery rápido compete de forma diferente de um espaço focado em experiência presencial.',
        ],
      },
      {
        heading: 'Valide a base antes de escalar o orçamento',
        paragraphs: [
          'Se o mercado ainda está pouco claro, investir mais em anúncios não resolve o problema. Primeiro valide oferta, procura e posicionamento. Depois disso, a campanha tende a ganhar previsibilidade e a desperdiçar menos orçamento.',
        ],
      },
    ],
    faq: [
      {
        q: 'Como saber se um restaurante tem procura suficiente?',
        a: 'É preciso cruzar pesquisas, concorrência local, sinais de intenção e diferenciação real do serviço principal.',
      },
      {
        q: 'Devo fazer anúncios antes de validar o mercado?',
        a: 'O ideal é primeiro validar serviço, procura e posicionamento. Depois disso, os anúncios tendem a ter melhor custo e maior previsibilidade.',
      },
    ],
  },
  {
    slug: 'como-validar-demanda-para-clinica',
    title: 'Como validar demanda para clínica antes de abrir ou anunciar',
    excerpt:
      'Descubra como analisar procura, especialidades, concorrência e potencial de aquisição antes de investir numa clínica.',
    keyword: 'como validar demanda para clínica',
    niche: 'clínica',
    metaTitle: 'Como validar demanda para clínica antes de investir',
    metaDescription:
      'Aprenda a validar procura, concorrência e sinais de mercado para clínica antes de aumentar orçamento de aquisição.',
    ctaTitle: 'Quer validar o seu mercado na saúde?',
    ctaText:
      'Mapeie procura, concorrentes e posicionamento com a ferramenta de análise de mercado antes de investir em aquisição.',
    ctaHref: '/ferramenta-analise-de-mercado',
    status: 'published',
    publishedAt: '2026-03-07',
    updatedAt: '2026-03-07',
    readingMinutes: 6,
    sections: [
      {
        heading: 'Procura local e especialidade mudam tudo',
        paragraphs: [
          'Uma clínica pode ter boa reputação e ainda assim anunciar mal se não compreender a procura específica por especialidade, localização e urgência de marcação.',
          'Antes de escalar tráfego, valide quais tratamentos são mais procurados, quem domina a procura local e que tipo de promessa faz o paciente avançar para contacto.',
        ],
      },
      {
        heading: 'Confiar em feeling é caro',
        paragraphs: [
          'Na saúde, custo por lead e confiança andam juntos. Quando o posicionamento é vago ou a oferta não responde à procura real, a clínica paga mais por clique e converte menos.',
        ],
      },
    ],
    faq: [
      {
        q: 'Uma clínica deve validar mercado antes de anunciar?',
        a: 'Sim. Isso ajuda a escolher especialidade, linguagem e segmentação com menor desperdício de orçamento.',
      },
      {
        q: 'Basta olhar para concorrentes?',
        a: 'Não. Além da concorrência, é preciso analisar procura local, capacidade operacional e proposta de valor.',
      },
    ],
  },
  {
    slug: 'auditoria-de-site-para-imobiliaria',
    title: 'Auditoria de site para imobiliária: o que analisar antes de investir mais em tráfego',
    excerpt:
      'Entenda os pontos críticos de SEO, confiança e conversão que um site imobiliário precisa resolver antes de aumentar investimento em anúncios.',
    keyword: 'auditoria de site para imobiliária',
    niche: 'imobiliária',
    metaTitle: 'Auditoria de site para imobiliária antes de investir em tráfego',
    metaDescription:
      'Veja como auditar um site imobiliário para melhorar confiança, captação de leads e aproveitamento do orçamento de tráfego pago.',
    ctaTitle: 'Quer descobrir os gargalos do seu site?',
    ctaText:
      'Faça uma auditoria digital para identificar os bloqueios que reduzem confiança, cliques e geração de leads no seu site.',
    ctaHref: '/auditoria-de-marketing-digital',
    status: 'published',
    publishedAt: '2026-03-07',
    updatedAt: '2026-03-07',
    readingMinutes: 8,
    sections: [
      {
        heading: 'Um site bonito não garante geração de leads',
        paragraphs: [
          'No mercado imobiliário, muitos sites falham não por falta de imóveis, mas por excesso de ruído, navegação fraca e pouca clareza comercial. O visitante até chega, mas não avança para contacto.',
        ],
      },
      {
        heading: 'Confiança, velocidade e hierarquia visual importam muito',
        paragraphs: [
          'Se a página demora, os formulários não inspiram confiança ou os imóveis não têm organização clara, o tráfego pago perde eficiência. O custo da campanha sobe porque a conversão no site continua baixa.',
          'Por isso, a auditoria deve olhar tanto para SEO técnico quanto para comunicação, arquitetura da página e elementos de decisão.',
        ],
      },
      {
        heading: 'Auditar antes de aumentar orçamento reduz desperdício',
        paragraphs: [
          'Quando a estrutura do site melhora primeiro, cada euro investido em tráfego tende a render mais. Em vez de empurrar mais visitantes para uma página fraca, você corrige a base e aproveita melhor a procura existente.',
        ],
      },
    ],
    faq: [
      {
        q: 'Uma imobiliária deve auditar o site antes de anunciar?',
        a: 'Sim. Quando o site tem falhas de confiança, clareza ou conversão, o tráfego pago tende a ficar caro e menos eficiente.',
      },
      {
        q: 'SEO local ajuda imobiliárias?',
        a: 'Ajuda bastante, sobretudo quando as páginas comunicam zonas, tipos de imóvel e intenções de procura com clareza.',
      },
    ],
  },
]

function fromRow(row: any): SeoArticle {
  return {
    slug: String(row.slug || '').replace(/^blog\//, ''),
    title: row.title,
    excerpt: row.excerpt,
    keyword: row.keyword,
    niche: row.niche,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    ctaTitle: row.cta_title || 'Descubra a oportunidade do seu mercado',
    ctaText: row.cta_text || 'Use a Agenciaprodigital para validar mercado e melhorar a base antes de anunciar.',
    ctaHref: row.cta_href || '/ferramenta-analise-de-mercado',
    status: row.status,
    publishedAt: (row.published_at || row.created_at || new Date().toISOString()).slice(0, 10),
    updatedAt: (row.updated_at || new Date().toISOString()).slice(0, 10),
    readingMinutes: row.reading_minutes || 7,
    sections: Array.isArray(row.content) ? row.content : [],
    faq: Array.isArray(row.faq) ? row.faq : [],
  }
}

async function fetchArticlesByStatus(status?: 'draft' | 'published') {
  const supabase = getSupabaseAdmin()
  let query = supabase.from('seo_articles').select('*').order('updated_at', { ascending: false })

  if (status) {
    query = query.eq('status', status)
  }

  const { data, error } = await query
  if (error) throw error
  return (data || []).map(fromRow)
}

async function fetchOneBySlug(slug: string) {
  const supabase = getSupabaseAdmin()
  const cleanSlug = slug.replace(/^blog\//, '')
  const { data, error } = await supabase.from('seo_articles').select('*').eq('slug', cleanSlug).maybeSingle()

  if (error) throw error
  return data ? fromRow(data) : null
}

async function fetchOnePublishedBySlug(slug: string) {
  const supabase = getSupabaseAdmin()
  const cleanSlug = slug.replace(/^blog\//, '')
  const { data, error } = await supabase
    .from('seo_articles')
    .select('*')
    .eq('slug', cleanSlug)
    .eq('status', 'published')
    .maybeSingle()

  if (error) throw error
  return data ? fromRow(data) : null
}

export async function getPublishedSeoArticles(): Promise<SeoArticle[]> {
  if (!hasSupabaseAdminEnv()) {
    return demoArticles.filter((article) => article.status === 'published')
  }

  const rows = await fetchArticlesByStatus('published')
  if (rows.length > 0) return rows
  return demoArticles.filter((article) => article.status === 'published')
}

export async function getAllSeoArticles(): Promise<SeoArticle[]> {
  if (!hasSupabaseAdminEnv()) {
    return demoArticles
  }

  const rows = await fetchArticlesByStatus()
  if (rows.length > 0) return rows
  return demoArticles
}

export async function getSeoArticleBySlug(slug: string): Promise<SeoArticle | null> {
  const cleanSlug = slug.replace(/^blog\//, '')

  if (!hasSupabaseAdminEnv()) {
    return demoArticles.find((article) => article.slug === cleanSlug) ?? null
  }

  const fromDb = await fetchOneBySlug(cleanSlug)
  if (fromDb) return fromDb
  return demoArticles.find((article) => article.slug === cleanSlug) ?? null
}

export async function getPublishedSeoArticleBySlug(slug: string): Promise<SeoArticle | null> {
  const cleanSlug = slug.replace(/^blog\//, '')

  if (!hasSupabaseAdminEnv()) {
    return demoArticles.find((article) => article.slug === cleanSlug && article.status === 'published') ?? null
  }

  const fromDb = await fetchOnePublishedBySlug(cleanSlug)
  if (fromDb) return fromDb
  return demoArticles.find((article) => article.slug === cleanSlug && article.status === 'published') ?? null
}

export async function getSeoArticleSlugs(): Promise<string[]> {
  const articles = await getPublishedSeoArticles()
  return articles.map((article) => article.slug.replace(/^blog\//, ''))
}

export async function saveSeoDraft(article: SeoArticle, meta?: SaveMeta) {
  const supabase = getSupabaseAdmin()

  const payload = {
    slug: article.slug.replace(/^blog\//, ''),
    title: article.title,
    excerpt: article.excerpt,
    keyword: article.keyword,
    niche: article.niche,
    meta_title: article.metaTitle,
    meta_description: article.metaDescription,
    cta_title: article.ctaTitle,
    cta_text: article.ctaText,
    cta_href: article.ctaHref,
    content: article.sections,
    faq: article.faq,
    status: 'draft',
    reading_minutes: article.readingMinutes,
    updated_at: new Date().toISOString(),
    quality_score: meta?.qualityScore ?? null,
    generation_source: meta?.source ?? 'manual',
    generation_model: meta?.model ?? null,
  }

  const { data, error } = await supabase
    .from('seo_articles')
    .upsert(payload, { onConflict: 'slug' })
    .select('id, slug, status')
    .single()

  if (error) throw error
  return data
}

export async function publishSeoArticle(slug: string) {
  const supabase = getSupabaseAdmin()
  const now = new Date().toISOString()
  const cleanSlug = slug.replace(/^blog\//, '')
  const { data, error } = await supabase
    .from('seo_articles')
    .update({
      status: 'published',
      published_at: now,
      updated_at: now,
    })
    .eq('slug', cleanSlug)
    .select('id, slug, status')
    .single()

  if (error) throw error
  return data
}

export async function deleteSeoArticle(slug: string) {
  const supabase = getSupabaseAdmin()
  const cleanSlug = slug.replace(/^blog\//, '')
  const { error } = await supabase.from('seo_articles').delete().eq('slug', cleanSlug)
  if (error) throw error
  return { slug: cleanSlug, deleted: true }
}

export function articleAbsoluteUrl(slug: string) {
  return `${siteConfig.domain}/blog/${slug.replace(/^blog\//, '')}`
}
