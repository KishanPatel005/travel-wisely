import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary/30 border-t border-border mt-12">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand & Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">Dos and Dont''s</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Explore the world with confidence. We provide authentic, user-contributed cultural tips and hidden gems across more than <span className="text-foreground font-semibold">5820+ locations</span> worldwide.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <motion.a whileHover={{ y: -2 }} href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                <Facebook size={20} />
                            </motion.a>
                            <motion.a whileHover={{ y: -2 }} href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                <Twitter size={20} />
                            </motion.a>
                            <motion.a whileHover={{ y: -2 }} href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                <Instagram size={20} />
                            </motion.a>
                            <motion.a whileHover={{ y: -2 }} href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                <Linkedin size={20} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Destinations</a></li>
                            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Travel Guides</a></li>
                            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cultural Tips</a></li>
                            <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Submit a Tip</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                                <a href="mailto:info@creativewebcrafters.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all">
                                    info@creativewebcrafters.in
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                                <a href="tel:+919067600673" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    +91 9067600673
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">
                                    Global HQ, Wanderlust Tower, Earth
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Stats & Newsletter */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Global Presence</h4>
                        <div className="p-4 rounded-xl bg-background border border-border">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">5820+</p>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Locations Covered</p>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground">Our data is updated daily by travelers from around the globe.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {currentYear} Dos and Dont''s. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
                        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
