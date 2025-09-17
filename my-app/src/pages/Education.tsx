import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BTech in Computer Science & Artificial Intelligence",
      institution: "Rishihood University",
      location: "Sonipat, India",
      period: "2023 - 2027",
      grade: "Current GPA: 8.7/10",
      description: "Pursuing a strong foundation in computer science with a specialization in Artificial Intelligence. Coursework covers core areas including algorithms, programming, databases, computer networks, and advanced AI/ML techniques. Actively engaged in projects, hackathons, and community initiatives to apply theoretical knowledge into practical, real-world solutions.",
      subjects: [
        "Foundation of Programming",
        "Mathematics for AI",
        "Database Management Systems",
        "Data Structures & Algorithms",
        "Analysis and Design of Algorithms",
        "Advanced Programming",
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Networks",
        "Modern Computer Architecture",
        "Quantum Computing Basics"
      ]
    },
    {
      id: 2,
      degree: "12th Grade - Science Stream (Non-Medical)",
      institution: "Delhi Public School",
      location: "Hisar, Haryana, India",
      period: "2021 - 2022",
      grade: "80.4%",
      description: "Focused on Physics, Chemistry, Mathematics, and Computer Science, building a strong foundation in problem-solving, logical reasoning, and analytical skills. Developed interest in technology and programming through academic projects and practical learning.",
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
        "English"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 text-neon-green animate-glow-pulse">
            EDUCATION
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey through cosmic knowledge and technologies
          </p>
          <div className="hex-pattern absolute inset-0 opacity-10 pointer-events-none" />
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-green via-neon-green-dim to-transparent" />

          {educationData.map((edu, index) => (
            <div key={edu.id} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-neon-green rounded-full border-4 border-tech-black animate-glow-pulse z-10" />

              {/* Education Card */}
              <Card className={`tech-border glow-neon hover:scale-[1.02] transition-all duration-300 p-8 group relative overflow-hidden ${index % 2 === 0 ? 'mr-1/2 pr-16' : 'ml-1/2 pl-16'} w-full max-w-lg`}>

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-green to-neon-green-bright flex items-center justify-center group-hover:animate-glow-pulse">
                      <GraduationCap size={20} className="text-tech-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-tech font-bold text-neon-green-bright mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-neon-green-dim">
                    <Calendar size={16} />
                    <span className="font-mono text-sm">{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neon-green-dim">
                    <MapPin size={16} />
                    <span className="font-mono text-sm">{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    <span className="text-sm text-neon-green font-semibold">{edu.grade}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {edu.description}
                </p>

                {/* Key Subjects */}
                <div>
                  <h4 className="flex items-center space-x-2 text-sm font-tech font-semibold text-neon-green mb-3 uppercase tracking-wider">
                    <BookOpen size={16} />
                    <span>Key Subjects</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.subjects.map((subject, subIndex) => (
                      <span
                        key={subIndex}
                        className="px-2 py-1 bg-tech-gray text-neon-green-bright text-xs font-mono rounded border border-neon-green/30"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </div>
          ))}
        </div>

        {/* Academic Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: "8.7", label: "GPA", suffix: "/10.0" },
            { number: "6", label: "Years of Study", suffix: "" },
            { number: "1", label: "Research Projects", suffix: "" }
          ].map((stat, index) => (
            <div key={index} className="text-center tech-border p-6 rounded-lg glow-neon">
              <div className="text-4xl font-tech font-bold text-neon-green mb-2">
                {stat.number}<span className="text-lg">{stat.suffix}</span>
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

export default Education;