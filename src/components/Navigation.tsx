import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-arch' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold font-mono text-arch-primary">
            &lt;/DEV&gt;
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollTo('about')}
              className="text-structure-primary hover:text-arch-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollTo('skills')}
              className="text-structure-primary hover:text-arch-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollTo('projects')}
              className="text-structure-primary hover:text-arch-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="text-structure-primary hover:text-arch-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollTo('contact')} 
            className="bg-gradient-arch text-space-deep hover:shadow-glow-arch transition-all duration-300"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;