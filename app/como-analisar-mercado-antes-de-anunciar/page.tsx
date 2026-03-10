import type { Metadata } from 'next'
import { SeoContentPage } from '@/components/SeoContentPage'
import { siteConfig } from '@/components/siteData'
import { articleSchema, breadcrumbSchema, buildMetadata, faqSchema } from '@/lib/seo'

const title = 'Como analisar mercado antes de anunciar e reduzir desperdício em tráfego pago'
const description =
  'Aprenda como analisar mercado antes de anunciar, validar procura, concorrência, oferta e mensagem para investir melhor em Google Ads e outras campanhas.'

const faqs = [
  {
    q: 'Preciso analisar mercado mesmo para negócio local?',
    a: 'Sim. Negócios locais também disputam atenção, preço percebido e confiança. Entender procura e diferenciação é essencial antes de escalar anúncios.',
  },
  {
    q: 'Analisar mercado substitui a criação de campanha?',
    a: 'Não. A análise prepara o terreno. Ela orienta melhor a campanha, a landing page e a oferta, mas continua a ser necessário executar bem a aquisição.',
  },
  {
    q: 'Qual o erro mais comum antes de anunciar?',
    a: 'Entrar em tráfego pago sem clareza sobre a dor principal do cliente, o ângulo de comunicação e a força real da concorrência.',
  },
]

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/como-analisar-mercado-antes-de-anunciar',
  keywords: [
    'como analisar mercado antes de anunciar',
    'validar mercado antes do tráfego pago',
    'como estudar concorrência para anúncios',
    'preparação para google ads',
    'análise de mercado antes da campanha',
  ],
})

export default function ComoAnalisarMercadoPage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Como analisar mercado antes de anunciar', path: '/como-analisar-mercado-antes-de-anunciar' },
    ]),
    articleSchema({
      headline: title,
      description,
      path: '/como-analisar-mercado-antes-de-anunciar',
      keywords: ['mercado', 'tráfego pago', 'concorrência', 'procura'],
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
        eyebrow="SEO educacional · topo e meio de funil"
        title={title}
        intro="Anunciar sem leitura de mercado costuma parecer velocidade, mas na prática é desperdício. Antes de abrir campanhas, a empresa precisa entender procura, concorrência, maturidade da oferta e promessa que realmente move o cliente." 
        ctaLabel="Validar mercado com IA"
        ctaHref={siteConfig.links.analyzer}
        overviewTitle="Uma sequência que reduz erro e achismo"
        overviewText="Esta página foi pensada para captar buscas informacionais e conduzir o utilizador para uma decisão mais madura antes de investir em mídia."
        highlights={[
          {
            title: 'Definir qual dor tem procura',
            text: 'Nem toda dor vira compra. A análise ajuda a separar curiosidade, intenção e oportunidade real de negócio.',
          },
          {
            title: 'Mapear o que o mercado já promete',
            text: 'Quando a empresa entende o discurso dos concorrentes, consegue evitar mais do mesmo e encontrar espaço para diferenciação.',
          },
          {
            title: 'Entrar em tráfego com mais clareza',
            text: 'Oferta, landing page e campanha ficam mais alinhadas quando a leitura de mercado vem antes da execução.',
          },
        ]}
        sections={[
          {
            title: 'Comece pela procura e pela intenção de compra',
            paragraphs: [
              'Analisar mercado antes de anunciar começa por perceber se existe procura que valha o investimento. Isso parece óbvio, mas muitas empresas confundem gosto interno com interesse externo. O mercado responde a dores específicas, contextos específicos e níveis diferentes de urgência. Quanto melhor a empresa entende isso, menos dependente fica de tentativa e erro cara.',
              'Além da procura, é fundamental observar a intenção. Há buscas que indicam curiosidade e há buscas que mostram proximidade de compra. Quando o negócio aprende a identificar essa diferença, consegue priorizar melhor a sua comunicação e criar ativos comerciais mais eficientes.',
            ],
          },
          {
            title: 'Leia a concorrência com profundidade, não só por comparação visual',
            paragraphs: [
              'Olhar concorrentes não é copiar design nem preço. É compreender promessa, estrutura, prova, CTA, autoridade percebida e lacunas. Essa leitura mostra o que o mercado já normalizou e o que ainda está mal servido. Muitas oportunidades aparecem justamente onde todos repetem o mesmo discurso.',
              'A análise de concorrência também ajuda a calibrar expectativa. Em nichos maduros, talvez seja necessário um ângulo mais específico. Em nichos confusos, pode bastar mais clareza. O importante é que a campanha nasça de uma posição entendida, e não de uma simples vontade de “estar presente”.',
            ],
          },
          {
            title: 'Ajuste oferta e página antes da campanha',
            paragraphs: [
              'Depois da leitura de mercado, a empresa precisa traduzir esse conhecimento na página. Headline, subtítulo, benefícios, prova e CTA devem refletir o que o público valoriza e o que diferencia a marca. Sem essa ponte entre mercado e página, o anúncio vira apenas um gerador de cliques caros.',
              'É por isso que SEO, auditoria e mídia se conectam. O conteúdo do site melhora, a estrutura comercial ganha coerência e a campanha passa a levar o utilizador para uma experiência mais convincente. O processo inteiro fica menos reativo e mais estratégico.',
            ],
          },
          {
            title: 'Ferramentas que aceleram essa preparação',
            paragraphs: [
              'Ferramentas de análise de mercado e auditoria encurtam o caminho entre dúvida e ação. Em vez de a empresa montar tudo manualmente, ela recebe leitura, hipóteses e direção. Isso acelera decisões sem transformar a operação em jogo de adivinhação.',
              'No ecossistema da Agencia Pro Digital, a leitura começa com Analyzer Market AI, passa por uma auditoria quando necessário e termina no AdsPilot quando a campanha já faz sentido. Essa sequência é útil tanto para SEO quanto para rentabilidade.',
            ],
          },
        ]}
        faqs={faqs}
        related={[
          {
            href: '/ferramenta-analise-de-mercado',
            label: 'Ferramenta de análise de mercado',
            text: 'Página comercial ligada diretamente à intenção de encontrar uma solução prática.',
          },
          {
            href: '/auditoria-de-marketing-digital',
            label: 'Auditoria de marketing digital',
            text: 'Mostra como corrigir a base do site antes de aumentar o investimento em mídia.',
          },
          {
            href: '/como-criar-campanha-google-ads',
            label: 'Como criar campanha Google Ads',
            text: 'Leitura seguinte para quem já validou mercado e quer avançar para execução.',
          },
        ]}
      />
    </>
  )
}
