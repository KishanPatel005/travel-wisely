import { Map } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const FloatingMapButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => toast.info("Map view coming soon! 🗺️")}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg hover:opacity-90 transition-opacity"
    >
      <Map size={18} />
      <span className="hidden sm:inline">View Map</span>
    </motion.button>
  );
};

export default FloatingMapButton;
