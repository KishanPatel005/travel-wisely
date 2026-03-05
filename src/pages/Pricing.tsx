import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ShieldCheck, Zap, Globe, MessageSquare, Download, History, EyeOff, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import MapViewOverlay from "@/components/MapViewOverlay";

const PricingPage = () => {
    const navigate = useNavigate();
    const [mapOpen, setMapOpen] = useState(false);

    const features = [
        {
            title: "Smart Proximity Alerts",
            desc: '100m geofence notifications for "Live Etiquette." No more googling at the gate.',
            icon: Zap,
            color: "text-amber-500",
            bg: "bg-amber-500/10"
        },
        {
            title: "Offline Culture Mode",
            desc: "Download guides & maps for an entire city. Essential for foreign tourists or low-network areas.",
            icon: Download,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: 'The "Why" Behind Rules',
            desc: 'Deep-dive cultural history for every Do & Don\'t. Appealing to "Slow Travelers" and history buffs.',
            icon: History,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            title: "Local Hero Chat",
            desc: '24/7 AI or Peer support for etiquette questions. "Is it okay to wear this here?" – Instant reassurance.',
            icon: MessageSquare,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            title: "Ad-Free Exploration",
            desc: "Remove all sponsored pins and banner ads. A cleaner, premium aesthetic.",
            icon: EyeOff,
            color: "text-rose-500",
            bg: "bg-rose-500/10"
        },
        {
            title: "Exclusive Insider Tips",
            desc: 'Access to "Secret" unwritten rules from verified locals. Makes you feel like an "Insider".',
            icon: Award,
            color: "text-yellow-500",
            bg: "bg-yellow-500/10"
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-0">
            <Header onMapViewClick={() => setMapOpen(true)} />

            <main className="container mx-auto px-4 pt-24 md:pt-32 pb-24">
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4"
                    >
                        <ShieldCheck size={14} />
                        Premium Membership
                    </motion.div>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Become a World-Class Traveler</h1>
                    <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                        Unlock professional cultural insights and stay respectful wherever you go with our premium features.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
                    {/* Pricing Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-6 md:p-8 border-accent/20 bg-accent/[0.03] relative overflow-hidden ring-4 ring-accent/5">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Globe size={120} />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-xl md:text-2xl font-bold mb-2">Annual Explorer Plan</h2>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl md:text-5xl font-black text-foreground">$20</span>
                                    <span className="text-muted-foreground font-medium">/ year</span>
                                </div>

                                <p className="text-sm text-muted-foreground mb-8">
                                    Get full access to all features across 5,820+ locations worldwide. Billed annually.
                                </p>

                                <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl mb-4 text-lg">
                                    Get Premium Now
                                </Button>
                                <p className="text-center text-[10px] md:text-xs text-muted-foreground">7-day money-back guarantee. Cancel anytime.</p>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Features List */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 gap-4 md:gap-6"
                    >
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-4 p-3 md:p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                                <div className={`p-2 md:p-2.5 rounded-lg ${f.bg} ${f.color} shrink-0 flex items-center justify-center`}>
                                    <f.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-xs md:text-sm uppercase tracking-wide">{f.title}</h3>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </main>

            <BottomNav onMapViewClick={() => setMapOpen(true)} />
            <MapViewOverlay isOpen={mapOpen} onClose={() => setMapOpen(false)} />
            <Footer />
        </div>
    );
};

export default PricingPage;
