import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, Lock, Eye, EyeOff, Github, Chrome, Facebook, Twitter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square bg-accent rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square bg-primary rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[450px] z-10"
            >
                <div className="mb-8 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
                        <ArrowLeft size={16} /> Back to explore
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to sync your cultural guides and alerts.</p>
                </div>

                <Card className="p-8 border-border/60 bg-background/80 backdrop-blur-xl shadow-2xl">
                    <Tabs defaultValue="email" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="email">Email</TabsTrigger>
                            <TabsTrigger value="phone">Phone</TabsTrigger>
                        </TabsList>

                        <TabsContent value="email">
                            <form onSubmit={handleSignIn} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
                                        <Input id="email" type="email" placeholder="name@example.com" className="pl-10 h-10" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <button type="button" className="text-xs font-bold text-accent hover:underline">
                                            Forgot password?
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="pl-10 pr-10 h-10"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <Button className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground font-bold" disabled={isLoading}>
                                    {isLoading ? "Signing in..." : "Sign In"}
                                </Button>
                            </form>
                        </TabsContent>

                        <TabsContent value="phone">
                            <form onSubmit={handleSignIn} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-muted-foreground" size={18} />
                                        <Input id="phone" type="tel" placeholder="+91 90676 00673" className="pl-10 h-10" required />
                                    </div>
                                </div>
                                <Button className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground font-bold" disabled={isLoading}>
                                    {isLoading ? "Send OTP" : "Continue with Phone"}
                                </Button>
                            </form>
                        </TabsContent>
                    </Tabs>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground font-medium">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <Button variant="outline" className="h-11">
                            <Chrome size={20} className="text-red-500" />
                        </Button>
                        <Button variant="outline" className="h-11">
                            <Facebook size={20} className="text-blue-600" />
                        </Button>
                        <Button variant="outline" className="h-11 text-foreground">
                            <Twitter size={20} className="fill-current" />
                        </Button>
                    </div>

                    <p className="mt-8 text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <button className="font-bold text-accent hover:underline">Create account</button>
                    </p>
                </Card>

                <p className="mt-8 text-center text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
                    By continuing, you agree to the Dos & Don'ts<br />
                    <span className="font-bold">Terms of Service</span> and <span className="font-bold">Privacy Policy</span>.
                </p>
            </motion.div>
        </div>
    );
};

export default SignInPage;
