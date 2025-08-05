import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from 'contentlayer/generated';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="group relative overflow-hidden rounded-lg border transition-all duration-200 hover:shadow-lg"
        >
          {/* Project Image */}
          {project.image && (
            <div className="bg-muted relative aspect-video overflow-hidden">
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
            <p className="text-muted-foreground leading-relaxed">
              {project.summary}
            </p>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="relative z-10 flex items-center space-x-2">
              {project.website && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Visit</span>
                  </a>
                </Button>
              )}
              {project.github && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
