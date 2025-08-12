import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { MDXContent } from '@/components/mdx-content';
import { getBaseUrl } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

async function getProjectFromParams(params: ProjectPageProps['params']) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    null;
  }

  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      images: project.image ? [project.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: project.image ? [project.image] : [],
    },
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageProps['params'][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/projects" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12">
          {project.image && (
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mb-6 text-xl text-muted-foreground">
            {project.summary}
          </p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.website && (
              <Button asChild>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Visit Website</span>
                </a>
              </Button>
            )}
            {project.github && (
              <Button variant="outline" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </a>
              </Button>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXContent code={project.body.code} />
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Project by Fernando Torres
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out ${project.title} by @FernandoTN`)}&url=${encodeURIComponent(`${getBaseUrl()}/projects/${project.slugAsParams}`)}`}
                >
                  Share Project
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
