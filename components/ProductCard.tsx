export function ProductCard({ product }) {
  return (
    <article className="productCard">
      <div className="productGlow" />
      <p className="eyebrow">{product.eyebrow}</p>
      <h3>{product.name}</h3>
      <p className="muted">{product.description}</p>
      <ul className="miniList">
        {product.stats.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={product.href} className="ctaButton" target="_blank" rel="noreferrer">
        {product.cta}
      </a>
    </article>
  )
}
