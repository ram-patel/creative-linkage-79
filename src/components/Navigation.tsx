import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">Portfolio</Link>
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`${isActive('/projects') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;