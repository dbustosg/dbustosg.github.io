import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    institution: "IES Maestre de Calatrava",
    degree: "FPGS Multi-platform Application Development",
    period: "2020 - 2022",
    description: "General skills acquired: General proficiency in JAVA, C# and SQL. Basic proficiency in HTML5, CSS, JavaScript, C and Python. Experience with Android Studio, WPF Visual Studio, and Unity.",
    tags: ["Java", "C#", "SQL", "HTML5", "CSS", "JavaScript", "Unity"],
  },
  {
    institution: "Udemy Platform",
    degree: "Spring Boot Training",
    period: "February 2025",
    description: "Completed an in-depth course on building applications with Spring Boot.",
    tags: ["Spring Boot", "Java", "Backend"],
  },
  {
    institution: "Udemy Platform",
    degree: "Docker Training",
    period: "March 2025",
    description: "Hands-on training for containerizing applications using Docker.",
    tags: ["Docker", "DevOps", "Containers"],
  },
  {
    institution: "BIG SEO School",
    degree: "Development with AI",
    period: "October 2025",
    description: "Course focused on integrating Artificial Intelligence into application development.",
    tags: ["AI", "Machine Learning", "Python"],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="w-full animate-in fade-in-0 slide-in-from-bottom-12 duration-700 bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Academic Training</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My academic background and additional training.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {education.map((edu, index) => (
            <div key={index} className="group relative mb-8">
              <div className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background transition-transform group-hover:scale-125"></div>
              <Card className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} border-border/50 bg-card/80 shadow-lg backdrop-blur-sm transition-all hover:shadow-primary/20 hover:shadow-xl`}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="mt-1 sm:mt-0">{edu.period}</CardDescription>
                  </div>
                  <p className="font-semibold text-primary">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
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
