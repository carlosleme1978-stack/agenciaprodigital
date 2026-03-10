import Link from 'next/link'
import type { SeoArticle } from '@/lib/seo-articles'
import { SeoFaq } from '@/components/SeoFaq'
import { SeoCta } from '@/components/SeoCta'

function inferArticleType(article: SeoArticle) {
  if (article.ctaHref.includes('analise-de-mercado')) return 'Análise de mercado'
  if (article.ctaHref.includes('auditoria')) return 'Auditoria digital'
  if (article.ctaHref.includes('adspilot')) return 'Google Ads e crescimento'
  return 'Estratégia digital'
}

function inferSearchIntent(keyword: string) {
  const lower = keyword.toLowerCase()
  if (lower.includes('quanto') || lower.includes('custa') || lower.includes('investir')) {
    return 'Decisão de investimento'
  }
  if (lower.includes('concorr')) {
    return 'Investigação competitiva'
  }
  if (lower.includes('seo') || lower.includes('google maps') || lower.includes('local')) {
    return 'Captação orgânica'
  }
  if (lower.includes('ads') || lower.includes('anúncios') || lower.includes('google ads')) {
    return 'Captação paga'
  }
  return 'Pesquisa e validação'
}

function inferOpportunity(article: SeoArticle) {
  const lower = `${article.keyword} ${article.title}`.toLowerCase()
  if (lower.includes('quanto') || lower.includes('investir') || lower.includes('ads') || lower.includes('google ads')) {
    return 'Alta'
  }
  if (lower.includes('concorr') || lower.includes('auditoria') || lower.includes('seo')) {
    return 'Média-alta'
  }
  return 'Média'
}

export function SeoArticleView({
  article,
  relatedArticles = [],
}: {
  article: SeoArticle
  relatedArticles?: SeoArticle[]
}) {
  const articleType = inferArticleType(article)
  const intent = inferSearchIntent(article.keyword)
  const opportunity = inferOpportunity(article)
  const keyTakeaways = article.sections.slice(0, 3).map((section) => section.heading)

  return (
    <div className="shell sectionSpacing articleShell">
      <section className="articleHero">
        <div className="articleHeroCopy">
          <p className="eyebrow">Blog SEO programático</p>
          <h1>{article.title}</h1>
          <p className="heroLead narrow">{article.excerpt}</p>
          <div className="articleMetaRow">
            <span>{article.niche}</span>
            <span>{articleType}</span>
            <span>{article.readingMinutes} min de leitura</span>
            <span>Atualizado em {article.updatedAt}</span>
          </div>
        </div>
      </section>

      <div className="articleLayout">
        <article className="articleContent">
          {article.sections.map((section) => (
            <section key={section.heading} className="articleBlock">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`}>{paragraph}</p>
              ))}
            </section>
          ))}

          <SeoFaq items={article.faq} />
          <SeoCta title={article.ctaTitle} text={article.ctaText} href={article.ctaHref} />

          {relatedArticles.length > 0 ? (
            <section className="relatedArticlesBlock">
              <div className="sectionHeadingCompact">
                <p className="eyebrow">Links internos</p>
                <h2>Artigos relacionados</h2>
                <p className="sectionSupportText">
                  Continue a leitura com guias do mesmo cluster para reforçar análise, estratégia e decisão.
                </p>
              </div>
              <div className="blogGrid relatedArticlesGrid">
                {relatedArticles.map((related) => (
                  <article key={related.slug} className="blogCard relatedArticleCard">
                    <p className="eyebrow">{related.niche}</p>
                    <h3>{related.title}</h3>
                    <p>{related.excerpt}</p>
                    <Link className="ctaButton" href={`/blog/${related.slug.replace(/^blog\//, '')}`}>
                      Ler artigo
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <aside className="articleSidebar premiumSidebar">
          <div className="articleCard articleCardHighlight">
            <p className="articleCardLabel">Keyword estratégica</p>
            <strong>{article.keyword}</strong>
            <div className="articleInsightGrid">
              <div>
                <span className="articleMiniLabel">Intenção de busca</span>
                <p>{intent}</p>
              </div>
              <div>
                <span className="articleMiniLabel">Oportunidade</span>
                <p>{opportunity}</p>
              </div>
            </div>
          </div>

          <div className="articleCard">
            <p className="articleCardLabel">Resumo SEO do artigo</p>
            <div className="articleInfoRows">
              <div className="articleInfoRow"><span>Cluster</span><strong>{article.niche}</strong></div>
              <div className="articleInfoRow"><span>Tipo</span><strong>{articleType}</strong></div>
              <div className="articleInfoRow"><span>Leitura</span><strong>{article.readingMinutes} min</strong></div>
              <div className="articleInfoRow"><span>Estado</span><strong>Publicado</strong></div>
            </div>
          </div>

          <div className="articleCard">
            <p className="articleCardLabel">Este guia ajuda a</p>
            <ul className="articleChecklist">
              {keyTakeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="articleCard">
            <p className="articleCardLabel">Próximos conteúdos</p>
            <div className="articleSidebarLinks premiumLinks">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug.replace(/^blog\//, '')}`}>
                    {related.title}
                  </Link>
                ))
              ) : (
                <>
                  <Link href="/blog">Ver todos os artigos</Link>
                  <Link href="/ferramenta-analise-de-mercado">Ferramenta de análise</Link>
                  <Link href="/auditoria-de-marketing-digital">Auditoria digital</Link>
                </>
              )}
            </div>
          </div>

          <div className="articleCard articleCardCta">
            <p className="articleCardLabel">Próximo passo</p>
            <strong>Descubra se o seu mercado tem potencial real</strong>
            <p>
              Valide procura, concorrência e posicionamento antes de investir mais em tráfego.
            </p>
            <Link className="ctaButton" href={article.ctaHref}>
              Abrir ferramenta recomendada
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
