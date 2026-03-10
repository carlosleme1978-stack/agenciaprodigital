export const dynamic = 'force-dynamic'
export const revalidate = 0

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SeoArticleView } from '@/components/SeoArticle'
import { buildSeoArticleMetadata, buildSeoArticleSchemas } from '@/lib/seo-programmatic'
import { getPublishedSeoArticleBySlug, getPublishedSeoArticles, getSeoArticleSlugs } from '@/lib/seo-articles'
import { getRelatedArticles } from '@/lib/seo/internal-links'

export async function generateStaticParams() {
  const slugs = await getSeoArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getPublishedSeoArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Artigo não encontrado',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return buildSeoArticleMetadata(article)
}

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = await getPublishedSeoArticleBySlug(params.slug)

  if (!article) notFound()

  const schemas = buildSeoArticleSchemas(article)
  const allArticles = await getPublishedSeoArticles()
  const relatedArticles = getRelatedArticles(article, allArticles, 3)

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SeoArticleView article={article} relatedArticles={relatedArticles} />
    </>
  )
}
