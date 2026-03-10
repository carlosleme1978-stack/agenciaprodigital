# Agencia Pro Digital - SEO ZIP 2

Este ZIP adiciona o motor de IA ao projeto do ZIP 1.

## O que entra neste ZIP

- geração de artigos SEO via API em `app/api/seo/generate/route.ts`
- publicação de drafts via `app/api/seo/publish/route.ts`
- integração server-side com OpenAI
- ligação ao Supabase com service role no backend
- validador de qualidade para evitar drafts fracos
- script batch `npm run seo:generate -- 5`
- seed inicial com keywords para nichos prioritários
- migration com campos de IA e score de qualidade

## Fluxo recomendado

1. Criar drafts por IA
2. Rever no banco/admin
3. Publicar só os melhores
4. Deixar o Google indexar com calma

## Variáveis obrigatórias

Copiar `.env.example` para `.env.local` e preencher:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`

## Rotas de teste

Gerar um draft:

```bash
curl -X POST http://localhost:3000/api/seo/generate       -H "Content-Type: application/json"       -d '{"keyword":"como analisar mercado para petshop","niche":"petshop","serviceType":"market"}'
```

Publicar um draft:

```bash
curl -X POST http://localhost:3000/api/seo/publish       -H "Content-Type: application/json"       -d '{"slug":"como-analisar-mercado-para-petshop"}'
```

Geração em lote:

```bash
npm install
npm run seo:generate -- 3
```

## Nota importante de SEO

Não publique tudo de uma vez. O melhor caminho é gerar poucos drafts por semana, rever, publicar e acompanhar a indexação no Search Console.

## Próximo ZIP

Pedir: `Gerar ZIP 3 — painel admin SEO`


## ZIP 3 - Painel admin SEO

Este ZIP adiciona:
- `/admin/seo` para gerar, publicar e eliminar artigos
- correção do cache em `/blog` e `/blog/[slug]`
- correção do parser da API de IA
- rota `POST /api/seo/delete`
