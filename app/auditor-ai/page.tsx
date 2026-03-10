import type { Metadata } from 'next'
import { ProductPage } from '@/components/ProductPage'
import { ReportPreview } from '@/components/ReportPreview'
import { siteConfig } from '@/components/siteData'
import { breadcrumbSchema, buildMetadata, serviceSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Auditoria de site, landing page e Instagram com IA | Auditor AI',
  description:
    'Descubra falhas de comunicação, confiança e conversão no seu site, landing page ou Instagram com uma auditoria digital prática e orientada para vendas.',
  path: '/auditor-ai',
  keywords: [
    'auditoria de site com IA',
    'auditoria de landing page',
    'auditoria de instagram',
    'auditoria digital para empresas',
    'análise de conversão de site',
    'diagnóstico de site para vender mais',
  ],
})

export default function AuditorPage() {
  const structuredData = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'Auditor AI', path: '/auditor-ai' },
    ]),
    serviceSchema({
      name: 'Auditoria digital com IA',
      description:
        'Auditoria de site, landing page e Instagram com foco em clareza da oferta, confiança, conversão e melhoria da presença digital.',
      path: '/auditor-ai',
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
        name="Auditor AI"
        heading="Auditoria de site, landing page e Instagram com IA"
        eyebrow="Descubra o que está travando sua conversão"
        intro="O Auditor AI analisa a presença digital do seu negócio e mostra, de forma clara, onde você pode estar a perder atenção, confiança e pedidos de contacto. Em vez de opiniões soltas, você recebe um diagnóstico com score, falhas prioritárias, pontos de melhoria e uma direção prática para corrigir a comunicação antes de investir mais em tráfego."
        cta="Fazer auditoria agora"
        link={siteConfig.links.auditor}
        report={
          <ReportPreview
            title="Exemplo de leitura do relatório"
            score="78/100"
            items={[
              {
                label: 'Falha principal',
                value: 'Mensagem confusa',
                note: 'O visitante não entende rapidamente o diferencial do serviço nem a transformação prometida.',
              },
              {
                label: 'Ajuste prioritário',
                value: 'Melhorar proposta',
                note: 'Headline, subtítulo, prova social e CTA precisam trabalhar juntos para aumentar clareza e confiança.',
              },
              {
                label: 'Próximo passo',
                value: 'Reforçar página',
                note: 'Antes de escalar anúncios, vale corrigir a base da comunicação e da conversão.',
              },
            ]}
          />
        }
        bullets={[
          {
            title: 'Diagnóstico objetivo',
            text: 'Mostra rapidamente os pontos que podem estar a afastar clientes do seu site, landing page ou Instagram.',
          },
          {
            title: 'Prioridade de correção',
            text: 'Ajuda a perceber o que deve ser ajustado primeiro para melhorar clareza, confiança e ação.',
          },
          {
            title: 'Mais segurança antes do tráfego',
            text: 'Evita investir em anúncios com uma estrutura fraca, mensagem confusa ou oferta mal apresentada.',
          },
        ]}
        sections={[
          {
            title: 'O que esta auditoria analisa no seu negócio',
            paragraphs: [
              'O Auditor AI foi criado para empresas que querem vender melhor pela internet, mas ainda não sabem exatamente onde está o bloqueio. Em muitos casos, o problema não é falta de tráfego. O problema está na forma como o serviço é apresentado. Uma mensagem genérica, um visual desalinhado, uma oferta pouco clara ou uma chamada para ação fraca podem fazer o visitante sair sem pedir orçamento.',
              'A auditoria ajuda a identificar esses pontos com mais clareza. Em vez de analisar apenas estética, o relatório observa comunicação, percepção de valor, confiança transmitida, estrutura da página e capacidade de conversão. Isso torna o diagnóstico muito mais útil para quem precisa tomar decisões reais no negócio.',
              'Na prática, esta página trabalha intenção de busca ligada a auditoria de site, auditoria de landing page, auditoria de Instagram, análise de conversão e diagnóstico digital para empresas. Ou seja, ela não serve apenas para explicar o produto. Ela também ajuda a atrair tráfego qualificado no Google.',
            ],
          },
          {
            title: 'Para quem o Auditor AI faz mais sentido',
            paragraphs: [
              'Este produto é especialmente útil para negócios locais, clínicas, estética, construção, prestadores de serviços, lojas online e profissionais que já têm presença digital, mas sentem que os resultados ainda estão abaixo do potencial. Muitas vezes existe visita, existe interesse e até existe investimento, mas a base da comunicação ainda não convence como deveria.',
              'Também é uma boa escolha para quem pensa em anunciar, mas quer validar primeiro se o site, a landing page ou o Instagram estão preparados para receber tráfego. Antes de colocar mais dinheiro em campanhas, faz sentido corrigir a estrutura que vai receber esse visitante.',
              'Quando o cliente entende isso, o valor do produto aumenta. A auditoria deixa de ser vista como algo apenas técnico e passa a ser percebida como uma ferramenta de decisão comercial.',
            ],
          },
          {
            title: 'O que você recebe ao final da análise',
            paragraphs: [
              'O relatório entrega uma leitura organizada, simples de entender e orientada para ação. Em vez de um bloco genérico de observações, o cliente visualiza score, principais falhas, melhorias prioritárias e direção recomendada para o próximo passo.',
              'Esse formato aumenta a percepção de valor porque transforma análise em clareza. O cliente consegue perceber o que está fraco, o que pode melhorar e onde deve concentrar energia primeiro. Isso é especialmente importante para pequenas empresas que não têm tempo nem equipa para interpretar relatórios complexos.',
              'Quanto mais clara for a entrega, maior a confiança na compra. E quando a página comunica bem essa estrutura, a conversão tende a subir porque o visitante entende melhor o que está a adquirir.',
            ],
          },
          {
            title: 'Porque fazer esta auditoria antes de investir em anúncios',
            paragraphs: [
              'Um dos erros mais comuns no marketing digital é tentar resolver com tráfego aquilo que ainda está mal resolvido na base da comunicação. Quando a página não transmite valor, quando a oferta não é clara ou quando falta confiança, mais visitas nem sempre significam mais vendas.',
              'Por isso, esta auditoria faz sentido antes do investimento em campanhas. Ela ajuda a verificar se a estrutura atual está pronta para converter melhor. Em muitos casos, pequenos ajustes em posicionamento, promessa, CTA e prova social podem gerar um impacto maior do que simplesmente aumentar o orçamento em anúncios.',
              'Esse raciocínio também fortalece o seu ecossistema de produtos. Primeiro o cliente entende a base, depois valida o mercado e só então avança para campanhas com mais segurança.',
            ],
          },
          {
            title: 'Como esta página ajuda no SEO e na conversão ao mesmo tempo',
            paragraphs: [
              'Uma página de produto bem trabalhada precisa cumprir duas funções: aparecer melhor nas buscas e convencer melhor quem entra. Por isso, o conteúdo não pode ser curto demais nem técnico demais. Ele precisa combinar profundidade sem perder clareza comercial.',
              'Ao trabalhar termos relacionados com auditoria digital, site, landing page, Instagram, conversão e diagnóstico, esta página ajuda o domínio a ganhar mais relevância semântica. Ao mesmo tempo, ao explicar benefícios reais, formato do relatório e momento certo de uso, ela reduz dúvidas e melhora a intenção de compra.',
              'Quando SEO e conversão caminham juntos, a página deixa de ser apenas uma vitrine bonita e passa a funcionar como um ativo comercial real do site.',
            ],
          },
        ]}
      />
    </>
  )
}