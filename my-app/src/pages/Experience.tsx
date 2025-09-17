import { Briefcase, Calendar, MapPin, Users, Code, Rocket, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const skills = [
    "PYTHON",
    "C++",
    "JAVA",
    "HTML",
    "CSS / Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "REST APIs",
    "Git & GitHub",
    "Apache Superset",
    "Event Management",
    "Team Leadership"
  ];

  const experiences = [
    {
      id: 1,
      title: "Software Developer Engineering Intern",
      company: "ALLEN DIGITAL",
      location: "Bangalore, India (Onsite)",
      period: "JAN 2025 - JULY 2025",
      type: "Full-time",
      description: "At ALLEN Digital, I worked as a Software Development Intern, where I contributed to enhancing large-scale digital learning platforms used by thousands of students and educators daily. My projects combined feature development, debugging, performance optimization, and data-driven insights.",
      achievements: [
        "Built a Tinder-like flashcard swiping feature that boosted student engagement by 25% and increased daily active users by 15%",
        "Fixed 60+ bugs and implemented 6+ new features in the Presentation Controller, improving live class flow for teachers and students",
        "Resolved 12+ production issues in Interactive Revision Notes containing 3D objects, simulations, and media; ensured full cross-device responsiveness (iOS, Android, Mac, Windows, iPads)",
        "Developed dashboards using Apache Superset to visualize class event data, accelerating debugging and improving development insights",
        "Authored unit tests for the asset library to ensure consistent behavior across diverse assets, improving reliability and reducing regressions"
      ],
      technologies: [
        "HTML",
        "Tailwind CSS",
        "React",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "DBViewer",
        "Apache Superset",
        "Python"
      ],
      orgnization: "https://allendigital.in/"
    },
    {
      id: 2,
      title: "Google Developer Group Secretary",
      company: "Google Developer Group Rishihood University",
      location: "Sonipat, Haryana, India (Onsite)",
      period: "2024 - 2025",
      type: "Leadership / Community Role",
      description: "Coordinated developer community initiatives, organized technical workshops, and facilitated collaboration between students and industry professionals. Supported event execution, community growth, and knowledge sharing within the GDG Rishihood ecosystem.",
      achievements: [
        "Organized and managed 4+ technical events, workshops, and hackathons with 200+ participants",
        "Collaborated with Google Developer Experts (GDEs) and mentors to bring industry insights to students",
        "Increased community engagement by 40% through consistent events, newsletters, and social outreach",
        "Streamlined event and sponsorship operations, ensuring smooth execution and high participant satisfaction"
      ],
      technologies: [
        "Community Leadership",
        "Event Management",
        "Public Speaking",
        "Team Collaboration",
        "React",
        "Node.js",
        "TypeScript",
        "Firebase",
        "GitHub",
        "REST APIs"
      ],
      orgnization: "https://gdg.community.dev/gdg-on-campus-rishihood-university-sonipat-india/"
    },
    {
      id: 3,
      title: "Core Committee Member",
      company: "Neutron Fest – India’s Pioneering AI Techno-Cultural Fest",
      location: "Sonipat, Haryana, India (Onsite)",
      period: "2024",
      type: "Leadership / Event Management",
      description: "As part of the core team, contributed to planning, organizing, and executing Neutron Fest, India’s first new-age AI-driven techno-cultural festival. Worked on integrating technology with culture to create an engaging and innovative experience for participants.",
      achievements: [
        "Collaborated with a 20+ member core team to host India’s first AI techno-cultural fest",
        "Designed and maintained the official Neutron Fest website for registrations and event updates",
        "Coordinated sponsorship and logistics efforts, ensuring smooth execution of multi-track events",
        "Engaged 1000+ participants through workshops, cultural showcases, and AI-driven experiences"
      ],
      technologies: [
        "Event Management",
        "Community Building",
        "Team Collaboration",
        "Leadership",
        "Project Coordination"
      ],
      orgnization: "https://www.neutronfest.com"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 text-neon-green animate-glow-pulse">
            EXPERIENCE
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey through the cosmos of technology and development
          </p>
          <div className="hex-pattern absolute inset-0 opacity-10 pointer-events-none" />
        </div>

        <div className="mb-16">
          <h2 className="flex items-center justify-center space-x-2 text-2xl font-tech font-semibold text-neon-green mb-8 uppercase tracking-wider">
            <Cpu size={20} />
            <span>Technical Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-tech-gray text-neon-green-bright text-sm font-mono rounded-full border border-neon-green/30 hover:border-neon-green/60 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="tech-border glow-neon hover:scale-[1.01] transition-all duration-300 p-8 group relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-green to-neon-green-bright flex items-center justify-center group-hover:animate-glow-pulse flex-shrink-0">
                    <Briefcase size={24} className="text-tech-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-tech font-bold text-neon-green-bright mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-neon-green mb-1">
                      {exp.company}
                    </p>
                    <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <span className="px-2 py-1 bg-tech-gray rounded text-neon-green-dim text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="flex items-center space-x-2 text-sm font-tech font-semibold text-neon-green mb-4 uppercase tracking-wider">
                  <Rocket size={16} />
                  <span>Key Achievements</span>
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-neon-green rounded-full mt-2 animate-pulse flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="flex items-center space-x-2 text-sm font-tech font-semibold text-neon-green mb-4 uppercase tracking-wider">
                  <Code size={16} />
                  <span>SKILLS</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-tech-gray text-neon-green-bright text-xs font-mono rounded-full border border-neon-green/30 hover:border-neon-green/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <a href={exp.orgnization} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <h4 className="flex items-center space-x-2 text-sm font-tech font-semibold text-neon-green mb-4 uppercase tracking-wider">
                    <Code size={16} />
                    <span>VIEW ORGANIZATION</span>
                  </h4>
                </a>
              </div>

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-neon-green to-neon-green-dim" />
              )}
            </Card>
          ))}
        </div>

        {/* Career Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: "1+", label: "Years Experience" },
            { number: "3", label: "Companies" },
            { number: "12+", label: "Projects Delivered" },
            { number: "15+", label: "Skills" }
          ].map((stat, index) => (
            <div key={index} className="text-center tech-border p-6 rounded-lg glow-neon">
              <div className="text-4xl font-tech font-bold text-neon-green mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;