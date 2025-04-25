import { getLatestPosts, getAllTags, getPostsByTag } from '@/lib/posts';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';
import ko from '@/messages/ko.json';
import en from '@/messages/en.json';
import ja from '@/messages/ja.json';

const messages = { ko, en, ja };

// 지원하는 언어 목록
export const supportedLanguages = ['ko', 'en', 'ja'];

// 언어별 메타데이터
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    ko: '블로그 | 포토그래피 블로그',
    en: 'Blog | Photography Blog',
    ja: 'ブログ | フォトグラフィーブログ',
  };

  const descriptions = {
    ko: '포토그래피 블로그의 모든 글을 확인해보세요. 필름카메라, 야경, 촬영팁 등 다양한 주제의 글을 제공합니다.',
    en: 'Check out all posts from our photography blog. We offer articles on various topics including film cameras, night photography, and photography tips.',
    ja: 'フォトグラフィーブログのすべての記事をご覧ください。フィルムカメラ、夜景、撮影のヒントなど、さまざまなトピックの記事を提供しています。',
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.ko,
    description:
      descriptions[lang as keyof typeof descriptions] || descriptions.ko,
    alternates: {
      languages: {
        ko: '/ko/blog',
        en: '/en/blog',
        ja: '/ja/blog',
      },
    },
  };
}

interface BlogPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ tag?: string }>;
}

export default async function BlogPage({
  params,
  searchParams,
}: BlogPageProps) {
  const { lang } = await params;
  const { tag } = await searchParams;

  const [posts, tags] = await Promise.all([
    tag ? getPostsByTag(tag) : getLatestPosts(12),
    getAllTags(),
  ]);

  const t = messages[lang as keyof typeof messages] || messages.ko;

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* 왼쪽 사이드바 - 태그 목록 */}
        <aside className="md:w-64 flex-shrink-0">
          <h2 className="text-xl font-bold mb-4">{t.blog.categories}</h2>
          <div className="space-y-2">
            <Link
              href={`/${lang}/blog`}
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium"
            >
              {t.blog.allPosts}
            </Link>
            {tags.map((tagObject) => (
              <Link
                key={tagObject.id}
                href={`/${lang}/blog?tag=${tagObject.slug}`}
                className={`px-4 py-2 rounded-lg hover:bg-gray-100 flex justify-between items-center ${
                  tag === tagObject.slug ? 'bg-gray-100' : ''
                }`}
              >
                <span className="text-gray-700">#{tagObject.name}</span>
                <span className="text-xs text-gray-500">
                  {tagObject.post_count} {t.blog.postsCount}
                </span>
              </Link>
            ))}
          </div>
        </aside>

        {/* 오른쪽 메인 컨텐츠 - 게시글 목록 */}
        <main className="flex-1">
          <h1 className="text-3xl font-bold mb-2">
            {tag ? `${t.blog.filteredTitle} #${tag}` : t.blog.title}
          </h1>
          <p className="text-gray-600 mb-8">{t.blog.description}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {posts.map((post) => {
              const title =
                lang === 'ko' ? post.title_ko : post.title_en || post.title_ko;
              const content =
                lang === 'ko'
                  ? post.content_ko
                  : post.content_en || post.content_ko;

              return (
                <div key={post.id}>
                  <Link href={`/${lang}/posts/${post.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
                          <img
                            src={post.thumbnail_url}
                            alt={title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-semibold mb-2">{title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {content}
                        </p>
                        <div className="mt-4 text-sm text-blue-600">
                          {t.common.readMore} →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
