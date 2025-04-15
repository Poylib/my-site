import { PostWithDetails } from '@/types/post';
import { Tag, TagWithPostCount } from '@/types/tag';
import { createClient } from './supabase/server';

export async function getLatestPosts(
  limit: number = 6,
): Promise<PostWithDetails[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('posts')
    .select(
      `
      *,
      post_tags!post_id(
        tags!tag_id(name, slug)
      )
    `,
    )
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }

  return data.map((post: any) => ({
    ...post,
    tags: post.post_tags.map((t: any) => t.tags.name),
  }));
}

export async function getPopularTags(
  limit: number = 10,
): Promise<TagWithPostCount[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('tags')
    .select(
      `
      *,
      post_tags!tag_id(count)
    `,
    )
    .order('post_tags(count)', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching popular tags:', error);
    return [];
  }

  return data.map((tag: any) => ({
    ...tag,
    post_count: tag.post_tags[0].count,
  }));
}

export async function getPostsByTag(
  tagSlug: string,
  limit: number = 6,
): Promise<PostWithDetails[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('posts')
    .select(
      `
      *,
      post_tags!post_id(
        tags!tag_id(name, slug)
      )
    `,
    )
    .eq('is_published', true)
    .eq('post_tags.tags.slug', tagSlug)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching posts by tag:', error);
    return [];
  }

  return data.map((post: any) => ({
    ...post,
    tags: post.post_tags.map((t: any) => t.tags.name),
  }));
}

export async function getAllTags(): Promise<TagWithPostCount[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('tags')
    .select(
      `
      *,
      post_tags!tag_id(count)
    `,
    )
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching all tags:', error);
    return [];
  }

  return data.map((tag: any) => ({
    ...tag,
    post_count: tag.post_tags[0].count,
  }));
}
