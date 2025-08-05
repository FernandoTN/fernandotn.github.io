import type { Metadata } from 'next';
import Image from 'next/image';
import { Download, ExternalLink } from 'lucide-react';
import { Timeline } from '@/components/timeline';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Fernando Torres - AI Engineer, entrepreneur, and tech innovator with a passion for building the future.',
};

const timelineEvents = [
  {
    year: '2024',
    title: 'AI Startup Co-founder',
    description: 'Co-founded an AI-powered healthcare startup focused on revolutionizing patient care through machine learning.',
    company: 'HealthAI Solutions',
  },
  {
    year: '2023',
    title: 'Senior AI Engineer',
    description: 'Led the development of large-scale ML systems serving millions of users daily.',
    company: 'Tech Corp',
  },
  {
    year: '2022',
    title: 'Hemoderivatives Plant Director',
    description: 'Managed operations of a state-of-the-art blood derivatives manufacturing facility.',
    company: 'BioPharm Industries',
  },
  {
    year: '2021',
    title: 'ML Research Scientist',
    description: 'Conducted cutting-edge research in natural language processing and computer vision.',
    company: 'Research Lab',
  },
  {
    year: '2020',
    title: 'Software Engineering Lead',
    description: 'Built and scaled engineering teams while architecting distributed systems.',
    company: 'StartupCo',
  },
];

const achievements = [
  '10+ years in software engineering and AI',
  'Co-founded 2 successful startups',
  'Published 15+ research papers',
  'Speaker at major tech conferences',
  'Mentor to 50+ aspiring engineers',
  'Open source contributor',
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
            <Image
              src="/images/fernando-torres.jpg"
              alt="Fernando Torres"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI Engineer, entrepreneur, and tech innovator with a passion for building 
            the future through artificial intelligence and cutting-edge technology.
          </p>
        </div>

        {/* Bio Section */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <p>
            I'm Fernando Torres, an AI Engineer and entrepreneur who has spent over a decade 
            at the intersection of technology and innovation. My journey has taken me from 
            managing complex manufacturing operations to co-founding AI startups that are 
            reshaping entire industries.
          </p>
          <p>
            My unique background spans both the technical and business sides of technology. 
            I've led engineering teams, conducted cutting-edge AI research, and built 
            products that serve millions of users. This diverse experience has given me 
            a holistic understanding of how to translate complex technical concepts into 
            real-world solutions that create value.
          </p>
          <p>
            Currently, I'm focused on the exciting frontiers of artificial intelligence, 
            particularly in areas like large language models, autonomous agents, and 
            AI-powered healthcare solutions. I believe we're at an inflection point in 
            technology, and I'm passionate about helping shape that future.
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Professional Journey</h2>
          <Timeline events={timelineEvents} />
        </div>

        {/* CV Download */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Want to Learn More?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <ExternalLink className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}