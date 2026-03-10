import { NextResponse } from 'next/server'
import { deleteSeoArticle } from '@/lib/seo-articles'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const slug = String(body?.slug || '').trim()

    if (!slug) {
      return NextResponse.json({ ok: false, error: 'Envie o slug do artigo.' }, { status: 400 })
    }

    const result = await deleteSeoArticle(slug)
    return NextResponse.json({ ok: true, article: result })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro desconhecido.'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
