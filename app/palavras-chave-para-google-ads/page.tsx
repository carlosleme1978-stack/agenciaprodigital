import type { Metadata } from 'next'
import { SeoContentPage } from '@/components/SeoContentPage'
import { siteConfig } from '@/components/siteData'
import { articleSchema, breadcrumbSchema, buildMetadata, faqSchema } from '@/lib/seo'

const title = 'Como escolher palavras-chave para Google Ads sem cair em tráfego genérico'
const description =
  'Aprenda como escolher palavras-chave para Google Ads com base em intenção, contexto, especificidade e alinhamento com a landing page e a oferta.'

const faqs = [
  {
    q: 'Mais palavras-chave significam campanha melhor?',
    a: 'Não. Uma estrutura enxuta e coerente costuma performar melhor do que listas grandes sem critério e sem intenção bem definida.',
  },
  {
    q: 'Palavra-chave boa é a de maior volume?',
    a: 'Nem sempre. Volume alto pode trazer procura fraca ou genérica. O melhor termo é aquele que combina intenção de compra com aderência real à oferta.',
  },
  {
    q: 'Landing page influencia a escolha das keywords?',
    a: 'Sim. A página precisa sustentar a mensagem do termo pesquisado. Sem esse alinhamento, a campanha tende a perder eficiência e qualidade.',
  },
]

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/palavras-chave-para-google-ads',
  keywords: [
    'palavras-chave para google ads',
    'como escolher keywords google ads',
    'intenção de busca para google ads',
    'keywords para negócios locais',
    'estrutura de palavras-chave ads',
  ],
})

export default function PalavrasChaveGoogleAdsPage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Palavras-chave para Google Ads', path: '/palavras-chave-para-google-ads' },
    ]),
    articleSchema({
      headline: title,
      description,
      path: '/palavras-chave-para-google-ads',
      keywords: ['palavras-chave', 'Google Ads', 'intenção de busca', 'landing page'],
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
        eyebrow="SEO educacional · keyword strategy"
        title={title}
        intro="Escolher palavras-chave para Google Ads não é montar uma lista aleatória. É decidir quais intenções vale a pena comprar, quais termos realmente combinam com a oferta e como evitar cliques que parecem promissores mas não convertem." 
        ctaLabel="Montar campanha com IA"
        ctaHref={siteConfig.links.adspilot}
        overviewTitle="Keywords boas nascem de contexto"
        overviewText="Esta página educa sobre intenção de busca e prepara o utilizador para uma campanha mais madura, conectando a leitura estratégica ao AdsPilot."
        highlights={[
          {
            title: 'Separar curiosidade de compra',
            text: 'Nem toda busca merece investimento. A campanha precisa privilegiar termos com proximidade real de conversão.',
          },
          {
            title: 'Evitar volume vazio',
            text: 'Muitas keywords parecem fortes no papel, mas geram cliques desalinhados porque não combinam com a oferta nem com a página.',
          },
          {
            title: 'Construir grupos com lógica',
            text: 'Estrutura coerente melhora gestão, mensagem e consistência entre busca, anúncio e landing page.',
          },
        ]}
        sections={[
          {
            title: 'Comece pela intenção de busca e não pelo volume',
            paragraphs: [
              'Quando a empresa escolhe palavras-chave só pelo volume, corre o risco de comprar atenção errada. O mais importante é perceber se o termo indica necessidade concreta, comparação, urgência ou proximidade de ação. Uma keyword menor, mas mais específica, pode valer muito mais do que uma expressão ampla e cara.',
              'Essa leitura exige contexto. Um termo que funciona para um negócio pode ser fraco para outro. Por isso, a escolha precisa considerar oferta, geografia, maturidade do cliente e clareza da página de destino.',
            ],
          },
          {
            title: 'Como montar grupos de palavras com lógica comercial',
            paragraphs: [
              'Depois de identificar os termos relevantes, o passo seguinte é agrupá-los por intenção e afinidade. Isso ajuda a escrever anúncios mais específicos, controlar melhor correspondências e alinhar cada grupo a uma promessa clara. Campanhas organizadas assim tendem a gerar leitura melhor tanto para o gestor quanto para o algoritmo.',
              'Também é importante filtrar o que não interessa. Termos muito vagos, informacionais demais ou distantes da proposta podem inflar custo e diminuir a qualidade do tráfego. A estrutura certa não depende de quantidade, e sim de coerência.',
            ],
          },
          {
            title: 'Landing page e keyword precisam falar a mesma língua',
            paragraphs: [
              'Não adianta acertar a palavra-chave e errar a experiência seguinte. Se o utilizador pesquisa algo específico e encontra uma página genérica, a sensação de desalinhamento aparece rapidamente. Isso afeta qualidade, confiança e conversão.',
              'Por isso, a estratégia de keywords deve ser acompanhada de revisão de headline, benefícios, prova e CTA. Quando busca, anúncio e página estão alinhados, a campanha ganha estabilidade e previsibilidade muito mais cedo.',
            ],
          },
          {
            title: 'Onde o AdsPilot ajuda nesta etapa',
            paragraphs: [
              'O AdsPilot ajuda a transformar essa lógica em estrutura prática. Em vez de começar cada projeto do zero, a empresa consegue gerar keywords, headlines e direcionamento de campanha com base em informações mais organizadas.',
              'Isso não elimina análise humana, mas acelera a preparação e reduz repetição. Para o site principal, essa ponte entre conteúdo educativo e ferramenta de execução também fortalece o SEO comercial.',
            ],
          },
        ]}
        faqs={faqs}
        related={[
          {
            href: '/como-criar-campanha-google-ads',
            label: 'Como criar campanha Google Ads',
            text: 'Continuação natural para quem já entendeu a lógica de keywords e quer ver a estrutura da campanha.',
          },
          {
            href: '/adspilot',
            label: 'Conhecer o AdsPilot',
            text: 'Leva o utilizador para a ferramenta que operacionaliza a geração de campanha e palavras-chave.',
          },
          {
            href: '/como-analisar-mercado-antes-de-anunciar',
            label: 'Analisar mercado antes de anunciar',
            text: 'Mostra como a escolha das keywords melhora quando a empresa valida procura e posicionamento primeiro.',
          },
        ]}
      />
    </>
  )
}
