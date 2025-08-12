import type { Metadata } from 'next';
import Image from 'next/image';
import { Download, ExternalLink } from 'lucide-react';
import { Timeline } from '@/components/timeline';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Fernando Torres - Stanford MSx researcher investigating Autonomous Language Models (ALMs) and healthcare executive turned tech-focused founder.',
};

const timelineEvents = [
  {
    year: '2025-2026',
    title: 'Stanford MSx Program',
    description:
      "Currently enrolled in Stanford Graduate School of Business's MSx program, conducting in-depth research on Autonomous Language Models (ALMs) using the Research Driven Inspiration (RDI) framework.",
    company: 'Stanford Graduate School of Business',
  },
  {
    year: '2024',
    title: 'Business Development Director',
    description:
      "Led global partnership deals and expansion across the Americas at one of Mexico's leading pharmaceutical companies, forging licensing agreements to bring innovative therapies into Latin American markets.",
    company: 'Chinoin Pharmaceuticals',
  },
  {
    year: '2023',
    title: 'Global Healthcare Partnerships',
    description:
      'Drove growth in highly regulated, tech-driven pharmaceutical markets, gaining first-hand insight into how emerging technologies impact healthcare on a global scale.',
    company: 'Chinoin Pharmaceuticals',
  },
  {
    year: '2022',
    title: 'Healthcare Technology Integration',
    description:
      'Led initiatives to integrate technology solutions in pharmaceutical operations and business development processes.',
    company: 'Healthcare Industry',
  },
  {
    year: '2021',
    title: 'Pharmaceutical Leadership',
    description:
      'Established expertise in pharmaceutical business development and regulatory environments across international markets.',
    company: 'Healthcare Sector',
  },
];

const achievements = [
  'Stanford Graduate School of Business MSx 2025-2026',
  'Autonomous Language Models (ALM) research focus',
  'Business Development Director at Chinoin Pharmaceuticals',
  'Global partnership deals across the Americas',
  'Research Driven Inspiration (RDI) methodology expertise',
  'Healthcare technology and AI thought leadership',
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
            Stanford MSx researcher investigating Autonomous Language Models and
            healthcare executive turned tech-focused founder exploring the
            future of AI-driven innovation.
          </p>
        </div>

        {/* Bio Section */}
        <div className="prose prose-lg mb-16 max-w-none dark:prose-invert">
          <p>
            I&apos;m Fernando Torres, a healthcare and tech-savvy executive
            turned researcher and aspiring founder. I&apos;m currently a member
            of Stanford Graduate School of Business&apos;s MSx class of
            2025–2026, a mid-career master&apos;s program for experienced
            leaders. As part of this program, I&apos;m conducting in-depth
            research on Autonomous Language Models (ALMs) using Stanford&apos;s
            Research Driven Inspiration (RDI) framework.
          </p>
          <p>
            RDI is a systematic, curiosity-driven approach to gain deep domain
            expertise and uncover hidden insights. It emphasizes primary
            research and pattern recognition to identify non-obvious
            opportunities, helping students develop forward-looking hypotheses
            about where an industry is headed in the next 2–3 years. My ALM
            project is an RDI endeavor, meaning it&apos;s not about confirming
            pre-set ideas but about discovering new angles and future
            opportunities in the AI landscape.
          </p>
          <p>
            Professionally, I have a strong background at the intersection of
            healthcare and business. I previously served as Business Development
            Director at Chinoin Pharmaceuticals, one of Mexico&apos;s leading
            pharma companies. In that role, I led global partnership deals and
            expansion across the Americas – forging licensing agreements to
            bring innovative therapies from abroad into Latin American markets.
            This experience honed my ability to drive growth in highly
            regulated, tech-driven industries and gave me first-hand insight
            into how emerging technologies can impact healthcare on a global
            scale.
          </p>
          <p>
            Now, as a tech-literate healthcare executive transitioning into a
            founder/operator role, I&apos;m leveraging my industry experience
            and Stanford training to explore cutting-edge technology
            opportunities. My current focus on ALMs positions me at the
            forefront of AI-driven innovation. The combination of a healthcare
            background, business development expertise, and new research into
            advanced AI systems provides me with a unique lens – I understand
            both the practical realities of implementing technology in business
            and the transformative potential of new AI advancements.
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
