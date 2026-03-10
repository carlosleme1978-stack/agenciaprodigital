import Link from 'next/link'
import { siteConfig } from './siteData'

const niches = [
  { href: '/blog', label: 'Petshops' },
  { href: '/blog', label: 'Clínicas' },
  { href: '/blog', label: 'Imobiliárias' },
  { href: '/blog', label: 'Dentistas' },
  { href: '/blog', label: 'Restaurantes' },
  { href: '/blog', label: 'Mudanças' },
]

export function Footer() {
  return (
    <footer className="footer shell footerPremium">
      <div className="footerBrandBlock">
        <p className="footerTitle">{siteConfig.name}</p>
        <p className="footerText">
          Plataforma de análise de mercado, auditoria digital e criação de campanhas Google Ads com inteligência artificial para PMEs.
        </p>
        <div className="footerBadgeRow">
          <span><Link href="/privacy">Privacidade</Link></span>
          <span><Link href="/terms">Termos de Serviço</Link></span>
          <span><Link href="/contact">Contato</Link></span>
        </div>
      </div>

      <div className="footerColumns">
        <div className="footerColumn">
          <p className="footerColumnTitle">Ferramentas</p>
          <div className="footerLinks">
            <Link href="/ferramenta-analise-de-mercado">Análise de mercado</Link>
            <Link href="/auditoria-de-marketing-digital">Auditoria digital</Link>
            <Link href="/adspilot">AdsPilot</Link>
            <Link href="/analyzer-market-ai">Analyzer Market AI</Link>
          </div>
        </div>

        <div className="footerColumn">
          <p className="footerColumnTitle">Guias e recursos</p>
          <div className="footerLinks">
            <Link href="/como-analisar-mercado-antes-de-anunciar">Guia de mercado</Link>
            <Link href="/como-criar-campanha-google-ads">Guia Google Ads</Link>
            <Link href="/analisar-concorrencia-online">Guia de concorrência</Link>
            <Link href="/blog">Blog SEO</Link>
          </div>
        </div>

        <div className="footerColumn">
          <p className="footerColumnTitle">Nichos e clusters</p>
          <div className="footerLinks footerLinksDense">
            {niches.map((niche) => (
              <Link key={niche.label} href={niche.href}>
                {niche.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footerColumn">
          <p className="footerColumnTitle">Plataforma</p>
          <div className="footerLinks">
            <Link href="/como-funciona">Como funciona</Link>
            <Link href="/exemplos-relatorios">Exemplos</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/admin/seo">Admin SEO</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
