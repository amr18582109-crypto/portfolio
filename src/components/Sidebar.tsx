import { Home, User, FolderCode, Zap, Map, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/about", icon: User, label: "About" },
  { path: "/projects", icon: FolderCode, label: "Projects" },
  { path: "/skills", icon: Zap, label: "Skills" },
  { path: "/journey", icon: Map, label: "Journey" },
  { path: "/business", icon: Briefcase, label: "Business" },
  { path: "/contact", icon: Mail, label: "Contact" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="fixed left-0 top-0 h-full w-16 hidden md:flex flex-col items-center justify-center z-50 bg-background/60 backdrop-blur-xl border-r border-border/30">
        <div className="flex flex-col gap-6">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <div key={item.path} className="relative">
                <button
                  onClick={() => navigate(item.path)}
                  onMouseEnter={() => setHovered(item.path)}
                  onMouseLeave={() => setHovered(null)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    active
                      ? "bg-primary/20 text-primary glow-burgundy-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon size={20} />
                </button>
                <AnimatePresence>
                  {hovered === item.path && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-primary/90 text-primary-foreground text-sm font-body whitespace-nowrap glow-burgundy-sm"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          {/* Theme toggle */}
          <div className="relative">
            <button
              onClick={toggleTheme}
              onMouseEnter={() => setHovered("theme")}
              onMouseLeave={() => setHovered(null)}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <AnimatePresence>
              {hovered === "theme" && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-primary/90 text-primary-foreground text-sm font-body whitespace-nowrap glow-burgundy-sm"
                >
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 md:hidden flex items-center justify-around z-50 bg-background/80 backdrop-blur-xl border-t border-border/30">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon size={20} />
            </button>
          );
        })}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors text-muted-foreground"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
