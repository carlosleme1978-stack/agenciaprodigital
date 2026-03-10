import Link from 'next/link'
import { siteConfig } from './siteData'

export function ProductPage({
  name,
  heading,
  eyebrow,
  intro,
  cta,
  link,
  report,
  bullets,
  sections,
}) {
  return (
    <>
      <section className="hero shell innerHero">
        <div className="heroCopy narrow">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{heading || name}</h1>
          <p className="heroLead">{intro}</p>
          <div className="heroActions">
            <a href={link} className="ctaButton" target="_blank" rel="noreferrer">
              {cta}
            </a>
            <Link href="/como-funciona" className="ghostButton">
              Como funciona
            </Link>
          </div>
        </div>
        <div className="heroPanel">{report}</div>
      </section>

      <section className="shell sectionSpacing">
        <div className="benefitGrid">
          {bullets.map((item) => (
            <div key={item.title} className="benefitCard">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell proseSection sectionSpacing">
        {sections.map((section) => (
          <div key={section.title} className="copyBlock">
            <h2>{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ))}
      </section>

      <section className="shell sectionSpacing finalCta">
        <div>
          <p className="eyebrow">Próximo passo estratégico</p>
          <h2>Conecte este diagnóstico com o restante da jornada.</h2>
          <p>
            O ecossistema da {siteConfig.name} foi pensado para auditar, validar o mercado e só depois
            criar a campanha. Isso melhora a clareza comercial e fortalece o SEO semântico do domínio.
          </p>
        </div>
        <div className="heroActions">
          <Link href="/exemplos-relatorios" className="ghostButton">
            Ver exemplos
          </Link>
          <Link href="/faq" className="ctaButton">
            Ler FAQ
          </Link>
        </div>
      </section>
    </>
  )
}
