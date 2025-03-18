import Link from 'next/link';
import { Post } from '@/types/post';
import { formatDate } from '@/utils/date';

type PostCardProps = {
  post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-2">
          {formatDate(post.createdAt)}
        </p>
        <p className="text-gray-700">{post.excerpt}</p>
      </Link>
    </article>
  );
};
