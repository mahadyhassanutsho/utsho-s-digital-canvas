import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const techStack = [
    'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 
    'Redux', 'Tailwind CSS', 'Prisma', 'TypeScript'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for work</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Utsho MH</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-6"
          >
            Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I craft modern web experiences with the MERN stack and Next.js. 
            Passionate about building scalable applications with cutting-edge technologies.
          </motion.p>

          {/* Tech Stack */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1, borderColor: 'hsl(var(--primary))' }}
                className="px-3 py-1.5 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-md border border-border hover:text-foreground transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-secondary/50 text-foreground rounded-xl font-semibold border border-border"
              whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--secondary))' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center border border-border group"
                aria-label={social.label}
                whileHover={{ scale: 1.1, borderColor: 'hsl(var(--primary)/0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            whileHover={{ y: -3 }}
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
