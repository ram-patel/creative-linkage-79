import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm a web developer passionate about creating beautiful and functional websites.
            Explore my projects and get in touch!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg border bg-card hover-scale">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Creating responsive and modern web applications using the latest technologies.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card hover-scale">
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Designing intuitive and beautiful user interfaces that enhance user experience.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;