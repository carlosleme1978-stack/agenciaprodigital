import type { Metadata } from 'next'
import { ProductPage } from '@/components/ProductPage'
import { ReportPreview } from '@/components/ReportPreview'
import { siteConfig } from '@/components/siteData'
import { breadcrumbSchema, buildMetadata, serviceSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Análise de mercado com IA | Validar demanda, concorrência e nicho antes de anunciar',
  description:
    'Ferramenta de análise de mercado com IA para validar procura, concorrência, público e oportunidade antes de investir em Google Ads ou tráfego pago.',
  path: '/analyzer-market-ai',
  keywords: [
    'análise de mercado com IA',
    'como analisar mercado online',
    'validar nicho de mercado',
    'análise de concorrência digital',
    'análise de demanda para negócio',
    'estudo de mercado para anúncios',
    'analisar concorrência google ads',
    'pesquisa de mercado para pequenas empresas',
  ],
})

export default function AnalyzerPage() {
  const structuredData = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Analyzer Market AI', path: '/analyzer-market-ai' },
    ]),
    serviceSchema({
      name: 'Análise de mercado com IA',
      description:
        'Ferramenta para analisar mercado, concorrência, procura local e oportunidades de tráfego antes de investir em anúncios.',
      path: '/analyzer-market-ai',
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
        name="Analyzer Market AI"
        heading="Análise de mercado com IA para validar demanda, concorrência e oportunidade"
        eyebrow="Entenda seu mercado antes de investir"
        intro="O Analyzer Market AI ajuda empresas e profissionais a entender melhor o mercado antes de investir em anúncios ou tráfego pago. A ferramenta analisa procura pelos serviços, concorrência existente, comportamento do público e possíveis ângulos de posicionamento. Em vez de decidir no escuro, você recebe uma leitura clara da demanda e das oportunidades do seu nicho."
        cta="Analisar Mercado Agora"
        link={siteConfig.links.analyzer}
        report={
          <ReportPreview
            title="Exemplo de leitura do mercado"
            score="Alta demanda"
            variant="blue"
            items={[
              {
                label: 'Nível de concorrência',
                value: 'Moderada',
                note: 'Existe competição, mas ainda há espaço para diferenciação e posicionamento.',
              },
              {
                label: 'Perfil do público',
                value: 'Empresas locais',
                note: 'Respondem melhor a comunicação clara, autoridade e rapidez no contacto.',
              },
              {
                label: 'Oportunidade',
                value: 'Google Ads',
                note: 'O cenário mostra potencial para campanhas com boa relação entre procura e concorrência.',
              },
            ]}
          />
        }
        bullets={[
          {
            title: 'Validação de mercado',
            text: 'Descubra se existe procura real pelo seu serviço antes de investir em anúncios.',
          },
          {
            title: 'Análise de concorrência',
            text: 'Entenda o nível de competição e onde sua empresa pode se posicionar melhor.',
          },
          {
            title: 'Base para campanhas',
            text: 'Gere insumos estratégicos para campanhas de Google Ads ou outras estratégias de tráfego.',
          },
        ]}
        sections={[
          {
            title: 'Como analisar um mercado antes de investir em anúncios',
            paragraphs: [
              'Muitos negócios começam a investir em anúncios sem entender primeiro se existe procura real pelo serviço ou produto. Isso cria campanhas que gastam dinheiro mas não geram resultados consistentes. Uma análise de mercado ajuda a perceber se o nicho tem demanda suficiente, como os concorrentes estão posicionados e quais oportunidades ainda não foram exploradas.',
              'O Analyzer Market AI foi criado exatamente para responder essas perguntas. Em vez de depender apenas de opinião ou tentativa e erro, o relatório organiza dados de procura, concorrência e posicionamento. Isso permite tomar decisões com mais segurança antes de escalar investimento em marketing digital.',
            ],
          },
          {
            title: 'O que uma análise de mercado revela sobre seu nicho',
            paragraphs: [
              'Uma boa análise de mercado mostra muito mais do que apenas concorrentes. Ela ajuda a perceber padrões de procura, comportamento do público e oportunidades de diferenciação. Em alguns casos, o relatório revela que existe procura mas a comunicação dos concorrentes é fraca. Em outros, mostra que o mercado já está saturado e exige posicionamento mais estratégico.',
              'Esse tipo de leitura é especialmente importante para pequenas empresas e prestadores de serviço que dependem da internet para atrair clientes. Quando o posicionamento é ajustado antes da campanha, as chances de sucesso aumentam significativamente.',
            ],
          },
          {
            title: 'Quando usar uma análise de mercado no marketing digital',
            paragraphs: [
              'A análise de mercado pode ser usada em vários momentos: antes de lançar um serviço, antes de investir em Google Ads, ao entrar numa nova cidade ou quando os resultados de marketing parecem estagnados. Em todos esses cenários, entender melhor a procura e a concorrência ajuda a evitar decisões baseadas apenas em suposição.',
              'Por isso muitas empresas utilizam esse tipo de diagnóstico como primeiro passo do planejamento digital. Depois da leitura de mercado, fica muito mais fácil decidir se o melhor caminho é ajustar posicionamento, melhorar a oferta ou avançar para campanhas de tráfego.',
            ],
          },
          {
            title: 'Como o Analyzer Market AI se conecta ao restante do ecossistema',
            paragraphs: [
              'Dentro do ecossistema da Agencia ProDigital, o Analyzer Market AI funciona como uma ponte entre diagnóstico e execução. Primeiro o cliente entende o cenário do mercado, depois pode avançar para criação de campanhas com mais segurança.',
              'Quando o relatório identifica oportunidade real, o próximo passo natural é utilizar o AdsPilot para estruturar campanhas no Google Ads. Dessa forma, cada ferramenta cumpre um papel específico dentro da jornada de crescimento digital.',
            ],
          },
        ]}
      />
    </>
  )
}