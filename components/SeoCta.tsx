import Link from 'next/link'

export function SeoCta({
  title,
  text,
  href,
}: {
  title: string
  text: string
  href: string
}) {
  return (
    <section className="seoCta">
      <div>
        <p className="eyebrow">Próximo passo</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="seoCtaActions">
        <Link href={href} className="ctaButton">
          Avançar agora
        </Link>
        <Link href="/como-funciona" className="ghostButton">
          Ver como funciona
        </Link>
      </div>
    </section>
  )
}
