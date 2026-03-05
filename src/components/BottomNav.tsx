import { Compass, MapPin, CreditCard, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface BottomNavProps {
    onMapViewClick: () => void;
}

const BottomNav = ({ onMapViewClick }: BottomNavProps) => {
    const location = useLocation();

    const navItems = [
        { label: "Explore", icon: Compass, href: "/" },
        { label: "Map View", icon: MapPin, href: "#", isMap: true },
        { label: "Pricing", icon: CreditCard, href: "/pricing" },
        { label: "Blogs", icon: BookOpen, href: "/blog" },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-xl border-t border-border px-4 pb-safe">
            <div className="flex justify-between items-center h-16">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.href;

                    if (item.isMap) {
                        return (
                            <button
                                key={item.label}
                                onClick={onMapViewClick}
                                className="flex flex-col items-center justify-center gap-1 min-w-[64px] transition-colors text-muted-foreground hover:text-accent"
                            >
                                <div className="p-1 rounded-lg">
                                    <item.icon size={20} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
                            </button>
                        );
                    }

                    return (
                        <Link
                            key={item.label}
                            to={item.href}
                            className={`flex flex-col items-center justify-center gap-1 min-w-[64px] transition-colors ${isActive ? "text-accent" : "text-muted-foreground hover:text-accent"
                                }`}
                        >
                            <div className={`p-1 rounded-lg ${isActive ? "bg-accent/10" : ""}`}>
                                <item.icon size={20} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-tight">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomNav;
