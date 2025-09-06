import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-space-deep border-t border-space-light">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold font-mono text-arch-primary mb-4">
              &lt;/DEV&gt;
            </div>
            <p className="text-structure-primary leading-relaxed">
              Frontend Architect crafting exceptional digital experiences 
              with modern technologies and architectural precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-structure-primary hover:text-arch-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Mail, label: 'Email', href: 'mailto:hello@frontend-architect.dev' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-space-light hover:bg-gradient-arch rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow-arch group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-structure-primary group-hover:text-space-deep transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-space-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-structure-muted text-sm">
              © {currentYear} Frontend Architect. All rights reserved.
            </div>
            <div className="text-structure-muted text-sm font-mono">
              Made with 💜 and cosmic energy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;