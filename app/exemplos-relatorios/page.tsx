import type { Metadata } from 'next'
import { ReportPreview } from '@/components/ReportPreview'
import { breadcrumbSchema, buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Exemplos reais de relatórios de auditoria, mercado e campanhas',
  description:
    'Veja exemplos visuais dos relatórios gerados pelo Auditor AI, Analyzer Market AI e AdsPilot antes de comprar sua análise.',
  path: '/exemplos-relatorios',
  keywords: [
    'exemplo de relatório de auditoria digital',
    'exemplo de análise de mercado',
    'exemplo de campanha google ads',
    'relatório de marketing digital',
    'diagnóstico antes de anunciar',
  ],
})

export default function ExamplesPage() {
  const schema = breadcrumbSchema([
    { name: 'Início', path: '/' },
    { name: 'Exemplos de relatórios', path: '/exemplos-relatorios' },
  ])

  return (
    <section className="shell sectionSpacing examplesPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="sectionIntro">
        <p className="eyebrow">Exemplos reais</p>
        <h1>Veja exemplos de relatórios antes de comprar</h1>
        <p>
          Antes de entrar em uma das ferramentas, você pode visualizar o estilo
          dos relatórios, o tipo de insight gerado e como cada análise ajuda na
          tomada de decisão. Isso traz mais clareza, aumenta a confiança e ajuda
          você a escolher a solução certa para o seu momento.
        </p>
      </div>

      <div className="proseSection">
        <div className="copyBlock">
          <h2>O que você vai encontrar nesta página</h2>
          <p>
            Aqui mostramos exemplos visuais de três tipos de análise. Cada uma
            atende uma necessidade diferente: entender a presença digital atual,
            validar o potencial do mercado antes de investir e visualizar uma
            campanha pronta para publicar com mais segurança.
          </p>
        </div>
      </div>

      <div className="reportStack">
        <ReportPreview
          title="Auditor AI — diagnóstico da presença digital"
          score="78/100"
          items={[
            {
              label: 'Clareza da mensagem',
              value: 'Baixa',
              note: 'O visitante não entende rapidamente o diferencial do serviço logo na primeira dobra.',
            },
            {
              label: 'Chamada para ação',
              value: 'Fraca',
              note: 'O botão principal precisa de mais clareza, urgência e foco em conversão.',
            },
            {
              label: 'Próximo passo recomendado',
              value: 'Ajustar landing page',
              note: 'Melhorar estrutura, promessa e hierarquia antes de escalar tráfego.',
            },
          ]}
        />

        <ReportPreview
          title="Analyzer Market AI — leitura de mercado"
          score="Alta"
          variant="blue"
          items={[
            {
              label: 'Procura pelo serviço',
              value: 'Alta',
              note: 'Existe demanda real e espaço para captar clientes com boa apresentação.',
            },
            {
              label: 'Nível de concorrência',
              value: 'Médio',
              note: 'O posicionamento, a oferta e a mensagem comercial ainda fazem grande diferença.',
            },
            {
              label: 'Próximo passo recomendado',
              value: 'Validar campanha',
              note: 'O cenário já permite avançar para uma campanha inicial com mais segurança.',
            },
          ]}
        />

        <ReportPreview
          title="AdsPilot — campanha sugerida"
          score="€20/dia"
          variant="purple"
          items={[
            {
              label: 'Estrutura da campanha',
              value: 'Pronta',
              note: 'Grupo organizado com foco em intenção direta de procura e contacto.',
            },
            {
              label: 'Linha de copy',
              value: 'Confiança + ação',
              note: 'Texto pensado para gerar clique com clareza e aumentar a intenção de contacto.',
            },
            {
              label: 'Próximo passo',
              value: 'Revisar e publicar',
              note: 'O cliente visualiza a proposta e avança com mais segurança para execução.',
            },
          ]}
        />
      </div>

      <div className="proseSection">
        <div className="copyBlock">
          <h2>Qual relatório faz mais sentido para você?</h2>
          <p>
            Se o seu objetivo é identificar falhas na comunicação, estrutura e
            conversão da sua presença digital, o ideal é começar pelo
            <strong> Auditor AI</strong>.
          </p>
          <p>
            Se você quer entender melhor a procura do mercado, a concorrência e
            o potencial antes de investir em tráfego, o melhor caminho é o
            <strong> Analyzer Market AI</strong>.
          </p>
          <p>
            Se você já validou o mercado e quer ver uma campanha organizada para
            publicação, o próximo passo natural é o <strong>AdsPilot</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}