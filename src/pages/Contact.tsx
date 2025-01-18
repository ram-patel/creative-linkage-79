import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../components/ui/use-toast';
import Navigation from '../components/Navigation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
            Feel free to reach out using any of the methods below.
          </p>
        </motion.div>
      </section>

      {/* Contact Information Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="p-6 bg-card rounded-lg hover-scale">
            <MapPin className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">123 Web Dev Street, Digital City, 12345</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg hover-scale">
            <Phone className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg hover-scale">
            <Mail className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">contact@example.com</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg hover-scale">
            <Clock className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
            <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg hover-scale">
              <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
              <p className="text-muted-foreground">
                We offer a wide range of web development services including frontend development,
                backend development, and full-stack solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg hover-scale">
              <h3 className="text-lg font-semibold mb-2">What is your typical response time?</h3>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg hover-scale">
              <h3 className="text-lg font-semibold mb-2">Do you offer consultations?</h3>
              <p className="text-muted-foreground">
                Yes, we offer free initial consultations to discuss your project requirements
                and provide recommendations.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;