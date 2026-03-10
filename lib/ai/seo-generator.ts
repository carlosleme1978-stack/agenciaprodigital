import { buildSeoPrompt, type SeoServiceType } from '@/lib/ai/prompts'
import { scoreSeoDraft, validateGeneratedArticle } from '@/lib/ai/validators'
import { saveSeoDraft } from '@/lib/seo-articles'

function extractJson(text: string) {
  const trimmed = text.trim()
  const firstBrace = trimmed.indexOf('{')
  const lastBrace = trimmed.lastIndexOf('}')
  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error('A resposta da IA não contém JSON válido.')
  }
  return trimmed.slice(firstBrace, lastBrace + 1)
}

function extractOutputText(payload: any) {
  if (typeof payload?.output_text === 'string' && payload.output_text.trim()) {
    return payload.output_text.trim()
  }

  const directText = payload?.output
    ?.flatMap((item: any) => item?.content || [])
    ?.map((part: any) => {
      if (typeof part?.text === 'string') return part.text
      if (Array.isArray(part?.text)) {
        return part.text.map((t: any) => t?.value || t?.text || '').join('\n')
      }
      if (typeof part?.value === 'string') return part.value
      return ''
    })
    ?.join('\n')
    ?.trim()

  if (directText) return directText

  return null
}

export async function generateSeoArticle(input: {
  keyword: string
  niche: string
  serviceType: SeoServiceType
  autoSave?: boolean
}) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY não configurada.')
  }

  const prompt = buildSeoPrompt(input)
  const model = process.env.OPENAI_MODEL || 'gpt-5-mini'

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      input: prompt,
      reasoning: { effort: 'medium' },
      text: { verbosity: 'medium' },
    }),
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(`Falha ao gerar artigo com IA: ${response.status} ${message}`)
  }

  const payload = await response.json()
  const outputText = extractOutputText(payload)

  if (!outputText) {
    throw new Error(
      `A API não devolveu texto utilizável. Payload: ${JSON.stringify(payload).slice(0, 1500)}`,
    )
  }

  const rawArticle = JSON.parse(extractJson(outputText))
  const article = validateGeneratedArticle({
    rawArticle,
    keyword: input.keyword,
    niche: input.niche,
    serviceType: input.serviceType,
  })

  const qualityScore = scoreSeoDraft(article)

  if (input.autoSave !== false) {
    await saveSeoDraft(article, {
      source: 'ai',
      model,
      qualityScore,
    })
  }

  return {
    article,
    qualityScore,
    model,
  }
}
