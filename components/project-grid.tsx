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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="group relative rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-200"
        >
          {/* Project Image */}
          {project.image && (
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          )}

          <div className="p-6 space-y-4">
            {/* Title */}
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              <Link href={project.slug} className="stretched-link">
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
            <div className="flex items-center space-x-2 relative z-10">
              {project.website && (
                <Button size="sm" variant="outline" asChild>
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
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
                    <Github className="w-4 h-4" />
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