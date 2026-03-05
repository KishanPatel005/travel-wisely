import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import MapViewOverlay from "@/components/MapViewOverlay";

const blogs = [
    {
        id: 1,
        title: "The Art of Slow Travel in South India",
        excerpt: "Why hurrying through Hyderabad and Hampi means missing the soul of the region's cultural heritage.",
        author: "Arvind Patel",
        date: "March 5, 2026",
        image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=800",
        category: "Travel Guides"
    },
    {
        id: 2,
        title: "10 Hidden Gems in Ahmedabad You Didn't Know Exist",
        excerpt: "Beyond the stepwells: discover the narrow pols and vibrant secret kitchens of old Ahmedabad.",
        author: "Kishan Patel",
        date: "March 2, 2026",
        image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=800",
        category: "Culture"
    },
    {
        id: 3,
        title: "Why Respecting Local Customs Makes You a Better Traveler",
        excerpt: "How a simple 'namaste' or 'bow' can open doors that no amount of money can buy.",
        author: "Sarah Jenkins",
        date: "February 28, 2026",
        image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=800",
        category: "Etiquette"
    },
    {
        id: 4,
        title: "Kyoto's Forgotten Rituals: A Guide to Proper Shrine Visits",
        excerpt: "Understanding the deep history of Inari and the correct way to interact with Shinto messengers.",
        author: "Yuki Tanaka",
        date: "February 15, 2026",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
        category: "Spirituality"
    }
];

const BlogPage = () => {
    const [mapOpen, setMapOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-0">
            <Header onMapViewClick={() => setMapOpen(true)} />

            <main className="container mx-auto px-4 pt-24 md:pt-32 pb-24">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4"
                    >
                        <BookOpen size={14} />
                        Travel Insights
                    </motion.div>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Cultural Chronicles</h1>
                    <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                        Personal stories, expert advice, and the history behind the world's most fascinating travel traditions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {blogs.map((blog, i) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="group overflow-hidden border-border bg-background/50 backdrop-blur-sm transition-all hover:border-accent/40">
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 md:p-6">
                                    <div className="flex items-center gap-4 text-[10px] md:text-xs text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
                                    </div>
                                    <h2 className="text-lg md:text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
                                        {blog.title}
                                    </h2>
                                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3 mb-4 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                    <Button variant="ghost" className="p-0 h-auto font-bold text-accent hover:text-accent/80 hover:bg-transparent group/btn text-xs md:text-sm">
                                        Read Story <ArrowRight size={16} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </main>

            <BottomNav onMapViewClick={() => setMapOpen(true)} />
            <MapViewOverlay isOpen={mapOpen} onClose={() => setMapOpen(false)} />
            <Footer />
        </div>
    );
};

export default BlogPage;
