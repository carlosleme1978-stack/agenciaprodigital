import type { MetadataRoute } from 'next'
import { siteConfig } from '@/components/siteData'
import { getSeoArticleSlugs } from '@/lib/seo-articles'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/auditor-ai',
    '/analyzer-market-ai',
    '/adspilot',
    '/exemplos-relatorios',
    '/como-funciona',
    '/faq',
    '/blog',
    '/ferramenta-analise-de-mercado',
    '/auditoria-de-marketing-digital',
    '/como-analisar-mercado-antes-de-anunciar',
    '/como-criar-campanha-google-ads',
    '/analisar-concorrencia-online',
    '/palavras-chave-para-google-ads',
  ]

  const articleSlugs = await getSeoArticleSlugs()
  const lastModified = '2026-03-07'

  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.8,
  }))

  const articleRoutes = articleSlugs.map((slug) => ({
    url: `${siteConfig.domain}/blog/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  return [...staticRoutes, ...articleRoutes]
}
