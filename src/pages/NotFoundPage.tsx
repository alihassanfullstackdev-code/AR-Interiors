import { motion } from "motion/react";
import { Sparkles, ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button/Button";

export default function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center p-6 text-center select-none"
    >
      {/* Decorative ambient flare */}
      <div className="absolute w-[300px] h-[300px] bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none" />

      <span className="font-sans text-[11px] text-[#D4AF37] tracking-[0.25em] font-bold uppercase mb-4 flex items-center gap-1.5 justify-center">
        <Sparkles className="w-4 h-4" /> ERROR 404
      </span>

      <h1 className="font-display text-[44px] md:text-[60px] font-bold tracking-tight mb-4">
        Uncharted Space
      </h1>

      <p className="font-sans text-xs md:text-sm text-gray-400 max-w-md mx-auto leading-relaxed mb-10">
        The architectural coordinate you requested does not exist or has been relocated to another plot. Take a step back to examine of our master interiors.
      </p>

      <Button to="/" variant="primary" className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Return To Home Living
      </Button>
    </motion.div>
  );
}
