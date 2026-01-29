import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Menu, 
  X, 
  Bot, 
  Pill, 
  Map, 
  BookOpen, 
  Info,
  Activity
} from "lucide-react";

const navItems = [
  { name: "AI Consultant", path: "/consultant", icon: Bot },
  { name: "Medicine Cabinet", path: "/cabinet", icon: Pill },
  { name: "Find Care", path: "/map", icon: Map },
  { name: "Health Articles", path: "/articles", icon: BookOpen },
  { name: "About", path: "/about", icon: Info },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl medical-gradient flex items-center justify-center shadow-medical group-hover:shadow-glow transition-shadow duration-300">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-medical-pulse rounded-full animate-pulse" />
          </div>
          <span className="font-display font-bold text-xl hidden sm:block">
            Disease<span className="text-gradient">Detector</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`gap-2 transition-all duration-200 ${
                    isActive 
                      ? "shadow-medical" 
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/consultant">
            <Button className="medical-gradient shadow-medical hover:shadow-glow transition-all duration-300 gap-2">
              <Heart className="w-4 h-4" />
              Get Health Advice
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className="w-full justify-start gap-3"
                    >
                      <Icon className="w-5 h-5" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-border mt-2">
                <Link to="/consultant" onClick={() => setIsOpen(false)}>
                  <Button className="w-full medical-gradient shadow-medical gap-2">
                    <Heart className="w-4 h-4" />
                    Get Health Advice
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
