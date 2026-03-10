import type { SeoFaqItem } from '@/lib/seo-articles'

export function SeoFaq({ items }: { items: SeoFaqItem[] }) {
  if (!items.length) return null

  return (
    <section className="articleBlock">
      <div className="sectionIntro">
        <h2>Perguntas frequentes</h2>
      </div>
      <div className="faqList">
        {items.map((item) => (
          <article key={item.q} className="faqItem">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
