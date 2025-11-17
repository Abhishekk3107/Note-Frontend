import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";

function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Mail, href: "#", label: "Email", color: "hover:bg-red-500" }
  ];

  return (
    <footer className="relative mt-auto px-6 py-8 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        {/* Glassmorphism Container */}
        <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/5 p-8">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-2xl"></div>
          
          {/* Content */}
          <div className="relative space-y-6">
           
            {/* Divider with Gradient */}
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
            </div>

            {/* Footer Text */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  NoteKeeper.io
                </span>
                . All rights reserved.
              </p>
              
              {/* Made with Love */}
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5 group">
                <span>Made with</span>
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
                <span>by developers, for developers</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
