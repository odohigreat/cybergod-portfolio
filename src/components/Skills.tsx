import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      color: "arch-primary",
      skills: [
        { name: "React", level: "Expert", icon: "⚛️" },
        { name: "TypeScript", level: "Expert", icon: "📘" },
        { name: "Next.js", level: "Advanced", icon: "▲" },
        { name: "Vue.js", level: "Advanced", icon: "🔷" },
        { name: "Tailwind CSS", level: "Expert", icon: "🎨" },
        { name: "SCSS/Sass", level: "Expert", icon: "💄" }
      ]
    },
    {
      title: "Development Tools",
      color: "cosmic-primary",
      skills: [
        { name: "Git/GitHub", level: "Expert", icon: "🔧" },
        { name: "Webpack/Vite", level: "Advanced", icon: "📦" },
        { name: "Docker", level: "Intermediate", icon: "🐳" },
        { name: "Jest/Testing", level: "Advanced", icon: "🧪" },
        { name: "ESLint/Prettier", level: "Expert", icon: "✨" },
        { name: "CI/CD", level: "Advanced", icon: "🚀" }
      ]
    },
    {
      title: "Design & UX",
      color: "arch-secondary",
      skills: [
        { name: "Figma", level: "Advanced", icon: "🎯" },
        { name: "Adobe XD", level: "Intermediate", icon: "🎨" },
        { name: "Responsive Design", level: "Expert", icon: "📱" },
        { name: "Accessibility", level: "Advanced", icon: "♿" },
        { name: "Performance", level: "Expert", icon: "⚡" },
        { name: "Animation", level: "Advanced", icon: "🎭" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "text-arch-primary";
      case "Advanced": return "text-cosmic-primary";
      case "Intermediate": return "text-arch-secondary";
      default: return "text-structure-muted";
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-space-medium/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical <span className="text-transparent bg-gradient-cosmic bg-clip-text">Arsenal</span>
          </h2>
          <p className="text-structure-primary text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-cosmic mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="space-card p-8 hover-lift">
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-semibold mb-2 text-${category.color}`}>
                  {category.title}
                </h3>
                <div className={`w-16 h-1 bg-${category.color} mx-auto`} />
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-space-light/50 hover:bg-space-light transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-structure-primary font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`text-sm font-mono ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-card p-6">
              <div className="text-3xl font-bold text-arch-primary mb-2">5+</div>
              <div className="text-structure-primary">Years Experience</div>
            </div>
            <div className="space-card p-6">
              <div className="text-3xl font-bold text-cosmic-primary mb-2">50+</div>
              <div className="text-structure-primary">Projects Completed</div>
            </div>
            <div className="space-card p-6">
              <div className="text-3xl font-bold text-arch-secondary mb-2">100%</div>
              <div className="text-structure-primary">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;