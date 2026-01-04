import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 transition-colors">
            <span className="text-primary font-bold text-lg">U</span>
          </div>
          <span className="font-semibold text-foreground text-lg tracking-tight">
            Utsho<span className="text-primary">.</span>MH
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors border border-border"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors border border-border"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl p-4"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-sm font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm text-center hover:bg-primary/90 transition-colors"
              >
                Let's Talk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
