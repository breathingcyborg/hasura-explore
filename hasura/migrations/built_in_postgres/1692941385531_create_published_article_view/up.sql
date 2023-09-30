CREATE view published_article AS
SELECT * FROM public.article
WHERE public.article.status = 'published';
