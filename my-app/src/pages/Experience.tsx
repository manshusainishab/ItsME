import { Briefcase, Calendar, MapPin, Users, Code, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Omnitrix Developer",
      company: "Intergalactic Defense Corporation",
      location: "Bellwood, Earth",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of next-generation Omnitrix systems with improved alien transformation protocols and enhanced energy efficiency. Spearheading a team of interdimensional developers.",
      achievements: [
        "Reduced transformation time by 40% through algorithm optimization",
        "Led team of 8 developers across 3 different dimensions",
        "Implemented new security protocols preventing unauthorized access",
        "Designed scalable architecture supporting 1M+ transformations daily"
      ],
      technologies: [
        "Alien Programming Languages",
        "Quantum Computing",
        "Energy Management APIs",
        "Interdimensional Databases",
        "Transformation Protocols"
      ]
    },
    {
      id: 2,
      title: "Full Stack Alien Developer",
      company: "Plumber Tech Solutions",
      location: "Mount Rushmore Base",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Developed and maintained critical systems for intergalactic law enforcement operations. Built responsive web applications for real-time alien threat monitoring.",
      achievements: [
        "Built threat detection system with 99.9% accuracy",
        "Reduced system response time by 60%",
        "Implemented real-time communication across galaxies",
        "Maintained 24/7 uptime for critical defense systems"
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "Cosmic Databases",
        "Real-time APIs",
        "Security Protocols"
      ]
    },
    {
      id: 3,
      title: "Junior Developer Intern",
      company: "Ben Tennyson Enterprises",
      location: "Bellwood, Earth",
      period: "2020 - 2021",
      type: "Internship",
      description: "Started as an intern working on basic alien technology interfaces. Quickly promoted to handling complex transformation logic and user experience design.",
      achievements: [
        "Redesigned user interface increasing user satisfaction by 85%",
        "Optimized alien DNA parsing algorithms",
        "Contributed to open-source alien technology projects",
        "Received 'Rising Star Developer' award"
      ],
      technologies: [
        "JavaScript",
        "HTML/CSS",
        "Basic Alien APIs",
        "UI/UX Design",
        "Version Control",
        "Agile Methodologies"
      ]
    },
    {
      id: 4,
      title: "Freelance Web Developer",
      company: "Various Galactic Clients",
      location: "Remote (Multiple Galaxies)",
      period: "2019 - 2020",
      type: "Freelance",
      description: "Provided web development services to various alien civilizations and Earth-based organizations. Specialized in creating universal interfaces compatible across species.",
      achievements: [
        "Completed 25+ projects with 100% client satisfaction",
        "Developed universal translation interfaces",
        "Created responsive designs for multiple device types",
        "Built e-commerce platforms for interplanetary trade"
      ],
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "Universal CSS",
        "Cross-Species UX",
        "Payment Gateways"
      ]
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
                  <span>Technologies Used</span>
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
            { number: "5+", label: "Years Experience" },
            { number: "4", label: "Companies" },
            { number: "50+", label: "Projects Delivered" },
            { number: "3", label: "Galaxies Served" }
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