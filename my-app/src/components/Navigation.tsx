import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Trophy, 
  Award, 
  GraduationCap, 
  Briefcase, 
  FolderOpen,
  Watch
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Omnitrix", icon: Watch },
    { path: "/Home", label: "Home", icon: Home },
    { path: "/achievements", label: "Achievements", icon: Trophy },
    { path: "/certificates", label: "Certificates", icon: Award },
    { path: "/education", label: "Education", icon: GraduationCap },
    { path: "/experience", label: "Experience", icon: Briefcase },
    { path: "/projects", label: "Projects", icon: FolderOpen },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="tech-border px-6 py-3 rounded-full backdrop-blur-md bg-tech-black/80">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Button
                key={item.path}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                asChild
                className={`
                  relative overflow-hidden transition-all duration-300
                  ${isActive 
                    ? "bg-neon-green text-tech-black shadow-lg shadow-neon-green/50" 
                    : "text-neon-green-bright hover:text-neon-green hover:bg-tech-gray/50"
                  }
                `}
              >
                <Link to={item.path}>
                  <Icon size={16} className="mr-2" />
                  <span className="font-tech text-xs tracking-wide uppercase">
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green-glow/30 to-transparent animate-pulse" />
                  )}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;