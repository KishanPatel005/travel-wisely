import { useState } from "react";
import { Check, AlertTriangle, Bookmark, BookmarkCheck, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Location } from "@/data/locations";
import RespectScore from "./RespectScore";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

interface LocationCardProps {
  location: Location;
  index: number;
  deepDiveMode: boolean;
}

const LocationCard = ({ location, index, deepDiveMode }: LocationCardProps) => {
  const [saved, setSaved] = useState(false);
  const isMobile = useIsMobile();

  const RuleItem = ({ rule, type }: { rule: { text: string; detail: string }; type: "do" | "dont" }) => (
    <div className="flex items-start gap-2 py-2">
      <div className={`mt-0.5 shrink-0 rounded-full p-1 ${type === "do" ? "bg-do-soft text-do" : "bg-dont-soft text-dont"}`}>
        {type === "do" ? <Check size={12} /> : <AlertTriangle size={12} />}
      </div>
      <div className="flex-1">
        <span className="text-sm text-foreground leading-snug">{rule.text}</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="ml-1 inline-flex align-middle text-muted-foreground hover:text-foreground transition-colors">
              <Info size={12} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-[250px] text-xs">
            {rule.detail}
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );

  const dosContent = location.dos.map((rule, i) => (
    <RuleItem key={i} rule={rule} type="do" />
  ));

  const dontsContent = location.donts.map((rule, i) => (
    <RuleItem key={i} rule={rule} type="dont" />
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, type: "spring", stiffness: 100 }}
      className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={location.image}
          alt={location.locationName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setSaved(!saved)}
            className="p-2 rounded-full glass text-foreground"
          >
            {saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
          </motion.button>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <RespectScore score={location.respectScore} />
        </div>
        <div className="absolute bottom-3 right-3 flex gap-1">
          {location.category.map((cat) => (
            <span key={cat} className="px-2 py-0.5 rounded-full glass text-[10px] font-semibold text-foreground uppercase tracking-wider">
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground mb-0.5">{location.locationName}</h3>
        <p className="text-xs text-muted-foreground mb-4">{location.region}</p>

        {deepDiveMode && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-xs text-muted-foreground mb-4 p-3 rounded-lg bg-secondary border border-border italic"
          >
            {location.deepDive}
          </motion.p>
        )}

        {isMobile ? (
          <Accordion type="single" collapsible className="space-y-1">
            <AccordionItem value="dos" className="border-none">
              <AccordionTrigger className="py-2 text-sm font-semibold text-do hover:no-underline">
                The Dos
              </AccordionTrigger>
              <AccordionContent>
                <div className="divide-y divide-border">{dosContent}</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="donts" className="border-none">
              <AccordionTrigger className="py-2 text-sm font-semibold text-dont hover:no-underline">
                The Don'ts
              </AccordionTrigger>
              <AccordionContent>
                <div className="divide-y divide-border">{dontsContent}</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-do mb-2">The Dos</h4>
              <div className="divide-y divide-border">{dosContent}</div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-dont mb-2">The Don'ts</h4>
              <div className="divide-y divide-border">{dontsContent}</div>
            </div>
          </div>
        )}

        {!deepDiveMode && (
          <p className="mt-4 text-xs text-muted-foreground italic border-t border-border pt-3">
            💡 {location.localInsight}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default LocationCard;
