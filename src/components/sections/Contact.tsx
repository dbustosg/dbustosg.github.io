'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import Link from 'next/link';

export default function ContactSection() {
  const [message, setMessage] = useState('');
  const email = 'danielbustosguzman@gmail.com';
  const mailtoLink = `mailto:${email}?body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="w-full animate-in fade-in-0 slide-in-from-bottom-12 duration-700 bg-card pb-28 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out.
          </p>
        
          <div className="mt-12 grid gap-12 md:grid-cols-2 text-left">
            <Card className="border-border/50 bg-background/80 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Send me a message directly.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <Button asChild className="w-full">
                    <Link href={mailtoLink}>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <h3 className="font-headline text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">You can also reach me through these channels.</p>
              <div className="space-y-4">
                <a href="mailto:danielbustosguzman@gmail.com" className="flex items-center gap-4 group">
                  <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-foreground group-hover:text-primary transition-colors">danielbustosguzman@gmail.com</span>
                </a>
                <a href="tel:+34627655831" className="flex items-center gap-4 group">
                  <Phone className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-foreground group-hover:text-primary transition-colors">+34 627 655 831</span>
                </a>
                <a href="https://www.linkedin.com/in/daniel-bustos-guzman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-foreground group-hover:text-primary transition-colors">linkedin.com/in/daniel-bustos-guzman</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
