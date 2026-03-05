import { MapPin, Compass, BookOpen, LogIn, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Explore", icon: Compass, href: "/" },
  { label: "Map View", icon: MapPin, href: "#", isMap: true },
  { label: "Pricing", icon: CreditCard, href: "/pricing" },
  { label: "Culture Blogs", icon: BookOpen, href: "/blog" },
];

interface HeaderProps {
  onMapViewClick?: () => void;
}

const Header = ({ onMapViewClick }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            Dos <span className="text-accent">&</span> Don'ts
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            if (item.isMap && onMapViewClick) {
              return (
                <button
                  key={item.label}
                  onClick={onMapViewClick}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link to="/signin">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
          >
            <LogIn size={16} />
            <span className="hidden sm:inline">Sign In</span>
          </motion.button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
