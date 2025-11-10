import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-8 w-8" />,
      color: "text-neon-blue",
      techs: [
        { name: "React", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Vue.js", icon: "vuejs" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "SASS", icon: "sass" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8" />,
      color: "text-neon-cyan",
      techs: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Python", icon: "python" },
        { name: "Express", icon: "express" },
        { name: "Django", icon: "django" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-8 w-8" />,
      color: "text-neon-purple",
      techs: [
        { name: "React Native", icon: "react" },
        { name: "Flutter", icon: "flutter" },
        { name: "iOS", icon: "apple" },
        { name: "Android", icon: "android" },
        { name: "Swift", icon: "swift" },
        { name: "Kotlin", icon: "kotlin" },
      ],
    },
    {
      title: "Tools",
      icon: <Code className="h-8 w-8" />,
      color: "text-tech-green",
      techs: [
        { name: "Git", icon: "git" },
        { name: "Docker", icon: "docker" },
        { name: "AWS", icon: "amazonwebservices" },
        { name: "Firebase", icon: "firebase" },
        { name: "Figma", icon: "figma" },
        { name: "VS Code", icon: "vscode" },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8" />,
      color: "text-primary",
      techs: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Redis", icon: "redis" },
        { name: "MySQL", icon: "mysql" },
        { name: "Supabase", icon: "supabase" },
        { name: "Firebase", icon: "firebase" },
      ],
    },
    {
      title: "Design",
      icon: <Palette className="h-8 w-8" />,
      color: "text-accent",
      techs: [
        { name: "Figma", icon: "figma" },
        { name: "Adobe XD", icon: "xd" },
        { name: "Photoshop", icon: "photoshop" },
        { name: "Illustrator", icon: "illustrator" },
        { name: "Sketch", icon: "sketch" },
        { name: "Framer", icon: "framer" },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
            across the full stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-xl neon-glow group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color}`}>{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-secondary/50 rounded-lg px-3 py-2 text-sm border border-primary/10 hover:border-primary/30 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-4 h-4"
                      onError={(e) => {
                        e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-plain.svg`;
                      }}
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
