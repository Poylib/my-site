import { Card, CardContent } from '../ui/card';
import { getLatestPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function NewRow({ lang = 'ko' }: { lang?: string }) {
  console.log('🚀 ~ NewRow ~ lang:', lang);
  const posts = await getLatestPosts(3);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">최신 글</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={post.thumbnail_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.content}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
