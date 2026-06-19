import { motion } from "motion/react";
import Button from "../Button/Button";

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 bg-[#1A1A1A] text-white overflow-hidden border-y border-[#D4AF37]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative vertical lines and geometric outlines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between px-12 lg:px-24">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="eyebrow block mb-4"
        >
          Start Your Project
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[28px] md:text-[44px] lg:text-[52px] leading-tight font-medium mb-6"
        >
          Ready To Transform Your Space?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans text-white/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Let AR Interior turn your architectural vision into a timeless living masterpiece. Get in touch with our lead design consultants today for a complimentary in-person or video consultation.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button to="/contact" variant="primary" className="w-full sm:w-auto">
            Schedule A Consultation
          </Button>
          <Button to="/portfolio" variant="secondary" className="w-full sm:w-auto">
            View Our Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
