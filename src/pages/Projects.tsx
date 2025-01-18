import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const projects = [
  {
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform built with React",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my work",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Weather App",
    description: "A weather application with real-time updates",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg overflow-hidden border bg-card hover-scale"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Projects;