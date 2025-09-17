import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { 
  Home, 
  Trophy, 
  Award, 
  GraduationCap, 
  Briefcase, 
  FolderOpen,
  Menu,
  X,
  Watch
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Omnitrix", icon: Watch },
    { path: "/Home", label: "Home", icon: Home },
    { path: "/achievements", label: "Achievements", icon: Trophy },
    { path: "/certificates", label: "Certificates", icon: Award },
    { path: "/education", label: "Education", icon: GraduationCap },
    { path: "/experience", label: "Experience", icon: Briefcase },
    { path: "/projects", label: "Projects", icon: FolderOpen },
  ];

  const NavButton = ({ item, mobile = false }) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.path;

    return (
      <Button
        variant={isActive ? "default" : "ghost"}
        size={mobile ? "default" : "sm"}
        asChild
        className={`
          relative overflow-hidden transition-all duration-300 w-full justify-center
          ${isActive 
            ? "bg-neon-green text-tech-black shadow-lg shadow-neon-green/50" 
            : "text-neon-green-bright hover:text-neon-green hover:bg-tech-gray/50"
          }
        `}
        onClick={() => mobile && setIsOpen(false)}
      >
        <Link to={item.path}>
          <Icon size={12} className="mr-2" />
          <span className="font-tech text-xs tracking-wide uppercase">
            {item.label}
          </span>
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green-glow/30 to-transparent animate-pulse" />
          )}
        </Link>
      </Button>
    );
  };

  if (isMobile) {
    return (
      <nav className="fixed top-4 right-4 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="tech-border bg-tech-black/80 text-neon-green-bright hover:text-neon-green border-neon-green/30"
            >
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right"
            className="w-72 bg-tech-black/95 border-neon-green/30 backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-tech text-neon-green tracking-wider">MENU</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-neon-green-bright hover:text-neon-green"
              >
              </Button>
            </div>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavButton key={item.path} item={item} mobile />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    );
  }

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="tech-border px-6 py-3 rounded-full backdrop-blur-md bg-tech-black/80">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => (
            <NavButton key={item.path} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
