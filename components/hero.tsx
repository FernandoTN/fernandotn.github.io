import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Building the <span className="text-primary">Future</span> with
                AI
              </h1>
              <p className="max-w-lg text-xl text-muted-foreground">
                Healthcare and technology professional, Stanford MSx student,
                and entrepreneur passionate about building innovative AI
                solutions that transform industries.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/about" className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="/fernando-torres-cv.pdf"
                  download
                  className="flex items-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">
                  Startups Founded
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Research Papers
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                <Image
                  src="/images/fernando-torres-hero.jpg"
                  alt="Fernando Torres"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 backdrop-blur-sm">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm">
                <span className="text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      </div>
    </section>
  );
}
