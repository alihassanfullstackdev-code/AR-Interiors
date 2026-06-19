import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[99999] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F5D062] to-[#D4AF37]"
        style={{ width: `${scrollProgress}%`, transition: "width 0.1s ease-out" }}
      />
    </div>
  );
}
