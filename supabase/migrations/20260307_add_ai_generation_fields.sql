alter table public.seo_articles
  add column if not exists reading_minutes integer not null default 7,
  add column if not exists quality_score integer,
  add column if not exists generation_source text not null default 'manual' check (generation_source in ('manual', 'ai')),
  add column if not exists generation_model text;

create index if not exists seo_articles_quality_score_idx on public.seo_articles (quality_score);
create index if not exists seo_articles_generation_source_idx on public.seo_articles (generation_source);

comment on column public.seo_articles.quality_score is 'Score simples para revisão antes da publicação.';
comment on column public.seo_articles.generation_source is 'Origem do draft: manual ou IA.';
