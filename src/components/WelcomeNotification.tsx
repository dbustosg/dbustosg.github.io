'use client';

import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type WelcomeNotificationProps = {
  isHome: boolean;
};

export default function WelcomeNotification({ isHome }: WelcomeNotificationProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const profileImage = PlaceHolderImages.find(p => p.id === 'daniel-bustos-profile');

  useEffect(() => {
    if (isHome) {
      // When user returns to home section, allow notification to show again
      setIsDismissed(false);
    }
  }, [isHome]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };
  
  // Component is visible only if on home and not dismissed
  const isVisible = isHome && !isDismissed;

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 w-80 max-w-[calc(100vw-2rem)] opacity-0 animate-slide-in">
      <div className="relative rounded-xl border border-border/60 bg-white/10 p-4 shadow-2xl backdrop-blur-lg animate-subtle-pulse">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
        >
          <X size={18} />
          <span className="sr-only">Close</span>
        </button>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-primary">
            {profileImage && (
              <AvatarImage src={profileImage.imageUrl} alt="Daniel Bustos" />
            )}
            <AvatarFallback>DB</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">Hi, I’m Dani.</p>
            <p className="text-sm text-muted-foreground">
              This isn’t what you expected. It’s better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
