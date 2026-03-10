import type { Metadata } from 'next'
import Link from 'next/link'
import { ProductCard } from '@/components/ProductCard'
import { ReportPreview } from '@/components/ReportPreview'
import { products, siteConfig } from '@/components/siteData'
import { breadcrumbSchema, buildMetadata, serviceSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Análise de mercado, auditoria digital e criação de campanhas Google Ads com IA',
  description:
    'Plataforma com IA para analisar mercado, auditar sites e criar campanhas Google Ads com mais clareza, estratégia e direção comercial.',
  path: '/',
  keywords: [
    'análise de mercado online',
    'auditoria de site com IA',
    'ferramenta google ads',
    'google ads para negócios locais',
    'marketing digital com IA',
  ],
})

export default function HomePage() {
  const structuredData = [
    breadcrumbSchema([
      { name: 'Início', path: '/' },
    ]),
    serviceSchema({
      name: 'Plataforma de IA para auditoria digital, análise de mercado e Google Ads',
      description:
        'Ecossistema da Agencia Pro Digital com Auditor AI, Analyzer Market AI e AdsPilot para empresas que querem validar mercado e anunciar com mais segurança.',
      path: '/',
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

      <section className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow">Ecossistema premium de IA para negócios</p>
          <h1>
             Antes de gastar dinheiro em Google Ads, descubra onde o seu negócio está a perder clientes.
           </h1>
          <p className="heroLead">
           A <strong>{siteConfig.name}</strong> analisa o seu site, valida se o mercado responde
           e ajuda a criar uma campanha Google Ads estruturada. Antes de investir em tráfego,
           o cliente descobre exatamente onde está a perder oportunidades.
          </p>
          <div className="heroActions">
            <Link href="/exemplos-relatorios" className="ctaButton">
              Ver exemplos reais
            </Link>
            <Link href="/como-funciona" className="ghostButton">
              Como funciona
            </Link>
          </div>
        </div>

        <div className="heroPanel">
          <div className="dashboardPreview">
            <div className="dashboardTop">
              <span className="chip">Diagnóstico</span>
              <span className="chip">Análise</span>
              <span className="chip">Crescimento</span>
              <span className="chip">Evolução</span>
            </div>
            <div className="heroMetrics">
              <div>
                <span>Empresas atendidas</span>
                <strong>+120</strong>
              </div>
              <div>
                <span>Tempo médio</span>
                <strong>3–8 min</strong>
              </div>
              <div>
                <span>Saída</span>
                <strong>Relatórios premium</strong>
              </div>
            </div>
           <div className="mockFlow">
             <div className="flowItem">Auditor AI encontra os maiores gargalos do site</div>
             <div className="flowItem">Analyzer Market AI valida procura e concorrência</div>
             <div className="flowItem">AdsPilot cria a estrutura da campanha Google Ads</div>
             <div className="flowItem">Relatórios claros e acionáveis</div>
             <div className="flowItem">Decisões com base em dados</div>
             <div className="flowItem">Campanha pronta para publicar</div>
           </div>
          </div>
        </div>
      </section>

      <section className="shell sectionSpacing">
        <div className="sectionIntro">
          <p className="eyebrow">Produtos principais</p>
          <h2>Três ferramentas de IA para descobrir, validar e anunciar com mais segurança.</h2>
          <p>Antes de investir em tráfego pago, o cliente precisa entender três coisas:
            se o site convence, se o mercado responde e qual campanha realmente faz sentido.
            O ecossistema da Agencia Pro Digital foi criado exatamente para isso:
            diagnosticar problemas, validar oportunidades e transformar essa leitura
            em uma campanha Google Ads pronta para publicar.
            
          </p>
        </div>
        <div className="productGrid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="shell sectionSpacing">
        <div className="sectionIntro center">
          <p className="eyebrow">A jornada ideal</p>
          <h2>Da auditoria à campanha Google Ads.</h2>
          <p>O cliente começa por uma auditoria para descobrir onde está a travar.</p>
        </div>
        <div className="journeyGrid">
          <div className="journeyCard">
            <span>01</span>
            <h3>Diagnóstico</h3>
            <p>O cliente começa com uma auditoria para descobrir onde está a perder oportunidades.
            O relatório mostra gargalos no site, na oferta e na comunicação antes de investir em tráfego.</p>
          </div>
          <div className="journeyCard">
            <span>02</span>
            <h3>Análise de mercado</h3>
            <p>Depois valida se o mercado realmente responde.
            A análise mostra procura, concorrência e o melhor posicionamento para entrar com mais segurança.</p>
          </div>
          <div className="journeyCard">
            <span>03</span>
            <h3>Campanha</h3>
            <p>Quando o cenário faz sentido, o AdsPilot transforma a análise em uma campanha Google Ads estruturada,
            com palavras-chave, anúncios e estratégia inicial prontos para publicar.</p>
          </div>
        </div>
      </section>

      <section className="shell sectionSpacing">
        <div className="sectionIntro">
          <p className="eyebrow">Exemplos de relatórios</p>
          <h2>Exemplos de relatórios gerados pela plataforma</h2>
          <p>
            Antes de investir em tráfego pago, veja como os relatórios mostram
            problemas reais, oportunidades de mercado e próximos passos claros.
           Cada análise apresenta score, diagnóstico, riscos e recomendações
           para ajudar o cliente a entender onde melhorar antes de escalar anúncios.
          </p>
        </div>
        <div className="reportStack">
          <ReportPreview
            title="Auditoria de presença digital"
            score="78/100"
            items={[
              { label: 'Problema principal', value: 'Oferta pouco clara', note: 'Bio e headline não mostram o benefício central.' },
              { label: 'Risco atual', value: 'Cliques perdidos', note: 'Tráfego chega, mas a mensagem não convence.' },
              { label: 'Próximo passo', value: 'Analisar landing page', note: 'Corrigir promessa, prova e CTA antes de escalar.' },
            ]}
          />
          <ReportPreview
            title="Leitura de mercado"
            score="Demanda Alta"
            variant="blue"
            items={[
              { label: 'Concorrência', value: 'Moderada', note: 'Há espaço com oferta bem posicionada.' },
              { label: 'Ângulo sugerido', value: 'Rapidez + confiança', note: 'Mercado responde melhor a clareza operacional.' },
              { label: 'Próximo passo', value: 'Criar campanha', note: 'A oportunidade está pronta para AdsPilot.' },
            ]}
          />
        </div>
      </section>



      <section className="shell sectionSpacing">
        <div className="sectionIntro">
          <p className="eyebrow">Estratégia Avançada</p>
          <h2>Conteúdo estratégico para atrair empresas que já procuram soluções.</h2>
          <p>Estas páginas respondem dúvidas que empresários e gestores já pesquisam
          quando querem melhorar o marketing digital ou começar a anunciar.
          Elas ajudam o visitante a entender o problema, descobrir oportunidades
          e chegar naturalmente às ferramentas do ecossistema.
          </p>
        </div>
        <div className="journeyGrid">
          <div className="journeyCard">
            <span>01</span>
            <h3><Link href="/ferramenta-analise-de-mercado">Ferramenta de análise de mercado</Link></h3>
            <p>Página para quem quer descobrir se existe procura real antes
            de investir em marketing ou tráfego pago.</p>
          </div>
          <div className="journeyCard">
            <span>02</span>
            <h3><Link href="/auditoria-de-marketing-digital">Auditoria de marketing digital</Link></h3>
            <p>Capta buscas de diagnóstico e ajuda o visitante a perceber
            onde o site ou a comunicação podem estar a perder clientes.</p>
          </div>
          <div className="journeyCard">
            <span>03</span>
            <h3><Link href="/como-criar-campanha-google-ads">Como criar campanha Google Ads</Link></h3>
            <p>Guia educativo que explica os primeiros passos de uma campanha
            e liga naturalmente ao AdsPilot para transformar teoria em execução.</p>
          </div>
        </div>
      </section>

      <section className="shell sectionSpacing finalCta">
        <div>
          <p className="eyebrow">Estrutura pronta para SEO e vendas</p>
          <h2>Estrutura pensada para atrair tráfego e transformar visitantes em clientes.</h2>
          <p>
            O site combina conteúdo educativo, páginas comerciais e acesso direto
           às ferramentas do ecossistema.
           Assim o visitante pode aprender, entender o cenário e escolher a solução
           certa para analisar o negócio ou criar uma campanha.
          </p>
        </div>
        <div className="heroActions">
          <a href={siteConfig.links.auditor} className="ctaButton" target="_blank" rel="noreferrer">
            Entrar no Auditor AI
          </a>
          <Link href="/faq" className="ghostButton">
            Ver FAQ
          </Link>
        </div>
      </section>
    </>
  )
}
