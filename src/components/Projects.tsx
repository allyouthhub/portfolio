
import React, { useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment processing.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A clean and modern portfolio website built with React and TailwindCSS.",
    image: "/placeholder.svg",
    tags: ["React", "TailwindCSS", "Vite"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A drag-and-drop task management application with real-time updates and collaboration features.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "React", "Firebase", "Redux"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "API", "CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A blog platform with content management system and user authentication.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Tailwind", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Recipe App",
    description: "A recipe application with search, filtering, and user-generated content.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));
    
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-padding">
        <div className="mb-12 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Check out some of my recent projects. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden card-hover reveal"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-lg">Project Image</span>
                </div>
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
