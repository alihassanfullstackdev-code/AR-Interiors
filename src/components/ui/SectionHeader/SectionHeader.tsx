import { motion } from "motion/react";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtitle,
  align = "center",
  theme = "light",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow block mb-3"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-[28px] md:text-[38px] lg:text-[44px] leading-tight font-medium ${
          isDark ? "text-white" : "text-current"
        }`}
      >
        {heading}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-sm md:text-base font-sans max-w-2xl ${
            isCenter ? "mx-auto" : ""
          } ${isDark ? "text-gray-400" : "text-current/70"}`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Elegant minimalist gold separator */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 44 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-[2px] bg-[#D4AF37] mt-5 ${isCenter ? "mx-auto" : "mr-auto"}`}
      />
    </div>
  );
}
