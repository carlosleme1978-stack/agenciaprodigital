import { articleSchema, breadcrumbSchema, buildMetadata, faqSchema } from '@/lib/seo'
import type { SeoArticle } from '@/lib/seo-articles'

export function buildSeoArticleMetadata(article: SeoArticle) {
  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/blog/${article.slug}`,
    keywords: [article.keyword, article.niche, 'seo programático', 'marketing digital'],
  })
}

export function buildSeoArticleSchemas(article: SeoArticle) {
  return [
    articleSchema({
      headline: article.title,
      description: article.metaDescription,
      path: `/blog/${article.slug}`,
      keywords: [article.keyword, article.niche],
    }),
    faqSchema(article.faq),
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: article.title, path: `/blog/${article.slug}` },
    ]),
  ]
}
