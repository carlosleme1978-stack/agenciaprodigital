import { seedKeywords } from '../data/seo/seed-keywords'
import { generateSeoArticle } from '../lib/ai/seo-generator'

async function main() {
  const arg = Number(process.argv[2] || process.env.SEO_GENERATION_BATCH_LIMIT || 5)
  const limit = Number.isFinite(arg) && arg > 0 ? Math.min(arg, seedKeywords.length) : 5
  const selected = seedKeywords.slice(0, limit)

  console.log(`A gerar ${selected.length} drafts SEO...`)

  for (const item of selected) {
    try {
      const result = await generateSeoArticle({
        keyword: item.keyword,
        niche: item.niche,
        serviceType: item.serviceType,
        autoSave: true,
      })

      console.log(`✓ ${result.article.slug} | score ${result.qualityScore}`)
    } catch (error) {
      console.error(`✗ ${item.keyword}`)
      console.error(error)
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
