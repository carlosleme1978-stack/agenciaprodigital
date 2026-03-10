import type { Metadata } from 'next'
import { SeoContentPage } from '@/components/SeoContentPage'
import { siteConfig } from '@/components/siteData'
import { articleSchema, breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from '@/lib/seo'

const title = 'Auditoria de marketing digital para descobrir gargalos antes de escalar tráfego'
const description =
  'Veja como uma auditoria de marketing digital ajuda a corrigir promessa, página, oferta e conversão antes de aumentar investimento em Google Ads ou Instagram Ads.'

const faqs = [
  {
    q: 'Auditoria de marketing digital é só olhar o design do site?',
    a: 'Não. Uma boa auditoria analisa clareza da oferta, estrutura da página, prova, CTA, confiança, coerência entre anúncio e landing page e possíveis pontos de fuga do utilizador.',
  },
  {
    q: 'Vale auditar antes de fazer tráfego pago?',
    a: 'Sim. Quando o ativo principal está fraco, aumentar tráfego só acelera desperdício. Auditar antes protege orçamento e ajuda a melhorar a taxa de conversão.',
  },
  {
    q: 'O que fazer depois da auditoria?',
    a: 'O ideal é aplicar os ajustes prioritários, rever mensagem, prova e CTA, validar o mercado e só então escalar mídia. Assim a aquisição passa a trabalhar sobre uma base melhor.',
  },
]

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/auditoria-de-marketing-digital',
  keywords: [
    'auditoria de marketing digital',
    'auditoria de site para tráfego pago',
    'análise de landing page',
    'corrigir conversão do site',
    'diagnóstico marketing digital',
  ],
})

export default function AuditoriaMarketingDigitalPage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Auditoria de marketing digital', path: '/auditoria-de-marketing-digital' },
    ]),
    articleSchema({
      headline: title,
      description,
      path: '/auditoria-de-marketing-digital',
      keywords: ['auditoria digital', 'landing page', 'taxa de conversão', 'tráfego pago'],
    }),
    serviceSchema({
      name: 'Auditoria de marketing digital com IA',
      description,
      path: '/auditoria-de-marketing-digital',
    }),
    faqSchema(faqs),
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SeoContentPage
        eyebrow="SEO comercial · conversão e diagnóstico"
        title={title}
        intro="Antes de aumentar investimento em mídia, a empresa precisa descobrir onde está a travar. Uma auditoria de marketing digital identifica falhas de mensagem, confiança, estrutura e conversão que impedem o tráfego de render." 
        ctaLabel="Fazer auditoria agora"
        ctaHref={siteConfig.links.auditor}
        overviewTitle="Auditoria boa não aponta só defeito"
        overviewText="Ela mostra o que está a travar a resposta do mercado e orienta o próximo passo com prioridade, clareza e impacto comercial."
        highlights={[
          {
            title: 'Descobrir vazamentos de conversão',
            text: 'O visitante chega, mas não entende a oferta, não confia ou não sabe qual ação deve tomar. Esse é o tipo de gargalo que mais destrói performance.',
          },
          {
            title: 'Ajustar promessa e clareza',
            text: 'Headlines confusas, benefício fraco e CTA genérico fazem a empresa parecer igual a todas as outras.',
          },
          {
            title: 'Preparar base para tráfego',
            text: 'Quando a página melhora, o anúncio deixa de carregar sozinho todo o peso da conversão.',
          },
        ]}
        sections={[
          {
            title: 'O que uma auditoria de marketing digital precisa analisar',
            paragraphs: [
              'Auditoria séria não é checklist superficial. Ela precisa observar mensagem, arquitetura da página, prova, autoridade percebida, chamadas para ação, coerência visual e fricções que fazem o utilizador abandonar a navegação. Em muitos casos, o problema não está no tráfego. Está no ativo que recebe esse tráfego.',
              'Além disso, a auditoria deve considerar o contexto do negócio. Uma landing page para clínica, por exemplo, exige sinais de confiança diferentes de uma página para construção civil ou consultoria. Sem essa leitura contextual, a análise vira lista genérica e perde valor estratégico.',
            ],
          },
          {
            title: 'Por que escalar tráfego sem auditar costuma sair caro',
            paragraphs: [
              'Quando a empresa aumenta orçamento sem corrigir a base, ela acelera um sistema defeituoso. O anúncio até consegue gerar cliques, mas esses cliques encontram uma proposta fraca, uma página confusa ou um CTA tímido. O resultado é um funil caro e instável.',
              'Muitas marcas confundem volume com prontidão. Só porque conseguem pôr anúncios no ar não significa que estão preparadas para converter. A auditoria funciona como etapa de filtragem e priorização. Ela mostra o que precisa ser ajustado primeiro para o tráfego começar a trabalhar em cima de algo mais sólido.',
            ],
          },
          {
            title: 'Como a auditoria fortalece SEO on-page e páginas comerciais',
            paragraphs: [
              'Uma auditoria de marketing digital também melhora SEO. Ao revisar headlines, subtítulos, prova e estrutura de conteúdo, a página passa a comunicar melhor para pessoas e motores de busca. Isso aumenta relevância semântica, melhora escaneabilidade e reduz o desalinhamento entre intenção de busca e mensagem entregue.',
              'Quando a empresa entende a sua proposta com mais precisão, também consegue criar páginas satélite, guias e páginas comerciais mais fortes. É assim que SEO e conversão deixam de competir e começam a trabalhar juntos.',
            ],
          },
          {
            title: 'Onde o Auditor AI entra no processo',
            paragraphs: [
              'O Auditor AI foi desenhado para dar essa primeira leitura de forma rápida e útil. Ele ajuda a detectar gargalos em site, landing page e Instagram, entregando um diagnóstico visual com direção prática. Isso encurta o caminho entre “algo não está a resultar” e “agora sei o que preciso corrigir”.',
              'Depois da auditoria, o negócio pode aprofundar a análise de mercado ou avançar para a criação de campanhas. Essa integração entre diagnóstico, posicionamento e mídia deixa o domínio mais forte e o processo comercial mais claro.',
            ],
          },
        ]}
        faqs={faqs}
        related={[
          {
            href: '/como-criar-campanha-google-ads',
            label: 'Como criar campanha Google Ads',
            text: 'Mostra como preparar a campanha depois de corrigir a base comercial e a página de destino.',
          },
          {
            href: '/auditor-ai',
            label: 'Conhecer o Auditor AI',
            text: 'Leva o visitante para a ferramenta que operacionaliza o diagnóstico descrito nesta página.',
          },
          {
            href: '/como-analisar-mercado-antes-de-anunciar',
            label: 'Analisar mercado antes de anunciar',
            text: 'Complementa a auditoria com leitura de procura, concorrência e posicionamento.',
          },
        ]}
      />
    </>
  )
}
