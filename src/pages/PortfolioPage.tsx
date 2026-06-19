import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { projectsData } from "../data/projects";
import PageHeroBanner from "../components/ui/PageHeroBanner/PageHeroBanner";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";

import Button from "../components/ui/Button/Button";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Categories
  const filterCategories = [
    "All",
    "Luxury Villa",
    "Apartment",
    "Office",
    "Restaurant",
    "Bedroom",
    "Living Room",
    "Kitchen",
  ];

  // Filtering
  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Find a beautiful featured spotlight project (e.g. Serene Villa)
  const featuredSpotlight =
    projectsData.find((p) => p.featured) || projectsData[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {/* Page Hero */}
      <PageHeroBanner
        title="Our Design Portfolio"
        backgroundImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ name: "Portfolio" }]}
      />

      {/* S4.1 — Portfolio Stats Strip */}
      <section className="bg-[#1A1A1A] py-10 md:py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            <div>
              <span className="font-display text-[24px] md:text-[32px] font-bold text-[#D4AF37]">
                250+
              </span>
              <p className="font-sans text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-1">
                Completed Estates
              </p>
            </div>
            <div>
              <span className="font-display text-[24px] md:text-[32px] font-bold text-[#D4AF37]">
                10
              </span>
              <p className="font-sans text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-1">
                Design Categories
              </p>
            </div>
            <div>
              <span className="font-display text-[24px] md:text-[32px] font-bold text-[#D4AF37]">
                12+
              </span>
              <p className="font-sans text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-1">
                Years Practice
              </p>
            </div>
            <div>
              <span className="font-display text-[24px] md:text-[32px] font-bold text-white uppercase sm:tracking-widest">
                PK & GCC
              </span>
              <p className="font-sans text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-1">
                Active Operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S4.2 & S4.3 — Filters & Grid */}
      <section className="py-20 bg-white text-[#1A1A1A] dark:bg-[#111111] dark:text-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          {/* Header */}
          <SectionHeader
            eyebrow="Our Gallery"
            heading="Explore Luxury transformations"
            subtitle="Explore our curated projects. Each image represents our genuine, bespoke turnkey works with zero stock placeholders."
          />

          {/* Sticky Filter Bar */}
          <div className="sticky top-[72px] bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md py-4 z-40 border-b border-gray-100 dark:border-white/5 mb-12 flex flex-wrap gap-2.5 justify-center items-center">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setVisibleCount(6); // reset counts on filter change
                }}
                className={`font-sans text-[10px] md:text-xs font-semibold tracking-wider uppercase px-4 py-2.5 transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#D4AF37] text-black border border-[#D4AF37] shadow-sm"
                    : "bg-transparent text-current border border-current/10 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style structural grid */}
          {visibleProjects.length === 0 ? (
            <div className="py-16 text-center text-gray-500 font-sans text-sm">
              No projects match this category filter.
            </div>
          ) : (
            <div className="masonry-container">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45 }}
                    key={project.id}
                    className="masonry-item group relative overflow-hidden bg-[#1A1A1A] cursor-pointer"
                  >
                    <Link to={`/portfolio/${project.slug}`}>
                      {/* Flexing dynamic height to simulate masonry columns */}
                      <img
                        src={project.heroImage}
                        alt={project.name}
                        className={`w-full object-cover filter brightness-95 opacity-90 group-hover:opacity-45 group-hover:scale-[1.03] transition-all duration-500 ${
                          index % 3 === 0
                            ? "h-[240px] sm:h-[280px]"
                            : index % 3 === 1
                              ? "h-[320px] sm:h-[400px]"
                              : "h-[280px] sm:h-[340px]"
                        }`}
                      />

                      {/* Info Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-sans text-[9px] text-[#D4AF37] tracking-widest font-semibold uppercase mb-1">
                          {project.style}
                        </span>
                        <h3 className="font-display text-lg font-bold text-white mb-2 leading-tight">
                          {project.name}
                        </h3>
                        <p className="font-sans text-[10px] text-gray-300">
                          {project.location}
                        </p>

                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#D4AF37]">
                          <Eye className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Flat tag for accessibility covers */}
                      <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2.5 py-1 text-[9px] tracking-widest font-bold uppercase pointer-events-none group-hover:opacity-0 transition-opacity">
                        {project.category}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Load More Button */}
          {filteredProjects.length > visibleCount && (
            <div className="text-center mt-12">
              <Button onClick={handleLoadMore} variant="outline">
                Load Additional creations
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* S4.4 — Featured Project Spotlight */}
      <section className="py-20 bg-gray-50 text-[#1A1A1A] dark:bg-[#1A1A1A] dark:text-[#F3F4F6] border-t border-gray-100 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white dark:bg-[#111111] p-8 md:p-12 relative overflow-hidden shadow-lg border border-gray-100 dark:border-white/5">
            {/* Visual ambient shine */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-[#D4AF37]/5 blur-[50px] pointer-events-none" />

            {/* Photo Block 60% */}
            <div className="lg:col-span-7">
              <img
                src={featuredSpotlight.heroImage}
                alt={featuredSpotlight.name}
                className="w-full aspect-video object-cover dark:brightness-90 select-none pointer-events-none shadow-md"
              />
            </div>

            {/* Info Block 40% */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between">
              <div>
                <span className="eyebrow block mb-3 font-semibold text-xs text-[#D4AF37] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Featured Spotlight
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                  {featuredSpotlight.name}
                </h3>

                <div className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-gray-400 mb-6 font-medium">
                  <span>Category: {featuredSpotlight.category}</span>
                  <span>|</span>
                  <span>Location: {featuredSpotlight.location}</span>
                </div>

                <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  {featuredSpotlight.shortDescription}
                </p>
              </div>

              <div>
                <Button
                  to={`/portfolio/${featuredSpotlight.slug}`}
                  variant="primary"
                >
                  View This Project Detail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
