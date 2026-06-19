import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  link?: string;
}

interface PageHeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeroBanner({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: PageHeroBannerProps) {
  return (
    <section className="relative h-[300px] md:h-[380px] lg:h-[420px] bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center select-none opacity-45 transform scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center text-white mt-12">
        {/* Breadcrumbs */}
        <nav className="flex justify-center items-center gap-2 mb-3 md:mb-5 font-sans text-xs tracking-widest text-[#D4AF37]/80 uppercase">
          <Link to="/" className="hover:text-white transition-colors duration-200">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-white/30 text-[9px]">&gt;</span>
              {crumb.link ? (
                <Link
                  to={crumb.link}
                  className="hover:text-white transition-colors duration-200"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.name}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-[32px] md:text-[48px] lg:text-[56px] leading-tight font-medium"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 md:mt-4 text-xs md:text-sm lg:text-base font-sans text-white/70 max-w-xl mx-auto uppercase tracking-wide"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
