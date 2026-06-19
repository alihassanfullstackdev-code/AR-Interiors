import { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mouseup", handleUp);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchend", handleUp);
      window.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] select-none overflow-hidden rounded-none shadow-md border border-white/5 cursor-ew-resize bg-[#1A1A1A]"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Right/Default Background) */}
      <img
        src={afterImage}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* Before Image (Left, Clipped dynamically) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt="Before transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
        />
        
        {/* Label Left (Before) */}
        <span className="absolute left-4 top-4 bg-[#111111]/80 backdrop-blur-sm text-white font-sans text-[10px] font-bold tracking-widest px-3 py-1 rounded-none border border-white/10 uppercase">
          {beforeLabel}
        </span>
      </div>

      {/* Label Right (After) */}
      <span className="absolute right-4 top-4 bg-[#D4AF37] text-black font-sans text-[10px] font-bold tracking-widest px-3 py-1 rounded-none uppercase">
        {afterLabel}
      </span>

      {/* Slider Bar & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#F5D062] to-[#D4AF37] z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111111] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-30">
          <MoveHorizontal className="w-4 h-4 text-[#D4AF37]" />
        </div>
      </div>
    </div>
  );
}
