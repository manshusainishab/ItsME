import { FolderOpen, ExternalLink, Github, Star, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Theta: The Learning App",
      description: "An E-learning platform designed to provide personalized and engaging educational content. Tailored for diverse learners, Theta makes learning accessible, interactive, and secure with role-based permissions and integrated payments.",
      image: "📚",
      technologies: ["MongoDB", "React", "Node.js", "Express.js", "JavaScript", "CSS"],
      category: "Web Application",
      status: "Completed",
      duration: "3 months",
      team: "Solo Project",
      features: [
        "Admin can perform full CRUD operations on Courses and Lectures",
        "Integrated Razorpay APIs for secure payment processing",
        "Superadmin role to manage permissions and admin access",
        "Buyer can purchase courses and access lectures seamlessly",
        "User authentication with secure login and account creation",
        "Implemented routing and pagination using React Router DOM"
      ],
      liveUrl: "https://elearning-bice.vercel.app",
      githubUrl: "https://github.com/manshusainishab/Elearning-platform",
      stars: 25
    },
    {
      id: 2,
      title: "The Souled Store Website Clone",
      description: "A front-end replica of The Souled Store e-commerce platform, built to demonstrate proficiency in React, modular UI design, and responsive layouts. Designed for seamless navigation and optimized user experience across devices.",
      image: "🛍️",
      technologies: ["React", "CSS", "JavaScript", "Tailwind CSS", "HTML", "Bootstrap", "Figma"],
      category: "Web Application",
      status: "Completed",
      duration: "2 months",
      team: "Solo Project",
      features: [
        "Implemented modular React components for efficient UI management",
        "Utilized Context API for global state management across components",
        "Developed responsive layouts ensuring cross-device compatibility",
        "Set up routing for seamless navigation between multiple pages",
        "Optimized performance for smooth user interactions"
      ],
      liveUrl: "https://the-souled-store-clone.vercel.app",
      githubUrl: "https://github.com/manshusainishab/The-Souled-Store-Clone",
      stars: 28
    },
    {
      id: 3,
      title: "Personal Portfolio Website (Old Version)",
      description: "An earlier version of my personal portfolio built with React to showcase my projects, achievements, and skills. Designed with a focus on clean navigation and responsive layouts, it provided a central hub for my professional presence.",
      image: "🌐",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      category: "Web Application",
      status: "Completed",
      duration: "1 month",
      team: "Solo Project",
      features: [
        "Responsive design optimized for mobile and desktop devices",
        "Project showcase with descriptions and external links",
        "About section highlighting education and career journey",
        "Contact form for direct communication",
        "Smooth navigation using React Router"
      ],
      liveUrl: "https://manshusainishab.github.io/portfolio/",
      githubUrl: "https://github.com/manshusainishab/portfolio",
      stars: 15
    },
    {
      id: 4,
      title: "Art Gallery Website",
      description: "A dynamic online platform connecting art enthusiasts, collectors, and creators worldwide. Designed with a user-friendly interface and robust features for discovering, buying, and selling diverse artworks. Showcases curated collections from emerging and established artists, fostering a vibrant art community.",
      image: "🎨",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Application",
      status: "Completed",
      duration: "1 month",
      team: "Solo Project",
      features: [
        "Curated collections showcasing diverse artworks across various mediums",
        "User-friendly interface for exploring, buying, and selling art",
        "Platform for artists to showcase their creations to a global audience",
        "Community-driven experience connecting creators, collectors, and enthusiasts"
      ],
      liveUrl: "https://eloquent-licorice-0228c7.netlify.app",
      githubUrl: "https://github.com/manshusainishab/artgallerymanshu",
      stars: 18
    },
    {
      id: 5,
      title: "School Website",
      description: "A basic school website design that presents the structure and functionality of an educational institution’s online presence. Built with a focus on clean UI, easy navigation, and essential sections like home, about, academics, and contact.",
      image: "🏫",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Application",
      status: "Completed",
      duration: "1 month",
      team: "Solo Project",
      features: [
        "Homepage with clean and modern design",
        "About section highlighting school values and vision",
        "Academics page for curriculum and subjects overview",
        "Contact page with form and location details"
      ],
      liveUrl: "https://bejewelled-churros-b4f3b3.netlify.app",
      githubUrl: "https://github.com/manshusainishab/schoolpagemanshu",
      stars: 12
    },
    {
      id: 6,
      title: "Dine In Website",
      description: "A restaurant website built using vanilla HTML, CSS, and JavaScript, offering an elegant design for browsing menus and booking tables online. Created to demonstrate core front-end development skills without relying on frameworks.",
      image: "🍽️",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Application",
      status: "Completed",
      duration: "2 weeks",
      team: "Solo Project",
      features: [
        "Interactive menu display with categories and pricing",
        "Table booking system with date and time selection",
        "Responsive layout for desktop and mobile devices",
        "Smooth animations and transitions for better user experience",
        "Contact section for customer queries and reservations"
      ],
      liveUrl: "https://bright-florentine-ab507b.netlify.app",
      githubUrl: "https://github.com/manshusainishab/dine-in-restaurant",
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
              className="tech-border glow-neon transition-all duration-300 p-0 group relative overflow-hidden"
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full bg-neon-green hover:bg-neon-green-bright text-tech-black font-semibold"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Live Demo
                    </Button>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neon-green/50 text-neon-green hover:bg-neon-green/10"
                    >
                      <Github size={14} />
                    </Button>
                  </a>
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
            { number: "12+", label: "Total Projects" },
            { number: "500+", label: "Visits" },
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