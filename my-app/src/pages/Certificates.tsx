import { Award, ExternalLink, Calendar, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Global Rank 775 – IEEE Xtreme 18.0 Programming Competition",
      issuer: "IEEE",
      date: "2024",
      description: "Secured an all-world rank of 775 in IEEE Xtreme 18.0, a 24-hour global competitive programming competition organized by IEEE.",
      credentialId: "XTREME-775-2024",
      skills: ["C++", "Java", "Python"],
      verifyUrl: "https://drive.google.com/file/d/1CowrBeqFTpdZQvkG52-pHca_oO6NQUhC/view?pli=1"
    },
    {
      id: 2,
      title: "Ethical Hacking",
      issuer: "Coursera",
      date: "2025",
      description: "This course equips students with foundational knowledge of cybersecurity, focusing on system security, network protection, and ethical hacking practices.",
      credentialId: "94U05MVa",
      skills: [
        "Cloud Computing",
        "Computer Programming",
        "Computer Security Incident Management",
        "Leadership and Management",
        "Linux",
        "Network Architecture",
        "Network Security",
        "Risk Management"
      ],
      verifyUrl: "https://www.credly.com/badges/856d910c-ed8a-4327-b0d1-e8c05d8875f1/print"
    },
    {
      id: 3,
      title: "Mathematics for Machine Learning and Data Science",
      issuer: "Coursera",
      date: "2025",
      description: "Beginner-friendly specialization focused on mastering the mathematical foundations of AI and Machine Learning, including linear algebra, calculus, and probability, to build a strong toolkit for data science and ML applications.",
      credentialId: "qOUjxuUM",
      skills: [
        "Algebra",
        "Algorithms",
        "Artificial Neural Networks",
        "Calculus",
        "Differential Equations",
        "Linear Algebra",
        "Machine Learning",
        "Machine Learning Algorithms"
      ],
      verifyUrl: "https://www.credly.com/badges/3150ba38-a19d-4090-b244-77edbab97ef9/print"
    },
    {
      id: 4,
      title: "NeutronFest 2024 – Core Committee Member",
      issuer: "Neutron Tech-Fest",
      date: "2024",
      description: "Recognized for active contribution as a Core Committee Member at NeutronFest 2024, India’s pioneering AI-driven techno-cultural festival. Involved in event planning, website development, and community engagement.",
      credentialId: "00324-NTF",
      skills: [
        "Event Management",
        "Community Building",
        "Team Collaboration",
        "Project Coordination"
      ],
      verifyUrl: "https://drive.google.com/file/d/1IK1_OXyuYxLw2TQb__1CUcoqCqMnNuNW/view?usp=sharing"
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

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-neon-green-bright hover:underline z-10 relative"
                >
                  <ExternalLink size={14} />
                  <span>Verify</span>
                </a>
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