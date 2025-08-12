import { allPosts, allProjects } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { Hero } from '@/components/hero';
import { FeaturedPosts } from '@/components/featured-posts';
import { FeaturedProjects } from '@/components/featured-projects';
import { Newsletter } from '@/components/newsletter';

export default function HomePage() {
  const posts = allPosts
    .filter((post) => post.featured)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    )
    .slice(0, 3);

  const projects = allProjects
    .filter((project) => project.featured)
    .sort((a, b) => b.order - a.order)
    .slice(0, 3);

  return (
    <>
      <Hero />
      <div className="container mx-auto space-y-24 px-4 py-16">
        {posts.length > 0 && (
          <section>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                ALM Research Insights
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Exploring Autonomous Language Models and their transformative
                potential
              </p>
            </div>
            <FeaturedPosts posts={posts} />
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Research Projects
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Investigating autonomous AI and its business applications
              </p>
            </div>
            <FeaturedProjects projects={projects} />
          </section>
        )}

        <Newsletter />
      </div>
    </>
  );
}
