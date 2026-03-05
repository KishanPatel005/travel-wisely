import { motion } from "framer-motion";
import { MessageCircle, Heart, Star } from "lucide-react";

const communityWins = [
    {
        user: "Arvind Patel",
        location: "Bangkok",
        story: "I followed the 'no pointing feet' rule at a local stall. The owner noticed my effort and gave me an extra portion of mango sticky rice! Respect goes a long way.",
        likes: 124,
        tags: ["Manners", "StreetFood"]
    },
    {
        user: "Sarah Jenkins",
        location: "Kyoto",
        story: "Wiping my hands correctly at the shrine caught the eye of a local guide. He ended up showing me a 'secret' garden not on the map. Authentic etiquette opens doors.",
        likes: 89,
        tags: ["ShrineEtiquette", "HiddenGem"]
    },
    {
        user: "Kishan K.",
        location: "Ahmedabad",
        story: "Quietly observing prayer times at the mosque near the Vav earned me a nod of appreciation from an elder. It felt good to be a guest, not just a tourist.",
        likes: 56,
        tags: ["Heritage", "QuietRespect"]
    }
];

const CommunityWins = () => {
    return (
        <section className="py-24 bg-secondary/20 border-y border-border overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 flex items-center gap-3">
                            <Star className="text-amber-500 fill-amber-500" /> Community Respect Wins
                        </h2>
                        <p className="text-muted-foreground text-lg italic">
                            Real stories from travelers who prioritized culture over convenience.
                        </p>
                    </div>
                    <button className="text-sm font-bold text-accent hover:underline flex items-center gap-2">
                        Share your story <MessageCircle size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {communityWins.map((win, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-3xl bg-background border border-border shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h4 className="font-bold text-foreground">{win.user}</h4>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{win.location}</p>
                                </div>
                                <div className="flex items-center gap-1.5 text-rose-500 font-bold text-sm">
                                    <Heart size={14} className="group-hover:fill-rose-500 transition-colors" /> {win.likes}
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                                "{win.story}"
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {win.tags.map(tag => (
                                    <span key={tag} className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-bold text-muted-foreground">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityWins;
