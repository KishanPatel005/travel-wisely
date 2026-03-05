import { motion } from "framer-motion";

interface CultureToggleProps {
  deepDive: boolean;
  onToggle: (val: boolean) => void;
}

const CultureToggle = ({ deepDive, onToggle }: CultureToggleProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm font-medium transition-colors ${!deepDive ? "text-foreground" : "text-muted-foreground"}`}>
        Tourist Mode
      </span>
      <button
        onClick={() => onToggle(!deepDive)}
        className="relative w-12 h-6 rounded-full bg-secondary border border-border transition-colors"
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-0.5 w-5 h-5 rounded-full bg-primary shadow-sm"
          style={{ left: deepDive ? "calc(100% - 22px)" : "2px" }}
        />
      </button>
      <span className={`text-sm font-medium transition-colors ${deepDive ? "text-foreground" : "text-muted-foreground"}`}>
        Deep Dive
      </span>
    </div>
  );
};

export default CultureToggle;
