import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Post } from 'contentlayer/generated';

interface FeaturedPostsProps {
  posts: Post[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative rounded-lg border p-6 hover:shadow-lg transition-all duration-200"
          >
            <div className="space-y-4">
              {/* Meta */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <time dateTime={post.publishedAt}>
                  {format(parseISO(post.publishedAt), 'MMM dd, yyyy')}
                </time>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readingTime.text}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                <Link href={post.slug} className="stretched-link">
                  {post.title}
                </Link>
              </h3>

              {/* Summary */}
              <p className="text-muted-foreground line-clamp-3">
                {post.summary}
              </p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/blog" className="flex items-center space-x-2">
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}