import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Coffee } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      year: "2020-2022",
      gpa: "3.9/4.0",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "Bachelor of Software Engineering",
      school: "UC Berkeley",
      year: "2016-2020",
      gpa: "3.8/4.0",
      icon: <BookOpen className="h-6 w-6" />,
    },
  ];

  const achievements = [
    {
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      year: "2023",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Google Cloud Professional Developer",
      organization: "Google Cloud",
      year: "2022",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Meta Front-End Developer Certificate",
      organization: "Meta (Facebook)",
      year: "2021",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const interests = [
    "AI & Machine Learning",
    "Open Source Contribution",
    "Tech Blogging",
    "Photography",
    "Coffee Brewing",
    "Hiking",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a mission to create meaningful digital
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of
                experience in creating innovative digital solutions. My journey
                began with a curiosity about how things work, which led me to
                pursue computer science and eventually specialize in modern web
                technologies.
              </p>
              <p>
                I believe in the power of clean code, user-centered design, and
                continuous learning. When I'm not coding, you'll find me
                contributing to open-source projects, writing technical blogs,
                or exploring the latest developments in AI and machine learning.
              </p>
              <p>
                My goal is to bridge the gap between complex technical solutions
                and intuitive user experiences, creating applications that not
                only work flawlessly but also delight users.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="glass-card p-6 text-center neon-glow">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="glass-card p-6 text-center neon-glow">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="glass-card p-6 text-center neon-glow">
              <div className="text-3xl font-bold text-neon-purple mb-2">
                15+
              </div>
              <div className="text-muted-foreground">Technologies</div>
            </Card>
            <Card className="glass-card p-6 text-center neon-glow">
              <div className="text-3xl font-bold text-tech-green mb-2">
                100%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </Card>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl neon-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground">{edu.school}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">
                          {edu.year}
                        </span>
                        <span className="text-sm font-medium text-primary">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Certifications
            </h3>
            <div className="space-y-6">
              {achievements.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl neon-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-accent mt-1">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {cert.organization}
                      </p>
                      <span className="text-sm text-muted-foreground">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Interests & Hobbies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="glass-card px-6 py-3 rounded-full neon-glow hover:bg-primary/10 transition-all duration-300"
              >
                <span className="text-foreground font-medium">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
