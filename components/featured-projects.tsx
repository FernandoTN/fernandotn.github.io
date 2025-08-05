import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from 'contentlayer/generated';

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group relative overflow-hidden rounded-lg border transition-all duration-200 hover:shadow-lg"
          >
            {/* Project Image */}
            {project.image && (
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            )}

            <div className="space-y-4 p-6">
              {/* Title */}
              <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                <Link
                  href={`/projects/${project.slugAsParams}`}
                  className="stretched-link"
                >
                  {project.title}
                </Link>
              </h3>

              {/* Summary */}
              <p className="text-muted-foreground line-clamp-3">
                {project.summary}
              </p>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              )}

              {/* Links */}
              <div className="relative z-10 flex items-center space-x-2">
                {project.website && (
                  <Button size="sm" variant="ghost" asChild>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button size="sm" variant="ghost" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/projects" className="flex items-center space-x-2">
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
