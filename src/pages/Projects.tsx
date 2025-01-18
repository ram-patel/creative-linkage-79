import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform built with React",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React", "TypeScript", "Tailwind"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my work",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["Next.js", "React", "Tailwind"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather App",
    description: "A weather application with real-time updates",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React", "API", "CSS"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
];

const featuredProjects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "An advanced analytics platform leveraging artificial intelligence for data insights",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["AI/ML", "Python", "React"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my expertise in web development, 
            design, and problem-solving abilities.
          </p>
        </motion.div>
      </section>

      {/* Featured Project Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-8">Featured Project</h2>
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-scale">
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <Button variant="outline" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* All Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover-scale">
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-4">
                    <Button variant="outline" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-accent/50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Interested in collaborating?</h2>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Button asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
