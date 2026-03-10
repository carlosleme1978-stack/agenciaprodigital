import type { Metadata } from 'next'
import { ProductPage } from '@/components/ProductPage'
import { ReportPreview } from '@/components/ReportPreview'
import { siteConfig } from '@/components/siteData'
import { breadcrumbSchema, buildMetadata, serviceSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Criar campanha Google Ads com IA | Campanha pronta na sua conta',
  description:
    'Conecte sua conta Google Ads e gere uma campanha completa com IA. Estrutura, grupos de anúncios, palavras-chave e anúncios prontos, criados diretamente na sua conta e deixados em pausa para revisão.',
  path: '/adspilot',
  keywords: [
    'criar campanha google ads automaticamente',
    'google ads com inteligência artificial',
    'gerador de campanhas google ads',
    'criar campanha google ads para negócios locais',
    'estrutura de campanha google ads pronta',
    'como criar campanha google ads rápido',
    'gerar anúncios google ads automaticamente',
  ],
})

export default function AdsPilotPage() {
  const structuredData = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'AdsPilot', path: '/adspilot' },
    ]),
    serviceSchema({
      name: 'Criação automática de campanhas Google Ads',
      description:
        'Ferramenta que conecta na conta Google Ads do cliente e cria uma campanha completa com estrutura, palavras-chave e anúncios prontos.',
      path: '/adspilot',
    }),
  ]

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <ProductPage
        name="AdsPilot"
        heading="Crie uma campanha Google Ads completa com IA"
        eyebrow="Campanha pronta dentro da sua conta"
        intro="O AdsPilot conecta-se à conta Google Ads do cliente e cria automaticamente uma campanha completa. A ferramenta organiza campanha, grupos de anúncios, palavras-chave, anúncios e orientação de orçamento. A campanha é criada diretamente na conta do cliente e fica em pausa para revisão antes da publicação."
        cta="Criar minha campanha Google Ads"
        link={siteConfig.links.adspilot}
        report={
          <ReportPreview
            title="Campanha criada na conta do cliente"
            score="€20/dia"
            variant="purple"
            items={[
              {
                label: 'Campanha criada',
                value: 'Clínica odontológica',
                note: 'Estrutura inicial preparada para procura local.',
              },
              {
                label: 'Palavras-chave',
                value: 'Dentista em Lisboa',
                note: 'Termos com intenção comercial e procura real.',
              },
              {
                label: 'Status',
                value: 'Em pausa',
                note: 'Campanha criada na conta do cliente e pronta para revisão antes de ativar.',
              },
            ]}
          />
        }
        bullets={[
          {
            title: 'Campanha criada na sua conta',
            text: 'A ferramenta conecta na conta Google Ads e cria a campanha diretamente dentro dela.',
          },
          {
            title: 'Estrutura completa',
            text: 'Campanha, grupos de anúncios, palavras-chave e anúncios já organizados.',
          },
          {
            title: 'Controle total do cliente',
            text: 'A campanha fica em pausa para revisão antes de ser ativada.',
          },
        ]}
        sections={[
          {
            title: 'Como criar uma campanha Google Ads sem começar do zero',
            paragraphs: [
              'Criar campanhas no Google Ads pode ser difícil para quem não trabalha com marketing todos os dias. É preciso escolher palavras-chave, organizar grupos de anúncios, escrever headlines e decidir orçamento. Muitos negócios acabam demorando semanas para montar uma campanha ou criam estruturas que não performam bem.',
              'O AdsPilot resolve esse problema criando uma estrutura inicial completa. Em vez de começar do zero, o cliente recebe uma campanha organizada, com lógica de segmentação e anúncios preparados para atrair procura real.',
            ],
          },
          {
            title: 'Campanha criada diretamente na conta Google Ads',
            paragraphs: [
              'Uma diferença importante do AdsPilot é que ele não gera apenas um relatório ou sugestão. A ferramenta conecta-se à conta Google Ads do cliente e cria a campanha diretamente dentro dela. Isso significa que o cliente já visualiza a campanha pronta no próprio painel do Google.',
              'Para manter segurança e controle, a campanha é criada em pausa. Assim o cliente pode revisar a estrutura, ajustar orçamento ou editar anúncios antes de ativar.',
            ],
          },
          {
            title: 'Para quem este criador de campanhas é ideal',
            paragraphs: [
              'O AdsPilot é especialmente útil para negócios locais, prestadores de serviço, clínicas, empresas de construção, profissionais independentes e pequenas empresas que querem começar a anunciar sem depender de um processo complexo.',
              'Ele também funciona bem para quem já possui conta Google Ads mas quer acelerar a criação de novas campanhas ou testar novas ofertas com mais rapidez.',
            ],
          },
          {
            title: 'Como o AdsPilot se conecta ao restante do ecossistema',
            paragraphs: [
              'Dentro do ecossistema da Agencia ProDigital, o AdsPilot representa a etapa de execução. Primeiro o cliente pode descobrir falhas na comunicação com o Auditor AI. Depois pode validar o mercado com o Analyzer Market AI. Quando o cenário mostra oportunidade, o AdsPilot entra para transformar essa leitura em uma campanha real.',
              'Esse fluxo cria uma jornada clara: descobrir, validar e executar. Cada produto cumpre um papel específico dentro do crescimento digital do cliente.',
            ],
          },
        ]}
      />
    </>
  )
}