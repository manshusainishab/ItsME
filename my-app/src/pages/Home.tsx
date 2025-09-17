import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Code, Rocket, Shield } from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin, SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";

const Home = () => {
  const quickStats = [
    { label: "Years Experience", value: "1+", icon: Zap },
    { label: "Projects Completed", value: "8+", icon: Code },
    { label: "Technologies", value: "10+", icon: Rocket },
    { label: "Places Worked At", value: "3", icon: Shield }
  ];

  const featuredSections = [
    {
      title: "Achievements",
      description: "Unlocked abilities and conquered digital challenges",
      path: "/achievements",
      icon: "🏆",
      color: "from-neon-green to-neon-green-bright"
    },
    {
      title: "Projects",
      description: "Innovative solutions built across dimensions",
      path: "/projects",
      icon: "🚀",
      color: "from-neon-green-bright to-omnitrix-glow"
    },
    {
      title: "Experience",
      description: "Professional journey through cosmic technology",
      path: "/experience",
      icon: "⚡",
      color: "from-omnitrix-glow to-neon-green"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="hex-pattern absolute inset-0 opacity-20" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-tech font-bold mb-6">
              <span className="text-neon-green animate-glow-pulse">HEY I'M</span>
              <br />
              <span className="text-foreground">MANSHU SAINI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into reality with the power of
              <span className="text-neon-green font-semibold"> alien technologies</span> and
              <span className="text-neon-green font-semibold"> futuristic development</span>
            </p>
          </div>

          {/* Omnitrix-style CTA */}
          <div className="relative inline-block">
            <a
              href="https://drive.google.com/file/d/1xpXRWLaiGGSrm_nXEL_WPLf3xYNsOQaf/view?usp=sharing"
              download
              className="w-32 h-32 mx-auto mb-8 relative block group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-green to-neon-green-bright animate-glow-pulse shadow-2xl shadow-neon-green/50 transition-transform group-hover:scale-105" />
              <div className="absolute inset-2 rounded-full bg-tech-black flex items-center justify-center">
                <Zap size={48} className="text-neon-green animate-pulse group-hover:scale-110 transition-transform" />
              </div>
              {/* Hexagon pattern overlay */}
              <div className="absolute inset-4 rounded-full border-2 border-neon-green/30 animate-pulse" />
            </a>

            <p className="text-neon-green font-tech font-semibold tracking-wider text-center">
              READY FOR TRANSFORMATION
            </p>
          </div>


          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              asChild
              className="bg-neon-green hover:bg-neon-green-bright text-tech-black font-tech font-semibold px-8 py-4 text-lg glow-neon"
            >
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-neon-green text-neon-green hover:bg-neon-green/10 font-tech font-semibold px-8 py-4 text-lg"
            >
              <Link to="/experience">
                View Experience
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-neon-green rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-neon-green-bright rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-omnitrix-glow rounded-full animate-pulse opacity-50" />
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-6 bg-tech-dark/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="tech-border glow-neon hover:scale-105 transition-all duration-300 p-6 text-center group">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-neon-green to-neon-green-bright rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                    <Icon size={24} className="text-tech-black" />
                  </div>
                  <div className="text-3xl font-tech font-bold text-neon-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tech font-bold text-neon-green mb-6">
              EXPLORE THE UNIVERSE
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover different dimensions of my professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredSections.map((section, index) => (
              <Card
                key={index}
                className="tech-border glow-neon hover:scale-105 transition-all duration-300 p-8 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-tech font-bold text-neon-green-bright mb-4 text-center">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full text-neon-green hover:text-neon-green-bright hover:bg-neon-green/10 font-semibold"
                  >
                    <Link to={section.path}>
                      Explore
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>

                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-tech-dark via-tech-black to-tech-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-neon-green mb-6">
            READY TO TRANSFORM?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's build something extraordinary together. The universe is waiting for our next creation.
          </p>
          <div className="flex flex sm:flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/my_nst_daze/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <SiInstagram className="w-6 h-6 hover:scale-125 transition-transform text-neon-green rounded-lg font-tech glow-neon" />
            </a>

            <a href="https://www.linkedin.com/in/manshusainishab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <SiLinkedin className="w-6 h-6 hover:scale-125 transition-transform text-neon-green font-tech glow-neon" />
            </a>

            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <SiFacebook className="w-6 h-6 hover:scale-125 transition-transform text-neon-green rounded-full font-tech glow-neon" />
            </a>

            <a href="https://www.youtube.com/@ManshuNSTian" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <SiYoutube className="w-6 h-6 hover:scale-125 transition-transform text-neon-green rounded-lg font-tech glow-neon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;