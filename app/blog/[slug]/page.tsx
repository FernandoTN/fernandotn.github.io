import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MDXContent } from '@/components/mdx-content';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: post.image ? [post.image] : [],
    },
  };
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
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

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            {post.summary}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXContent code={post.body.code} />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              By {post.author}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://fernandotorres.io/blog/${post.slugAsParams}`)}`}>
                  Share on Twitter
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}