create table if not exists public.seo_articles (
  id bigserial primary key,
  slug text not null unique,
  title text not null,
  excerpt text not null,
  keyword text not null,
  niche text not null,
  meta_title text not null,
  meta_description text not null,
  cta_title text,
  cta_text text,
  cta_href text,
  content jsonb not null default '[]'::jsonb,
  faq jsonb not null default '[]'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists seo_articles_status_idx on public.seo_articles (status);
create index if not exists seo_articles_slug_idx on public.seo_articles (slug);
create index if not exists seo_articles_keyword_idx on public.seo_articles (keyword);

comment on table public.seo_articles is 'Base de artigos SEO programáticos. No ZIP 2 os drafts passam a ser gerados por IA e gravados aqui.';
