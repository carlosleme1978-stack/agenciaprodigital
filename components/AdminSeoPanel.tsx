"use client"

import { useMemo, useState, useTransition, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import type { SeoArticle } from '@/lib/seo-articles'
import { seoClusters } from '@/data/seo/clusters'

type Props = {
  initialArticles: SeoArticle[]
}

type ServiceType =
  | 'market'
  | 'audit'
  | 'ads'
  | 'seo'
  | 'competitors'
  | 'pricing'
  | 'strategy'
  | 'local'

const MAX_CLUSTER_ARTICLES = 3

export function AdminSeoPanel({ initialArticles }: Props) {
  const router = useRouter()
  const [articles, setArticles] = useState(initialArticles)
  const [keyword, setKeyword] = useState('como analisar mercado para petshop')
  const [niche, setNiche] = useState('petshop')
  const [serviceType, setServiceType] = useState<ServiceType>('market')
  const [batchClusterKey, setBatchClusterKey] = useState(seoClusters[0]?.key || '')
  const [batchLimit, setBatchLimit] = useState(MAX_CLUSTER_ARTICLES)
  const [message, setMessage] = useState('')
  const [isPending, startTransition] = useTransition()

  const counts = useMemo(
    () => ({
      total: articles.length,
      drafts: articles.filter((article) => article.status === 'draft').length,
      published: articles.filter((article) => article.status === 'published').length,
    }),
    [articles],
  )

  const groupedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      if (a.status === b.status) return a.title.localeCompare(b.title)
      return a.status === 'draft' ? -1 : 1
    })
  }, [articles])

  async function refreshList() {
    startTransition(() => router.refresh())
  }

  async function handleGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('A gerar rascunho com IA...')

    const response = await fetch('/api/seo/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keyword, niche, serviceType }),
    })

    const payload = await response.json()

    if (!response.ok || !payload?.ok) {
      setMessage(payload?.error || 'Falha ao gerar rascunho.')
      return
    }

    setMessage(`Rascunho gerado: ${payload.article?.slug || payload.article?.title || 'ok'}`)
    await refreshList()
  }

  async function handleBatchGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(`A gerar cluster com até ${MAX_CLUSTER_ARTICLES} artigos...`)

    const response = await fetch('/api/seo/generate-batch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clusterKey: batchClusterKey, limit: Math.min(batchLimit, MAX_CLUSTER_ARTICLES) }),
    })

    const payload = await response.json()

    if (!response.ok || !payload?.ok) {
      setMessage(payload?.error || 'Falha ao gerar lote.')
      return
    }

    setMessage(`Cluster concluído: ${payload.success} sucesso, ${payload.failed} falhas.`)
    await refreshList()
  }

  async function handlePublish(slug: string) {
    setMessage(`A publicar ${slug}...`)
    const response = await fetch('/api/seo/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
    const payload = await response.json()

    if (!response.ok || !payload?.ok) {
      setMessage(payload?.error || 'Falha ao publicar artigo.')
      return
    }

    setArticles((current) =>
      current.map((article) =>
        article.slug === slug ? { ...article, status: 'published', updatedAt: new Date().toISOString().slice(0, 10) } : article,
      ),
    )
    setMessage(`Publicado: ${slug}`)
    await refreshList()
  }

  async function handleDelete(slug: string) {
    const confirmed = window.confirm(`Eliminar o artigo ${slug}?`)
    if (!confirmed) return

    setMessage(`A eliminar ${slug}...`)
    const response = await fetch('/api/seo/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
    const payload = await response.json()

    if (!response.ok || !payload?.ok) {
      setMessage(payload?.error || 'Falha ao eliminar artigo.')
      return
    }

    setArticles((current) => current.filter((article) => article.slug !== slug))
    setMessage(`Artigo removido: ${slug}`)
    await refreshList()
  }

  function openPreview(article: SeoArticle) {
    const cleanSlug = article.slug.replace(/^blog\//, '')
    const href = article.status === 'published' ? `/blog/${cleanSlug}` : `/admin/seo/preview/${cleanSlug}`
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="sectionSpacing">
      <div className="adminSeoLayout">
        <div className="cardSurface adminSeoBox">
          <p className="eyebrow">Gerar rascunho</p>
          <h2>Novo artigo com IA</h2>
          <form className="adminSeoForm" onSubmit={handleGenerate}>
            <label>
              Keyword principal
              <input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="como analisar mercado para petshop" />
            </label>
            <label>
              Nicho
              <input value={niche} onChange={(event) => setNiche(event.target.value)} placeholder="petshop" />
            </label>
            <label>
              Tipo de página
              <select value={serviceType} onChange={(event) => setServiceType(event.target.value as ServiceType)}>
                <option value="market">Análise de mercado</option>
                <option value="audit">Auditoria digital</option>
                <option value="ads">Planeamento Google Ads</option>
                <option value="seo">Estratégia SEO</option>
                <option value="competitors">Análise de concorrentes</option>
                <option value="pricing">Orçamento de marketing</option>
                <option value="strategy">Estratégia de crescimento</option>
                <option value="local">Marketing local</option>
              </select>
            </label>
            <button className="ctaButton" type="submit" disabled={isPending}>Gerar rascunho</button>
          </form>

          <div className="adminSeoDivider" />

          <p className="eyebrow">Cluster completo</p>
          <h3>Gerar apenas 3 artigos do nicho</h3>
          <form className="adminSeoForm" onSubmit={handleBatchGenerate}>
            <label>
              Cluster
              <select value={batchClusterKey} onChange={(event) => setBatchClusterKey(event.target.value)}>
                {seoClusters.map((cluster) => (
                  <option key={cluster.key} value={cluster.key}>
                    {cluster.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Quantidade
              <input
                type="number"
                min={1}
                max={MAX_CLUSTER_ARTICLES}
                value={batchLimit}
                onChange={(event) => setBatchLimit(Math.min(Number(event.target.value || 1), MAX_CLUSTER_ARTICLES))}
              />
            </label>
            <p className="adminSeoHint">O cluster completo está limitado a 3 artigos por nicho nesta versão.</p>
            <button className="secondaryButton" type="submit" disabled={isPending}>Gerar cluster</button>
          </form>

          <div className="adminSeoStats">
            <span>Total: {counts.total}</span>
            <span>Drafts: {counts.drafts}</span>
            <span>Publicados: {counts.published}</span>
          </div>
          {message ? <p className="adminSeoMessage">{message}</p> : null}
        </div>

        <div className="cardSurface adminSeoBox">
          <p className="eyebrow">Gestão</p>
          <h2>Artigos</h2>
          <div className="adminSeoTable">
            {groupedArticles.map((article) => (
              <div key={article.slug} className="adminSeoRow">
                <div>
                  <strong>{article.title}</strong>
                  <p>{article.slug}</p>
                  <div className="adminSeoMeta">
                    <span>{article.niche}</span>
                    <span>{article.status}</span>
                    <span>{article.readingMinutes} min</span>
                  </div>
                </div>
                <div className="adminSeoActions">
                  <button className="secondaryButton" type="button" onClick={() => openPreview(article)}>
                    Ver
                  </button>
                  {article.status !== 'published' ? (
                    <button className="secondaryButton" type="button" onClick={() => handlePublish(article.slug)}>
                      Publicar
                    </button>
                  ) : null}
                  <button className="secondaryButton dangerButton" type="button" onClick={() => handleDelete(article.slug)}>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
