import type { Metadata } from 'next'
import { siteConfig } from '@/components/siteData'

const defaultOgImage = `${siteConfig.domain}/agenciaprodigital-logo.png`

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
}): Metadata {
  const url = new URL(path, siteConfig.domain).toString()

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'pt_PT',
      type: 'website',
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOgImage],
    },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}${siteConfig.logo}`,
    sameAs: [],
    description:
      'Agencia Pro Digital é uma plataforma com IA para auditoria digital, análise de mercado e criação de campanhas Google Ads.',
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.domain,
    inLanguage: 'pt-PT',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.domain}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    areaServed: ['Portugal', 'Brasil'],
    url: new URL(path, siteConfig.domain).toString(),
  }
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.domain).toString(),
    })),
  }
}

export function faqSchema(
  items: Array<{
    q: string
    a: string
  }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}


export function articleSchema({
  headline,
  description,
  path,
  keywords = [],
}: {
  headline: string
  description: string
  path: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    keywords,
    inLanguage: 'pt-PT',
    mainEntityOfPage: new URL(path, siteConfig.domain).toString(),
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}${siteConfig.logo}`,
      },
    },
  }
}
