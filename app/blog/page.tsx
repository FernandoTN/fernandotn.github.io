import type { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { BlogList } from '@/components/blog-list';

export const metadata: Metadata = {
  title: 'ALM Research Blog',
  description:
    'Research insights into Autonomous Language Models, their capabilities, limitations, and transformative potential across industries.',
};

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            ALM Research Series
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Weekly insights into Autonomous Language Models, their capabilities,
            limitations, and transformative potential across industries.
          </p>
        </div>

        {/* Posts List */}
        <div className="mt-12">
          {posts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No posts found.</p>
            </div>
          ) : (
            <BlogList posts={posts} />
          )}
        </div>

        {/* Stats */}
        <div className="mt-16 border-t pt-8">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-primary">
                {posts.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Articles Published
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">
                {allTags.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Topics Covered
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">
                {Math.round(
                  posts.reduce((acc, post) => acc + post.readingTime.minutes, 0)
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                Minutes of Reading
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
