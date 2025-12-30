'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Wrench, Briefcase, GraduationCap, Mail, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import WelcomeNotification from './WelcomeNotification';

const navLinks = [
  { id: 'about', href: '#about', label: 'About', icon: User },
  { id: 'skills', href: '#skills', label: 'Skills', icon: Wrench },
  { id: 'tools', href: '#tools', label: 'Tools', icon: Settings },
  { id: 'experience', href: '#experience', label: 'Experience', icon: Briefcase },
  { id: 'education', href: '#education', label: 'Education', icon: GraduationCap },
  { id: 'contact', href: '#contact', label: 'Contact', icon: Mail },
];

export function Header() {
  const [activeLink, setActiveLink] = useState('');
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
    const homeSection = document.getElementById('home');
    
    const observer = new IntersectionObserver((entries) => {
      let activeSet = false;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
           if (entry.target.id === 'home') {
            setIsHome(true);
            setActiveLink(''); // No active link when on landing
            activeSet = true;
          } else {
            setIsHome(false);
            setActiveLink(entry.target.id);
            activeSet = true;
          }
        }
      });
       if (!activeSet && window.scrollY > 200 && entries.length > 0) {
        // If scrolling fast and observer misses an intersection, find the topmost visible section
        const topmostVisible = sections
          .map(s => ({ s, rect: s!.getBoundingClientRect() }))
          .filter(({ rect }) => rect.top < window.innerHeight && rect.bottom > 0)
          .sort((a, b) => a.rect.top - b.rect.top)[0];

        if (topmostVisible) {
          setActiveLink(topmostVisible.s!.id);
        } else {
           setIsHome(window.scrollY < window.innerHeight / 2);
           setActiveLink('');
        }
      }
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    const allSections = homeSection ? [...sections, homeSection] : sections;
    allSections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    // Initial check
    const homeRect = homeSection?.getBoundingClientRect();
    if(homeRect && homeRect.top >= 0 && homeRect.top < window.innerHeight / 2) {
      setIsHome(true);
      setActiveLink('');
    } else {
      setIsHome(false);
      const visibleSection = sections.find(section => {
        if(!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
      });
       if (visibleSection) {
        setActiveLink(visibleSection.id);
      }
    }


    return () => {
      allSections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <WelcomeNotification isHome={isHome} />
      <header
        className={cn(
          'fixed bottom-4 left-1/2 z-50 w-auto -translate-x-1/2 rounded-full border-border/60 bg-white/10 p-2 shadow-2xl backdrop-blur-lg'
        )}
      >
        <TooltipProvider>
          <nav className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Tooltip key={link.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      'flex h-10 items-center justify-center rounded-full transition-colors gap-2 px-3',
                      'md:w-auto',
                      'w-10',
                      activeLink === link.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5 shrink-0" />
                    <span className="hidden md:inline text-sm">{link.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="md:hidden">
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </TooltipProvider>
      </header>
    </>
  );
}
