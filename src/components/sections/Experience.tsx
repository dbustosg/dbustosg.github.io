import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
    role: "Full Stack Developer",
    company: "NTT DATA",
    period: "May 2022 - Nov 2023",
    description: "Started as an Intern (May 2022 - Dec 2022) and grew into a developer role. Contributed to projects for clients like Heineken, working on both front-end (Angular) and back-end (Spring Boot) development.",
    tags: ["Angular", "TypeScript", "Redux", "NgRx", "ESLint", "Spring Boot", "Microservices", "PostgreSQL", "IntelliJ"],
    clients: ["Heineken"],
    subRoles: [
      {
        role: "Intern",
        period: "May 2022 - Dec 2022",
      },
      {
        role: "Full Stack Developer",
        period: "Dec 2022 - Nov 2023",
      }
    ]
  },
  {
    role: "Java Developer",
    company: "Icalia Solutions",
    period: "Nov 2023 - Present",
    description: "Development and maintenance of applications for clients such as Santalucia, Albia, Aguas de Barcelona, and The Source Tagging Company. Working with a variety of technologies including cloud services and enterprise Java frameworks.",
    tags: ["Azure", "AWS", "Spring Framework", "Microservices", "JPA", "Hibernate", "REST", "SOAP", "WebSocket", "Middleware"],
    clients: ["Santalucia", "Albia", "Aguas de Barcelona", "The Source Tagging Company"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full animate-in fade-in-0 slide-in-from-bottom-12 duration-700 bg-card py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My journey in the world of software engineering.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="group relative mb-8">
              <div className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background transition-transform group-hover:scale-125"></div>
              <Card className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} border-border/50 bg-background/80 shadow-lg backdrop-blur-sm transition-all hover:shadow-primary/20 hover:shadow-xl`}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                    <CardDescription className="mt-1 sm:mt-0">{exp.period}</CardDescription>
                  </div>
                  <p className="font-semibold text-primary">{exp.company}</p>
                  {exp.subRoles && (
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {exp.subRoles.map(subRole => (
                        <div key={subRole.role} className="flex justify-between items-center">
                          <span>{subRole.role}</span>
                          <span className="text-xs">{subRole.period}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                  {exp.clients && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Key Clients:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.clients.map((client) => (
                          <Badge key={client} variant="secondary">
                            {client}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                              </Badge>
                          ))}
                      </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
