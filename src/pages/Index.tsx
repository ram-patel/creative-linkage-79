import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '../components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
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
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
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

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 border-t"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over 5 years of experience in web development, I specialize in creating
              modern, responsive websites that deliver exceptional user experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardContent className="pt-6">
                  <h4 className="text-2xl font-bold mb-2">50+</h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="pt-6">
                  <h4 className="text-2xl font-bold mb-2">30+</h4>
                  <p className="text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="pt-6">
                  <h4 className="text-2xl font-bold mb-2">5+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 border-t"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Git', 'Responsive Design'].map((skill) => (
                <Card key={skill} className="hover-scale">
                  <CardContent className="p-4 text-center">
                    <p className="font-medium">{skill}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 border-t"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start a Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's work together to bring your ideas to life!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Index;