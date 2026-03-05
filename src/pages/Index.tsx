import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LocationCard from "@/components/LocationCard";
import CultureToggle from "@/components/CultureToggle";
import CategoryFilter from "@/components/CategoryFilter";
import SubmitTipModal from "@/components/SubmitTipModal";
import EmptyState from "@/components/EmptyState";
import FloatingMapButton from "@/components/FloatingMapButton";
import { locations } from "@/data/locations";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [deepDive, setDeepDive] = useState(false);
  const [tipModalOpen, setTipModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
  };

  const filtered = useMemo(() => {
    let result = locations;
    if (categoryFilter !== "all") {
      result = result.filter((loc) =>
        loc.category.some((c) => c === categoryFilter)
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (loc) =>
          loc.locationName.toLowerCase().includes(q) ||
          loc.region.toLowerCase().includes(q) ||
          loc.category.some((c) => c.toLowerCase().includes(q))
      );
    }
    return result;
  }, [searchQuery, categoryFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} onTagClick={handleTagClick} />

      <section className="container mx-auto px-4 pb-24">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {searchQuery ? `Results for "${searchQuery}"` : "Popular Destinations"}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {filtered.length} location{filtered.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CultureToggle deepDive={deepDive} onToggle={setDeepDive} />
              <motion.button
                whileTap={{ scale: 0.93 }}
                onClick={() => setTipModalOpen(true)}
                className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                <Plus size={16} />
                Submit a Tip
              </motion.button>
            </div>
          </div>
          <CategoryFilter active={categoryFilter} onChange={setCategoryFilter} />
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((location, i) => (
              <LocationCard key={location.id} location={location} index={i} deepDiveMode={deepDive} />
            ))}
          </div>
        ) : (
          <EmptyState query={searchQuery} />
        )}
      </section>

      <FloatingMapButton />
      <SubmitTipModal open={tipModalOpen} onClose={() => setTipModalOpen(false)} />

      {/* Mobile FAB for submit tip */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setTipModalOpen(true)}
        className="md:hidden fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-accent-foreground font-medium text-sm shadow-lg"
      >
        <Plus size={18} />
        Tip
      </motion.button>
    </div>
  );
};

export default Index;
