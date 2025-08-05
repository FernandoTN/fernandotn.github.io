import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Building the{' '}
                <span className="text-primary">Future</span>{' '}
                with AI
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                AI Engineer and entrepreneur passionate about creating 
                innovative solutions that shape tomorrow's technology landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/about" className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Startups Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Research Papers</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <Image
                  src="/images/fernando-torres-hero.jpg"
                  alt="Fernando Torres"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      </div>
    </section>
  );
}