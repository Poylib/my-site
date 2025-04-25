import { Tag } from './tag';

export interface Post {
  id: string;
  title_ko: string;
  title_en: string | null;
  content_ko: string;
  content_en: string | null;
  thumbnail_url: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  view_count: number;
  is_published: boolean;
  slug: string;
  has_translation: boolean;
  tags: Tag[];
}

export interface PostWithDetails extends Post {
  tags: Tag[];
}
