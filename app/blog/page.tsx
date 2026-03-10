export const dynamic = 'force-dynamic'
export const revalidate = 0

import Link from 'next/link'
import { getPublishedSeoArticles } from '@/lib/seo-articles'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Blog de SEO, análise de mercado e auditoria digital',
  description:
    'Artigos sobre análise de mercado, auditoria de site, SEO e preparação para tráfego pago.',
  path: '/blog',
  keywords: ['blog seo', 'análise de mercado', 'auditoria digital', 'google ads'],
})

export default async function BlogPage() {
  const articles = await getPublishedSeoArticles()

  return (
    <div className="shell sectionSpacing">
      <section className="innerHero articleHero">
        <div className="articleHeroCopy">
          <p className="eyebrow">Base SEO Programático</p>
          <h1>Artigos de relevância para profissionais de marketing e negócios</h1>
          <p className="heroLead narrow">
            Explore nosso blog para obter insights valiosos sobre análise de mercado, auditoria de site, SEO e preparação para tráfego pago. Nossos artigos são projetados para ajudar profissionais de marketing e negócios a se manterem atualizados com as melhores práticas e estratégias eficazes para impulsionar o crescimento online.
          </p>
        </div>
      </section>

      <section className="sectionSpacing">
        <div className="blogGrid">
          {articles.map((article) => (
            <article key={article.slug} className="blogCard">
              <p className="eyebrow">{article.niche}</p>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <div className="articleMetaRow compact">
                <span>{article.readingMinutes} min</span>
                <span>{article.updatedAt}</span>
              </div>
              <Link className="ctaButton" href={`/blog/${article.slug.replace(/^blog\//, '')}`}>
                Ler artigo
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
