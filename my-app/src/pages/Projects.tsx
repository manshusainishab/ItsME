import { FolderOpen, ExternalLink, Github, Star, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Omnitrix Control Panel",
      description: "Advanced control interface for managing alien transformations with real-time monitoring and energy optimization. Features intuitive UI for selecting from 10+ alien forms.",
      image: "🛸",
      technologies: ["React", "TypeScript", "Alien APIs", "Energy Management"],
      category: "Web Application",
      status: "Completed",
      duration: "6 months",
      team: "4 developers",
      features: [
        "Real-time transformation monitoring",
        "Energy efficiency optimization",
        "Multi-alien form management",
        "Emergency protocols integration"
      ],
      liveUrl: "#",
      githubUrl: "#",
      stars: 150
    },
    {
      id: 2,
      title: "Galactic Threat Detection System",
      description: "AI-powered system for detecting and analyzing alien threats across the galaxy. Uses machine learning to predict invasion patterns and recommend defense strategies.",
      image: "🌌",
      technologies: ["Python", "TensorFlow", "Cosmic Databases", "Real-time Analytics"],
      category: "AI/ML Application",
      status: "Completed",
      duration: "8 months",
      team: "6 developers",
      features: [
        "Real-time threat analysis",
        "Predictive invasion modeling",
        "Automated alert systems",
        "Multi-dimensional data processing"
      ],
      liveUrl: "#",
      githubUrl: "#",
      stars: 89
    },
    {
      id: 3,
      title: "Plumber Communication Hub",
      description: "Secure communication platform for intergalactic law enforcement. Enables encrypted messaging and coordination between Earth and alien civilizations.",
      image: "📡",
      technologies: ["Node.js", "Socket.io", "Encryption", "Multi-protocol Support"],
      category: "Communication Platform",
      status: "Completed",
      duration: "4 months",
      team: "3 developers",
      features: [
        "End-to-end encryption",
        "Multi-species communication",
        "Real-time translation",
        "Emergency broadcast systems"
      ],
      liveUrl: "#",
      githubUrl: "#",
      stars: 203
    },
    {
      id: 4,
      title: "Alien DNA Analyzer",
      description: "Comprehensive tool for analyzing and cataloging alien DNA samples. Provides detailed genetic breakdown and transformation compatibility analysis.",
      image: "🧬",
      technologies: ["React", "D3.js", "Bioinformatics APIs", "Data Visualization"],
      category: "Scientific Tool",
      status: "In Progress",
      duration: "3 months",
      team: "5 developers",
      features: [
        "DNA sequence analysis",
        "Genetic visualization",
        "Compatibility assessment",
        "Sample database management"
      ],
      liveUrl: "#",
      githubUrl: "#",
      stars: 67
    },
    {
      id: 5,
      title: "Interdimensional Portal Router",
      description: "Network management system for routing communications and travel through interdimensional portals. Ensures safe and efficient passage between realities.",
      image: "🌀",
      technologies: ["Go", "Quantum Computing", "Portal Protocols", "Network Security"],
      category: "Infrastructure",
      status: "Planning",
      duration: "TBD",
      team: "2 developers",
      features: [
        "Portal route optimization",
        "Dimensional traffic management",
        "Safety protocol enforcement",
        "Multi-reality synchronization"
      ],
      liveUrl: "#",
      githubUrl: "#",
      stars: 12
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-neon-green";
      case "In Progress": return "text-neon-green-bright";
      case "Planning": return "text-neon-green-dim";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 text-neon-green animate-glow-pulse">
            PROJECTS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built across dimensions and technologies
          </p>
          <div className="hex-pattern absolute inset-0 opacity-10 pointer-events-none" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="tech-border glow-neon hover:scale-[1.02] transition-all duration-300 p-0 group relative overflow-hidden"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-tech-dark to-tech-black flex items-center justify-center border-b border-tech-gray">
                <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-tech font-bold text-neon-green-bright mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-tech-gray rounded text-neon-green-dim">
                        {project.category}
                      </span>
                      <span className={`font-semibold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-neon-green-dim" />
                    <span className="text-sm text-muted-foreground">{project.stars}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Users size={12} />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-xs font-tech font-semibold text-neon-green mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full mt-1.5 animate-pulse flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-tech font-semibold text-neon-green mb-3 uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-tech-gray text-neon-green-bright text-xs font-mono rounded border border-neon-green/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1 bg-neon-green hover:bg-neon-green-bright text-tech-black font-semibold"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-neon-green/50 text-neon-green hover:bg-neon-green/10"
                  >
                    <Github size={14} />
                  </Button>
                </div>
              </div>

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "25+", label: "Total Projects" },
            { number: "500+", label: "GitHub Stars" },
            { number: "10+", label: "Technologies" },
            { number: "95%", label: "Success Rate" }
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

export default Projects;