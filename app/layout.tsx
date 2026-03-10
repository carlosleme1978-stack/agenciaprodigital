import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/components/siteData'
import { organizationSchema, websiteSchema } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Análise de mercado, auditoria digital e Google Ads com IA`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Agencia Pro Digital é uma plataforma de IA para auditoria de sites, análise de mercado e criação de campanhas Google Ads para empresas em Portugal e no Brasil.',
  applicationName: siteConfig.name,
  keywords: [
    'agencia pro digital',
    'auditoria digital com IA',
    'análise de mercado com IA',
    'criação de campanhas google ads',
    'ferramenta de marketing digital',
    'tráfego pago para empresas',
    'google ads portugal',
    'google ads brasil',
  ],
  category: 'marketing digital',
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title: `${siteConfig.name} | Auditoria digital, análise de mercado e Google Ads com IA`,
    description:
      'Descubra gargalos no seu site, valide o mercado e crie campanhas Google Ads com apoio de IA.',
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: `${siteConfig.domain}${siteConfig.logo}`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - plataforma de IA para marketing digital`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | IA para auditoria, mercado e campanhas`,
    description:
      'Plataforma para auditoria digital, análise de mercado e campanhas Google Ads com IA.',
    images: [`${siteConfig.domain}${siteConfig.logo}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = [organizationSchema(), websiteSchema()]

  return (
    <html lang="pt-PT">
      <body>
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <div className="pageBg" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
