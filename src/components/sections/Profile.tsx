import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Linkedin, Download, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function ProfileSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'daniel-bustos-profile');

  return (
    <section id="about" className="container mx-auto px-4 md:px-6 animate-in fade-in-0 slide-in-from-bottom-12 duration-700 py-12 md:py-20">
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center max-w-2xl">
          <Avatar className="h-32 w-32 mb-6 border-4 border-primary/20 shadow-lg">
            {profileImage && (
              <AvatarImage
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
              />
            )}
            <AvatarFallback>DB</AvatarFallback>
          </Avatar>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Daniel Bustos
          </h1>
          <p className="mt-2 text-lg font-medium text-primary">
            Software Engineer
          </p>
          <p className="mt-4 max-w-lg text-muted-foreground">
            I’m a software engineer who looks beyond the code.
          </p>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Alongside designing and developing scalable systems, I focus on understanding context, requirements, and impact — ensuring technical solutions are aligned with business objectives and delivered effectively.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="#contact">Get in Touch <Mail className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/CV_DANIEL BUSTOS GUZMÁN.pdf" download="Daniel_Bustos_Resume.pdf">
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/daniel-bustos-guzman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
