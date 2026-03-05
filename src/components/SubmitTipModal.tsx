import { useState } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface SubmitTipModalProps {
  open: boolean;
  onClose: () => void;
}

const SubmitTipModal = ({ open, onClose }: SubmitTipModalProps) => {
  const [form, setForm] = useState({ location: "", type: "do" as "do" | "dont", tip: "", reason: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.location.trim()) e.location = "Location is required";
    if (!form.tip.trim()) e.tip = "Tip is required";
    if (form.tip.length > 200) e.tip = "Max 200 characters";
    if (form.reason.length > 500) e.reason = "Max 500 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    toast.success("Tip submitted! Thank you for sharing your knowledge.");
    setForm({ location: "", type: "do", tip: "", reason: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-card rounded-2xl border border-border shadow-xl p-6 w-full max-w-md"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-foreground">Submit a Tip</h2>
              <button onClick={onClose} className="p-1 rounded-lg hover:bg-secondary transition-colors text-muted-foreground">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Location</label>
                <input
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="e.g. Fushimi Inari Shrine"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  maxLength={100}
                />
                {errors.location && <p className="text-xs text-accent mt-1">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Type</label>
                <div className="flex gap-2">
                  {(["do", "dont"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setForm({ ...form, type: t })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        form.type === t
                          ? t === "do" ? "bg-do text-primary-foreground" : "bg-dont text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {t === "do" ? "✓ Do" : "⚠ Don't"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Your Tip</label>
                <input
                  value={form.tip}
                  onChange={(e) => setForm({ ...form, tip: e.target.value })}
                  placeholder="e.g. Always remove shoes before entering"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  maxLength={200}
                />
                {errors.tip && <p className="text-xs text-accent mt-1">{errors.tip}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">Why? (optional)</label>
                <textarea
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  placeholder="Explain the cultural reason..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  maxLength={500}
                />
                {errors.reason && <p className="text-xs text-accent mt-1">{errors.reason}</p>}
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="w-full mt-5 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm shadow-sm hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Submit Tip
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubmitTipModal;
