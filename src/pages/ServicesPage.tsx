import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { servicesData } from "../data/services";

import PageHeroBanner from "../components/ui/PageHeroBanner/PageHeroBanner";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";
import Button from "../components/ui/Button/Button";

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <PageHeroBanner
        title="Our Specialized Services"
        backgroundImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* S3.1 — Intro */}
      <section className="py-20 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeader
            eyebrow="What We Master"
            heading="Compelling Solutions From Concept To Creation"
            subtitle="Explore our comprehensive list of architectural services. We integrate strict technical blueprints with gorgeous bespoke designs."
          />
          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-2xl mx-auto tracking-widest uppercase font-semibold mt-6">
            ✓ Turnkey Management · ✓ Lifetime Materials Gaurantee · ✓ Absolute
            Communication Line
          </p>
        </div>
      </section>

      {/* S3.2 — Detailed Service loop */}
      <section className="pb-24 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-28">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            const IconComponent =
              (LucideIcons as any)[service.icon] || LucideIcons.Compass;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-b border-gray-100 dark:border-white/5 pb-20 last:border-none"
              >
                {/* Image Block */}
                <div
                  className={`lg:col-span-6 relative overflow-hidden ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative border-r-[4px] border-b-[4px] border-[#D4AF37]/30 pr-3 pb-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover filter brightness-95 opacity-90 hover:brightness-100 dark:brightness-85 transition-all duration-300 shadow-md select-none pointer-events-none"
                    />
                  </div>
                  {/* Absolute numbering overlay background watermark */}
                  <div className="absolute right-4 top-4 font-display text-8xl font-black text-black/10 dark:text-white/5 pointer-events-none uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Text Block */}
                <div
                  className={`lg:col-span-6 text-left ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="w-12 h-12 bg-[#F2EDE4] dark:bg-[#1E1A14] flex items-center justify-center text-[#D4AF37] mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  {/* Bullet inclusions */}
                  <h4 className="font-sans text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase mb-3">
                    What Is Included:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                    {service.included.map((inc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-[#D4AF37] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <Button to="/contact" variant="primary">
                    Inquire For This Service
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
