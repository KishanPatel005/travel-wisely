import { useEffect } from "react";
import { toast } from "sonner";
import { MessageSquare, ThumbsUp, MapPin, Sparkles } from "lucide-react";

const notifications = [
    { type: "upvote", user: "Arvind P.", place: "Charminar", action: "upvoted a 'Do'" },
    { type: "new_place", user: "System", place: "Mysore Palace", action: "newly added to Map" },
    { type: "review", user: "Kishan K.", place: "Hampi", action: "added a local insight" },
    { type: "upvote", user: "Sarah J.", place: "Kyoto", action: "verified a cultural rule" },
    { type: "new_place", user: "TravelBot", place: "Goa Beach Front", action: "updated seasonal rules" },
    { type: "upvote", user: "Yuki T.", place: "Osaka", action: "upvoted a 'Don't'" },
    { type: "review", user: "James L.", place: "Bangkok", action: "left a new travel tip" },
];

const NotificationTicker = () => {
    useEffect(() => {
        const handleGlobalClick = () => {
            toast.dismiss();
        };

        window.addEventListener("click", handleGlobalClick);
        return () => window.removeEventListener("click", handleGlobalClick);
    }, []);

    useEffect(() => {
        let timeoutId: any;

        const showNextNotification = () => {
            const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
            const icon = randomNotif.type === "upvote" ? <ThumbsUp size={16} className="text-emerald-500" /> :
                randomNotif.type === "new_place" ? <Sparkles size={16} className="text-amber-500" /> :
                    randomNotif.type === "review" ? <MessageSquare size={16} className="text-blue-500" /> :
                        <MapPin size={16} />;

            toast(
                <div className="w-full">
                    <div className="flex items-center gap-2">
                        {icon}
                        <span className="font-bold">{randomNotif.user}</span>
                    </div>
                    <p className="text-xs opacity-80 ml-6">
                        {randomNotif.action} for {randomNotif.place}
                    </p>
                </div>,
                { duration: 2000 }
            );

            const isMobile = window.innerWidth < 768;
            const delay = isMobile ? 5000 : Math.floor(Math.random() * 2000) + 2000;
            timeoutId = setTimeout(showNextNotification, delay);
        };

        timeoutId = setTimeout(showNextNotification, 2000);
        return () => clearTimeout(timeoutId);
    }, []);

    return null; // This component doesn't render anything itself
};

export default NotificationTicker;
