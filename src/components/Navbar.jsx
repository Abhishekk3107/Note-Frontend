import { Link, useLocation } from "react-router-dom";
import { BookOpen, Plus, Home } from "lucide-react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      {/* Glassmorphism Container */}
      <div className="container mx-auto max-w-7xl">
        <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl"></div>
          
          {/* Content */}
          <div className="relative flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
            {/* Logo with Glow Effect */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <BookOpen className="relative w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:rotate-12" />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight group-hover:tracking-wide transition-all duration-300">
                NoteKeeper.io
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                to="/"
                className={`group relative px-3 sm:px-5 lg:px-6 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base ${
                  location.pathname === "/"
                    ? "text-white bg-blue-500/20"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {/* Background Hover Effect */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Icon */}
                <Home className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Text - Hidden on smallest screens */}
                <span className="relative hidden xs:inline">Home</span>
                
                {/* Active Indicator */}
                {location.pathname === "/" && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
                )}
                
                {/* Bottom Border Animation */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 group-hover:w-3/4 transition-all duration-300"></span>
              </Link>

              <Link
                to="/create"
                className={`group relative px-3 sm:px-5 lg:px-6 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base ${
                  location.pathname === "/create"
                    ? "text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"
                    : "text-gray-300 hover:text-white border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10"
                }`}
              >
                {/* Icon */}
                <Plus className="relative w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                
                {/* Text - Hidden on smallest screens */}
                <span className="relative hidden xs:inline">Create</span>
                <span className="relative hidden sm:inline">Note</span>
                
                {/* Shine Effect */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
