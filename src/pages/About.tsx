import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate web developer with a keen eye for design and a commitment to creating 
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Journey Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 border-t"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Bachelor of Computer Science</p>
                      <p className="text-muted-foreground">University of Technology</p>
                      <p className="text-sm text-muted-foreground">2018 - 2022</p>
                    </li>
                    <li>
                      <p className="font-medium">Web Development Certification</p>
                      <p className="text-muted-foreground">Tech Academy</p>
                      <p className="text-sm text-muted-foreground">2022</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Senior Web Developer</p>
                      <p className="text-muted-foreground">Tech Solutions Inc.</p>
                      <p className="text-sm text-muted-foreground">2022 - Present</p>
                    </li>
                    <li>
                      <p className="font-medium">Frontend Developer</p>
                      <p className="text-muted-foreground">Digital Agency</p>
                      <p className="text-sm text-muted-foreground">2020 - 2022</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Skills & Expertise Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 border-t"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript/TypeScript</li>
                    <li>React & Vue.js</li>
                    <li>Responsive Design</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Backend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>SQL & NoSQL</li>
                    <li>RESTful APIs</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Tools</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>Docker</li>
                    <li>AWS</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 border-t"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Personal Interests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Photography',
                'Travel',
                'Reading',
                'Music'
              ].map((interest) => (
                <Card key={interest} className="hover-scale">
                  <CardContent className="p-4">
                    <p className="font-medium">{interest}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16 border-t"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in collaborating or have a project in mind? I'd love to hear from you!
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

export default About;