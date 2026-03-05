import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, Info, ShieldCheck, AlertTriangle } from "lucide-react";
import { locations, Location } from "@/data/locations";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with React
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MapViewOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

// Component to handle map resizing and centering when selectedLocation changes
const ChangeView = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, map.getZoom());
        // Invalidate size helps when coming from hidden display
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }, [center, map]);
    return null;
};

const MapViewOverlay = ({ isOpen, onClose }: MapViewOverlayProps) => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    const mapLocations = useMemo(() => locations, []);

    // Default center if nothing selected
    const defaultCenter: [number, number] = [20, 0];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex flex-col bg-background"
                >
                    {/* Header */}
                    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur-md z-10">
                        <div>
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <MapPin className="text-accent" />
                                Global Respect Map
                            </h2>
                            <p className="text-sm text-muted-foreground">Real-world cultural guide powered by OpenStreetMap</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                            <X size={24} />
                        </Button>
                    </header>

                    <div className="flex-1 relative overflow-hidden flex flex-col lg:flex-row">
                        {/* Map Area */}
                        <div className="flex-1 relative overflow-hidden bg-muted">
                            <MapContainer
                                center={defaultCenter}
                                zoom={2.5}
                                style={{ height: '100%', width: '100%' }}
                                zoomControl={false}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                />

                                {selectedLocation && (
                                    <ChangeView center={selectedLocation.coordinates} />
                                )}

                                {mapLocations.map((loc) => (
                                    <Marker
                                        key={loc.id}
                                        position={loc.coordinates}
                                        eventHandlers={{
                                            click: () => setSelectedLocation(loc),
                                        }}
                                    >
                                        <Popup className="custom-popup">
                                            <div className="p-1">
                                                <p className="font-bold text-sm leading-tight">{loc.locationName}</p>
                                                <p className="text-[10px] text-muted-foreground">{loc.region}</p>
                                                <button
                                                    onClick={() => setSelectedLocation(loc)}
                                                    className="mt-2 text-[10px] text-accent font-bold hover:underline"
                                                >
                                                    Show Details
                                                </button>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>

                            {/* Legend */}
                            <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-background/90 backdrop-blur-md border border-border shadow-lg z-[1000] hidden md:block">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Map Legend</p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm" />
                                        <span className="font-medium text-foreground/80">Active Sites</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                                        <span className="font-medium text-foreground/50 italic">New Discovery</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Details */}
                        <AnimatePresence>
                            {selectedLocation && (
                                <motion.div
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    className="w-full lg:w-[420px] border-l border-border bg-background z-[1001] shadow-2xl flex flex-col"
                                >
                                    <ScrollArea className="flex-1">
                                        <div className="p-0 pb-12">
                                            <div className="relative aspect-video">
                                                <img
                                                    src={selectedLocation.image}
                                                    alt={selectedLocation.locationName}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                                <Button
                                                    variant="secondary"
                                                    size="icon"
                                                    className="absolute top-4 right-4 rounded-full bg-background/50 hover:bg-background"
                                                    onClick={() => setSelectedLocation(null)}
                                                >
                                                    <X size={18} />
                                                </Button>
                                            </div>

                                            <div className="px-6 py-6 space-y-6">
                                                <div>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {selectedLocation.category.map(cat => (
                                                            <Badge key={cat} variant="secondary" className="text-[10px] font-semibold">{cat}</Badge>
                                                        ))}
                                                        <Badge className="bg-emerald-500/10 text-emerald-600 border-none text-[10px] font-bold">
                                                            Respect Score: {selectedLocation.respectScore}%
                                                        </Badge>
                                                    </div>
                                                    <h3 className="text-2xl font-black tracking-tight">{selectedLocation.locationName}</h3>
                                                    <p className="text-muted-foreground flex items-center gap-1.5 text-sm mt-1">
                                                        <MapPin size={14} className="text-accent" /> {selectedLocation.region}
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="p-5 rounded-2xl bg-accent/5 border border-accent/10 relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 p-3 opacity-10">
                                                            <Info size={48} className="text-accent" />
                                                        </div>
                                                        <h4 className="flex items-center gap-2 font-bold text-accent mb-2">
                                                            <Info size={16} /> Local Insight
                                                        </h4>
                                                        <p className="text-sm leading-relaxed relative z-10">{selectedLocation.localInsight}</p>
                                                    </div>

                                                    <div className="grid grid-cols-1 gap-4">
                                                        <Card className="p-5 border-emerald-500/20 bg-emerald-500/[0.03] shadow-none rounded-2xl">
                                                            <h4 className="flex items-center gap-2 font-bold text-emerald-600 mb-3">
                                                                <ShieldCheck size={18} /> Essential Cultural Dos
                                                            </h4>
                                                            <ul className="space-y-3">
                                                                {selectedLocation.dos.map((doItem, k) => (
                                                                    <li key={k} className="text-xs leading-relaxed flex gap-3">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                                                                        <div>
                                                                            <span className="font-bold block text-emerald-900 dark:text-emerald-200">{doItem.text}</span>
                                                                            <span className="text-muted-foreground opacity-80">{doItem.detail}</span>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </Card>

                                                        <Card className="p-5 border-amber-500/20 bg-amber-500/[0.03] shadow-none rounded-2xl">
                                                            <h4 className="flex items-center gap-2 font-bold text-amber-600 mb-3">
                                                                <AlertTriangle size={18} /> Crucial Cultural Don'ts
                                                            </h4>
                                                            <ul className="space-y-3">
                                                                {selectedLocation.donts.map((dontItem, k) => (
                                                                    <li key={k} className="text-xs leading-relaxed flex gap-3">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                                                                        <div>
                                                                            <span className="font-bold block text-amber-900 dark:text-amber-200">{dontItem.text}</span>
                                                                            <span className="text-muted-foreground opacity-80">{dontItem.detail}</span>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </Card>
                                                    </div>
                                                </div>

                                                <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl shadow-lg shadow-accent/20 transition-all hover:translate-y-[-2px]">
                                                    View Full Cultural Guide
                                                </Button>
                                            </div>
                                        </div>
                                    </ScrollArea>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!selectedLocation && (
                            <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none text-center z-[1000] lg:block hidden">
                                <div className="px-6 py-4 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-2xl flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-accent/20 text-accent">
                                        <MapPin size={20} className="animate-bounce" />
                                    </div>
                                    <p className="font-bold text-sm">Tap a marker to discover local etiquette</p>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MapViewOverlay;
