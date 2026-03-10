import Link from 'next/link'
import { siteConfig } from './siteData'

type Section = {
  title: string
  paragraphs: string[]
}

type Faq = {
  q: string
  a: string
}

type RelatedLink = {
  href: string
  label: string
  text: string
}

export function SeoContentPage({
  eyebrow,
  title,
  intro,
  ctaLabel,
  ctaHref,
  overviewTitle,
  overviewText,
  highlights,
  sections,
  faqs,
  related,
}: {
  eyebrow: string
  title: string
  intro: string
  ctaLabel: string
  ctaHref: string
  overviewTitle: string
  overviewText: string
  highlights: Array<{ title: string; text: string }>
  sections: Section[]
  faqs: Faq[]
  related: RelatedLink[]
}) {
  return (
    <>
      <section className="hero shell innerHero">
        <div className="heroCopy narrow">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="heroLead">{intro}</p>
          <div className="heroActions">
            <a href={ctaHref} className="ctaButton" target="_blank" rel="noreferrer">
              {ctaLabel}
            </a>
            <Link href="/exemplos-relatorios" className="ghostButton">
              Ver exemplos
            </Link>
          </div>
        </div>

        <div className="heroPanel">
          <div className="dashboardPreview">
            <div className="dashboardTop">
              <span className="chip">SEO premium</span>
              <span className="chip">Conteúdo estratégico</span>
              <span className="chip">Conversão</span>
            </div>
            <div className="sectionIntro" style={{ marginTop: 16 }}>
              <h2>{overviewTitle}</h2>
              <p>{overviewText}</p>
            </div>
            <div className="mockFlow">
              {highlights.map((item) => (
                <div key={item.title} className="flowItem">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell sectionSpacing">
        <div className="benefitGrid">
          {highlights.map((item) => (
            <article key={item.title} className="benefitCard">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell proseSection sectionSpacing">
        {sections.map((section) => (
          <article key={section.title} className="copyBlock">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="shell sectionSpacing proseSection">
        <div className="sectionIntro">
          <p className="eyebrow">Perguntas estratégicas</p>
          <h2>FAQ da página</h2>
        </div>
        <div className="faqList">
          {faqs.map((faq) => (
            <article key={faq.q} className="faqItem">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell sectionSpacing">
        <div className="sectionIntro">
          <p className="eyebrow">Links internos estratégicos</p>
          <h2>Próximas leituras para fortalecer a autoridade temática</h2>
        </div>
        <div className="journeyGrid">
          {related.map((item, index) => (
            <article key={item.href} className="journeyCard">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>
                <Link href={item.href}>{item.label}</Link>
              </h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell sectionSpacing finalCta">
        <div>
          <p className="eyebrow">Transformar leitura em ação</p>
          <h2>Depois do conteúdo, leve o visitante para a ferramenta certa.</h2>
          <p>
            A leitura educa, gera confiança e amplia o SEO. O próximo passo é usar o ecossistema da{' '}
            {siteConfig.name} para auditar, validar o mercado e criar campanhas com mais segurança.
          </p>
        </div>
        <div className="heroActions">
          <Link href="/auditor-ai" className="ghostButton">
            Ver Auditor AI
          </Link>
          <Link href="/analyzer-market-ai" className="ghostButton">
            Ver Analyzer Market AI
          </Link>
          <a href={siteConfig.links.adspilot} className="ctaButton" target="_blank" rel="noreferrer">
            Ir para AdsPilot
          </a>
        </div>
      </section>
    </>
  )
}
