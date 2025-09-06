import { Button } from '@/components/ui/button';
import heroImage from '@/assets/space-hero-bg.jpg';

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 arch-grid opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Frontend
            <span className="block text-transparent bg-gradient-arch bg-clip-text">
              Architect
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-structure-primary mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with precision, innovation, and 
            architectural excellence in the cosmic web frontier.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollTo('projects')}
              size="lg"
              className="bg-gradient-cosmic text-foreground hover:shadow-glow-cosmic transition-all duration-300 arch-glow"
            >
              Explore My Work
            </Button>
            
            <Button 
              onClick={() => scrollTo('about')}
              variant="outline"
              size="lg"
              className="border-arch-primary text-arch-primary hover:bg-arch-primary hover:text-space-deep transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-arch-primary rounded-full animate-float" />
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-cosmic-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-10 w-1 h-1 bg-arch-secondary rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-arch-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-arch-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;