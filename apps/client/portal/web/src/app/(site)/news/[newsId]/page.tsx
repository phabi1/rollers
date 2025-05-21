import { useNewsDetails } from '@/hooks/use-news-details';

export default async function NewsDetailsPage({
  params,
}: {
  params: { newsId: string };
}) {
  const { content } = await useNewsDetails(params.newsId);
  return (
    <div>
      <h1>{content.title}</h1>
      <div>{content.body}</div>
    </div>
  );
}
