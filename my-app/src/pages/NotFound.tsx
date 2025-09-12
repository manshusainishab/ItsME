import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-tech-dark">
      <div className="text-center tech-border p-12 rounded-lg glow-neon max-w-md">
        <h1 className="mb-4 text-6xl font-tech font-bold text-neon-green animate-glow-pulse">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Alien form not found</p>
        <p className="mb-8 text-sm text-muted-foreground">
          The transformation you're looking for doesn't exist in this dimension.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-neon-green hover:bg-neon-green-bright text-tech-black font-tech font-semibold rounded transition-colors glow-neon"
        >
          Return to Base
        </a>
      </div>
    </div>
  );
};

export default NotFound;
