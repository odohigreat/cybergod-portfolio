import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { LuLinkedin } from "react-icons/lu";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-0 md:px-6 bg-space-medium/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-transparent bg-gradient-cosmic bg-clip-text">Touch</span>
          </h2>
          <p className="text-structure-primary text-lg max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's collaborate and create something extraordinary together.
          </p>
          <div className="w-24 h-1 bg-gradient-cosmic mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="space-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-arch-primary">
                Let's Connect
              </h3>
              <p className="text-structure-primary mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                and potential collaborations. Whether you have a specific project in mind 
                or just want to explore possibilities, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-space-deep" />
                  </div>
                  <div>
                    <div className="text-structure-primary">Email</div>
                    <div className="text-arch-primary font-medium">odohigreat@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-arch rounded-lg flex items-center justify-center">
                    <LuLinkedin className="w-5 h-5 text-space-deep" />
                  </div>
                  <div>
                    <div className="text-structure-primary">Linked-In</div>
                    <a href='https://www.linkedin.com/in/odohi-great/' className="text-arch-primary font-medium hover:underline cursor-pointer">@odohi-great</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-structure-primary">Phone</div>
                    <div className="text-cosmic-primary font-medium">+234 805 183 0076</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-space rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-arch-primary" />
                  </div>
                  <div>
                    <div className="text-structure-primary">Location</div>
                    <div className="text-arch-secondary font-medium">Lagos, Nigeria</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="space-card p-8">
              <h4 className="text-lg font-semibold mb-4 text-cosmic-primary">
                Response Time
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-structure-primary">Initial Response</span>
                  <span className="text-arch-primary font-mono">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-structure-primary">Project Quote</span>
                  <span className="text-arch-primary font-mono">&lt; 72 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-structure-primary">Availability</span>
                  <span className="text-cosmic-primary font-mono">Open</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="space-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-arch-primary">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-structure-primary text-sm mb-2 block">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-space-light border-space-light focus:border-arch-primary"
                    required
                  />
                </div>
                <div>
                  <label className="text-structure-primary text-sm mb-2 block">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-space-light border-space-light focus:border-arch-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-structure-primary text-sm mb-2 block">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration Opportunity"
                  className="bg-space-light border-space-light focus:border-arch-primary"
                  required
                />
              </div>

              <div>
                <label className="text-structure-primary text-sm mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                  rows={6}
                  className="bg-space-light border-space-light focus:border-arch-primary resize-none"
                  required
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-cosmic text-foreground hover:shadow-glow-cosmic transition-all duration-300"
              >
                Send
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;