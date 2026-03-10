import type { Metadata } from 'next'
import { SeoContentPage } from '@/components/SeoContentPage'
import { siteConfig } from '@/components/siteData'
import { articleSchema, breadcrumbSchema, buildMetadata, faqSchema } from '@/lib/seo'

const title = 'Como analisar concorrência online para posicionar melhor a sua oferta'
const description =
  'Saiba como analisar concorrência online para entender promessa, diferenciação, prova, páginas e oportunidades antes de disputar tráfego pago ou SEO.'

const faqs = [
  {
    q: 'Analisar concorrência é copiar o que os outros fazem?',
    a: 'Não. O objetivo é perceber padrões, lacunas e oportunidades para construir um posicionamento mais forte e menos genérico.',
  },
  {
    q: 'O que devo observar na concorrência?',
    a: 'Mensagem, headline, prova, CTA, estrutura da página, ângulo de oferta, linguagem usada e sinais de confiança percebida.',
  },
  {
    q: 'Isso ajuda também no SEO?',
    a: 'Sim. A leitura da concorrência ajuda a encontrar temas cobertos, lacunas de conteúdo e oportunidades para criar páginas mais úteis e específicas.',
  },
]

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/analisar-concorrencia-online',
  keywords: [
    'analisar concorrência online',
    'como estudar concorrentes',
    'benchmark marketing digital',
    'análise de concorrência para seo',
    'análise de concorrência para google ads',
  ],
})

export default function AnalisarConcorrenciaOnlinePage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Como analisar concorrência online', path: '/analisar-concorrencia-online' },
    ]),
    articleSchema({
      headline: title,
      description,
      path: '/analisar-concorrencia-online',
      keywords: ['concorrência', 'benchmark', 'posicionamento', 'SEO'],
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
        eyebrow="SEO educacional · benchmark e posicionamento"
        title={title}
        intro="Analisar concorrência online é uma das formas mais rápidas de descobrir como o mercado comunica valor, onde está a parecer genérico e quais oportunidades ainda não foram bem exploradas pela maioria dos players." 
        ctaLabel="Ver análise de mercado"
        ctaHref={siteConfig.links.analyzer}
        overviewTitle="Concorrência não serve para copiar. Serve para ler o jogo."
        overviewText="Esta página ajuda a captar buscas sobre benchmark e posicionamento, reforçando autoridade temática em torno de análise de mercado e preparação para tráfego."
        highlights={[
          {
            title: 'Entender promessa dominante',
            text: 'A concorrência mostra quais ângulos o mercado já normalizou e quais discursos parecem todos iguais.',
          },
          {
            title: 'Encontrar lacunas reais',
            text: 'Ao comparar páginas, provas e ofertas, a empresa identifica espaços para clareza, especialização e confiança.',
          },
          {
            title: 'Melhorar posicionamento e conteúdo',
            text: 'A leitura ajuda tanto no discurso comercial quanto na criação de páginas SEO mais específicas e úteis.',
          },
        ]}
        sections={[
          {
            title: 'O que observar quando analisa concorrência online',
            paragraphs: [
              'Uma análise de concorrência útil vai além do design. É preciso observar headline, subtítulo, provas, ofertas de entrada, linguagem, CTA, autoridade percebida e experiência geral da página. Isso revela o que o mercado considera mínimo aceitável e onde ainda há espaço para vantagem competitiva.',
              'Também vale olhar consistência entre anúncio e página, especialização do discurso e sinais de confiança. Em vários nichos, as marcas parecem diferentes por fora, mas repetem a mesma promessa superficial. Esse padrão cria espaço para quem comunica com mais precisão.',
            ],
          },
          {
            title: 'Como transformar benchmark em posicionamento melhor',
            paragraphs: [
              'Benchmark não serve para imitar. Serve para perceber onde a tua marca pode ser mais clara, mais específica e mais convincente. Muitas vezes o melhor posicionamento não nasce de algo totalmente novo, mas de uma interpretação mais nítida da dor do cliente.',
              'Quando a empresa encontra uma lacuna entre o que o mercado promete e o que o cliente realmente precisa ouvir, o discurso ganha força. Essa diferença pode aparecer no ângulo, na prova, na especialização, no tempo de resposta ou na forma de explicar o resultado esperado.',
            ],
          },
          {
            title: 'Impacto da análise de concorrência em SEO e campanhas',
            paragraphs: [
              'Em SEO, a análise ajuda a mapear quais temas os concorrentes cobrem, quais intenções de busca deixam mal respondidas e que tipo de conteúdo recebe mais destaque. Isso orienta páginas novas, clusters de conteúdo e melhorias de semântica no domínio.',
              'Em tráfego pago, a leitura ajuda a evitar anúncios genéricos. A empresa percebe quais promessas estão saturadas e pode construir uma mensagem mais específica. Assim, o clique chega a uma página com posicionamento mais afiado, aumentando a chance de conversão.',
            ],
          },
          {
            title: 'Usar ferramentas para acelerar a leitura competitiva',
            paragraphs: [
              'Ferramentas de análise de mercado encurtam o trabalho manual e organizam o que realmente importa: procura, intensidade competitiva, ângulo de diferenciação e próximos passos. Isso evita que a equipa fique presa a perceções vagas sobre o setor.',
              'Quando essa leitura entra no ecossistema certo, ela alimenta a auditoria de páginas e a criação de campanhas. O resultado é uma estratégia mais integrada, onde SEO, oferta e aquisição crescem em conjunto.',
            ],
          },
        ]}
        faqs={faqs}
        related={[
          {
            href: '/ferramenta-analise-de-mercado',
            label: 'Ferramenta de análise de mercado',
            text: 'Página comercial para quem já percebeu a necessidade de ler mercado e concorrência com mais profundidade.',
          },
          {
            href: '/como-analisar-mercado-antes-de-anunciar',
            label: 'Analisar mercado antes de anunciar',
            text: 'Mostra como encaixar benchmark, procura e oferta dentro de uma sequência lógica.',
          },
          {
            href: '/auditoria-de-marketing-digital',
            label: 'Auditar a página e a mensagem',
            text: 'A análise de concorrência fica mais útil quando a marca também corrige os seus próprios gargalos de conversão.',
          },
        ]}
      />
    </>
  )
}
