import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted technical interviews",
        "Collaborated with product team to define technical requirements",
      ],
      tech: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    },
    {
      position: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      type: "Full-time",
      description: [
        "Built responsive web applications from concept to deployment",
        "Developed RESTful APIs and integrated third-party services",
        "Optimized application performance improving load times by 40%",
        "Worked in agile environment with cross-functional teams",
      ],
      tech: ["Vue.js", "Express", "MongoDB", "Firebase", "Stripe API"],
    },
    {
      position: "Frontend Developer",
      company: "WebAgency Pro",
      location: "Los Angeles, CA",
      period: "2019 - 2020",
      type: "Full-time",
      description: [
        "Created pixel-perfect responsive websites for 20+ clients",
        "Collaborated with designers to implement complex UI/UX designs",
        "Maintained and updated existing client websites",
        "Ensured cross-browser compatibility and accessibility standards",
      ],
      tech: ["React", "SASS", "JavaScript", "WordPress", "Figma"],
    },
    {
      position: "Junior Developer",
      company: "Code Academy",
      location: "San Diego, CA",
      period: "2018 - 2019",
      type: "Part-time",
      description: [
        "Assisted in developing educational web applications",
        "Fixed bugs and implemented minor feature enhancements",
        "Participated in code reviews and learned best practices",
        "Contributed to open-source projects and documentation",
      ],
      tech: ["HTML", "CSS", "JavaScript", "React", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made at each step
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                {/* Content */}
                <div className="ml-20 glass-card p-6 rounded-xl neon-glow w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="mt-2 lg:mt-0 lg:text-right">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 text-muted-foreground">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
