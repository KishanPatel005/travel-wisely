import { Search, LocateFixed } from "lucide-react";
import { motion } from "framer-motion";

const trendingTags = ["#Temples", "#StreetFood", "#Nightlife", "#Hiking"];

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onTagClick: (tag: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange, onTagClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight"
        >
          Travel with
          <br />
          <span className="text-do">Respect</span> & <span className="text-dont">Awareness</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-8"
        >
          Learn local customs before you go. Be the traveler every culture welcomes back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-xl mx-auto"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Where are you heading?"
            className="w-full pl-12 pr-12 py-4 rounded-2xl border border-border bg-card text-foreground text-base shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow placeholder:text-muted-foreground"
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            title="Use My Location"
          >
            <LocateFixed size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mt-6"
        >
          {trendingTags.map((tag) => (
            <motion.button
              key={tag}
              whileTap={{ scale: 0.93 }}
              onClick={() => onTagClick(tag.replace("#", ""))}
              className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
