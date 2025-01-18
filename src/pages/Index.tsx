import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "Working with this developer was an amazing experience. The attention to detail and technical expertise exceeded our expectations.",
    author: "John Smith",
    position: "CTO, TechCorp"
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "The solutions provided were innovative and perfectly tailored to our needs. Highly recommended!",
    author: "Sarah Johnson",
    position: "Product Manager, InnovateLabs"
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "Outstanding work on our project. The results speak for themselves - professional, modern, and user-friendly.",
    author: "Michael Chen",
    position: "Founder, DigitalWave"
  }
];

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

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 border-t"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 shadow-none">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <div className="w-24 h-24 mb-6 overflow-hidden rounded-full">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <blockquote className="text-lg italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </motion.section>

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
