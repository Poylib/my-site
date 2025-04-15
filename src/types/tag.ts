export interface Tag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  post_count?: number;
}

export interface TagWithPostCount extends Tag {
  post_count: number;
}
