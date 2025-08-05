import type { Metadata } from 'next';
import { allProjects } from 'contentlayer/generated';
import { ProjectGrid } from '@/components/project-grid';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my work in AI, machine learning, and innovative technology solutions.',
};

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) => b.order - a.order);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, machine learning, and innovative 
            technology solutions that are shaping the future.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found. Check back soon for updates!
            </p>
          </div>
        ) : (
          <ProjectGrid projects={projects} />
        )}

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            and potential collaborations in the AI and technology space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get in Touch
            </a>
            <a 
              href="https://github.com/fernandotorres" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}