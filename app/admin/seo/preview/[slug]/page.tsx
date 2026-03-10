import { notFound } from 'next/navigation'
import { SeoArticleView } from '@/components/SeoArticle'
import { getSeoArticleBySlug, getPublishedSeoArticles } from '@/lib/seo-articles'
import { getRelatedArticles } from '@/lib/seo/internal-links'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function AdminSeoPreviewPage({ params }: { params: { slug: string } }) {
  const article = await getSeoArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const publishedArticles = await getPublishedSeoArticles()
  const relatedArticles = getRelatedArticles(article, publishedArticles, 3)

  return <SeoArticleView article={article} relatedArticles={relatedArticles} />
}
