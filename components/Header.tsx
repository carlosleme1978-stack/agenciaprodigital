import Link from 'next/link'
import { siteConfig } from './siteData'

export function Header() {
  return (
    <header className="header shell">
      <Link href="/" className="brand" aria-label={siteConfig.name}>
        <img src={siteConfig.logo} alt={siteConfig.name} className="brandLogo" />
      </Link>

      <nav className="nav" aria-label="Navegação principal">
        <Link href="/auditor-ai">Auditor AI</Link>
        <Link href="/analyzer-market-ai">Analyzer Market AI</Link>
        <Link href="/adspilot">AdsPilot</Link>
        <Link href="/como-funciona">Como funciona</Link>
        <Link href="/exemplos-relatorios">Exemplos</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  )
}
