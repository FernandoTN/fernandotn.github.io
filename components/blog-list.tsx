import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Clock, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Post } from 'contentlayer/generated';

interface BlogListProps {
  posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <article
          key={post.slug}
          className="group relative pb-8 border-b last:border-b-0 last:pb-0"
        >
          <div className="space-y-4">
            {/* Meta */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>
                  {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                </time>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime.text}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
              <Link href={post.slug} className="stretched-link">
                {post.title}
              </Link>
            </h2>

            {/* Summary */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              {post.summary}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Read more */}
            <div className="text-primary font-medium group-hover:underline">
              Read article →
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}