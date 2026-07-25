import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="grain flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="text-display text-foreground mb-4">Page not found</h1>
        <p className="lead mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="text-brand underline underline-offset-4 hover:text-brand-dim transition-smooth"
        >
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
