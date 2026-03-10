import { buildMetadata } from '@/lib/seo'
import { getAllSeoArticles } from '@/lib/seo-articles'
import { AdminSeoPanel } from '@/components/AdminSeoPanel'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata = buildMetadata({
  title: 'Admin SEO | Painel interno',
  description: 'Painel interno de gestão SEO.',
  path: '/admin/seo',
  keywords: [
    'admin seo',
    'painel seo',
    'clusters seo',
    'artigos seo',
    'seo programático',
    'geração de artigos com ia',
    'publicação seo',
    'blog seo',
  ],
})

export default async function AdminSeoPage() {
  const articles = await getAllSeoArticles()

  return (
    <div className="shell sectionSpacing">
      <section className="innerHero articleHero">
        <div className="articleHeroCopy">
          <p className="eyebrow">Painel interno</p>
          <h1>Admin SEO</h1>
          <p className="heroLead narrow">
            Gere rascunhos com IA, organize conteúdos por cluster, publique os melhores
            artigos e elimine conteúdos sem entrar no Supabase.
          </p>
        </div>
      </section>

      <AdminSeoPanel initialArticles={articles} />
    </div>
  )
}
