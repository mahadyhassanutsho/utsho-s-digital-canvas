import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const techStack = [
    'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 
    'Redux', 'Tailwind CSS', 'Prisma', 'TypeScript'
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for work</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Utsho MH</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Full Stack Developer
          </p>

          {/* Description */}
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            I craft modern web experiences with the MERN stack and Next.js. 
            Passionate about building scalable applications with cutting-edge technologies.
          </p>

          {/* Tech Stack */}
          <div 
            className="flex flex-wrap justify-center gap-2 mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-md border border-border hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                style={{ animationDelay: `${0.5 + index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-secondary/50 text-foreground rounded-xl font-semibold border border-border hover:bg-secondary transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors border border-border hover:border-primary/50 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors border border-border hover:border-primary/50 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors border border-border hover:border-primary/50 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.9s' }}
        >
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
