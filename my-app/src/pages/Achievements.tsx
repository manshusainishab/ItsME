import { Trophy, Star, Zap, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "IEEE Xtreme 18.0 – Global Rank 775",
      description: "Achieved an all-world rank of 775 in the IEEE Xtreme 18.0 international programming competition, demonstrating strong problem-solving and coding skills under a 24-hour competitive environment.",
      icon: Zap,
      year: "2024",
      category: "Technical Excellence"
    },
    {
      id: 2,
      title: "ICPC 2024 – AIR 638 (Prelims)",
      description: "Secured All India Rank 638 in the ICPC 2024 prelims, showcasing strong logical thinking, competitive programming skills, and problem-solving under time constraints.",
      icon: Star,
      year: "2023",
      category: "Technical Excellence"
    },
    {
      id: 3,
      title: "100 Days of Code Challenge – LeetCode",
      description: "Successfully completed the 100 Days of Code Challenge by maintaining a 100-day streak on LeetCode, solving daily DSA problems, and sharing consistent progress on social media.",
      icon: Trophy,
      year: "2024",
      category: "Problem Solving"
    },
    {
      id: 4,
      title: "Mentored 500+ Students",
      description: "Through my YouTube channel and Instagram handle, I guided 500+ students in coding, career choices, and college mentorship. Focused on making technical concepts simple and accessible while motivating students to stay consistent in their learning journey.",
      icon: Trophy,
      year: "2023 – 2025",
      category: "Community Serving"
    }

  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 text-neon-green animate-glow-pulse">
            ACHIEVEMENTS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlocked abilities and conquered challenges across the digital universe
          </p>
          <div className="hex-pattern absolute inset-0 opacity-20 pointer-events-none" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={achievement.id}
                className="tech-border glow-neon hover:scale-105 transition-all duration-300 p-8 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-green to-neon-green-bright flex items-center justify-center group-hover:animate-glow-pulse">
                      <Icon size={24} className="text-tech-black" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-tech font-bold text-neon-green-bright">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-tech-gray px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {achievement.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                      <span className="text-xs text-neon-green-dim font-mono uppercase tracking-wider">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "1+", label: "Years Experience" },
            { number: "12+", label: "Projects Completed" },
            { number: "100+", label: "Bugs Exterminated" },
            { number: "∞", label: "Possibilities" }
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

export default Achievements;