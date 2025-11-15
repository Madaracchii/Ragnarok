import { Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-gradient-hero py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold gradient-text">Alex Chen</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Alex Chen</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-primary/10">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="#home"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
