import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="gradient-text">ALEX CHEN</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Innovation. Code. Impact.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack developer passionate about creating cutting-edge digital
            experiences with modern technologies and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              View My Projects
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button variant="glass" size="lg">
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="#"
              className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 neon-glow"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a
              href="#"
              className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 neon-glow"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="#"
              className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 neon-glow"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
