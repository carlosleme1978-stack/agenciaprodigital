export default function MockupSite() {
  return (
    <div className="panel mockup">
      <div className="mockup-window">
        <div className="mockup-bar">
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
          <span className="subtle">marketintelligence.ai</span>
        </div>
        <div className="mockup-content">
          <div className="mockup-hero">
            <div className="eyebrow">Vitrine premium com SEO</div>
            <strong style={{ display: "block", fontSize: "1.5rem", marginBottom: 8 }}>
              Pare de anunciar no escuro.
            </strong>
            <span className="subtle">
              Diagnóstico, análise de mercado e criação de campanhas com IA em páginas focadas em conversão.
            </span>
          </div>
          <div className="mini-grid">
            <div className="mini-card">
              <strong>Auditor AI</strong>
              <p className="subtle">Erros, score e próximos passos.</p>
            </div>
            <div className="mini-card">
              <strong>Analyzer</strong>
              <p className="subtle">Demanda, concorrência e oferta.</p>
            </div>
            <div className="mini-card">
              <strong>AdsPilot</strong>
              <p className="subtle">Campanhas, keywords e execução.</p>
            </div>
          </div>
          <div className="content-box">
            <strong>Exemplos reais de relatórios</strong>
            <p className="subtle">Cards premium com score, diagnósticos, recomendações e CTA para o próximo SaaS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
