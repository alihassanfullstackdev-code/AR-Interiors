import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  activeIndex,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#111111]/95 backdrop-blur-md z-[99999] flex items-center justify-center p-4 select-none"
        >
          {/* Close trigger overlay */}
          <div className="absolute inset-0 cursor-default" onClick={onClose} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center cursor-pointer transition-colors z-[100]"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous bullet */}
          {images.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 hover:bg-white/10 text-white hover:text-[#D4AF37] rounded-full flex items-center justify-center cursor-pointer transition-colors z-[100]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Slide container */}
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center z-10 p-2 md:p-6 pointer-events-none">
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`Slide ${activeIndex + 1}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="max-w-full max-h-full object-contain pointer-events-auto shadow-2xl border border-white/5"
            />
          </div>

          {/* Next bullet */}
          {images.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 hover:bg-white/10 text-white hover:text-[#D4AF37] rounded-full flex items-center justify-center cursor-pointer transition-colors z-[100]"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image index counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-sans text-xs tracking-widest uppercase">
            Image {activeIndex + 1} of {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
