import { Card } from "@/components/ui/card";
import {
  Code,
  Database,
  Cloud,
  Component,
  Server,
  Box,
  GitBranch,
  Laptop,
  ShipWheel,
  Type,
  Cable,
  Network,
  Workflow,
  BookCopy,
  BrainCircuit,
  MessageSquare,
} from "lucide-react";
import type { LucideIcon } from 'lucide-react';

type Skill = {
  name: string;
  icon: LucideIcon;
};

const technicalSkills: Skill[] = [
  { name: "Java", icon: Code },
  { name: "Spring Boot", icon: Server },
  { name: "Microservices", icon: Component },
  { name: "JPA", icon: Database },
  { name: "Hibernate", icon: Database },
  { name: "REST", icon: Cable },
  { name: "SOAP", icon: MessageSquare },
  { name: "WebSocket", icon: Network },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Docker", icon: Box },
  { name: "TypeScript", icon: Type },
  { name: "Angular", icon: Component },
  { name: "Middleware", icon: Workflow },
  { name: "UML", icon: GitBranch },
  { name: "Codex", icon: BookCopy },
  { name: "Amazon Q", icon: BrainCircuit },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full animate-in fade-in-0 slide-in-from-bottom-12 duration-700 bg-card py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Skills & Proficiencies</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A snapshot of the technologies I work with.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill) => (
               <Card key={skill.name} className="flex flex-col items-center justify-center gap-2 p-4 border-border/50 bg-background/50 shadow-lg transition-all hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-1">
                <skill.icon className="h-8 w-8 text-primary" />
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
