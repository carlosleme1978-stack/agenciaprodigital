import { NextResponse } from 'next/server'
import { generateSeoArticle } from '@/lib/ai/seo-generator'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const keyword = String(body?.keyword || '').trim()
    const niche = String(body?.niche || '').trim()
    const serviceType = body?.serviceType as 'market' | 'audit' | 'ads'

    if (!keyword || !niche || !serviceType) {
      return NextResponse.json(
        { ok: false, error: 'Envie keyword, niche e serviceType.' },
        { status: 400 },
      )
    }

    const result = await generateSeoArticle({
      keyword,
      niche,
      serviceType,
      autoSave: body?.autoSave !== false,
    })

    return NextResponse.json({ ok: true, ...result })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro desconhecido.'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
