import { motion } from "framer-motion";
import { Landmark, Trees, ShoppingBag } from "lucide-react";

const filters = [
  { label: "All", value: "all", icon: null },
  { label: "Heritage Sites", value: "Heritage", icon: Landmark },
  { label: "Nature", value: "Hiking", icon: Trees },
  { label: "Local Markets", value: "StreetFood", icon: ShoppingBag },
] as const;

interface CategoryFilterProps {
  active: string;
  onChange: (value: string) => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {filters.map((f) => {
        const isActive = active === f.value;
        return (
          <motion.button
            key={f.value}
            whileTap={{ scale: 0.93 }}
            onClick={() => onChange(f.value)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              isActive
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
            }`}
          >
            {f.icon && <f.icon size={14} />}
            {f.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
