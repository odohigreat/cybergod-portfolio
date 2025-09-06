import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-transparent bg-gradient-arch bg-clip-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-arch mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="space-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-arch-primary">
                Frontend Architect
              </h3>
              <p className="text-structure-primary leading-relaxed">
                I design and build exceptional digital experiences that bridge the gap 
                between innovative design and robust functionality. With a passion for 
                clean code and user-centric interfaces, I transform complex problems 
                into elegant solutions.
              </p>
            </Card>
            
            <Card className="space-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-cosmic-primary">
                Code Craftsman
              </h3>
              <p className="text-structure-primary leading-relaxed">
                Specializing in modern web technologies, I create scalable applications 
                with attention to performance, accessibility, and maintainability. 
                Every line of code is written with purpose and precision.
              </p>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div className="space-card p-8 arch-lines">
              <h3 className="text-xl font-semibold mb-6 text-arch-secondary">
                Core Values
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Innovation", value: "95%" },
                  { label: "Precision", value: "98%" },
                  { label: "User Experience", value: "100%" },
                  { label: "Performance", value: "92%" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-structure-primary">
                      <span>{item.label}</span>
                      <span className="font-mono text-arch-primary">{item.value}</span>
                    </div>
                    <div className="w-full bg-space-light rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-arch rounded-full transition-all duration-1000"
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-structure-primary mb-4">
                "Building the future, one component at a time"
              </p>
              <div className="font-mono text-arch-primary">
                while(coding) &#123; innovate(); &#125;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;