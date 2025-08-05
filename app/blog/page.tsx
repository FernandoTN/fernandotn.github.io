import type { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { BlogList } from '@/components/blog-list';
import { BlogFilters } from '@/components/blog-filters';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'AI Journey Blog',
  description: 'Insights and thoughts on artificial intelligence, machine learning, and the future of technology.',
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const posts = allPosts.sort((a, b) => 
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  const filteredPosts = searchParams.tag
    ? posts.filter((post) => post.tags.includes(searchParams.tag!))
    : posts;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            AI Journey Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights and thoughts on artificial intelligence, machine learning, 
            and the future of technology.
          </p>
        </div>

        {/* Filters */}
        <Suspense fallback={<div>Loading filters...</div>}>
          <BlogFilters tags={allTags} selectedTag={searchParams.tag} />
        </Suspense>

        {/* Posts List */}
        <div className="mt-12">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchParams.tag 
                  ? `No posts found with tag "${searchParams.tag}"` 
                  : 'No posts found.'
                }
              </p>
            </div>
          ) : (
            <BlogList posts={filteredPosts} />
          )}
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">{posts.length}</div>
              <div className="text-sm text-muted-foreground">Articles Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{allTags.length}</div>
              <div className="text-sm text-muted-foreground">Topics Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">
                {Math.round(posts.reduce((acc, post) => acc + post.readingTime.minutes, 0))}
              </div>
              <div className="text-sm text-muted-foreground">Minutes of Reading</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}