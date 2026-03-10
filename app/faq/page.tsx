import type { Metadata } from 'next'
import { breadcrumbSchema, buildMetadata, faqSchema } from '@/lib/seo'

const faqs = [
  {
    q: 'O que exatamente eu recebo na análise?',
    a: 'Você recebe um relatório prático com informações importantes sobre o seu mercado, incluindo procura pelos seus serviços, palavras-chave mais relevantes, nível de concorrência, estimativa de custo por clique e oportunidades para atrair mais clientes pela internet.',
  },
  {
    q: 'Essa análise ajuda mesmo antes de investir em anúncios?',
    a: 'Sim. A proposta é justamente evitar que você anuncie no escuro. Antes de investir, você entende melhor a procura pelo seu serviço, o comportamento do mercado e quais oportunidades fazem mais sentido para o seu negócio.',
  },
  {
    q: 'Quanto tempo demora para receber o resultado?',
    a: 'Na maioria dos casos, a análise fica pronta em poucos minutos após a confirmação do pagamento. O processo é feito de forma rápida para que você tenha acesso ao diagnóstico sem esperar dias por uma consultoria tradicional.',
  },
  {
    q: 'Preciso entender de marketing digital para usar?',
    a: 'Não. A análise foi pensada para ser simples, objetiva e fácil de entender. Mesmo que você nunca tenha criado campanhas ou estudado marketing, conseguirá visualizar os dados com clareza e tomar decisões com mais segurança.',
  },
  {
    q: 'Essa análise serve para qualquer tipo de negócio?',
    a: 'Ela é especialmente útil para negócios que desejam atrair clientes pela internet, como serviços locais, clínicas, estética, construção, lojas online, profissionais autônomos e outras empresas que queiram validar demanda antes de investir em tráfego.',
  },
  {
    q: 'Por que essa análise custa menos do que uma consultoria?',
    a: 'Porque parte do processo foi estruturada para ser mais rápida e acessível. Assim, você consegue obter uma visão estratégica do mercado por um valor muito mais baixo do que o de uma consultoria tradicional.',
  },
  {
    q: 'Vou receber apenas dados ou também vou entender o que fazer?',
    a: 'A proposta não é mostrar números soltos. A análise organiza as informações de forma clara para ajudar você a entender o cenário do seu mercado e enxergar melhor os próximos passos antes de investir em campanhas.',
  },
  {
    q: 'É seguro comprar e preencher os dados do meu negócio?',
    a: 'Sim. O processo foi pensado para oferecer uma experiência segura durante a compra e no envio das informações necessárias para gerar a análise.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Perguntas frequentes sobre análise de mercado e auditoria digital',
  description:
    'Tire suas dúvidas sobre a análise de mercado, auditoria digital e diagnóstico para investir com mais segurança em tráfego pago.',
  path: '/faq',
  keywords: [
    'faq análise de mercado',
    'perguntas frequentes auditoria digital',
    'dúvidas sobre tráfego pago',
    'diagnóstico de mercado',
    'análise antes de anunciar',
  ],
})

export default function FaqPage() {
  const schemas = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ]),
    faqSchema(faqs),
  ]

  return (
    <section className="shell sectionSpacing proseSection">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="sectionIntro">
        <p className="eyebrow">Perguntas frequentes</p>
        <h1>Perguntas frequentes sobre análise de mercado e auditoria digital</h1>
        <p>
          Entenda como funciona a análise, o que você recebe e por que ela pode
          ajudar o seu negócio antes de investir em anúncios.
        </p>
      </div>

      <div className="faqList">
        {faqs.map((faq) => (
          <article key={faq.q} className="faqItem">
            <h2>{faq.q}</h2>
            <p>{faq.a}</p>
          </article>
        ))}
      </div>
    </section>
  )
}