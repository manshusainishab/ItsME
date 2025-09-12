import { Award, ExternalLink, Calendar, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Galactic Web Development Certification",
      issuer: "Intergalactic Institute of Technology",
      date: "2024",
      description: "Advanced certification in cosmic-scale web development and alien UI/UX design",
      credentialId: "OMN-2024-001",
      skills: ["React", "TypeScript", "Cosmic CSS", "Alien APIs"],
      verifyUrl: "#"
    },
    {
      id: 2,
      title: "Omnitrix System Architecture",
      issuer: "Ben Tennyson Academy",
      date: "2023",
      description: "Specialized training in multi-dimensional system architecture and transformation protocols",
      credentialId: "BT-ARCH-2023",
      skills: ["System Design", "Multi-threading", "Transformation Logic", "Energy Management"],
      verifyUrl: "#"
    },
    {
      id: 3,
      title: "Alien Technology Integration",
      issuer: "Plumber Academy",
      date: "2023",
      description: "Expert-level certification in integrating alien technologies with Earth systems",
      credentialId: "PA-ATI-2023",
      skills: ["API Integration", "Protocol Translation", "Security", "Compatibility"],
      verifyUrl: "#"
    },
    {
      id: 4,
      title: "Advanced DevOps & Deployment",
      issuer: "Cosmic Cloud Institute",
      date: "2022",
      description: "Comprehensive certification covering deployment across multiple dimensions",
      credentialId: "CCI-DEVOPS-2022",
      skills: ["Docker", "Kubernetes", "CI/CD", "Multi-dimensional Deployment"],
      verifyUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 text-neon-green animate-glow-pulse">
            CERTIFICATES
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Validated expertise and specialized training from across the universe
          </p>
          <div className="hex-pattern absolute inset-0 opacity-10 pointer-events-none" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <Card 
              key={cert.id}
              className="tech-border glow-neon hover:scale-[1.02] transition-all duration-300 p-8 group relative overflow-hidden"
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-green to-neon-green-bright flex items-center justify-center group-hover:animate-glow-pulse">
                    <Award size={20} className="text-tech-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-tech font-bold text-neon-green-bright mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-neon-green-dim">
                  <Calendar size={16} />
                  <span className="font-mono text-sm">{cert.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-tech font-semibold text-neon-green mb-3 uppercase tracking-wider">
                  Skills Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-tech-gray text-neon-green-bright text-xs font-mono rounded-full border border-neon-green/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-tech-gray">
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-neon-green-dim" />
                  <span className="text-xs font-mono text-muted-foreground">
                    ID: {cert.credentialId}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-neon-green hover:text-neon-green-bright hover:bg-tech-gray/50"
                >
                  <ExternalLink size={14} className="mr-2" />
                  Verify
                </Button>
              </div>

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Verification Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 tech-border px-6 py-4 rounded-lg bg-tech-dark/50">
            <Shield className="text-neon-green animate-pulse" size={24} />
            <div className="text-left">
              <p className="text-sm font-tech text-neon-green-bright">
                All certificates are verified and authentic
              </p>
              <p className="text-xs text-muted-foreground">
                Click "Verify" to check credential authenticity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;