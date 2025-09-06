import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cosmic Dashboard",
      description: "A comprehensive analytics dashboard with real-time data visualization and interactive charts. Built with React, D3.js, and modern design principles.",
      tech: ["React", "TypeScript", "D3.js", "Tailwind"],
      category: "Web Application",
      gradient: "gradient-cosmic"
    },
    {
      title: "Space Commerce",
      description: "Full-stack e-commerce platform with advanced filtering, payment integration, and responsive design. Optimized for performance and accessibility.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      category: "E-commerce",
      gradient: "gradient-arch"
    },
    {
      title: "Neural Interface",
      description: "Interactive data visualization tool for machine learning models. Features real-time updates, complex animations, and intuitive user experience.",
      tech: ["Vue.js", "Three.js", "WebGL", "Python"],
      category: "Data Visualization",
      gradient: "gradient-space"
    },
    {
      title: "Quantum Portfolio",
      description: "Personal portfolio website with advanced animations, 3D elements, and seamless user interactions. Showcases modern web development techniques.",
      tech: ["React", "Framer Motion", "GSAP", "WebGL"],
      category: "Portfolio",
      gradient: "gradient-cosmic"
    },
    {
      title: "Stellar CMS",
      description: "Content management system with drag-and-drop interface, real-time collaboration, and extensive customization options for content creators.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "CMS Platform",
      gradient: "gradient-arch"
    },
    {
      title: "Orbital Tracker",
      description: "Real-time satellite tracking application with 3D Earth visualization, orbital predictions, and detailed satellite information database.",
      tech: ["React", "Three.js", "NASA API", "WebGL"],
      category: "Data Application",
      gradient: "gradient-space"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="text-transparent bg-gradient-arch bg-clip-text">Projects</span>
          </h2>
          <p className="text-structure-primary text-lg max-w-2xl mx-auto">
            Exploring the intersection of creativity and technology through innovative digital solutions
          </p>
          <div className="w-24 h-1 bg-gradient-arch mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="space-card p-0 overflow-hidden hover-lift group"
            >
              {/* Project Header */}
              <div className={`h-32 bg-${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 arch-grid opacity-20" />
                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-space-deep/80 text-arch-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-arch-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-structure-primary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-space-light text-arch-secondary px-2 py-1 rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-arch text-space-deep hover:shadow-glow-arch transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-arch-primary text-arch-primary hover:bg-arch-primary hover:text-space-deep"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-structure-primary mb-6">
            Want to see more of my work?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-cosmic text-foreground hover:shadow-glow-cosmic transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;