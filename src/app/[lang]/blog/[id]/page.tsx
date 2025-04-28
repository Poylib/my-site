import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { ko, enUS, ja } from 'date-fns/locale';
import { getPost } from '@/lib/posts';
import { getCurrentLanguage } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye } from 'lucide-react';
import MarkdownViewer from '@/components/markdown/MarkdownViewer';

const LOCALES = {
  ko,
  en: enUS,
  ja,
};

interface PostPageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { lang, id } = await params;
  const currentLang = getCurrentLanguage(lang);
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  const title =
    currentLang === 'ko' ? post.title_ko : post.title_en || post.title_ko;
  const content =
    currentLang === 'ko' ? post.content_ko : post.content_en || post.content_ko;
  const locale = LOCALES[currentLang as keyof typeof LOCALES];

  return (
    <article className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href={`/${currentLang}/blog`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <time dateTime={post.created_at}>
            {format(new Date(post.created_at), 'PPP', { locale })}
          </time>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {post.view_count}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6">{title}</h1>

        <div className="flex gap-2 mb-8">
          {post.tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/${currentLang}/blog?tag=${tag.slug}`}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
            >
              {tag.name}
            </Link>
          ))}
        </div>

        {post.thumbnail_url && (
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.thumbnail_url}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <MarkdownViewer content={content} />
        </div>
      </div>
    </article>
  );
}
