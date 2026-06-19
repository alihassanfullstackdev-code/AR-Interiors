import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import * as LucideIcons from "lucide-react";
import { ArrowDown, Star, ArrowRight } from "lucide-react";

import { siteConfig } from "../data/siteConfig";
import { projectsData } from "../data/projects";
import { servicesData } from "../data/services";
import { testimonialsData } from "../data/testimonials";
import { blogPostsData } from "../data/blogPosts";

import SectionHeader from "../components/ui/SectionHeader/SectionHeader";
import Button from "../components/ui/Button/Button";
import BeforeAfterSlider from "../components/ui/BeforeAfterSlider/BeforeAfterSlider";

// Helper components for home page sections
function StatItem({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / numericValue));

    // Simple intersection timer
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= numericValue) {
        clearInterval(timer);
      }
    }, stepTime || 10);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div className="p-4 border-l-2 border-[#D4AF37]/30 bg-white/5 backdrop-blur-sm">
      <div className="font-display text-[28px] md:text-[36px] font-bold text-[#D4AF37]">
        {count}
        {value.includes("+") && "+"}
      </div>
      <p className="font-sans text-[11px] md:text-xs text-gray-400 font-semibold tracking-wider uppercase mt-1">
        {label}
      </p>
    </div>
  );
}

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentBfIndex, setCurrentBfIndex] = useState(0);
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  // Filter project lists
  const filterCategories = [
    "All",
    "Luxury Villa",
    "Apartment",
    "Office",
    "Restaurant",
  ];
  const filteredProjects = projectsData
    .filter((p) => activeFilter === "All" || p.category === activeFilter)
    .slice(0, 6);

  // Before After slider data
  const beforeAfterSelections = projectsData.filter(
    (p) => p.beforeImage && p.afterImage,
  );

  // Testimonials autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="homepage"
    >
      {/* S1.1 — Hero Section */}
      <section className="relative h-screen min-h-[650px] bg-[#111111] text-white flex items-center justify-center overflow-hidden">
        {/* Full screen backdrop image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
            alt="AR Luxury Villa Interiors Cover"
            className="w-full h-full object-cover object-center scale-102 opacity-40 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-black/75" />
        </div>

        {/* Ambient background decorative golden flare */}
        <div className="absolute left-[10%] top-1/4 w-[450px] h-[450px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
              Award-Winning Interior Design · Sargodha, Pakistan
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <h1 className="font-display text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[1.08] font-medium tracking-tight overflow-hidden max-w-4xl">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="block"
            >
              Transforming Spaces
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="block italic text-[#D4AF37] font-semibold"
            >
              Into Timeless Experiences
            </motion.span>
          </h1>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl font-sans leading-relaxed"
          >
            AR Interior drafts bespoke luxury residential and commercial
            environments where architecture meets pure fine artistry. From
            Sargodha to the world — every space tells your unique story.
          </motion.p>

          {/* Call-to-actions row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <Button to="/portfolio" variant="primary" className="py-4.5 px-9">
              Explore Our Portfolio
            </Button>
            <Button to="/contact" variant="secondary" className="py-4.5 px-9">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator bouncing badge */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 z-10 animate-bounce cursor-pointer">
          <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-white">
            SCROLL DOWN
          </span>
          <ArrowDown className="w-4 h-4 text-[#D4AF37]" />
        </div>
      </section>

      {/* S1.2 — About Teaser */}
      <section className="py-24 md:py-32 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information write-up */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="eyebrow block mb-3">Who We Are</span>
            <h2 className="font-display text-[32px] md:text-[44px] leading-tight font-medium mb-6 text-current">
              Where Structural Design Meets Artistic Precision
            </h2>

            <p className="font-sans text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Founded in 2012 by Lead Architect Omar Rizwan, AR Interior was
              born from a singular passionate pursuit: to replace typical
              prefabricated building templates with highly tailored interior
              architecture. We see interior plans not as mere room coordinates,
              but as emotional shelters that reflect the true soul of their
              inhabitants.
            </p>
            <p className="font-sans text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Operating out of our design laboratory in Sargodha, our
              award-winning teams handle the full spectrum of your needs. We
              coordinate masons, material imports, and select master joinery so
              you enjoy an absolute turn-key development experience.
            </p>

            {/* Custom Interactive Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <StatItem
                value={siteConfig.stats.projects}
                label="Projects Finished"
              />
              <StatItem
                value={siteConfig.stats.clients}
                label="Bespoke Clients"
              />
              <StatItem
                value={siteConfig.stats.years}
                label="Years In Practice"
              />
              <StatItem value={siteConfig.stats.awards} label="Design Awards" />
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest uppercase text-[#D4AF37] hover:text-[#B8960C] transition-colors"
              >
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Imagery + Pull-quote */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Main Picture */}
            <div className="relative border-r-[4px] border-b-[4px] border-[#D4AF37]/35 pr-4 pb-4">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
                alt="Lead Architect Omar Rizwan, AR Interior Founder"
                className="w-full aspect-[3/4] object-cover object-top filter dark:brightness-90 hover:brightness-100 transition-all duration-500"
              />
            </div>

            {/* Pull Quote glassmorphism overlay card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 max-w-[280px] md:max-w-[320px] p-6 bg-[#1A1A1A] border border-[#D4AF37]/20 text-white shadow-xl">
              <p className="font-display italic text-sm md:text-base text-gray-200">
                &ldquo;Great interior design is not about overdecorating a room
                — it is about understanding how people want to feel in
                it.&rdquo;
              </p>
              <span className="block h-[1px] bg-[#D4AF37]/30 w-12 my-3" />
              <span className="block font-sans text-[10px] font-bold tracking-wider uppercase text-[#D4AF37]">
                Architect Omar Rizwan — Studio Founder
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* S1.3 — Services Overview */}
      <section className="py-24 bg-gray-50 dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <SectionHeader
            eyebrow="What We Offer"
            heading="Complete Interior Design Solutions"
            subtitle="From initial pencil brief layouts to turn-key staging, we construct every detail perfectly."
          />

          {/* Grid looping 6 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => {
              // Retrieve Lucide Icon dynamically
              const IconComponent =
                (LucideIcons as any)[service.icon] || LucideIcons.Compass;

              return (
                <div
                  key={service.id}
                  className="group relative bg-[#FFFFFF] dark:bg-[#111111] p-8 md:p-10 border border-gray-100 dark:border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Decorative golden block header */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-400" />

                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 bg-[#F2EDE4] dark:bg-[#1E1A14] flex items-center justify-center text-[#D4AF37] mb-6">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Headline */}
                    <h3 className="font-display text-lg md:text-xl font-semibold mb-3 text-current group-hover:text-[#D4AF37] transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] hover:text-[#B8960C] transition-colors"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA to services page */}
          <div className="text-center mt-12 md:mt-16">
            <Button to="/services" variant="outline">
              View All 10 Services
            </Button>
          </div>
        </div>
      </section>

      {/* S1.4 — Featured Projects */}
      <section className="py-24 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <SectionHeader
            eyebrow="Our Work"
            heading="Celebrating Celebrative Spaces"
            subtitle="Explore our hand-picked collection of newly constructed contemporary homes and modern corporate environments."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-sans text-[10px] md:text-xs font-semibold tracking-wider uppercase px-5 py-3 transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#D4AF37] text-black shadow-md border border-[#D4AF37]"
                    : "bg-transparent text-current border border-current/15 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group relative h-[320px] md:h-[380px] overflow-hidden bg-[#1A1A1A]"
                >
                  {/* Photo background */}
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 filter brightness-95 opacity-85 group-hover:opacity-60"
                  />

                  {/* Category Stamp hover tag indicator */}
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-black font-sans text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase">
                    {project.category}
                  </div>

                  {/* Dark transparent fade cover details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6 md:p-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-sans text-[10px] text-[#D4AF37] tracking-wider uppercase font-semibold mb-1 block">
                      {project.style} · {project.location}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-white mb-4">
                      {project.name}
                    </h3>

                    {/* Bottom hover reveal trigger button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        to={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-white uppercase tracking-widest border-b border-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                      >
                        View Project Detail <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Button to="/portfolio" variant="outline">
              Explore Master Portfolio Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* S1.5 — Before & After Showcase */}
      {beforeAfterSelections.length > 0 && (
        <section className="py-24 bg-gray-50 dark:bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              eyebrow="The Transformation"
              heading="Before & After"
              subtitle="Drag the central line handle to see the dramatic spatial transition delivered by AR Interior."
            />

            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={beforeAfterSelections[currentBfIndex].beforeImage}
                afterImage={beforeAfterSelections[currentBfIndex].afterImage}
              />

              {/* Selector anchors */}
              <div className="flex justify-center flex-wrap gap-3 mt-8">
                {beforeAfterSelections.map((selection, idx) => (
                  <button
                    key={selection.id}
                    onClick={() => setCurrentBfIndex(idx)}
                    className={`font-sans text-[10px] md:text-xs tracking-wider uppercase px-4 py-2 border font-medium ${
                      currentBfIndex === idx
                        ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                        : "bg-white dark:bg-[#111111] text-current border-current/10 hover:border-[#D4AF37]"
                    }`}
                  >
                    Exhibit {idx + 1}: {selection.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
}
