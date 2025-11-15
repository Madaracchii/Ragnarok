import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import weatherImg from "@/assets/project-weather.jpg";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: ecommerceImg,
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      stars: 127,
      forks: 43,
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag & drop functionality, and team collaboration features.",
      image: taskManagerImg,
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      stars: 89,
      forks: 31,
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Modern weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: weatherImg,
      tech: ["React Native", "TypeScript", "OpenWeather API", "Redux"],
      stars: 156,
      forks: 67,
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of my recent work and technical expertise across different
            domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card rounded-xl overflow-hidden neon-glow group hover:scale-105 transition-all duration-300 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                {/* Stats */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="flex items-center gap-1 bg-background/80 rounded-full px-2 py-1 text-xs">
                    <Star className="h-3 w-3 text-yellow-400" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-background/80 rounded-full px-2 py-1 text-xs">
                    <GitFork className="h-3 w-3 text-primary" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="glass" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="neon" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
