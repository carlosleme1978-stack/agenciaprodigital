import type { SeoArticle, SeoArticleSection, SeoFaqItem } from '@/lib/seo-articles'
import type { SeoServiceType } from '@/lib/ai/prompts'

type RawArticle = Partial<SeoArticle> & {
  sections?: SeoArticleSection[]
  faq?: SeoFaqItem[]
}

export function normalizeSlug(input: string) {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function ensureString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value.trim() : fallback
}

function ensureSections(value: unknown) {
  if (!Array.isArray(value)) return []
  return value
    .map((section) => ({
      heading: ensureString((section as SeoArticleSection)?.heading),
      paragraphs: Array.isArray((section as SeoArticleSection)?.paragraphs)
        ? (section as SeoArticleSection).paragraphs.map((p) => ensureString(p)).filter(Boolean)
        : [],
    }))
    .filter((section) => section.heading && section.paragraphs.length >= 2)
}

function ensureFaq(value: unknown) {
  if (!Array.isArray(value)) return []
  return value
    .map((item) => ({
      q: ensureString((item as SeoFaqItem)?.q),
      a: ensureString((item as SeoFaqItem)?.a),
    }))
    .filter((item) => item.q && item.a)
}

export function validateGeneratedArticle(input: {
  rawArticle: RawArticle
  keyword: string
  niche: string
  serviceType: SeoServiceType
}): SeoArticle {
  const raw = input.rawArticle
  const sections = ensureSections(raw.sections)
  const faq = ensureFaq(raw.faq)
  const slug = normalizeSlug(ensureString(raw.slug) || input.keyword)
  const title = ensureString(raw.title) || input.keyword
  const excerpt = ensureString(raw.excerpt)
  const metaTitle = ensureString(raw.metaTitle) || title
  const metaDescription = ensureString(raw.metaDescription)
  const ctaHref = ensureString(raw.ctaHref) || (input.serviceType === 'audit' ? '/auditoria-de-marketing-digital' : input.serviceType === 'ads' ? '/adspilot' : '/ferramenta-analise-de-mercado')

  if (sections.length < 3) {
    throw new Error('A IA devolveu conteúdo curto demais. São necessárias pelo menos 3 secções válidas.')
  }

  if (faq.length < 2) {
    throw new Error('A IA devolveu FAQ insuficiente. São necessárias pelo menos 2 perguntas.')
  }

  if (!excerpt || excerpt.length < 80) {
    throw new Error('Excerpt demasiado curto para SEO.')
  }

  if (!metaDescription || metaDescription.length < 120) {
    throw new Error('Meta description demasiado curta.')
  }

  return {
    slug,
    title,
    excerpt,
    keyword: input.keyword,
    niche: input.niche,
    metaTitle,
    metaDescription,
    ctaTitle: ensureString(raw.ctaTitle) || 'Descubra o potencial do seu mercado',
    ctaText:
      ensureString(raw.ctaText) ||
      'Use a ferramenta da Agenciaprodigital para validar procura, concorrência e prioridade de investimento antes de anunciar.',
    ctaHref,
    status: 'draft',
    publishedAt: new Date().toISOString().slice(0, 10),
    updatedAt: new Date().toISOString().slice(0, 10),
    readingMinutes: Number(raw.readingMinutes) > 0 ? Number(raw.readingMinutes) : 7,
    sections,
    faq,
  }
}

export function scoreSeoDraft(article: SeoArticle) {
  let score = 0
  if (article.metaDescription.length >= 140) score += 20
  if (article.sections.length >= 4) score += 20
  if (article.faq.length >= 2) score += 10
  if (article.excerpt.length >= 100) score += 15
  if (article.title.toLowerCase().includes(article.keyword.split(' ')[0].toLowerCase())) score += 10
  if (article.ctaText.length >= 120) score += 10
  if (article.readingMinutes >= 6) score += 15
  return Math.min(score, 100)
}
