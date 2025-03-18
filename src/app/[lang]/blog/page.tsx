import { PostList } from '@/components/blog/PostList';
import { supabase } from '@/lib/supabase/client';

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('language', lang)
    .order('created_at', { ascending: false });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {lang === 'ko' && '블로그'}
        {lang === 'en' && 'Blog'}
        {lang === 'ja' && 'ブログ'}
      </h1>
      {posts && <PostList posts={posts} />}
    </div>
  );
}
