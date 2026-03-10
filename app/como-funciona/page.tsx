import type { Metadata } from 'next'
import { breadcrumbSchema, buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Como funciona a plataforma de auditoria, mercado e Google Ads',
  description:
    'Entenda como a Agencia Pro Digital organiza a jornada entre auditoria digital, análise de mercado e criação de campanhas Google Ads.',
  path: '/como-funciona',
  keywords: [
    'como funciona auditoria digital',
    'jornada de marketing digital',
    'google ads com análise de mercado',
  ],
})

export default function HowItWorksPage() {
  const schema = breadcrumbSchema([
    { name: 'Início', path: '/' },
    { name: 'Como funciona', path: '/como-funciona' },
  ])

  return (
    <section className="shell sectionSpacing proseSection">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="sectionIntro">
        <p className="eyebrow">Estrutura estratégica</p>
        <h1>Como funciona a plataforma de auditoria, análise de mercado e Google Ads</h1>
        <p>
          O site principal funciona como uma vitrine premium. Ele explica os produtos, mostra prova
          visual, organiza a jornada do cliente e envia cada visitante para o SaaS mais adequado.
        </p>
      </div>

      <div className="copyBlock">
        <h2>1. O visitante entende o problema</h2>
        <p>
          Na home e nas páginas de produto, o visitante percebe rapidamente que anunciar sem clareza é
          caro. Ele vê que existe uma sequência lógica: auditar, validar o mercado e só depois criar a
          campanha. Isso reduz a sensação de ferramenta isolada e aumenta a autoridade da marca.
        </p>

        <h2>2. O site apresenta exemplos visuais</h2>
        <p>
          Em vez de depender apenas de texto, o site mostra como os relatórios são organizados. Isso é
          importante porque o público precisa visualizar score, problemas, recomendações e próximos
          passos. Essa camada visual é uma das partes que mais ajudam na conversão de páginas premium.
        </p>

        <h2>3. O clique vai para o SaaS certo</h2>
        <p>
          Os botões não executam a análise dentro do site principal. Eles redirecionam para as URLs na
          Vercel de cada produto. Essa arquitetura é simples, segura e rápida para lançar, porque você
          não precisa unificar tudo agora. A marca fica unificada, mas a operação continua modular.
        </p>

        <h2>4. O relatório recomenda o próximo produto</h2>
        <p>
          Depois que o cliente entra num dos SaaS, o próprio relatório recomenda o passo seguinte. Isso
          cria um efeito de ecossistema e aumenta a possibilidade de upsell. Um cliente pode começar no
          Auditor AI, seguir para o Analyzer Market AI e terminar no AdsPilot sem sentir quebra de
          contexto.
        </p>
      </div>
    </section>
  )
}
