export type Post = {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  language: 'ko' | 'en' | 'ja';
  excerpt?: string;
  coverImage?: string;
};
