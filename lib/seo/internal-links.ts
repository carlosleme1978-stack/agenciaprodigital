import type { SeoArticle } from '@/lib/seo-articles'

export function getRelatedArticles(current: SeoArticle, articles: SeoArticle[], limit = 3) {
  const cleanCurrentSlug = current.slug.replace(/^blog\//, '')

  return articles
    .filter((article) => article.slug.replace(/^blog\//, '') !== cleanCurrentSlug)
    .map((article) => {
      let score = 0
      if (article.niche === current.niche) score += 4
      if (article.keyword === current.keyword) score += 2
      if (article.title.toLowerCase().includes(current.niche.toLowerCase())) score += 1
      if (current.title.toLowerCase().includes(article.niche.toLowerCase())) score += 1
      return { article, score }
    })
    .sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title))
    .slice(0, limit)
    .map((item) => item.article)
}
