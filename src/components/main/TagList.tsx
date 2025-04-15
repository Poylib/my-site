import { Button } from '../ui/button';
import { getPopularTags } from '@/lib/posts';
import Link from 'next/link';

export default async function TagList() {
  const tags = await getPopularTags(5);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">인기 태그</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link href={`/tags/${tag.slug}`} key={tag.id}>
            <Button variant="outline" size="sm" className="gap-2">
              #{tag.name}
              <span className="text-xs text-gray-500">({tag.post_count})</span>
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
