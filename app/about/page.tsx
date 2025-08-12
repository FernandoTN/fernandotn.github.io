import type { Metadata } from 'next';
import Image from 'next/image';
import { Download, ExternalLink } from 'lucide-react';
import { Timeline } from '@/components/timeline';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Fernando Torres Navarrete - Healthcare and technology professional, Stanford MSx student, and entrepreneur passionate about innovation.',
};

const timelineEvents = [
  {
    year: '2025',
    title: 'Stanford MSx Student',
    description:
      'Enrolled in the prestigious MSx program at Stanford Graduate School of Business, focusing on leadership and strategic management.',
    company: 'Stanford University',
  },
  {
    year: '2024',
    title: 'Healthcare Professional',
    description:
      'Working in pharmaceutical industry, driving innovation in healthcare solutions and business development.',
    company: 'CHINOIN Productos Farmacéuticos S.A. de C.V.',
  },
  {
    year: '2023',
    title: 'Volunteer Leadership',
    description:
      'Active volunteer work in health sector and poverty alleviation, contributing to social impact initiatives.',
    company: 'Produciendo Compromisos, A.C. & Construyendo',
  },
  {
    year: '2022',
    title: 'Hemoderivatives Plant Director',
    description:
      'Managed operations of a state-of-the-art blood derivatives manufacturing facility.',
    company: 'Healthcare Industry',
  },
  {
    year: '2021',
    title: 'Healthcare Innovation',
    description:
      'Led development of innovative healthcare solutions combining technology and pharmaceutical expertise.',
    company: 'Healthcare Sector',
  },
];

const achievements = [
  'Stanford MSx student (2025-2026)',
  'Healthcare and pharmaceutical industry leader',
  '15K+ LinkedIn followers',
  'Active volunteer in health and social sectors',
  'International experience across multiple industries',
  'Expertise in healthcare innovation and technology',
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="relative mx-auto mb-8 h-48 w-48 overflow-hidden rounded-full">
            <Image
              src="/images/fernando-torres.jpg"
              alt="Fernando Torres"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Healthcare and technology professional, Stanford MSx student, and
            entrepreneur with a passion for building innovative AI solutions
            that transform industries.
          </p>
        </div>

        {/* Bio Section */}
        <div className="prose prose-lg mb-16 max-w-none dark:prose-invert">
          <p>
            I&apos;m Fernando Torres Navarrete, an accomplished healthcare and
            technology professional currently pursuing my MSx degree at Stanford
            University Graduate School of Business (2025-2026). My career spans
            the intersection of healthcare, technology, and business innovation,
            with a focus on creating solutions that make a meaningful impact.
          </p>
          <p>
            Currently working at CHINOIN Productos Farmacéuticos S.A. de C.V., I
            bring extensive experience in the pharmaceutical and healthcare
            sectors. My journey has taken me from managing complex operations to
            developing cutting-edge AI solutions that are transforming how we
            approach healthcare challenges.
          </p>
          <p>
            Beyond my professional work, I&apos;m deeply committed to social
            impact through volunteer work with organizations like Produciendo
            Compromisos, A.C. in the health sector and Construyendo in poverty
            alleviation. I believe in using technology and business acumen to
            create positive change in the world.
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Achievements
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <Timeline events={timelineEvents} />
        </div>

        {/* CV Download */}
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Want to Learn More?
          </h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a
                href="/fernando-torres-cv.pdf"
                download
                className="flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/fernandotn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <ExternalLink className="h-5 w-5" />
                <span>LinkedIn Profile</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
