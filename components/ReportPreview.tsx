export function ReportPreview({ title, score, items, variant = 'default' }) {
  return (
    <article className={`reportCard ${variant}`}>
      <div className="reportHead">
        <div>
          <p className="eyebrow">Exemplo realista</p>
          <h3>{title}</h3>
        </div>
        <div className="scoreBox">
          <span>Score</span>
          <strong>{score}</strong>
        </div>
      </div>
      <div className="reportGrid">
        {items.map((item) => (
          <div key={item.label} className="reportItem">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            {item.note ? <p>{item.note}</p> : null}
          </div>
        ))}
      </div>
    </article>
  )
}
