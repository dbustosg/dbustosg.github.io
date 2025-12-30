export default function LandingSection() {
  const text = "Your search ends here.";

  return (
    <section id="home" className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute h-full w-full bg-gradient-to-r from-primary/30 via-background to-background" />
        <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="text-center z-10">
        <h1
          className="font-headline text-5xl font-bold text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          aria-label={text}
        >
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block animate-float transition-all duration-300 ease-in-out hover:text-primary hover:scale-110"
              style={{ animationDelay: `${index * 0.05}s`, animationIterationCount: 'infinite' }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
