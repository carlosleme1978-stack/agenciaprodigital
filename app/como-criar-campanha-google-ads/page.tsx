import type { Metadata } from 'next'
import { SeoContentPage } from '@/components/SeoContentPage'
import { siteConfig } from '@/components/siteData'
import { articleSchema, breadcrumbSchema, buildMetadata, faqSchema } from '@/lib/seo'

const title = 'Como criar campanha Google Ads com mais clareza, intenção e estrutura'
const description =
  'Entenda como criar campanha Google Ads com palavras-chave, mensagem, orçamento e página de destino alinhados para gerar mais consistência e menos desperdício.'

const faqs = [
  {
    q: 'Posso criar campanha Google Ads sem landing page boa?',
    a: 'Pode, mas normalmente isso aumenta o desperdício. A página precisa sustentar a promessa do anúncio e conduzir o utilizador para a ação certa.',
  },
  {
    q: 'O erro mais comum está nas palavras-chave?',
    a: 'Muitas vezes o problema é maior: intenção mal interpretada, estrutura fraca da oferta e mensagens genéricas. As palavras-chave são só uma parte da equação.',
  },
  {
    q: 'Vale usar IA para criar campanhas?',
    a: 'Vale quando a IA ajuda a organizar estrutura, mensagens e hipóteses com base em contexto real. Isso acelera a execução e reduz repetição manual.',
  },
]

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/como-criar-campanha-google-ads',
  keywords: [
    'como criar campanha google ads',
    'campanha google ads para negócios locais',
    'estrutura de campanha google ads',
    'palavras-chave google ads',
    'criar anúncio no google',
  ],
})

export default function ComoCriarCampanhaGoogleAdsPage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Como criar campanha Google Ads', path: '/como-criar-campanha-google-ads' },
    ]),
    articleSchema({
      headline: title,
      description,
      path: '/como-criar-campanha-google-ads',
      keywords: ['Google Ads', 'campanha', 'palavras-chave', 'landing page'],
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
        eyebrow="SEO educacional + comercial · intenção de execução"
        title={title}
        intro="Criar campanha Google Ads não começa no painel. Começa na leitura certa do mercado, da oferta e da landing page. Quando esses elementos estão alinhados, a campanha ganha direção e o investimento deixa de ser um salto no escuro." 
        ctaLabel="Criar campanha com IA"
        ctaHref={siteConfig.links.adspilot}
        overviewTitle="A campanha é o fim da sequência, não o começo"
        overviewText="Esta página prepara o visitante para uma execução mais madura e puxa a intenção para o AdsPilot, que transforma leitura estratégica em campanha estruturada."
        highlights={[
          {
            title: 'Escolher intenção antes de escolher keyword',
            text: 'Uma campanha começa por saber quem está perto de comprar, quem está só a pesquisar e qual mensagem cada grupo precisa ver.',
          },
          {
            title: 'Alinhar anúncio e landing page',
            text: 'Quando o clique chega a uma página incoerente, o custo sobe e a confiança cai mesmo que a palavra-chave esteja correta.',
          },
          {
            title: 'Definir orçamento com contexto',
            text: 'Investimento inicial faz mais sentido quando mercado, concorrência e clareza da oferta já foram validados antes.',
          },
        ]}
        sections={[
          {
            title: 'Comece com estrutura e não com pressa',
            paragraphs: [
              'Criar campanha Google Ads com consistência exige uma sequência lógica. Primeiro vem a leitura do mercado. Depois, a organização da oferta e da página. Só então entram grupos de anúncios, palavras-chave, headlines e extensões. Quando essa ordem é invertida, a conta tende a pagar caro para ensinar algo que poderia ter sido ajustado antes.',
              'Isso é especialmente importante para negócios locais e pequenas empresas. Em cenários de orçamento limitado, não há espaço para campanhas montadas só para “testar tudo”. O caminho mais seguro é reduzir incerteza antes de abrir investimento.',
            ],
          },
          {
            title: 'Palavras-chave, correspondência e intenção',
            paragraphs: [
              'Palavras-chave não são apenas termos para preencher grupos. Elas representam intenção de busca. Por isso, a seleção precisa considerar proximidade de compra, contexto local, nível de especificidade e risco de tráfego irrelevante. A campanha fica mais inteligente quando cada grupo responde a uma intenção clara.',
              'Também é essencial evitar repetição vazia. Em vez de criar listas enormes sem direção, vale mais construir uma estrutura enxuta, coerente e ligada à proposta central da oferta. Isso melhora leitura, gestão e consistência da mensagem.',
            ],
          },
          {
            title: 'Landing page, oferta e prova não podem ficar de fora',
            paragraphs: [
              'Muitas contas de Google Ads sofrem porque o anúncio promete mais clareza do que a landing entrega. O visitante clica, mas encontra uma página genérica, sem prova suficiente e com CTA fraco. Nessa situação, o problema não está apenas na mídia. Está na experiência completa.',
              'Por isso, campanha boa depende de landing page auditada e oferta bem explicada. Quando anúncio e página falam a mesma língua, a conversão tende a melhorar e o algoritmo recebe sinais melhores sobre a qualidade da experiência.',
            ],
          },
          {
            title: 'Como o AdsPilot encurta esse trabalho',
            paragraphs: [
              'O AdsPilot ajuda a transformar leitura estratégica em campanha estruturada. Em vez de começar do zero a cada cliente, a empresa consegue organizar palavras-chave, headlines, lógica de campanha e plano inicial de investimento com muito mais velocidade.',
              'Esse tipo de ferramenta não substitui raciocínio comercial, mas multiplica produtividade. Para o domínio principal, ainda cria uma ponte poderosa entre conteúdo educativo e intenção de compra, o que fortalece SEO e conversão ao mesmo tempo.',
            ],
          },
        ]}
        faqs={faqs}
        related={[
          {
            href: '/palavras-chave-para-google-ads',
            label: 'Palavras-chave para Google Ads',
            text: 'Aprofunda a parte de seleção, intenção e estrutura semântica das keywords.',
          },
          {
            href: '/adspilot',
            label: 'Conhecer o AdsPilot',
            text: 'Leva o visitante para a solução prática depois da leitura educacional.',
          },
          {
            href: '/auditoria-de-marketing-digital',
            label: 'Auditar a página antes da campanha',
            text: 'Complemento essencial para evitar que o tráfego chegue a uma página fraca.',
          },
        ]}
      />
    </>
  )
}
