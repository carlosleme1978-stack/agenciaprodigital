import { NextResponse } from 'next/server'
import { generateSeoArticle } from '@/lib/ai/seo-generator'
import { seedKeywords } from '@/data/seo/seed-keywords'
import { getClusterByKey } from '@/data/seo/clusters'

const MAX_CLUSTER_ARTICLES = 3

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const clusterKey = String(body?.clusterKey || '').trim()
    const requestedLimit = Number(body?.limit || MAX_CLUSTER_ARTICLES)
    const safeLimit = Math.min(Math.max(requestedLimit, 1), MAX_CLUSTER_ARTICLES)

    const cluster = clusterKey ? getClusterByKey(clusterKey) : null
    const items = cluster
      ? cluster.suggestions.map((keyword) => ({ keyword, niche: cluster.niche, serviceType: cluster.serviceType }))
      : seedKeywords

    const selected = items.slice(0, safeLimit)
    const results: Array<{ keyword: string; slug?: string; ok: boolean; error?: string }> = []

    for (const item of selected) {
      try {
        const result = await generateSeoArticle({
          keyword: item.keyword,
          niche: item.niche,
          serviceType: item.serviceType,
          autoSave: true,
        })
        results.push({ keyword: item.keyword, slug: result.article.slug, ok: true })
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Erro desconhecido.'
        results.push({ keyword: item.keyword, ok: false, error: message })
      }
    }

    return NextResponse.json({
      ok: true,
      clusterKey: cluster?.key || null,
      total: results.length,
      success: results.filter((item) => item.ok).length,
      failed: results.filter((item) => !item.ok).length,
      results,
      maxClusterArticles: MAX_CLUSTER_ARTICLES,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro desconhecido.'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
