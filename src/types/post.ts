export interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  view_count: number;
  is_published: boolean;
  slug: string;
  tags?: string[];
}

export interface PostWithDetails extends Post {
  tags: string[];
}
