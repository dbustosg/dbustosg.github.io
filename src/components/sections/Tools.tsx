'use client';

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Terminal, Database, Cloud, Code, Settings, Wind, Bot, TestTubeDiagonal, Server, Cog, Box } from "lucide-react";

const tools = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    name: "VSCode",
    description: "Primary code editor.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    name: "AI Dev Tools",
    description: "Working with AI Agents.",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    name: "Spring Framework",
    description: "For building Java apps.",
  },
  {
    icon: <Cog className="h-10 w-10 text-primary" />,
    name: "Maven",
    description: "Build automation for Java.",
  },
  {
    icon: <Cog className="h-10 w-10 text-primary" />,
    name: "Gradle",
    description: "Build automation.",
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    name: "Azure Cloud",
    description: "Cloud services.",
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    name: "AWS Cloud",
    description: "Cloud services.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    name: "pgAdmin",
    description: "PostgreSQL management.",
  },
  {
    icon: <Box className="h-10 w-10 text-primary" />,
    name: "Docker",
    description: "Containerization.",
  },
  {
    icon: <TestTubeDiagonal className="h-10 w-10 text-primary" />,
    name: "Postman & SOAP UI",
    description: "API testing.",
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    name: "Git",
    description: "GitLab, BitBucket, GitHub.",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    name: "Atlassian Suite",
    description: "Jira, Confluence, etc.",
  },
  {
    icon: <Terminal className="h-10 w-10 text-primary" />,
    name: "Notion",
    description: "Workspace for notes.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    name: "SonarQube",
    description: "Static code analysis.",
  },
  {
    icon: <Box className="h-10 w-10 text-primary" />,
    name: "VirtualBox",
    description: "Virtualization software.",
  },
];

const duplicatedTools = [...tools, ...tools];

export default function ToolsSection() {
  return (
    <section id="tools" className="w-full animate-in fade-in-0 slide-in-from-bottom-12 duration-700 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Favorite Tools</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The tools and technologies I use daily to bring ideas to life.
          </p>
        </div>
      </div>
      <div className="relative mt-12 w-full group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          {duplicatedTools.map((tool, index) => (
            <div key={index} className="px-4" style={{ flexShrink: 0 }}>
              <Card className="h-full w-[250px] border-border/50 bg-background/80 shadow-lg transition-all hover:shadow-primary/20 hover:shadow-xl">
                <CardHeader className="flex flex-col items-center justify-center text-center gap-4">
                  {tool.icon}
                  <CardTitle className="font-headline text-xl">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>{tool.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-background to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  );
}
