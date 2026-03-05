import { motion } from "framer-motion";
import emptyImg from "@/assets/empty-state.png";

interface EmptyStateProps {
  query: string;
}

const EmptyState = ({ query }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 px-4 text-center"
    >
      <img src={emptyImg} alt="No results" className="w-40 h-40 mb-6 opacity-80" />
      <h3 className="text-xl font-bold text-foreground mb-2">
        No destinations found for "{query}"
      </h3>
      <p className="text-muted-foreground text-sm max-w-md">
        Looks like our little explorer hasn't mapped that spot yet. Try searching for a different location or browse the trending tags above.
      </p>
    </motion.div>
  );
};

export default EmptyState;
